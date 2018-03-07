<!--makes use of fusioncharts api see the license referenced in the fusioncharts folder within the includes folder-->
<?php
   include("includes/fusioncharts.php");

   $hostdb = "localhost";
   $userdb = "root";
   $passdb = "";
   $namedb = "test";

   $dbhandle = new mysqli($hostdb, $userdb, $passdb, $namedb);

   if ($dbhandle->connect_error) {
  	exit("There was an error with your connection: ".$dbhandle->connect_error);
   }
?>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Popular Table</title>
    <link rel="stylesheet" type="text/css" href="includes/fusioncharts-suite-xt/assets/css/style.css" />
    <link href="styleSheet.css" rel="stylesheet" type="text/css">
    <script src="includes/fusioncharts-suite-xt/js/fusioncharts.js"></script>
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
            <h1>Popular Searches</h1>
            <section class="banner">
            </section>
            <br>
        </header>
	
  	<?php

     	$strQuery = "SELECT search, value FROM favourites ORDER BY value DESC LIMIT 10";

     	$result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

     	if ($result) {
        	$arrData = array(
        	  "chart" => array(
                  "caption" => "Top 10 Most Popular Searches",
                  "showValues" => "0",
                  "theme" => "zune"
              	)
           	);

        	$arrData["data"] = array();

        	while($row = mysqli_fetch_array($result)) {
           	array_push($arrData["data"], array(
              	"label" => $row["search"],
              	"value" => $row["value"]
              	)
           	);
        	}

        	$jsonEncodedData = json_encode($arrData);

        	$columnChart = new FusionCharts("column2D", "popular-searches" , 800, 400, "chart-1", "json", $jsonEncodedData);

        	$columnChart->render();

        	$dbhandle->close();
     	}

  	?>
<br>
<div id="chart-1"></div>
<br>
<br>
<section class="mobiledisplay">
    <div id="mobiledisplay">
        <?php include( "includes/displayfavsmobile.php"); ?>
    </div>
</section>
</div>
</div>
</body>

</html>