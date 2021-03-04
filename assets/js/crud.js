//This two functions should be put inside global functions javascript file.

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

// Add Record
function addRecord() {
    // get values
    console.log("started addRecord...");
    var pitanje = $("#pitanje").val();
    if(pitanje != null){
        pitanje = pitanje.trim();
    }
    var grupa_pitanja = $("#grupa_pitanja").val();
    var tezina_pitanja = $("#tezina_pitanja").val();

    var answer_one = $("#answer_one").val();
    if(pitanje != null){
        answer_one = answer_one.trim();
    }
    var answer_one_checkbox;

    if($("#answer_one_checkbox").is(":checked")){
        answer_one_checkbox = 1;
    }else {
        answer_one_checkbox = 0;
    }

    var answer_two = $("#answer_two").val();
    if(pitanje != null){
        answer_two = answer_two.trim();
    }
    var answer_two_checkbox;

    if($("#answer_two_checkbox").is(":checked")){
        answer_two_checkbox = 1;
    }else {
        answer_two_checkbox = 0;
    }

    var answer_three = $("#answer_three").val();
    if(pitanje != null){
        answer_three = answer_three.trim();
    }
    var answer_three_checkbox;

    if($("#answer_three_checkbox").is(":checked")){
        answer_three_checkbox = 1;
    }else {
        answer_three_checkbox = 0;
    }
 
    var podgrupa_pitanja = $("#podgrupa_pitanja").val();
    if(podgrupa_pitanja === null){
        podgrupa_pitanja = "Nedefinirano";
    }

    if (pitanje == "") {
        alert("Tekst pitanja je obavezan!");
    }
    else if (grupa_pitanja === null) {
        alert("Morate odabrati grupu pitanja!");
    }
    else if (tezina_pitanja === null) {
        alert("Morate odabrati težinu pitanja!");
    }
    else if (answer_one === null && answer_two === null && answer_three === null){
        alert("Morate unjeti najmanje jedan odgovor!");
    }
    else if (answer_one_checkbox == false && answer_two_checkbox == false && answer_three_checkbox == false){
        alert("Morate odabrati najmanje jedan odgovor kao točan!");
    }
    else {
        // Add record
        $.post("ajax/create.php", {
            pitanje: pitanje,
            grupa_pitanja: grupa_pitanja,
            tezina_pitanja: tezina_pitanja,
            answer_one: answer_one,
            answer_two: answer_two,
            answer_three: answer_three,
            answer_one_checkbox: answer_one_checkbox,
            answer_two_checkbox: answer_two_checkbox,
            answer_three_checkbox: answer_three_checkbox,
            podgrupa_pitanja: podgrupa_pitanja

        }, function (data, status) {
            // close the popup
            $("#add_new_record_modal").modal("hide");
 
            // read records again
            readRecords();
 
            // clear fields from the popup
            $("#pitanje").val("");
            $("#grupa_pitanja").val("");
            $("#tezina_pitanja").val("");
            $("podgrupa_pitanja").val("");

            $("#answer_one").val("");
            $("#answer_two").val("");
            $("#answer_three").val("");

            $("#answer_one_checkbox")[0].checked = false;
            $("#answer_two_checkbox")[0].checked = false;
            $("#answer_three_checkbox")[0].checked = false;
        });
    }
    console.log("finished addRecord!!!");

}


// READ records
function readRecords() {

    var questionGroupId;

    if($("#grupa_pitanja_filter").val() == null){
        window[getQuestionGroupFilterDropdownOptions]();
        questionGroupId = "sve";
    }else{
		questionGroupId = $("#grupa_pitanja_filter").val();
    }


    $.post("ajax/read.php", {
        questionGroupId : questionGroupId
    }, function (data, status) {
        $(".records_content").html(data);
    });

    window[getQuestionGroupDropdownOptions]();
    window[getQuestionDifficultyDropdownOptions]();

    
}

// GET details
function GetUserDetails(id) {
    // Add User ID to the hidden field
    $("#hidden_user_id").val(id);
    $.post("ajax/details.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var jsonData = JSON.parse(data);
            console.log(jsonData);
            // Assign existing values to the modal popup fields
            $("#update_pitanje").val(jsonData[0].questionDescription);
            $("#update_grupa_pitanja").val(jsonData[0].groupId);
            $("#update_tezina_pitanja").val(jsonData[0].difficultyId);

            $("#update_answer_one").val(jsonData[0].answerDescription);
            $("#update_answer_two").val(jsonData[1].answerDescription);
            $("#update_answer_three").val(jsonData[2].answerDescription);

            $("#update_answer_one_checkbox")[0].checked = parseInt(jsonData[0].answerIsCorrect);
            $("#update_answer_two_checkbox")[0].checked = parseInt(jsonData[1].answerIsCorrect);
            $("#update_answer_three_checkbox")[0].checked = parseInt(jsonData[2].answerIsCorrect);
        }
    );
    // Open modal popup
    $("#update_user_modal").modal("show");
}


// UPDATE
function UpdateUserDetails() {
    // get values
    var update_pitanje = $("#update_pitanje").val();
    if(update_pitanje != null){
        update_pitanje = update_pitanje.trim();
    }
    var update_grupa_pitanja = $("#update_grupa_pitanja").val();
    var update_tezina_pitanja = $("#update_tezina_pitanja").val();

    var update_answer_one = $("#update_answer_one").val();
    if(update_pitanje != null){
        update_answer_one = update_answer_one.trim();
    }
    var answer_one_checkbox;

    if($("#update_answer_one_checkbox").is(":checked")){
        update_answer_one_checkbox = 1;
    }else {
        update_answer_one_checkbox = 0;
    }


    var update_answer_two = $("#update_answer_two").val();
    if(update_pitanje != null){
        update_answer_two = update_answer_two.trim();
    }
    var update_answer_two_checkbox;

    if($("#update_answer_two_checkbox").is(":checked")){
        update_answer_two_checkbox = 1;
    }else {
        update_answer_two_checkbox = 0;
    }

    var update_answer_three = $("#update_answer_three").val();
    if(update_pitanje != null){
        update_answer_three = update_answer_three.trim();
    }
    var answer_three_checkbox;

    if($("#update_answer_three_checkbox").is(":checked")){
        update_answer_three_checkbox = 1;
    }else {
        update_answer_three_checkbox = 0;
    }
 
    if (update_pitanje == "") {
        alert("Tekst pitanja je obavezan!");
    }
    else if (update_grupa_pitanja === null) {
        alert("Morate odabrati grupu pitanja!");
    }
    else if (update_tezina_pitanja === null) {
        alert("Morate odabrati težinu pitanja!");
    }
    else if (update_answer_one === null && update_answer_two === null && update_answer_three === null){
        alert("Morate unjeti najmanje jedan odgovor!");
    }
    else if (update_answer_one_checkbox == false && update_answer_two_checkbox == false && update_answer_three_checkbox == false){
        alert("Morate odabrati najmanje jedan odgovor kao točan!");
    }
    else {

        var id = $("#hidden_user_id").val();
        // Add record
        $.post("ajax/update.php", {
            update_pitanje: update_pitanje,
            update_grupa_pitanja: update_grupa_pitanja,
            update_tezina_pitanja: update_tezina_pitanja,
            update_answer_one: update_answer_one,
            update_answer_two: update_answer_two,
            update_answer_three: update_answer_three,
            update_answer_one_checkbox: update_answer_one_checkbox,
            update_answer_two_checkbox: update_answer_two_checkbox,
            update_answer_three_checkbox: update_answer_three_checkbox,
            question_id : id

        }, function (data, status) {
            // hide modal popup
                $("#update_user_modal").modal("hide");
                // reload Users by using readRecords();
                readRecords();
 
            // clear fields from the popup
            $("#update_pitanje").val("");
            $("#update_grupa_pitanja").val("");
            $("#update_tezina_pitanja").val("");

            $("#update_answer_one").val("");
            $("#update_answer_two").val("");
            $("#update_answer_three").val("");

            $("#update_answer_one_checkbox")[0].checked = false;
            $("#update_answer_two_checkbox")[0].checked = false;
            $("#update_answer_three_checkbox")[0].checked = false;
        });
    }
    
}


// DELETE

function DeleteUser(id) {
    var conf = confirm("Jeste li sigurni da želite obrisati ovo pitanje?");
    if (conf == true) {
        $.post("ajax/delete.php", {
                id: id
            },
            function (data, status) {
                // reload Users by using readRecords();
                readRecords();
            }
        );
    }
}

$(document).ready(function () {
    // READ records on page load
    readRecords(); // calling function
});