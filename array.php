<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>whyrano</title>
  </head>
  <body>
    <h1>Array1</h1>
    <?php
    $friends = array('JBK', 'LSJ', 'KJS');
    $n = 0;
    while($n < 3){
      echo $friends[$n]."<br>";
      $n++;
    }
    print_r($friends);
    echo "<br>";
    array_push($friends, 'abd');
    print_r($friends);
    echo "<br>";
    echo count($friends);
    /*array_merge($friends, ['efg', 'hji']);  복수의 아이템 추가 */
    array_unshift($friends, 'empty'); /* 맨 앞에 아이템을 추가 */
    array_shift($friends); /* 맨 앞의 아이템 제거 */
    array_pop($friends); /* 맨 뒤의 아이템 제거 */
    array_sort($friends); /* 배열의 재정렬 값을 오름차순 재배치 */
    print_r($friends);
    array_rsort($friends); /* 내림차순 */
    print_r($friends);
    ?>
    <h2> end</h2>
    <p> 왜 암것도 안나와</p>
  </body>
</html>
