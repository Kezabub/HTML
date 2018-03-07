<?php
 	include 'includes/dbConnection.php';

$sql = 'SELECT * FROM contacts';
echo 'Contact Info';
foreach ($conn->query($sql) as $row) {
	echo "<table> <thead> <tr> <th>ID</th> <th>Forename</th><th>Surname</th><th>Email</th><th>Uses</th><th>Messages</th></tr></thead> <tbody>"
	      . "<td>" . $row["id"]. "</td>" . "<td>" . $row["first"]. "</td>" . "<td>" . $row["second"]. "</td>" . "<td>" . $row["email"]. "</td>" 
	      . "<td>". $row["message"]. "</td></tbody></table><br>";
}

$sql = 'SELECT * FROM survey';
echo 'Survey Answers';
foreach ($conn->query($sql) as $row) {
	echo "<table> <thead> <tr> <th>ID</th> <th>Role</th><th>Useful</th><th>Why</th><th>Uses</th><th>Comments</th></tr></thead> <tbody>"
	      . "<td>" . $row["id"]. "</td>" . "<td>" . $row["role"]. "</td>" . "<td>" . $row["useful"]. "</td>" . "<td>" . $row["why"]. "</td>" . "<td>" . $row["uses"]. "</td>" 
	      . "<td>". $row["comments"]. "</td></tbody></table><br>";
}
$conn = null;

?>
