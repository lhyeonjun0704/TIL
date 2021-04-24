<?php
//함수방식 //
//$mysqli = mysqli_connect("example.com", "user", "password", "database");
//$result = mysqli_query($mysqli, "SELECT 'Please do not use the deprecated mysql extension for new development. ' AS _msg FROM DUAL");
//$row = mysqli_fetch_assoc($result);
//echo $row['_msg'];

//$mysql = mysql_connect("example.com", "user", "password");
//mysql_select_db("test");
//$result = mysql_query("SELECT 'Use the mysqli extension instead.' AS _msg FROM DUAL", $mysql);
//$row = mysql_fetch_assoc($result);
//echo $row['_msg'];

$conn = mysqli_connect("localhost:3307", "root", "lee860060", "opentutorials");
if(mysql_connect_errno()){
  die('Connect Error: '.mysqli_connect_error());
}

$sql = "
  INSERT INTO topic(
    title,
    description,
    created
    ) VALUES(
      'MySQL',
      'MySQL is ..',
      NOW()
      )";

$result = mysqli_query($conn, $sql);
// 오류가 났거나 잘못 디버깅되었을 때 에러를 알려준다.(개발할 떄만 쓰자.)
if($result == false){
    echo mysqli_error($conn);
}
 ?>

<!-- 객체 지향 방식
 $mysqli = mysqli_connect("example.com", "user", "password", "database");

$result = mysqli_query($mysqli, "SELECT 'A world full of ' AS _msg FROM DUAL");
$row = mysqli_fetch_assoc($result);
echo $row['_msg'];

$mysqli = new mysqli("example.com", "user", "password", "database");

$result = $mysqli->query("SELECT 'choices to please everybody.' AS _msg FROM DUAL");
$row = $result->fetch_assoc();
echo $row['_msg']; -->
