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

$article = array(
  'title'=>'Welcome',
  'description'=>'Hello, web'
);

$update_link = '';
if(isset($_GET['id'])){
  // 인자를 입력할 때 기호들을 문자로 바꿔준다.
  $filtered_id = mysqli_real_escape_string($conn, $_GET['id']);
  $sql = "SELECT * FROM topic WHERE id={$filtered_id}";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
  // 밑에 둘다 사용자들에게 출력될 문구들이기 떄문에 spe필요함.
  $article['title'] = htmlspecialchars($row['title']);
  $article['description'] = htmlspecialchars($row['description']);

  $update_link = '<a href="update.php?id='.$_GET['id'].'"">update</a>';
}

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
    <form action="process_update.php" method='POST'>
      <input type='hidden' name='id' value='<?=$_GET['id']?>'>
      <p><input type='text' name='title' placeholder="Title" value='<?=$article['title']?>'></p>
      <p><textarea name='description', placeholder="Description"
        ><?=$article['description']?></textarea></p>
      <p><input type='submit'></p>
    </form>
  </body>
</html>
