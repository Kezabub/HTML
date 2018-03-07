<?php
 		$message = "access granted";
		$message1 = "access denied";
		$pass = $_POST['password'];
		if ($pass == "bobby123") 
		{
		echo "<script type='text/javascript'>alert('$message');</script>";
    	 	header("Location: staff.php");
		die();
		}
		else
		{
		 echo "<script type='text/javascript'>alert('$message1');</script>";
    	 	 header("Location: index.html");
		 die();
		}		
?>

