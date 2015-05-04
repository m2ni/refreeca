<?php

// 본 파일은 데이터베이스상에 query에 해당하는 자료가 중복되는지 확인하는 기능을 한다.
// get값으로 q변수에 자료 고유값을 입력하면 true 또는 false를 반환한다.
// 자료가 중복되면 true를 반환하고, 그것이 아니면 false를 반환하게 된다.

if (!empty($_GET['q'])){

    require_once("config.php");

    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if (!$db->connect_errno) {
        $query = $db->real_escape_string($_GET['q']);

        $sql = "SELECT id_video FROM info_video WHERE id_video = '" . $query . "';";

        $result = $db->query($sql);

        if ($result->num_rows == 0) {

            echo 'true';

        } else {

            echo 'false';
        }

    } else {

    }

}

?>
