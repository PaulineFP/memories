const divResultat = document.querySelector("#resultat");

var tabJeu = [
  [0,1,0,0],
  [0,2,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

afficherTableau();

function afficherTableau(){
  var txt ="Ton score est de:";
  txt += "<div class ='tableau'>";
  for(var i=0; i< tabJeu.length; i++){
  txt += "<div>";
    for(var j=0; j < tabJeu[i].length; j++){
      txt += "<div class='carte_content'>"
      if(tabJeu[i][j] === 0){
        txt += "<button class='carte'></button>";
      } else {
        txt += "<img src='IMG/sapin.png' alt='sapin'>";
      }
      txt += "</div>"
    }
      txt += "</div>"
  }
  divResultat.innerHTML = txt;
  txt += "</div>"
}
