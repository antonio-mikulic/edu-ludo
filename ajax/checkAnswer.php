<?php 
	define('__CONFIG__', true);
	require_once "../config.php"; 

	if($_SERVER['REQUEST_METHOD'] == 'POST' OR 1===1){
		//Always return JSON
		header('Content-Type: application/json');
		$return = [];

		if ($_POST['difficulty']=='hard') {
			$return['answer'] = $_POST['answerWriten'];
		}else{
			$return['answer'] = $_POST['answer'];
		}
		$return['correct'] = $_POST['correctAnswer'];

		echo json_encode($return, JSON_PRETTY_PRINT);
	
	} else{
		exit('Invalid URL');
	}
?>