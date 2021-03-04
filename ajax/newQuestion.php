<?php 
	define('__CONFIG__', true);
	require_once "../config.php"; 
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		//Always return JSON
		header('Content-Type: application/json');
		$return =[];

		$user_id = $_SESSION['user_id'];
		$questionDifficulty = $_POST['questionDifficulty'];
		$groupName = Filter::String($_POST['groupName']);
		$question = Filter::String($_POST['question']);
		

		$findUser = $con->prepare("SELECT id,level FROM users WHERE id = id LIMIT 1");
		$findUser->bindParam(':id', $user_id, PDO::PARAM_STR);
		$findUser->execute(); 

		$insertNewQuestion = $con->prepare("INSERT INTO questions(question, groupName, questionDifficulty, userId) VALUES(:question, :groupName, :questionDifficulty, :userId)");
			
		$insertNewQuestion->bindParam(':questionDifficulty', $questionDifficulty, PDO::PARAM_STR);
		$insertNewQuestion->bindParam(':userId', $user_id, PDO::PARAM_STR);
		$insertNewQuestion->bindParam(':groupName', $groupName, PDO::PARAM_STR);
		$insertNewQuestion->bindParam(':question', $question, PDO::PARAM_STR);

		$insertNewQuestion->execute(); 	
		$lastId = $con->lastInsertId();

		if ($findUser->rowCount() == 1) {
			$user = $findUser->fetch(PDO::FETCH_ASSOC);
			if ($user['level'] != 1) {
				$return['error'] = "Nemate dopuštenje pisati u bazu padataka";
			}else if($questionDifficulty === "easy"){
				$answersEasy = $_POST['questionEasyAnswer'];
				$insertAnswer = $con->prepare("UPDATE questions SET answersEasy = :easyAnswer WHERE id=:id");
				$insertAnswer->bindParam(":easyAnswer", $answersEasy, PDO::PARAM_STR);
				$insertAnswer->bindParam(":id", $lastId, PDO::PARAM_STR);
				$insertAnswer->execute();
			}else if($questionDifficulty === "normal"){
				$insertAnswer = $con->prepare("UPDATE questions SET answersNormal = :answersNormal WHERE id=:id");
				$insertAnswer->bindParam(":answersNormal", $_POST['questionNormalAnswer'], PDO::PARAM_STR);
				$insertAnswer->bindParam(":id", $lastId, PDO::PARAM_STR);
				$insertAnswer->execute();

			}else if($questionDifficulty === "hard"){
				$insertAnswer = $con->prepare("UPDATE questions SET answerHard = :answersHard WHERE id=:id");
				$insertAnswer->bindParam(":answersHard", $_POST['questionHardAnswer'], PDO::PARAM_STR);
				$insertAnswer->bindParam(":id", $lastId, PDO::PARAM_STR);
				$insertAnswer->execute();
			
			}else if($questionDifficulty === "usmeno"){
				$insertAnswer = $con->prepare("UPDATE questions SET answerUsmeno = :answerUsmeno WHERE id=:id");
				$insertAnswer->bindParam(":answerUsmeno", $_POST['questionUsmenoAnswer'], PDO::PARAM_STR);
				$insertAnswer->bindParam(":id", $lastId, PDO::PARAM_STR);
				$insertAnswer->execute();
			}
		} else{
			$return['error'] = "Korisnik s Vašim idom nije pronađen";
		}

		echo json_encode($return, JSON_PRETTY_PRINT);
	
	} else{
		exit('Invalid URL');
	}
?>