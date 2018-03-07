
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">
<title>Hostel Homepage</title>
<link href="styleSheet.css" rel="stylesheet" type="text/css">
</head>
<body>
<header>
  <h1><u> Thank You</u></h1>
  <section class=banner>
  </section>
</header>
<br /><br />

<?php

	include 'includes/dbConnection.php';
	$favourite=$_POST['favourite'];
	$howlikely=$_POST['howlikely'];
	$food=$_POST['food'];
	$vehicle1=$_POST['vehicle'];
	$time=$_POST['time'];
	$why=$_POST['why'];
	$comments=$_POST['comments'];
	
	$query=$conn->prepare("INSERT INTO survey VALUES ('','$favourite','$howlikely','$food','$vehicle1','$time','$why','$comments')");
	$query->execute();
	$conn = null;

?>

<?php
		echo 'Hi user thanks for filling out the survey </br></br></br>';
	
 		echo 'You stated your favourite facility was the '.$_POST['favourite'].' .</br>';
	
		echo 'You stated you would '.$_POST['howlikely'].' recommend someone to the hostel .</br>';
	
		echo 'You rated the food '.$_POST['food'].' - 10 .</br>';
	
		if(isset($_POST['vehicle']))
		{
			echo 'You stated you used the following modes of transport: </br>';
    		foreach($_POST['vehicle'] as $vehicle)
			{
        	echo ''. $vehicle. '</br>';
    		}
			}
	
		$time = $_POST['time'];
		if ($time == "yes") 
		{
    	 echo 'You said you enjoyed your time at the hostel, thank you </br>';
		}
		else
		{
		 echo 'You said you did not enjoy your time at the hostel, we are sorry </br>';
		}
		
		echo 'Reason: '.$_POST['why'].' </br>';
		echo 'Additional Comments: '.$_POST['comments'].' </br>';
	
?>

<nav>
  <ul>
    <li><a href="index.html">Home Page</a> </li>
    <li><a href="facilities.html">Facilities</a> </li>
    <li><a href="prices.html">Prices</a></li>
    <li><a href="cafe.html">Cafe</a> </li>
    <li><a href="gettinghere.html">Getting Here</a></li>
    <li><a href="contact.html">Contact Us</a> </li>
  </ul>
</nav>
<footer>
</footer>
</body>
