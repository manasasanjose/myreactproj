<?php
header('Access-Control-Allow-Origin : *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'database_config.php';
error_reporting(E_ERROR | E_PARSE);



$conn=get_connection();
extract($_POST);
$id=$_POST['id'];
$name=$_POST['name'];
$age=$_POST['age'];
$sql="UPDATE users SET name='$name',age='$age' WHERE id='$id'";
$result=$conn->query($sql);
if($result)
{
	echo '{';
        echo '"message": "Users table was updated."';
    echo '}';
}
else
{
	echo '{';
        echo '"message": "Unsuccessful.User table not updated."';
    echo '}';
}
?>