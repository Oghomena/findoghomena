<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
if(isset($_POST['submit'])){
    if(empty($name) || empty($email)  || empty($message)){
        header("location : ../index.html");
        exit();
    }else{
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            header("location : ../index.html");
            exit();
          }else {
            $headers = "from:".$name;
            $headers = "MIME-Version: 1.0" . "\r\n";
           $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

         // Additional headers
            $headers .= 'From:<'.$email.'>' . "\r\n";
           $headers .= 'Cc: '.$email.'' . "\r\n";
             $headers .= 'Bcc: '.$name.'' . "\r\n";

            mail("gtdevsolutions@gmail.com","git-project", $message, $headers);
            header("location: ../index.html?msg=success?");

          }
          
    }
}