<?php
error_reporting(E_ERROR | E_PARSE);
$servername = "localhost";

$username = "root"; 

$password1= "broadband"; //"Sanjose123!";

$dbname = "react"; 

/*
	returns connection object of the database.
*/
function get_connection(){
global $servername, $username, $password1, $dbname;
	// Create connection
	$conn = mysqli_connect($servername, $username, $password1, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	return $conn;
}

?>