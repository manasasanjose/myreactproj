<?php
header('Access-Control-Allow-Origin : *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'database_config.php';
error_reporting(E_ERROR | E_PARSE);



$conn=get_connection();
$sql="SELECT id,name,age from `users` where `type`='u'";
$result=mysqli_query($conn,$sql);
$userresults=array();
if(mysqli_num_rows($result)>0)
{
	while($row=mysqli_fetch_array($result,MYSQLI_ASSOC))
	{
	$item=array();
	/*array_push($item,$row['id']);
	array_push($item,$row['name']);
	array_push($item,$row['age']);
	array_push($item,$row['password']);*/
	$item['id']=$row['id'];
	$item['name']=$row['name'];
	$item['age']=$row['age'];
	//$item['password']=$row['password'];
	
	
	
	array_push($userresults,$item);
	
	}
	echo json_encode($userresults);
}
else
{
	echo json_encode(
        array("message" => "No users found.")
    );
}
	

?>