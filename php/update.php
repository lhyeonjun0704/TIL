<?php
  function print_file(){
    $list = scandir('./data');
    var_dump($list);

    $i = 0; /* 2로 바꾸면 해결이 되지만 다른 코드들과 충돌 가능성 많음 */
    while($i < count($list)){
      if($list[$i] == "." || $list[$i] == ".."){
        $i = $i + 1;
        continue;
      }
      else{
        echo "<li><a href=\"./data/$list[$i]\">$list[$i]</a></li>\n";
        }
      $i = $i + 1;
    }
  }
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
    <?php } ?>
     <form action="update_process.php" method="post">
       <input type='hidden' name='old_title' value='<?=$_GET['id']?>'>
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
  </body>
</html>
