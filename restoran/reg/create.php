<?php
  require_once '../config/connect.php';
  $ErrorArrays = array ();
  $Login = $_POST['login'];
  $password = $_POST['pass'];
  $repeat_pass = $_POST['repeat_pass'];
  $AllName = mysqli_query($connect, "SELECT `Name` FROM `clients` ");
  $AllName = mysqli_fetch_all($AllName);
  foreach ($AllName as $key) {
    if ($key[0] == $Login){
      $ErrorArrays[] = "Login isn`t correct";
    }
  }

  if($password != $repeat_pass){
    $ErrorArrays[] = "Password isn`t correct";
  }

  if (count($ErrorArrays) == 0)
    {
      mysqli_query($connect,"INSERT INTO `clients` (`Name`, `Password`) VALUES ( '$Login', '$password') ");
      header('Location: ../Login_v1/index.php');
    }
    else
    {
        foreach ($ErrorArrays AS $Errors)
        {
            echo "<font color='red'><b>".$Errors."</font></b><br>";
        }
    }



?>
