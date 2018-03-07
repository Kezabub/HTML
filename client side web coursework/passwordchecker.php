<script src="vendor/jquery/jquery.js"></script>

<?php
    $message = "access granted, you can now add items";
    $message1 = "access denied";
    $user = $_POST['username'];
    $pass = $_POST['password'];
    if ($user == "admin" && $pass == "admin")
    {
    echo "<script>
          alert('$message');
          </script>";
  }
  else
   {
    echo "<body onload=\"parent.window.location.reload()\">
    <script type='text/javascript'>
     alert('$message1');
     </script>";
   }
   ?>
