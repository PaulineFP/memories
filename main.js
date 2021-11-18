const divResultat = document.querySelector("#resultat");

var tabJeu = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

// var ResutabJeu = [
//   [7,5,4,3],
//   [2,9,10,5],
//   [8,6,1,7],
//   [10,4,6,2],
//   [9,3,8,1]
// ]
var ResutabJeu = genereTableauAleatoire();

var oldSelection=[];
var nbAffiche = 0 ;
var ready = true;

afficherTableau();

function afficherTableau(){
  var txt ="Ton score est de:";
  txt += "<div class ='tableau'>";
  for(var i=0; i< tabJeu.length; i++){
    txt += "<div>";
    for(var j=0; j < tabJeu[i].length; j++){
      txt += "<div class='carte_content'>"
      if(tabJeu[i][j] === 0){
        txt += "<button class='carte' onclick='verif("+i+","+j+")'></button>";
      } else {
        txt += "<img src='"+getImage(tabJeu[i][j])+"' alt='image memory'>";
      }
      txt += "</div>"
    }
    txt += "</div>"
  }
  divResultat.innerHTML = txt;
  txt += "</div>"
}

function getImage (valeur){
  var imgTxt = "IMG/";
  switch(valeur){
    case 1: imgTxt += "sapin.png";
    break;
    case 2: imgTxt += "bonnet.png";
    break;
    case 3: imgTxt += "boule.png";
    break;
    case 4: imgTxt += "cadeau_jaune.png";
    break;
    case 5: imgTxt += "cadeau.png";
    break;
    case 6: imgTxt += "charlie.png";
    break;
    case 7: imgTxt += "chaussette.png";
    break;
    case 8: imgTxt += "cloche.png";
    break;
    case 9: imgTxt += "pull.png";
    break;
    case 10: imgTxt += "sucre_orge.png";
    break;
    default: console.log("cas non pris en compte");
  }
  return imgTxt;
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
          tabJeu[i][j] = 0;
          tabJeu[oldSelection[0]][oldSelection[1]] = 0;
        }
        afficherTableau();
        ready = true;
        nbAffiche = 0;
        oldSelection = [i,j];
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
            ligne.push(randomImage+1);
            nbImagePosition[randomImage]++;
            fin = true;
        }
      }
    }
    tab.push(ligne);
  }


  return tab;
}

const divBouton = document.querySelector("#bouton");

afficherBouton();

function afficherBouton() {
  var btn ="";
  btn += "<input type='button' name='replay' value='REJOUER' onclick=''></input>";
  divBouton.innerHTML = btn;
}
