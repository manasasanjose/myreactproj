<?php
header('Access-Control-Allow-Origin : *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'database_config.php';
error_reporting(E_ERROR | E_PARSE);

extract($_POST);
$name=$_POST['name'];
$age=$_POST['age'];
$id=$_POST['id'];
$password=$_POST['password'];
//$password=md5($password);
$conn=get_connection();
$sql1="SELECT * FROM `users` where `id`='$id'";
$result1=mysqli_query($conn,$sql1);
if(mysqli_num_rows($result1)>0)
{
	echo '{';
        echo '"message": "Error!User already exits.please check the details"';
    echo '}';
	die();
}
else
{
$sql="INSERT INTO `users` VALUES('$id','$name','$age','$password','u')";
if($conn->query($sql)=== TRUE)
{
	  echo '{';
        echo '"message": "User Creation Successful."';
    echo '}';
}
else
{
	 echo '{';
        echo '"message": "User Creation Unsuccessful."';
    echo '}';
}
}
?>