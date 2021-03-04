<?php 
	define('__CONFIG__', true);
	require_once "../config.php"; 

	if($_SERVER['REQUEST_METHOD'] == 'POST' OR 1===1){
		//Always return JSON
		header('Content-Type: application/json');
		$return =[];

		$diceResult = Filter::String($_POST['moveFor']);
		if ($diceResult == 0 || $diceResult == 1 || $diceResult == 2) {
			$return['difficulty'] = 'easy';
		}elseif ($diceResult == 3 || $diceResult == 4) {
			$return['difficulty'] = 'normal';
		}elseif($diceResult == 5 || $diceResult == 6){
			$return['difficulty'] = 'hard';
		}

		$getQuestion = $con->prepare("SELECT * FROM questions WHERE questionDifficulty = :questionDifficulty ORDER BY RAND() LIMIT 1");
		$getQuestion->bindParam(":questionDifficulty",$return['difficulty'],PDO::PARAM_STR);
		$getQuestion->execute();

		$question = $getQuestion->fetch(PDO::FETCH_ASSOC);
		$return['questionTitle'] = $question['question'];
		$return['group'] = $question['groupName'];

		if($return['difficulty'] === 'easy'){
			$return['answer'] = $question['answersEasy'];
		}else if($return['difficulty'] === 'normal'){
			$return['answer'] = $question['answersNormal'];
		}else if($return['difficulty'] === 'hard'){
			$return['answer'] = $question['answerHard'];
		}else if($return['difficulty'] === 'usmeno'){
			$return['answer'] = $question['answerUsmeno'];
		}
		$return['answer'] = strtolower($return['answer']);
		
		echo json_encode($return, JSON_PRETTY_PRINT);
	
	} else{
		exit('Invalid URL');
	}
?>