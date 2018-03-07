<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You</title>
    <link href="styleSheet.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div id="page">
        <nav>
            <ul>
                <li><a href="index.html">Home Page</a>
                    <ul>
                        <a href="login.html">Staff Page</a>
                    </ul>
                </li>
                <li><a href="careers.html">Careers</a>
                    <ul>
                        <li><a href="careersandapps.html">Search Careers</a>
                        </li>
                        <li><a href="popular.php">Popular Searches</a>
                        </li>
                    </ul>
                </li>
                <li><a href="about.html">About</a>
                </li>
                <li><a href="contactus.html">Contact</a>
                    <ul>
                        <li><a href="contact.html">Contact Us</a>
                        </li>
                        <li><a href="survey.html">Survey</a>
                        </li>
                    </ul>
                </li>
        </nav>
        <header>
            <h1>Thank You</h1>
            <section class="banner">
            </section>
            <br>
        </header>
        <br />
        <br />
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
</div>
</body>
