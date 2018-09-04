<?php
header('Access-Control-Allow-Origin : *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'database_config.php';
error_reporting(E_ERROR | E_PARSE);

extract($_POST);
$id=$_POST['id'];
$password=$_POST['password'];
$conn=get_connection();
$sql="SELECT * FROM users WHERE `id`='$id'";
$result=$conn->query($sql);
$row=$result->fetch_assoc();
if(!($row))
{
	echo '{';
        echo '"message": "Error!Invalid email id or password"';
    echo '}';
	die();
}
else
{
		if($password!=$row["password"])
		{
			echo '{';
        echo '"message": "Error!Invalid email id or password"';
    echo '}';
	die();
		}
	if($row["type"]=='a')
	{
		echo '{';
        echo '"type": "admin"';
    echo '}';
	}
	else
	{
		echo '{';
        echo '"type":"user"';
    echo '}';
	}
}
?>
