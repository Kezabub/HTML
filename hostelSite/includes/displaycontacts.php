<?php
 	include 'includes/dbConnection.php';

$sql = 'SELECT * FROM contacts';
foreach ($conn->query($sql) as $row) {
	echo "id: " . $row["id"]. " - Name: " . $row["first"]. " " . $row["second"]. " - Email " . $row["email"]. " - Message " . $row["message"] ."<br>";
}
$conn = null;

?>

