<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$to = 'sam.shrivastava11@gmail.com';
$subject = 'New Contact Form Submission';
$message = $_POST['message'];
$headers = "From: {$_POST['name']} <{$_POST['email']}>\r\n";
$headers .= "Reply-To: {$_POST['email']}\r\n";

mail($to, $subject, $message, $headers);

?>