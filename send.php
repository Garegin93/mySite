<?php

// данные с элемента формы

$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["msg"];

//обработка полученных данных

$login = htmlspecialchars($name); // преобразование в сущности (мнемоники)
$email = htmlspecialchars($email);
$msg = htmlspecialchars($msg);

$login = urldecode($name); // Декодирование url
$email = urldecode($email);
$msg = urldecode($msg);

$login = trim($name); // Удаление пробельных символов
$email = trim($email);
$msg = trim($msg);

// Отправляем данные на почту

if (mail("garikbarsegyan93@mail.ru",
"Новое письмо с моего сайта",
"Имя: ".$name."\n".
"email: ".$email."\n".
"Сообщение: ".$msg."\n",
"FROM: no-reply@mydomain.ru \r\n")
) {
    echo ("<strong style='font-size: 24px'>Письмо успешно отправлено</strong>!");
} else {
   echo ("<span style='font-size: 24px'>Есть ошибки! Проверьте данные...</span>");
}

?>