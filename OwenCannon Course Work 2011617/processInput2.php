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
	$role=$_POST['role'];
	$useful=$_POST['useful'];
	$why=$_POST['why'];
	$uses1=$_POST['uses'];
	$uses2=implode("|",$uses1);
	$comments=$_POST['comments'];
	
	$query=$conn->prepare("INSERT INTO survey VALUES ('','$role','$useful','$why','$uses2','$comments')");
	$query->execute();
	$conn = null;

?>

<?php
		echo 'Hi user thanks for filling out the survey </br></br></br>';
	
 		echo 'You stated you are a '.$_POST['role'].' .</br>';
	
		$useful1 = $_POST['useful'];
		if ($useful1 == "yes") 
		{
    	 	echo 'You said you found the website useful, thank you </br>';
		}
		else
		{
		 echo 'You said you did not find the website useful, we are sorry </br>';
		}
	
		echo 'Reason: '.$_POST['why'].' </br>';
	
		if(isset($_POST['uses']))
		{
			echo 'You stated you used the website for the following purposes: </br>';
    		foreach($_POST['uses'] as $uses)
			{
        	echo ''. $uses. '</br>';
    		}
			}
	
		echo 'Additional Comments: '.$_POST['comments'].' </br>';
	
?>
</div>
</body>
