<?php 
	define('__CONFIG__', true);
	require_once "../config.php"; 

	if($_SERVER['REQUEST_METHOD'] == 'POST' OR 1===1){
		//Always return JSON
		header('Content-Type: application/json');
		$questions =[];
		$counter = 1;

        $query = $con->prepare("SELECT questions.id, questions.*, questions.description as questionDescription, answers.isCorrect as answerIsCorrect, questiongroup.id as groupId, questiongroup.name as questionGroupName, difficulty.id as difficultyId, answers.description as answerDescription FROM questions 
            JOIN difficulty ON difficultyId = difficulty.id 
            JOIN questiongroup ON questionGroupId = questiongroup.id 
            JOIN answers on questions.id = answers.questionId");
        $query->execute();
        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        


		echo json_encode($data, JSON_PRETTY_PRINT);
	
	} else{
		exit('Invalid URL');
	}
?>