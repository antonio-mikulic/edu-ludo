<?php 
	define('__CONFIG__', true);
	require_once "../config.php"; 

	if($_SERVER['REQUEST_METHOD'] == 'POST' OR 1===1){
		//Always return JSON
		header('Content-Type: application/json');
		$questions =[];
		$counter = 1;
		$whosQuestions = $_POST['wQ'];
		$questionGroup = $_POST['qG'];
		$questionTheme = $_POST['pp'];

		
		$user_id = $_SESSION['user_id'];
		$counter = 0;

        $queryString = "SELECT questions.id, questions.theme, questions.description as questionDescription, answers.isCorrect as answerIsCorrect, questiongroup.id as groupId, questiongroup.name as questionGroupName, difficulty.id as difficultyId, answers.description as answerDescription, customQuestionHistory.userId as whosQuestion FROM questions 
            JOIN difficulty ON difficultyId = difficulty.id 
            JOIN questiongroup ON questionGroupId = questiongroup.id 
            JOIN answers on questions.id = answers.questionId
            JOIN customquestionhistory on questions.id = customquestionhistory.questionId";
		
		if($whosQuestions === "usingUserSubmittedQuestions"){
			$queryString .= " JOIN users on customquestionhistory.userId = users.id WHERE users.id = :userId";
			$counter++;
		}		

		if(strlen($questionTheme)){
			if ($counter == 0) {
				$queryString .= " WHERE questions.theme = :questionTheme";
			}else{
				$queryString .= " AND questions.theme = :questionTheme";
			}
			$counter++;

		}if($questionGroup !== "sve"){
			if($counter == 0){
				$queryString .= " WHERE questiongroup.id = :questionGroup";
			}else{
				$queryString .= " AND questiongroup.id = :questionGroup";
			}
			$counter++;
		}

        $query = $con->prepare($queryString);

		if($whosQuestions === "usingUserSubmittedQuestions"){
	        $query->bindParam(":userId", $user_id, PDO::PARAM_INT);
		}		
		if(strlen($questionTheme) != 0){
        	$query->bindParam(":questionTheme", $questionTheme, PDO::PARAM_STR);

		}if($questionGroup !== "usingAllQuestions"){
        	$query->bindParam(":questionGroup", $questionGroup, PDO::PARAM_STR);
		}

        $query->execute();
        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        


		echo json_encode($data, JSON_PRETTY_PRINT);
	
	} else{
		exit('Invalid URL');
	}
