
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
	$first=$_POST['first'];
	$second=$_POST['second'];
	$email=$_POST['email'];
	$message=$_POST['message'];
	
	$query=$conn->prepare("INSERT INTO contacts VALUES ('', '$first', '$second', '$email', '$message') ");
	$query->execute();
	$conn = null;
?>

<?php
	  	echo 'Hi '.$_POST['first'].' '.$_POST['second'].' thanks for your interest. </br>';
 		echo 'We will contact you at '.$_POST['email'].' soon.';
		echo 'Message: '.$_POST['message'].' </br>';
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
