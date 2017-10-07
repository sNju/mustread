<?php

$field_name = $_POST[name];
$field_email = $_POST[userEmail];
$field_tel = $_POST[number];
$field_message = $_POST[message];

$mail_to = 'sanjaybargali.mail005@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Telephone: '.$field_tel."\n";
$body_message .= 'Message: '.$field_message;

mail($mail_to, $subject, $body_message);

?>