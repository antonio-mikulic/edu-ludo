<!DOCTYPE html>
<html>
<head>
	<title>Čovječe nauči se</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Čovječe, nauči se! Edukativna društvena igra za osnovnoškolce.">
    <meta name="author" content="TimTim">
    <link rel="icon" href="favicon.png" sizes="16x16" type="image/png">
    <meta name="theme-color" content="yellow">
</head>
<body>
	<?php include('navigationBar.php') ?>
	<img src="images/app_ime.png" alt="Čovječe, nauči se!" id="AppIme">
	<img src="images/logo_board.svg" alt="Čovječe, nauči se!" id="logoPic" />
	<main id="board">	
		<?php 
			$playBox = array('50'=>1,'51'=>2,'52'=>3,'53'=>4,'54'=>5,'55'=>6,'45'=>7,'35'=>8,'25'=>9,'15'=>10,'05'=>11,'06'=>12,'07'=>13,'08'=>14,'09'=>15,'19'=>16,'29'=>17,'39'=>18,'49'=>19,'59'=>20,'510'=>21,'511'=>22,'512'=>23,'513'=>24,'514'=>25,'614'=>26,'714'=>27,'814'=>28,'914'=>29,'913'=>30,'912'=>31,'911'=>32,'910'=>33,'99'=>34,'109'=>35,'119'=>36,'129'=>37,'139'=>38,'149'=>39,'148'=>40,'147'=>41,'146'=>42,'145'=>43,'135'=>44,'125'=>45,'115'=>46,'105'=>47,'95'=>48,'94'=>49,'93'=>50,'92'=>51,'91'=>52,'90'=>53,'80'=>54,'70'=>55,'60'=>56);
			
			$yellowStart = array('00' => 60, '01'=> 61, '10' => 62, '11' => 63);
			$yellowGoal = array('17' => 65, '27'=>66,'37'=>67,'47'=>68);
			$blueStart = array('013' => 70, '014'=> 71, '113' => 72, '114' => 73);
			$blueGoal = array('710' => 75, '711'=>76,'712'=>77,'713'=>78);
			$redStart = array('1313' => 80, '1314'=> 81, '1413' => 82, '1414' => 83);
			$redGoal = array('107' => 85, '117'=>86,'127'=>87,'137'=>88);
			$greenStart = array('130' => 90, '131'=> 91, '140' => 92, '141' => 93);
			$greenGoal = array('71' => 95, '72'=>96,'73'=>97,'74'=>98);
			for ($row=0; $row < 15; $row++) {
			 	for ($col=0; $col < 15; $col++) { 
			 			$currentPos = strval($row).strval($col);
			 			if (array_key_exists($currentPos, $playBox)) {
			 				echo "<div class=playField id=$currentPos>" .$row .'|'.$col . "</div>";
			 			}
			 			//Izrada cilja
			 			else if(array_key_exists($currentPos, $yellowGoal)){
	 						echo "<div class=blueField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			} else if(array_key_exists($currentPos, $redGoal)){
	 						echo "<div class=greenField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			} else if(array_key_exists($currentPos, $greenGoal)){
	 						echo "<div class=yellowField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			}  else if(array_key_exists($currentPos, $blueGoal)){
	 						echo "<div class=redField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			}
			 			//Izrada starta
			 			else if(array_key_exists($currentPos, $yellowStart)){
	 						echo "<div class=yellowField id=$currentPos>" .$row .'|'.$col ."</div>";
			 			} else if(array_key_exists($currentPos, $redStart)){
			 				echo "<div class=redField id=$currentPos>" .$row .'|'.$col ."</div>";
			 			} else if(array_key_exists($currentPos, $greenStart)){
			 				echo "<div class=greenField id=$currentPos>" .$row .'|'.$col ."</div>";
			 			} else if(array_key_exists($currentPos, $blueStart) && $row!=11){ //Treba provjera za row pošto se 113 i 114 nalazi na dva mjesta, nama treba samo onaj u prvom redu
			 				echo "<div class=blueField id=$currentPos>" .$row .'|'.$col ."</div>"; 
			 			}
			 			//Popunjavanje praznih čelija
			 			else echo "<div class=empty>&nbsp;</div>";
			 		}
					echo "<br/>";
			 }
		?>
	</main>	
	<section id="diceSection">
		<p id="PlaceForResult"></p>
		<p id="PlaceForCurrentTurn"></p>
		<p id="moveMessage"></p>
	</section>
		
		<button type="button" id="setBoardButton">Klikni za start!</button>
		<button type="button" id="skipTurn">Kliknite ukoliko želite preskočiti potez ili se ne možete pomaknuti!</button>
		<img src="images/0.svg" id="diceButton"/>

		<section id="turnsection">
			<h3>Na redu:</h3>
			<img src="" id="turn"/>	
		</section>
		

		<form id="ajax-panel" method="POST">
		</form>


	<audio id="audio" src="zvuk.mp3" type="audio/mpeg" ></audio>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="jscode.js"></script>
	<script src="assets/js/crud.js"></script>

</body>
</html>
