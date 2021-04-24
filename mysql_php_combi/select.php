<?php
$conn = mysqli_connect('localhost:3307', 'root', 'lee860060', 'opentutorials');

// row가 하나일 때
echo "<h1>single row</h1>";
$sql = "SELECT * FROM topic WHERE id = 4"; //LIMIT 항상 적자
$result = mysqli_query($conn, $sql);
// php라는 언어를 통해서 데이터를 사용하기 위해서는 데이터 타입 변환하는 과정 필요
// 그 것을 가능하게 하는 api는
$row = mysqli_fetch_array($result);
//print_r($row);
echo $row['title'];
echo $row['description'];
//var_dump($result->num_rows); //num_rows = 행 개수

// 모든 row를 불러올 때
echo "<h1>multi row</h1>";
$sql = "SELECT * FROM topic"; //LIMIT 항상 적자
$result = mysqli_query($conn, $sql);
// php라는 언어를 통해서 데이터를 사용하기 위해서는 데이터 타입 변환하는 과정 필요
// 그 것을 가능하게 하는 api는
//var_dump($row); //더이상 데이터가 없을 떄는 NULL을 준다.
while($row = mysqli_fetch_array($result)){
  echo '<h2>'.$row['title'].'</h2>';
  echo $row['description'];
} // php에서는 while()안에 있는 식이 실행이 되고 참일 때 루프가 실행됨.
// 다 돌아가고 마지막 NULL값은 False로 치기 떄문에 루프가 종료된다.
 ?>
