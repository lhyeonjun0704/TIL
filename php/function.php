<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>function</h1>
    <?php
    $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation
       ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit
         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.";
    echo $str;
    ?>
    <h2>strlen()</h2>
    <?php
    echo strlen($str);
     ?>
     <h2>nl2br</h2>
     <?php
     echo nl2br($str);  /* nl2br이 내가 다음 줄로 바꿔 놓은 대로 바꿔준다. */
     /* 하지만 스페이스바는 해당 되지 않는 듯하다. */
      ?>
  </body>
</html>
