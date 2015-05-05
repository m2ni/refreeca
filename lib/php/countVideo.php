<?php

// 본 파일은 데이터베이스상에 채널아이디에 해당하는 자료의 개수를 측정하는 기능을 한다.
// get값으로 q변수에 자료 고유값을 입력하면 int (javascript:number)값을 반환하게 된다.

if (!empty($_GET['q'])){

    require_once("config.php");

    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if (!$db->connect_errno) {
        $query = $db->real_escape_string($_GET['q']);

        $sql = "SELECT id_channel FROM info_video WHERE id_channel = '" . $query . "';";

        $result = $db->query($sql);

        $result_row = $result->num_rows;

        echo $result->num_rows;

    } else {

        echo 'error';

    }

}

?>
