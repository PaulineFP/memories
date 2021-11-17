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

        <div class="jeux">
          <div id="resultat"></div>

        </div>
        <input type="button" name="play" value="JOUER">
      </div>
    </section>

    <script src="main.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
