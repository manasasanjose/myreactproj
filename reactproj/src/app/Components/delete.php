<?php
header('Access-Control-Allow-Origin : *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'database_config.php';
error_reporting(E_ERROR | E_PARSE);



$conn=get_connection();
extract($_POST);
$id=$_POST['id'];

$sql="DELETE FROM users WHERE id='$id'";
$result=$conn->query($sql);
if($result)
{
	echo '{';
        echo '"message": "Deleted the row"';
    echo '}';
}
else
{
	echo '{';
        echo '"message": "Unsuccessful.Unable to delete the row."';
    echo '}';
}
?>