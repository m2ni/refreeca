<?php

define("DB_HOST","localhost");
define("DB_USER","____");
define("DB_PASS","____");
define("DB_NAME","____");

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die(mysqli_errno());

if (mysqli_connect_error()){
        echo "Fail to connect DB" . mysqli_connect_error();
}

?>
