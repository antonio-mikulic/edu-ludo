<!DOCTYPE html>
<html>
<head>
	<title>Čovječe nauči se</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="style_small_board.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Čovječe, nauči se! Edukativna društvena igra za osnovnoškolce.">
    <meta name="author" content="TimTim">
    <link rel="icon" href="favicon.png" sizes="16x16" type="image/png">
    <meta name="theme-color" content="yellow">
</head>
<body>
	<?php include('navigationBar.php') ?>
	<img src="images/app_ime.png" alt="Čovječe, nauči se!" id="AppIme">
	<!--<img src="images/logo_board.svg" alt="Čovječe, nauči se!" id="logoPic" />-->
	<main id="board">	
		<?php 
			$playBox = array('40'=>1, '31'=> 2, '22' => 3, '13' => 4, '04' => 5, '05' => 6, '06' => 7, '17' => 8, '28' => 9, '39' => 10, '410' => 11, '510' => 12, '610' => 13, '79' => 14, '88' => 15, '97' => 16, '106' => 17, '105' => 18, '104' => 19, '93' => 20, '82' => 21, '71' => 21, '60' => 22, '50' => 23);


			$yellowStart = array('00' => 60, '01'=> 61, '10' => 62, '11' => 63);
			$yellowGoal = array('51' => 65, '52'=>66,'53'=>67,'54'=>68);

			$blueStart = array('09' => 70, '010'=> 71, '19' => 72, '110' => 73);
			$blueGoal = array('15' => 75, '25'=>76,'35'=>77,'45'=>78);

			$redStart = array('99' => 80, '910'=> 81, '109' => 82, '1010' => 83);
			$redGoal = array('59' => 59, '58'=>58,'57'=>87,'56'=>88);

			$greenStart = array('90' => 90, '91'=> 91, '100' => 92, '101' => 93);
			$greenGoal = array('95' => 95, '85'=>96,'75'=>97,'65'=>98);


			for ($row=0; $row < 11; $row++) {
			 	for ($col=0; $col < 11; $col++) { 
			 			$currentPos = strval($row).strval($col);
			 			if (array_key_exists($currentPos, $playBox)) {
			 				echo "<div class=playField id=$currentPos>" .$row .'|'.$col . "</div>";
			 			}
			 			//Izrada cilja
			 			else if(array_key_exists($currentPos, $yellowGoal)){
	 						echo "<div class=yellowField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			} else if(array_key_exists($currentPos, $redGoal)){
	 						echo "<div class=redField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			} else if(array_key_exists($currentPos, $greenGoal)){
	 						echo "<div class=greenField id=$currentPos>" .$row .'|'.$col ."</div>";	
			 			}  else if(array_key_exists($currentPos, $blueGoal)){
	 						echo "<div class=blueField id=$currentPos>" .$row .'|'.$col ."</div>";	
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
	<script src="jscode_small_board.js"></script>
	<script src="assets/js/crud.js"></script>

</body>
</html>
