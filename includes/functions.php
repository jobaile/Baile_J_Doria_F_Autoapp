<?php  
include 'connect.php';

    function get_one_part($pdo, $part) {
        $query = "SELECT * FROM tbl_details WHERE details_id = '$part'"; //this means ?part=ID
        //make sure this matches database

        $get_part = $pdo->query($query);
        $results = array();

        while($row = $get_part->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_all_parts($pdo) {
        $query = "SELECT * FROM tbl_details"; 
        //make sure this matches database

        $get_part= $pdo->query($query);
        $results = array();

        while($row = $get_part->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>