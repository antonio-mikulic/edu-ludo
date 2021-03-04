
<?php

if (session_status() == PHP_SESSION_NONE) {
    require_once('server.php');
}


echo'
<nav class="menu">
	    <div class="title">Izbornik</div>
	    <ul class="nav">
	      <li><a href="index.php">Nova igra</a></li>';
	      if(!isset($_SESSION['username'])){
					 		echo '<li><a href="registracija.php" target="blank">Prijava</a></li>';
					 	}
	      echo'
	      <li><a href="dashboard.php" target="blank">Unos pitanja</a></li>
	      <li><a href="https://tvzhr-my.sharepoint.com/:i:/g/personal/mkrizanic_tvz_hr/ETZgbSNX--RDnTG8iYvBp5sBfa93grr0VU_M0OqbG4Btlw?e=0GlmCY" target="blank">O igri</a></li>';
	      
					 	if(isset($_SESSION['username'])){
					 		echo '<li><a href="logout.php" target="blank">Odjavi se</a></li>';
					 	}
					 
	      
	    echo'
	    </ul>
</nav>
';
?>