// $(document).on("submit","form#registracija", function(event){
// 	event.preventDefault();

// 	var error = $("#errorMessage");
// 	var form = $(this);
// 	var dataObj={
// 		username: $("input[id='username'").val(),
// 		email: $("input[id='email']").val(), 
// 		password: $("input[id='password'").val(),
// 		password2: $("input[id='password2'").val()
// 	}
// 	console.log(dataObj);
// 	if(dataObj.password != dataObj.password2){
// 		error.text("Lozike moraju biti iste!");
// 		return false;
// 	}else if (dataObj.password.length < 8) {
// 		error.text("Lozika mora imati barem 8 znakova!");
// 		return false;
// 	}else if (dataObj.username.length > 29) {
// 		error.text("Korisničko ime mora imati manje od 30 znakova!");
// 		return false;
// 	}

// 	error.hide();
// 	alert("Zahtjev za registraciju poslan");
// 	$.ajax({
// 		type: 'POST',
// 		url: 'ajax/registracija.php',
// 		data: dataObj,
// 		dataType: 'json',
// 		async: true,
// 	})
// 	.done(function ajaxDone(data){
// 		console.log("Done");
// 		if(data.redirect !== undefined) {
// 			window.location = data.redirect;
// 		} else if(data.error !== undefined) {
// 			error.text(data.error).show();
// 		}

// 	})
// 	.fail(function ajaxFailed(e){
// 		console.log("Ajax call failed");	
// 	})
// 	.always(function ajaxAlwaysDo(data){
// 	})

// 	return false;
// });

// $(document).on("submit","form#login", function(event){
// 	event.preventDefault();

// 	var error = $("#errorMessageLogin");
// 	var form = $(this);
// 	var dataObj={
// 		username: $("input[id='loginUsername'").val(),
// 		password: $("input[id='loginPassword'").val(),
// 	}
// 	if(dataObj.password.length < 8) {
// 		error.text("Lozika mora imati barem 8 znakova!");
// 		return false;
// 	}else if (dataObj.username.length > 29) {
// 		error.text("Korisničko ime mora imati manje od 30 znakova!");
// 		return false;
// 	}

// 	error.hide();
// 	alert("Zahtjev za login poslan");
// 	$.ajax({
// 		type: 'POST',
// 		url: 'ajax/login.php',
// 		data: dataObj,
// 		dataType: 'json',
// 		async: true,
// 	})
// 	.done(function ajaxDone(data){
// 		if(data.redirect !== undefined) {
// 			window.location = data.redirect;
// 		} else if(data.error !== undefined) {
// 			error.text(data.error).show();
// 		}

// 	})
// 	.fail(function ajaxFailed(e){
// 	})
// 	.always(function ajaxAlwaysDo(data){
// 	})

// 	return false;
// });


// $(document).on("submit","form#resetPassword", function(event){
// 	event.preventDefault();

// 	var error = $("#errorMessage");
// 	var form = $(this);
// 	var dataObj={
// 		email: $("input[id='emailReset']").val(), 
// 	}

// 	alert("Trenutno nije moguće poslati zahtjev!");
// 	$.ajax({
// 		type: 'POST',
// 		url: 'ajax/nova_sifra.php',
// 		data: dataObj,
// 		dataType: 'json',
// 		async: true,
// 	})
// 	.done(function ajaxDone(data){
// 		if(data.redirect !== undefined) {
// 			window.location = data.redirect;
// 		} else if(data.error !== undefined) {
// 			error.text(data.error).show();
// 		}

// 	})
// 	.fail(function ajaxFailed(e){
// 	})
// 	.always(function ajaxAlwaysDo(data){
// 	})

// 	return false;
// });
