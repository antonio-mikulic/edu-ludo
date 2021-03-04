<?php 
	include('server.php');
	define('__CONFIG__', true);
	require_once "config.php"; 
	ForceDashboard();


?>
<!DOCTYPE html>
<html lang="hr">
<head>
	<link rel="stylesheet" type="text/css" href="reg.css">
	<meta charset="UTF-8">
	<title>Registracija | Prijava</title>
</head>
<body>
	<section id="logo">
		<img src="images/logo.svg">
		<a href="game.php" id="igra">Nova igra</a>
	</section>
	<main>
		<section id="log_div">
			<!--<h1>Prijava: </h1>-->
			<form method="POST" name="login" id="login" action="registracija.php">
				<?php  if (count($errors) > 0) : ?>
  <div class="error">
  	<?php foreach ($errors as $error) : ?>
  	  <p><?php echo $error ?></p>
  	<?php endforeach ?>
  </div>
<?php  endif ?>
				<label for="loginUsername">Korisničko ime: </label><br>
				<input id ="loginUsername" type="text" name="loginUsername" required='required'>
				<br/>
				<label for="loginPassword">Lozinka: </label><br>
				<input id ="loginPassword" type="password" name="loginPassword" required='required'>
				<br/>
				<input name="login_user" type="submit" class="gumb" value="Prijava">
				<br/>
				<div id="errorMessageLogin"></div>
			</form>
			<div id="linija"></div>	
		</section>
		


		<section id="reg_div">
			<!--<h1>Registracija: </h1>-->
			<form method="POST" name="registracija" id="registracija" action="registracija.php">
				<?php include('errors.php'); ?>
				<label for="username">Korisničko ime: </label><br>
				<input id ="username" type="text" name="username" required='required' value="<?php echo $username; ?>">
				<br/>
				<label for="email">E-mail: </label><br>
				<input id ="email" type="email" name="email" required='required' value="<?php echo $email; ?>">
				<br/>
				<label for="password">Lozinka: </label><br>
				<input id ="password" type="password" name="password_1" required='required'>
				<br/>
				<label for="password2">Potvrdite lozinku: </label><br>
				<input id ="password2" type="password" name="password_2" required='required'>
				<br/>
				<input name="reg_user" type="submit" class="gumb" value="Registracija">
				<br/>
				<div id="errorMessage"></div>
			</form>	
		</section>

		<!--<section>
			<form method="POST" name="resetPassword" id="resetPassword">
				<p>Unesite vašu email adresu: </p>
				<p>Pažnja!!! Trenutno ne postoji mogućnost restartiranja šifre!</p>
				<input type="text" name="email" id="emailReset">
				<input name="resetPasswordGumb" type="submit" value="Zatražite novu šifru">
			</form>
		</section>-->	
	</main>

	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="registracija.js" type="text/javascript"></script>
</body>
</html>
