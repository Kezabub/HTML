<?php
	include 'includes/dbConnection.php';
	if(isset($_POST['searchReady']))
	{
    	  $uid = $_POST['searchReady'];
	  $value='1';
	$query=$conn->prepare("INSERT INTO favourites 
  			       VALUES ('$uid','$value') 
  			       ON DUPLICATE KEY UPDATE value = value + 1");
	$query->execute();
	$conn = null;
}	
?>
