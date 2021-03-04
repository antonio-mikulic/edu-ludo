<!DOCTYPE HTML>
<html>
<head>
	<title>Čovječe, nauči se!</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Čovječe, nauči se! Edukativna društvena igra za osnovnoškolce.">
    <meta name="author" content="TimTim">
    <link rel="icon" href="favicon.png" sizes="16x16" type="image/png">
    <meta name="theme-color" content="yellow">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script>	
		function getQuestionGroupDropdownOptions() {
		    $.get("components/questionGroupDropdownOptions.php", {}, function (data, status) {
		        $("#questionGroup").html(data);
		    });
		}
		$(document).ready(function() {
			$.get("components/questionGroupDropdownOptions.php", {}, function (data, status) {
		        $("#questionGroup").html(data);
		    });		
		});


		function startGame(){
			var boardType = $("#boardType option:selected").val();
			var whosQuestions = $("#whosQuestions option:selected").val();
			var questionGroup = $("#questionGroup option:selected").val();
			var podgrupa_pitanja = $("#podgrupa_pitanja").val();

			if (boardType==="small") {
				document.location = 'game_small.php?wQ='+whosQuestions+'&qG='+questionGroup + '&pp=' + podgrupa_pitanja;	
			}else if (boardType==="standard") {
				document.location = 'game.php?wQ='+whosQuestions+'&qG=' +questionGroup + '&pp=' + podgrupa_pitanja;	
			}
		}	
    </script>
</head>
<body id="intro">
	<main id="intro1">
		<img src="images/logo.svg" id="logo" alt="'Čovječe, nauči se!' edukativna je društvena igra namijenjena učenicima 01. - 04. razreda osnovne škole.">
		<br><br>
		<button type="button" id="start" onclick="startGame()" >Pokreni igru</button>

	</main>
		<form name="gameType" id="gameType" method="POST" />
			<div class="opt">
	            <label for="boardType">Veličina ploče:</label><br>
				<select id="boardType">
	            	<option value="small">Mala</option>
				    <option value="standard" selected="selected">Standardna</option>
	            </select>
	        </div>
	        <br><br>
	        <div class="opt">
	            <label for="whosQuestions">Čija pitanja želite koristiti?</label><br>
				<select id="whosQuestions">
	            	<option value="usingAllQuestions">Sva</option>
				    <option value="usingUserSubmittedQuestions">Svoja</option>
	            </select>
            </div>
            <br><br>
            <div class="opt">
	            <label for="questionGroup">Izaberite temu:</label><br>
				<select id="questionGroup">
	            </select>
	        </div>
            <br><br>
	        <div class="opt">
	            <label for="podgrupa_pitanja">Podgrupa pitanja</label><br>
				<input id ="podgrupa_pitanja" type="textarea">
				<br>
            </div>


            <br><br>
			
		</form>
</body>
</html>

