<?php
rename('data/'.$_POST['old_title'], 'data/'.$_POST['title']);
file_put_contents('data/'.$_POST['title'], 'data/'.$_POST['description']);
header('Locaion: /example_03.php?id='.$_POST['title']);
?>
