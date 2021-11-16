<?php

$pdo = new PDO('mysql:host=mysql;dbname=memory;host=127.0.0.1', 'root', '',[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);
