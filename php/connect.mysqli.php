<?php

define("DB_HOST","localhost");
define("DB_USER","cholalo");
define("DB_PASS","aquamarineBellatrix!");
define("DB_NAME","cholalo_db_cholalo");

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die(mysqli_errno());

if (mysqli_connect_error()){
        echo "Fail to connect DB" . mysqli_connect_error();
}

?>
