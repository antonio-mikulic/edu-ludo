
<?php
 
require 'lib.php';
 
$user_id = $_SESSION['user_id'];
$is_admin = $_SESSION['is_admin'];

$questionGroupId = $_POST['questionGroupId'];

$object = new CRUD();
 
// Design initial table header
$data = '<table class="table table-bordered table-striped">
                        <tr>
                            <th>Pitanje</th>
                            <th>Naziv grupe</th>
                            <th>Težina</th>
                            <th>Podtema</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>';
 
 
$questions = $object->Read($user_id, $is_admin, $questionGroupId);
 
if (count($questions) > 0) {
    
    foreach ($questions as $question) {
        $data .= '<tr>
                <td>' . $question['description'] . '</td>
                <td>' . $question['groupName'] . '</td>
                <td>' . $question['difficultyName'] . '</td>
                <td>' . $question['theme'] . '</td>

                <td>
                    <button onclick="GetUserDetails(' . $question['id'] . ')" class="btn btn-warning">Uredi pitanje</button>
                </td>
                <td>
                    <button onclick="DeleteUser(' . $question['id'] . ')" class="btn btn-danger">Pobriši</button>
                </td>
            </tr>';
        
    }
} else {
    // records not found
    $data .= '<tr><td colspan="6">Pitanja nisu pronađena!</td></tr>';
}
 
$data .= '</table>';
 
echo $data;
 
?>