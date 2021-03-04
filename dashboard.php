<?php 
	define('__CONFIG__', true);
	require_once "config.php"; 

	ForceLogin();

?>

<!DOCTYPE html>
<html lang="hr">
<head>
	<link rel="stylesheet" type="text/css" href="reg.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Čovječe, nauči se! Edukativna društvena igra za osnovnoškolce.">
    <meta name="author" content="TimTim">
    <link rel="icon" href="favicon.png" sizes="16x16" type="image/png">
    <meta name="theme-color" content="yellow">
	<meta charset="UTF-8">
	<title>Korisični panel</title>
</head>
<body>

	<?php include('navigationBar.php') ?>
	<section id="panel">
		<p class="userId"><?php echo $_SESSION['user_id']; ?></p>


		<!-- Content Section -->
		<div class="container">

			<header>
				<span id="welcomeUser">
					Dobrodošao/la 
					<?php
					 	if(isset($_SESSION['username'])){
					 		echo $_SESSION['username']; 
					 	}
					 ?>
				</span>
				<a id="logoutButton" href="logout.php">Odjavi se</a>
			</header>
		    
		    <div class="row">
		        <div class="col-md-12">
		            <div class="pull-right">
		                <button class="btn btn-success" data-toggle="modal" data-target="#add_new_record_modal">Dodaj novo pitanje</button>
		            </div>
		            <div class="pull-left">
		                <div class="form-group">
		                    <!-- AUTO POPULATED FROM DATABASE CHECK dashboard.js -->
		                    <select id="grupa_pitanja_filter" class="form-control" onchange="readRecords();">
						    </select>
		                </div>
		            </div>
		        </div>
		        
		    </div>
		    <div class="row">
		        <div class="col-md-12">
		            <h3>Pitanja:</h3>

		            <div class="records_content"></div>
		        </div>
		    </div>
		</div>
		<!-- /Content Section -->

		<!-- Modal - Add New Record/User -->
		<div class="modal fade" id="add_new_record_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		    <div class="modal-dialog" role="document">
		        <div class="modal-content">
		            <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                <h4 class="modal-title" id="myModalLabel">Dodaj novo pitanje</h4>
		            </div>
		            <div class="modal-body">
		 
		                <div class="form-group">
		                    <label for="pitanje">Pitanje</label>
		                    <input type="text" id="pitanje" placeholder="Pitanje" class="form-control"/>
		                </div>
		 
		                
		                
		                <div class="form-group">
		                    <label for="grupa_pitanja">Grupa pitanja</label>
		                    <!-- AUTO POPULATED FROM DATABASE CHECK dashboard.js -->
		                    <select id="grupa_pitanja" class="form-control">
						    </select>
		                </div>
		 
		                <!-- THIS NEED TO BE CHANGED SO VALUES ARE FETCHED DYNAMIC FROM DATABASE -->

		                <div class="form-group">
		                    <label for="tezina_pitanja">Težina pitanja</label>
		                    <select id="tezina_pitanja" class="form-control">
		                    <!-- AUTO POPULATED FROM DATABASE CHECK dashboard.js -->
		                    </select>
		                </div>

		                <div class="form-group">
		                    <label for="podgrupa_pitanja">Podgrupa pitanja</label>
		                    <input type="text" id="podgrupa_pitanja" class="form-control"/>
		                </div>

		                <hr />

		                <div id="odgovor1DIV" class="form-group">
		                    <label for="answer_one">Odgovor 1</label>
		                    <input type="text" id="answer_one" placeholder="Odgovor 1" class="form-control"/>
		                    <label for="answer_one_checkbox">Točan odgovor</label>
		                    <input id="answer_one_checkbox" name="answer_one_checkbox" type="checkbox">
		                </div>
		                <div id="odgovor2DIV" class="form-group">
		                    <label for="answer_two">Odgovor 2</label>
		                    <input type="text" id="answer_two" placeholder="Odgovor 2" class="form-control"/>
		                    <label for="answer_two_checkbox">Točan odgovor</label>
		                    <input id="answer_two_checkbox" name="answer_two_checkbox" type="checkbox">
		                </div>
		                <div id="odgovor3DIV" class="form-group">
		                    <label for="answer_three">Odgovor 3</label>
		                    <input type="text" id="answer_three" placeholder="Odgovor 3" class="form-control"/>
		                    <label for="answer_three_checkbox">Točan odgovor</label>
		                    <input id="answer_three_checkbox" name="answer_three_checkbox" type="checkbox">
		                </div>
		 
		            </div>
		            <div class="modal-footer">
		                <button type="button" class="btn btn-default" data-dismiss="modal">Odustani</button>
		                <button type="button" class="btn btn-primary" onclick="addRecord()">Dodaj</button>
		            </div>
		        </div>
		    </div>
		</div>
		<!-- // Modal -->


		<!-- Modal - Details -->
			<div class="modal fade" id="update_user_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	    <div class="modal-dialog" role="document">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	                <h4 class="modal-title" id="myModalLabel">Uredi pitanje</h4>
	            </div>
	            <div class="modal-body">
	 
	                <div class="form-group">
		                    <label for="pitanje">Pitanje</label>
		                    <input type="text" id="update_pitanje" placeholder="Pitanje" class="form-control"/>
		                </div>
		 
		                <!-- THIS NEED TO BE CHANGED SO VALUES ARE FETCHED DYNAMIC FROM DATABASE -->

		                <div class="form-group">
		                    <label for="grupa_pitanja">Grupa pitanja</label>
		                    <select id="update_grupa_pitanja" class="form-control">
		                    <!-- AUTO POPULATED FROM DATABASE CHECK dashboard.js -->
		                    	
		                    </select>
		                </div>
		 
		                <!-- THIS NEED TO BE CHANGED SO VALUES ARE FETCHED DYNAMIC FROM DATABASE -->

		                <div class="form-group">
		                    <label for="tezina_pitanja">Težina pitanja</label>
		                    <select id="update_tezina_pitanja" class="form-control">
		                    <!-- AUTO POPULATED FROM DATABASE CHECK dashboard.js -->
		                    	
		                    </select>
		                </div>

		                <hr />

		                <div class="form-group">
		                    <label for="answer_one">Odgovor 1</label>
		                    <input type="text" id="update_answer_one" placeholder="Odgovor 1" class="form-control"/>
		                    <label for="answer_one_checkbox">Točan odgovor</label>
		                    <input id="update_answer_one_checkbox" name="answer_one_checkbox" type="checkbox">
		                </div>
		                <div class="form-group">
		                    <label for="answer_two">Odgovor 2</label>
		                    <input type="text" id="update_answer_two" placeholder="Odgovor 2" class="form-control"/>
		                    <label for="answer_two_checkbox">Točan odgovor</label>
		                    <input id="update_answer_two_checkbox" name="answer_two_checkbox" type="checkbox">
		                </div>
		                <div class="form-group">
		                    <label for="answer_three">Odgovor 3</label>
		                    <input type="text" id="update_answer_three" placeholder="Odgovor 3" class="form-control"/>
		                    <label for="answer_three_checkbox">Točan odgovor</label>
		                    <input id="update_answer_three_checkbox" name="answer_three_checkbox" type="checkbox">
		                </div>
	 
	            </div>
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default" data-dismiss="modal">Odustani</button>
	                <button type="button" class="btn btn-primary" onclick="UpdateUserDetails()" >Spremi promjene</button>
	                <input type="hidden" id="hidden_user_id">
	            </div>
	        </div>
	    </div>
	</div>
	<!-- // Modal -->



		<br/><br/>
		<a href="index.php" id="igra">Nova igra</a>	
	</section>	

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/crud.js"></script>


<script defer src="dashboard.js" type="text/javascript"></script>
</body>
</html>
