<?php
 require 'bd.php';

// CREATE TABLE memory(id INT PRIMARY KEY NOT NULL,jour DATE, temps VARCHAR(100));

if(isset($_POST['score']))
{

// crée mes variable en fonction des noms donnée en html

$time = $_POST['score'];

// puis je demande d'inséré les valeurs dans ma bdd

$sql =  "INSERT INTO `memory` (`jour`, `temps`) VALUE (:date, :time)";
$statement = $pdo->prepare ($sql);
$statement->bindValue (":date", date("Y-m-d H:i:s", strtotime('now')), PDO::PARAM_STR);
$statement->bindValue (":time", $time);
$statement->execute ();
}

 ?>
