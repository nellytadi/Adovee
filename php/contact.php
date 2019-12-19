<?php

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <webmaster@ditc.ng>' . "\r\n";
$headers .= 'Cc: nathandauda27@gmail.com ' . "\r\n";

$message = '<table><tr><td>Name of Sender: </td><td>'.$name.'</td> </tr> <tr><td>Email Address: </td><td>'.$email.'</td> <tr><tr><td>message: </td><td>'.$message.'</td> </tr> </table>';
$mail = mail('nellytadi@gmail.com','Message from Adovee website',$message,$headers);

if($mail){
    header("Location: ../"+"index.php#contact"+"?status=1");
}else{
    header("Location: ../"+"index.php#contact"+"?status=0");
}
