<?php
require('lib/print.php');
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      print_file();
      /*
      echo "<li>$list[0]</li>\n";  현재 디렉토리를 의미하는 것을 의미
      echo "<li>$list[1]</li>\n";  부모 디렉토리를 의미
      echo "<li>$list[2]</li>\n";
      echo "<li>$list[3]</li>\n";
      echo "<li>$list[4]</li>\n";*/
     ?>
     <a href="create.php">create</a>
     <?php if(isset($_GET['id'])) { ?>
       <a href="update.php?id=<?=$_GET['id']; ?>">update</a>
       <a href="delete_process.php?id=<?=$_GET['id']?>">delete</a>
       <form action="delete_process.php" method='post'>
         <input type='hidden' name='id' value='<?=$GET['id']?>'>
         <input type='submit' value='delete'>
       </form>
    <?php } ?>
     <form action="create_process.php" method="post">
       <p>
         <input type='text' name='title' placeholder='Title'>
       </p>
       <p>
         <textarea name='description' placeholder='description'>
         </textarea>
       </p>
       <p>
         <input type='submit'>
       </p>
     </form>
<?php
require('bottom.php');
 ?>
