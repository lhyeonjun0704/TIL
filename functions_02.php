<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Function</h1>
    <h2>Basic</h2>
    <?php
      function basic(){ /* 함수 정의 */
        print("lol XD<br>");
        print("wtf XD<br>");
      }

      basic(); /* 함수 실행 */
    ?>
    <h2>parameter &amp; argument</h2>
    <?php
      function sum($x, $y){
        echo $x+$y."<br>";
      }

    sum(2, 4);
    ?>
    <h2>return</h2>
    <?php
      function sum2($x, $y){
        return $x+$y;
      }
      echo sum2(4,6);
    ?>
  </body>
</html>
