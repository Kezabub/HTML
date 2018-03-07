<?php
 	include 'includes/dbConnection.php';

$sql = 'SELECT * FROM favourites ORDER BY value DESC LIMIT 10';
foreach ($conn->query($sql) as $row) {
	echo "<table> <thead> <tr> <th>Search Term</th> <th>Value</th></tr></thead> <tbody>" . "<td>" . $row["search"]. "</td>" . "<td>". $row["value"]. "</td></tbody></table><br>";
}
$conn = null;

?>

