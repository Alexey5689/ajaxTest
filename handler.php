<?php
    //$name = $_GET['name'];//пользовательский ввод 
    $name = $_POST['name'];
    $names = array("mary", "meria", "nyrcello", "kark", "max", "nike");
    $name = strtolower($name);//перевод в нижний регистр
    $response = "";
    foreach ($names as $n){
        if(substr($n, 0, strlen($name)) === $name){
            $response .= $n."<br/>";
        }
    }
    echo $response;   
?>