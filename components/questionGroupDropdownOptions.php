<?php
 
require '../ajax/lib.php';
 
$object = new CRUD();

$data = "";

$questionGroups = $object->getQuestionGroups();
$data.='<option value="sve">Sva pitanja</option>';
 
if (count($questionGroups) > 0) {
    
    foreach ($questionGroups as $group) {
        $data .= '<option class="selection" value="' . $group['id'] . '">' . $group['name'] . '</option>';       
    }
} else {
    // records not found
    $data .= '<option class="selection" value="' . 'error' . '">' . 'error' . '</option>';
}
 
 
echo $data;
 
?>