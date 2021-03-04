function getQuestionGroupDropdownOptions() {
    $.get("components/questionGroupDropdownOptions.php", {}, function (data, status) {
        $("#questionGroup").html(data);
    });
}
