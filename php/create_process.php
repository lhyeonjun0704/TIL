<?php
file_put_contents('data/'.$_POST['title'],
$_POST['description']);
header('Location: /example_03.php?id='.$_POST['title']);
 ?>
