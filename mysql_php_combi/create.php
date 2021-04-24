<?php
$conn = mysqli_connect('localhost:3307', 'root', 'lee860060', 'opentutorials');

$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
$list = '';
while($row = mysqli_fetch_array($result)){
  $escaped_title = htmlspecialchars($row['title']);
  // <li><a href=\"index.php?id=\">MySQL</a></li>
  $list = $list."<li><a href=\"index.php?id={$row['id']}\">
  {$escaped_title}</a></li>"; // title은 사용자가 입력한 정보.
}

$sql = "SELECT * FROM author";
$result = mysqli_query($conn, $sql);
$select_form = '<select name="author_id">'; // 이런식으로 html을 넣자.
while($row = mysqli_fetch_array($result)){
  $select_form .= '<option
   value="'.$row['id'].'">'.$row['name'].'</option>';
}
$select_form .= '</select>';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WEB</title>
  </head>
  <body>
    <h1><a href="index.php">WEB</a></h1>
    <ol>
      <?php
        echo $list; // =$list 와 같다!
       ?>
    </ol>
    <form action="process_create.php" method='POST'>
      <p><input type='text' name='title' placeholder="Title"></p>
      <p><textarea name='description', placeholder="Description"></textarea></p>
      <?=$select_form?>
      <p><input type='submit'></p>
    </form>
  </body>
</html>
