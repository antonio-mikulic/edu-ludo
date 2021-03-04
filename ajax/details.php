<?php
if (isset($_POST['id']) && isset($_POST['id']) != "") {
    require 'lib.php';
    $question_id = $_POST['id'];
 
    $object = new CRUD();
 
    echo $object->Details($question_id);
}
?>