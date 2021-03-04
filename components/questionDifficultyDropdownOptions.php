<?php
 
require '../ajax/lib.php';
 
$object = new CRUD();

$data = "";

$questionDifficulties = $object->getQuestionDifficulties();
$data.='<option value="none">Odaberi težinu</option>';
 
if (count($questionDifficulties) > 0) {
    
    foreach ($questionDifficulties as $difficulty) {
        $data .= '<option class="selection" value="' . $difficulty['id'] . '">' . $difficulty['name'] . '</option>';       
    }
} else {
    // records not found
    $data .= '<option class="selection" value="' . 'error' . '">' . 'error' . '</option>';
}
 
 
echo $data;
 
?>