<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comments'];
$token = "1748960506:AAGPRX897iUZxa5EZFTnH7bQ4-Dbjr0CuRk";
$chat_id = "-527891653";

$arr = array(
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
	'Комментарий: ' => $comment
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('location: index.html');
} else {
  echo "Error";
}

?>
