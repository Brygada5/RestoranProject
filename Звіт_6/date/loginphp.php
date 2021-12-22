<?php
date_default_timezone_set('Europe/Kiev');
$name = $_POST['name'];
$email = $_POST['email'];
$header = $_POST['header'];
$message = $_POST['message'];

$mes = "Имя: $name <br> E-mail: $email <br>Тема: $header <br>Текст: $message";


  echo "Сообщение отправлено <br>";
  echo "$mes <br>";
  echo date('l jS \of F Y h:i:s A');

?>
