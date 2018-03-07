<?php
 	define ("DB_USER", "root");
	define ("DB_PASS", "");
	$servername = "localhost";
	$dbname = "test";
	
	try {
		  $conn = new PDO("mysql:host=$servername;dbname=$dbname", DB_USER, DB_PASS);
		  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    }
	catch (PDOException $e)
		{
			echo "Connect failed: " . $e->getMessage();
		}
?>

