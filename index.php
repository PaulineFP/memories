<?php
 require 'bd.php';
 ?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="CSS/style.min.css">
    <title>Memory</title>
  </head>
  <body>
    <section class="memory">
      <div class="container">
        <div class="titre">Jeux de mémoire:</div>
        <div class="cadre">
          <div class="txt">
            <strong>Rêgles du jeux:</strong>
            <br>
            Le principe de ce jeu de mémoire est de mémoriser les emplacements des cartes dans le jeu et de faire des paires de cartes en les retournant 2 par 2. Quand les 2 cartes sont identiques, c'est une paire! Vous remportez la paire et vous avez le droit de rejouer, sinon les cartes sont automatiquement cachées et vous devez faire un nouvel essai.
          </div>
        </div>
        <div class="tableau">
        <?php
        $carte_1_nb = "20";
        $i = 1;
        while($i <= $carte_1_nb){
        ?>
        <div class="carte_content">
          <li>
            <a href="" class="carte">
            </a>
          </li>
        </div>
        <?php
        $i++;
        }
        ?>
        </div>
        <input type="button" name="play" value="JOUER">
      </div>
    </section>

  </body>
</html>
