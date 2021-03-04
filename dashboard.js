$(document).on("submit","form#newQuestion", function(event){
	event.preventDefault();

	var error = $("#errorMessage");
	var form = $(this);
	var dataObj={
		question: $("input[id='question'").val(),
		questionDifficulty: $("#questionDifficulty option:selected").val(),
		questionEasyAnswer: $("#questionEasyAnswer option:selected").val(),
		questionNormalAnswer: $("#questionNormalAnswer option:selected").val(),
		questionHardAnswer: $("input[id='questionHardAnswer'").val(),
		questionUsmenoAnswer: $("#questionUsmenoAnswer option:selected").val(),
		groupName: $("input[id='groupName'").val()
	}
	
	if (dataObj.groupName.length > 50) {
		error.text("Ime grupe može imati maksmialno 50 znakova!");
		return false;
	}else if (dataObj.questionHardAnswer.length > 50) {
		error.text("Odgovor na teško pitanje može imati maksmialno 50 znakova!");
		return false;
	}

	console.log(dataObj);
	error.hide();
	$.ajax({
		type: 'POST',
		url: 'ajax/newQuestion.php',
		data: dataObj,
		dataType: 'json',
		async: true,
	})
	.done(function ajaxDone(data){
		if(data.redirect !== undefined) {
			window.location = data.redirect;
		} else if(data.error !== undefined) {
			error.text(data.error).show();
		}

	})
	.fail(function ajaxFailed(e){
	})
	.always(function ajaxAlwaysDo(data){
	})

	return false;
});

	function getQuestionGroupFilterDropdownOptions(){
	    $.get("components/questionGroupDropdownOptions.php", {}, function (data, status) {
	        $("#grupa_pitanja_filter").html(data);
	    });
	}

	function getQuestionGroupDropdownOptions() {
	    $.get("components/questionGroupDropdownOptions.php", {}, function (data, status) {
	        $("#grupa_pitanja").html(data);
	        $("#update_grupa_pitanja").html(data);
	    });
	}

	function getQuestionDifficultyDropdownOptions() {
	    $.get("components/questionDifficultyDropdownOptions.php", {}, function (data, status) {
	        $("#tezina_pitanja").html(data);
	        $("#update_tezina_pitanja").html(data);
	    });
	}


$( document ).ready(function() {

    $("#odgovor1DIV").css("display","none")
    $("#odgovor2DIV").css("display","none")
    $("#odgovor3DIV").css("display","none")


	$('#tezina_pitanja').on('change',function(){
	    var selection = $(this).val();
	    switch(selection){
	    case "1":
	    $("#odgovor1DIV").css("display","block")
	    $("#odgovor2DIV").css("display","block")
	    $("#odgovor3DIV").css("display","none")
	    $("#answer_one").val("Točno")
	    $("#answer_two").val("Netočno")
	    $("#answer_one").prop("readonly", true);
		$("#answer_two").prop("readonly", true);


	 	break;

	    case "2":
	    $("#odgovor1DIV").css("display","block")
	    $("#odgovor2DIV").css("display","block")
	    $("#odgovor3DIV").css("display","block")
	    $("#answer_one").val("")			
	    $("#answer_two").val("")
	    $("#answer_one").prop("readonly", false);
		$("#answer_two").prop("readonly", false);
		break;

	    case "3":
	    $("#odgovor1DIV").css("display","block")
	    $("#odgovor2DIV").css("display","none")
	    $("#odgovor3DIV").css("display","none")
	    $("#answer_one").prop("readonly", false);
	    $("#answer_one").val("")				
	    $("#answer_two").val("")

	   	break;

	    default:
	    $("#odgovor1DIV").hide()
	    $("#odgovor2DIV").hide()
	    $("#odgovor3DIV").hide()
	    }
	});
});
