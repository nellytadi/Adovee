<?php
session_start();
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <webmaster@adoveecabs.com.ng>' . "\r\n";
 $headers .= 'Cc: contact@adoveecabs.com.ng ' . "\r\n";

    $message = '<table><tr><td>Name of Sender: </td><td>'.$name.'</td> </tr> <tr><td>Email Address: </td><td>'.$email.'</td> <tr><tr><td>message: </td><td>'.$message.'</td> </tr> </table>';
    $mail = mail('adoveecabs@gmail.com','Message from Adovee website',$message,$headers);

    if($mail){
        $_SESSION['status'] = 1;
        header("Location: ../index.php#contact");
    }else{
        $_SESSION['status'] = 0;
        header("Location: ../index.php#contact");
    }
}
?>