<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      // <script> 같은 태그들을 글자처럼 바로 출력하게 해줌.
      echo htmlspecialchars('<script>alert</script>')
     ?>
  </body>
</html>
