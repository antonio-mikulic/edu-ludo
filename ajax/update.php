
<?php
if (isset($_POST)) {
    require 'lib.php';

    $update_pitanje = $_POST['update_pitanje'];
    $update_grupa_pitanja = $_POST['update_grupa_pitanja'];
    $update_tezina_pitanja = $_POST['update_tezina_pitanja'];

    $update_answer_one = $_POST['update_answer_one'];
    $update_answer_two = $_POST['update_answer_two'];
    $update_answer_three = $_POST['update_answer_three'];

    $update_answer_one_checkbox = $_POST['update_answer_one_checkbox'];
    $update_answer_two_checkbox = $_POST['update_answer_two_checkbox'];
    $update_answer_three_checkbox = $_POST['update_answer_three_checkbox'];

    $question_id = $_POST['question_id'];
 
    $object = new CRUD();
 
    $object->Update($update_pitanje, $update_grupa_pitanja, $update_tezina_pitanja, $update_answer_one,$update_answer_two,$update_answer_three,$update_answer_one_checkbox,$update_answer_two_checkbox,$update_answer_three_checkbox,$question_id);
}

?>