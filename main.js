const divResultat = document.querySelector("#resultat");

var tabJeu = [
  [-1,-1,-1,-1],
  [-1,-1,-1,-1],
  [-1,-1,-1,-1],
  [-1,-1,-1,-1],
  [-1,-1,-1,-1]
]

var ResutabJeu = genereTableauAleatoire();

var oldSelection=[];
var nbAffiche = 0 ;
var ready = true;


var cards = ['sapin.png', 'bonnet.png', 'boule.png', 'cadeau_jaune.png', 'cadeau.png', 'charlie.png', 'chaussette.png', 'cloche.png','pull.png','sucre_orge.png'];

var outOfTime = false;
var countdownStarted = false;
var pairCount = 0;
var win = false;
var time = 60;



afficherTableau();

function afficherTableau(){
  var txt ="";

  txt += "<div class ='tableau'>";
  for(var i=0; i< tabJeu.length; i++){
    txt += "<div>";
    for(var j=0; j < tabJeu[i].length; j++){
      txt += "<div class='carte_content'>"
      if(tabJeu[i][j] === -1){
        txt += "<button class='carte' onclick='verif("+i+","+j+")'></button>";
      } else {
        txt += "<img class='img' src='"+getImage(tabJeu[i][j])+"'>";
      }
      txt += "</div>"
    }
    txt += "</div>"
  }
  divResultat.innerHTML = txt;
  txt += "</div>"
}

function getImage (valeur){
  return "IMG/" + cards[valeur] ;
}

function verif(i,j){
  if(ready){
    nbAffiche++;
    tabJeu[i][j] = ResutabJeu[i][j];

    afficherTableau();

    if (nbAffiche>1) {
      ready = false;
      setTimeout(()=> {
        //verification
        if (tabJeu[i][j] !== ResutabJeu[oldSelection[0]][oldSelection[1]]) {
          tabJeu[i][j] = -1;
          tabJeu[oldSelection[0]][oldSelection[1]] = -1;
        }else {
          pairCount++;
          if (pairCount == cards.length) {
              win = true;
              alert("you win :D"+time);
              //php fetch (mdn fetch)
              var form = new FormData();
              form.append('score', time);
                fetch("score.php", {
                  method: "POST",
                  body: form
                })
          }
        }

        afficherTableau();
        ready = true;
        nbAffiche = 0;
        oldSelection = [i,j];
        if (!countdownStarted) {
                   countdown();
               }
      },500)
    } else {
      oldSelection = [i,j];
    }
  }
}

function genereTableauAleatoire(){
  var tab = [];
  var nbImagePosition=[0,0,0,0,0,0,0,0,0,0];

  for (var i = 0 ; i < 5 ; i++){
    var ligne = [];
    for(var j = 0 ; j < 4 ; j++){
      var fin = false;
      while(!fin){
        var randomImage = Math.floor(Math.random()*10);
        if(nbImagePosition[randomImage] < 2){
            ligne.push(randomImage);
            nbImagePosition[randomImage]++;
            fin = true;
        }
      }
    }
    tab.push(ligne);
  }


  return tab;
}

function countdown () {
     countdownStarted = true;

     var timeStart = new Date;
     var timer = setInterval( function() {

         var timeNow = new Date;
         var difference = ( timeNow - timeStart ) / 1000; //calculates time difference if game isn't in focus

         if (time > 0 && !win) {// if there is still time left and game isn't won, deduct time

             time = Math.floor( 60 - difference );
             document.getElementById('timer').innerHTML= time;
             // $('.timer').text( time );
         } else if (win) {//stop timer when game is won

             clearInterval(timer);

         } else {//stop timer when time is run out

             outOfTime = true;
             alert("you have run out of time :(");

             clearInterval(timer);

         }

     }, 1000 );
}
const divBouton = document.querySelector("#bouton");

afficherBouton();

function afficherBouton() {
  var btn ="";
  btn += "<input type='button' name='replay' value='REJOUER' onclick='location.reload()'></input>";
  divBouton.innerHTML = btn;
}
