<?php
  require_once 'config/connect.php';
  $menu = mysqli_query($connect, "SELECT `Name` FROM `menu`");
  $product = mysqli_query($connect, "SELECT `product`.`Name`,`menu`.`Name`,`menu`.`price` FROM `menu` INNER JOIN (`product` INNER JOIN `productcontent` on `product`.`IDProduct` = `productcontent`.`IDProduct`) on `menu`.`idDish` = `productcontent`.`idDish`");
  $product = mysqli_fetch_all($product);
  $menu = mysqli_fetch_all($menu);
 ?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
   <header class="header">
     <div class="phone">
       <img src="1.jpg" alt="картинка">
       <span class="numbers">
         044-564-454-45
       </span>
       <span class = "UserName">
         <?php
             $file = fopen("Id.txt", "r+");
             echo file_get_contents("Id.txt");
             fclose($file);
         ?>
       </span>
     </div>
     <a href="#" class="geolocation">
       <img src="2.jpg" alt="" >
       <span class="city">Київ</span>
     </a>
     </div>
     <a href="Login_v1/index.php" class="button-enter">
       Війти
     </a>
   </header>

   <form class="" action="search.php" method="post">
     <p>До ціни:</p>
     <input type="text" name="price">
     <button type="submit" name="button">Знайти</button>
   </form>


   <div class="content">
   <?php

        foreach ($menu as $key ) {
          $len = count($product);
          $price;
          $l = 0;
          $products = array();
          for($i = 0; $i < $len; $i++ ){
            if($key[0] == $product[$i][1]){
              $price = $product[$i][2];
              $products[$l] = $product[$i][0];
              $l++;
            }
          }
          ?>
            <div class="good">
           <img src="<?= $key[0] ?>.jpg" alt="<?= $key[0] ?>" class="photo-good" width="100%">
              <h6 class="name"><?= $key[0] ?></h6>
              <p class="description">
                <?php
                    for($i = 0; $i < count($products); $i++ ){
                      echo $products[$i];
                      if($i != count($products) - 1 )
                       echo ", ";
                    }
                 ?>
              </p>
              <div class="order">
                <span class="price"><?=  $price ?>грн</span>
                <a href="#" class="button">В Кошик</a>
              </div>
            </div>

          <?php
        }
       ?>
   </div>
  </body>
</html>
