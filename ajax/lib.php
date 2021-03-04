<?php
define('__CONFIG__', true);
require '../config.php';


 
class CRUD
{
 
    protected $db;
 
    function __construct()
    {
        $this->db = DB::getConnection();
    }
 
    function __destruct()
    {
        $this->db = null;
    }
 

    /*
     * Add new Record
     *
     * @param $first_name
     * @param $last_name
     * @param $email
     * @return $mixed
     * */
    public function Create($pitanje, $grupa_pitanja, $tezina_pitanja, $answer_one, $answer_two, $answer_three, $answer_one_checkbox, $answer_two_checkbox, $answer_three_checkbox, $questionSubTheme)
    {
        $query = $this->db->prepare("INSERT INTO questions(description, questionGroupId, difficultyId, theme) VALUES (:pitanje,:grupa_pitanja,:tezina_pitanja,:questionSubTheme)");
        $query->bindParam("questionSubTheme", $questionSubTheme, PDO::PARAM_STR);
        $query->bindParam("pitanje", $pitanje, PDO::PARAM_STR);
        $query->bindParam("grupa_pitanja", $grupa_pitanja, PDO::PARAM_INT);
        $query->bindParam("tezina_pitanja", $tezina_pitanja, PDO::PARAM_INT);
        $query->execute();

        $question_id = $this->db->lastInsertId();

        $queryString = "INSERT INTO answers (description, isCorrect, questionId) VALUES ";


        if(strlen($answer_one) != 0){
            if(substr($queryString, -1) === ")"){
                $queryString .= ",";
            }
            $queryString .= "(:answer_one, :answer_one_checkbox, :question_id)";
        }

        if(strlen($answer_two) != 0){
            if(substr($queryString, -1) === ")"){
                $queryString .= ",";
            }
            $queryString .= "(:answer_two, :answer_two_checkbox, :question_id)";
        }

        if(strlen($answer_three) != 0 ){
            if(substr($queryString, -1) === ")"){
                $queryString .= ",";
            }
            $queryString .= "(:answer_three, :answer_three_checkbox, :question_id)";
        }


        $queryTwo = $this->db->prepare($queryString);
        
        $queryTwo->bindParam("question_id", $question_id, PDO::PARAM_INT);

        if(strlen($answer_one) != 0){
            $queryTwo->bindParam("answer_one", $answer_one, PDO::PARAM_STR);
            $queryTwo->bindParam("answer_one_checkbox", $answer_one_checkbox, PDO::PARAM_INT);
        }

        if(strlen($answer_two) != 0){
            $queryTwo->bindParam("answer_two", $answer_two, PDO::PARAM_STR);
            $queryTwo->bindParam("answer_two_checkbox", $answer_two_checkbox, PDO::PARAM_INT);
        }

        if(strlen($answer_three) != 0){
            $queryTwo->bindParam("answer_three", $answer_three, PDO::PARAM_STR);
            $queryTwo->bindParam("answer_three_checkbox", $answer_three_checkbox, PDO::PARAM_INT);
        }

        $queryTwo->execute();
        
        $queryThree = $this->db->prepare("INSERT INTO customquestionhistory(userId, questionId) VALUES (:userId, :question_id)");
        $queryThree->bindParam("userId", $_SESSION['user_id'], PDO::PARAM_STR);
        $queryThree->bindParam("question_id", $question_id, PDO::PARAM_STR);

        $queryThree->execute();

        return $this->db->lastInsertId();
    }
 
    /*
     * Read all records
     *
     * @return $mixed
     * */
    public function Read($user_id, $is_admin, $questionGroupId)
    {

        if($is_admin)
        {
            if($questionGroupId == "sve"){
                $query = $this->db->prepare("SELECT questions.id, description, questions.theme, questiongroup.name as groupName, difficulty.name as difficultyName FROM questions 
                JOIN difficulty ON difficultyId = difficulty.id 
                JOIN questiongroup ON questionGroupId = questiongroup.id
                ");
            }else{
                $query = $this->db->prepare("SELECT questions.id, description, questions.theme, questiongroup.name as groupName, difficulty.name as difficultyName FROM questions 
                JOIN difficulty ON difficultyId = difficulty.id 
                JOIN questiongroup ON questionGroupId = questiongroup.id
                WHERE questiongroup.id = :questionGroupId
                ");

                $query->bindParam("questionGroupId", $questionGroupId, PDO::PARAM_INT);
            }

            
        }
        else
        {
            if($questionGroupId == "sve"){
                $query = $this->db->prepare("SELECT questions.id, description, questions.theme, questiongroup.name as groupName, difficulty.name as difficultyName FROM questions 
                JOIN difficulty ON difficultyId = difficulty.id 
                JOIN questiongroup ON questionGroupId = questiongroup.id
                JOIN customquestionhistory ON customquestionhistory.questionId = questions.id
                WHERE customquestionhistory.userId = :userId
                ");

                
            }else{
                $query = $this->db->prepare("SELECT questions.id, description, questions.theme, questiongroup.name as groupName, difficulty.name as difficultyName FROM questions 
                JOIN difficulty ON difficultyId = difficulty.id 
                JOIN questiongroup ON questionGroupId = questiongroup.id
                JOIN customquestionhistory ON customquestionhistory.questionId = questions.id
                WHERE customquestionhistory.userId = :userId
                AND questiongroup.id = :questionGroupId
                ");

                $query->bindParam("questionGroupId", $questionGroupId, PDO::PARAM_INT);
            }

            $query->bindParam("userId", $user_id, PDO::PARAM_INT);
        
        }
        $query->execute();
        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        return $data;
    }
 
    /*
     * Delete Record
     *
     * @param $user_id
     * */
    public function Delete($question_id)
    {
        $query = $this->db->prepare("DELETE qu, an FROM answers an JOIN  questions qu ON qu.id = an.questionId WHERE an.questionId = :id");
        $query->bindParam("id", $question_id, PDO::PARAM_INT);
        $query->execute();

        // $queryTwo = $this->db->prepare("DELETE FROM answers WHERE questionId = :id");
        // $queryTwo->bindParam("id", $question_id, PDO::PARAM_INT);
        // $queryTwo->execute();
    }
 
    /*
     * Update Record
     *
     * @param $first_name
     * @param $last_name
     * @param $email
     * @return $mixed
     * */
    public function Update($update_pitanje, $update_grupa_pitanja, $update_tezina_pitanja, $update_answer_one,$update_answer_two,$update_answer_three,$update_answer_one_checkbox,$update_answer_two_checkbox,$update_answer_three_checkbox,$question_id)
    {
        $query = $this->db->prepare("REPLACE INTO questions(description, questionGroupId, difficultyId) VALUES (:update_pitanje,:update_grupa_pitanja,:update_tezina_pitanja)");
        $query->bindParam("update_pitanje", $update_pitanje, PDO::PARAM_STR);
        $query->bindParam("update_grupa_pitanja", $update_grupa_pitanja, PDO::PARAM_INT);
        $query->bindParam("update_tezina_pitanja", $update_tezina_pitanja, PDO::PARAM_INT);
        $query->execute();

        $question_id = $this->db->lastInsertId();




        $queryString = "REPLACE INTO answers (description, isCorrect, questionId) VALUES ";


        if($answer_one !== null){
            if(substr($queryString, -1) == ")"){
                $queryString .= ",";
            }
            $queryString .= "(:update_answer_one, :update_answer_one_checkbox, :question_id)";
        }

        if($answer_two !== null){
            if(substr($queryString, -1) === ")"){
                $queryString .= ",";
            }
            $queryString .= "(:update_answer_two, :update_answer_two_checkbox, :question_id)";
        }

        if($answer_three !== null){
            if(substr($queryString, -1) === ")"){
                $queryString .= ",";
            }
            $queryString .= "(:update_answer_three, :update_answer_three_checkbox, :question_id)";
        }


        $queryTwo = $this->db->prepare($queryString);
        
        $queryTwo->bindParam("question_id", $question_id, PDO::PARAM_INT);

        if($answer_one !== null){
            $queryTwo->bindParam("update_answer_one", $update_answer_one, PDO::PARAM_STR);
            $queryTwo->bindParam("update_answer_one_checkbox", $update_answer_one_checkbox, PDO::PARAM_INT);
        }

        if($answer_two !== null){
            $queryTwo->bindParam("update_answer_two", $update_answer_one, PDO::PARAM_STR);
            $queryTwo->bindParam("update_answer_two_checkbox", $update_answer_two_checkbox, PDO::PARAM_INT);
        }

        if($answer_three !== null){
            $queryTwo->bindParam("update_answer_three", $answer_one, PDO::PARAM_STR);
            $queryTwo->bindParam("update_answer_three_checkbox", $answer_three_checkbox, PDO::PARAM_INT);
        }

        $queryTwo->execute();
        
        


    }
 
    /*
     * Get Details
     *
     * @param $user_id
     * */
    public function Details($question_id)
    {
        $query = $this->db->prepare("SELECT questions.id, questions.description as questionDescription, answers.isCorrect as answerIsCorrect, questiongroup.id as groupId, difficulty.id as difficultyId, answers.description as answerDescription FROM questions 
            JOIN difficulty ON difficultyId = difficulty.id 
            JOIN questiongroup ON questionGroupId = questiongroup.id 
            JOIN answers on questions.id = answers.questionId
            WHERE questions.id = :id");
        $query->bindParam("id", $question_id, PDO::PARAM_INT);
        $query->execute();
        return json_encode($query->fetchAll(PDO::FETCH_ASSOC));
    }

   

    public function getQuestionGroups(){
        $query = $this->db->prepare("SELECT * FROM questiongroup");
        $query->execute();

        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return $data;
    }


    public function getQuestionDifficulties(){
        $query = $this->db->prepare("SELECT * FROM difficulty");
        $query->execute();

        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return $data;
    }
}
 


?>