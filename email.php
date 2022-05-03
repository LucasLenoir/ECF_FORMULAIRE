<?php
$errors = "";
if (
    empty($_POST['message'])) {
    $errors .= "\n Error: message field is required";
}

$destinataire = 'kevinceriatti@gmail.com';

$message = $_POST['message'];
// $name = $_POST['name'];
$subject = $_POST['subject'];

if (empty($errors)) {
    $result = mail($destinataire, $subject, $message);
    print_r($result);
    // print_r($_POST);

}
