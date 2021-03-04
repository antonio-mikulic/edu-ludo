<?php
if (isset($_POST['pitanje']) && isset($_POST['grupa_pitanja']) && isset($_POST['tezina_pitanja'])) {
    require("lib.php");

    $pitanje = $_POST['pitanje'];
    $grupa_pitanja = $_POST['grupa_pitanja'];
    $tezina_pitanja = $_POST['tezina_pitanja'];

    $answer_one = $_POST['answer_one'];
    $answer_two = $_POST['answer_two'];
    $answer_three = $_POST['answer_three'];

    $answer_one_checkbox = $_POST['answer_one_checkbox'];
    $answer_two_checkbox = $_POST['answer_two_checkbox'];
    $answer_three_checkbox = $_POST['answer_three_checkbox'];

    $answer_three_checkbox = $_POST['answer_three_checkbox'];
    $questionSubTheme = $_POST['podgrupa_pitanja'];




    $object = new CRUD();

    $object->Create($pitanje, $grupa_pitanja, $tezina_pitanja, $answer_one, $answer_two, $answer_three, $answer_one_checkbox, $answer_two_checkbox, $answer_three_checkbox, $questionSubTheme);
}
?>
