<?php
    include 'functions.php';

    //single movie route
    if (isset($_GET["part"])) {
        $data = get_one_part($conn, $_GET["part"]);
        echo json_encode($data);
    } else {
        $data = get_all_parts($conn);
        echo json_encode($data);
    }

?>