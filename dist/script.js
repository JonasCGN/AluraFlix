var animeExp = [
  "https://media.fstatic.com/6nZzFgvFprgvaV0J7TaR-Madj7I=/290x478/smart/media/movies/covers/2014/07/another_t51362_1.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/dd/Re_Zero_poster.jpg/220px-Re_Zero_poster.jpg"
];
var nomeExp = ["Another", "Re:Zero"];
var animeAqui = document.getElementById("adicionarAnimesAqui");

for (var i = 0; i < animeExp.length; i++) {
  document.write("<img src=" + animeExp[i] + ">");
  document.write("<p>" + nomeExp[i] + "</p>");
}

function upload() {
  var listaAnimes = [];
  //var nomeAnimes = [];
  var animeFavorito = document.getElementById("inserir").value;
  //var nomeAnimeFavorito = document.getElementById("nomeAnime").value;
  var animeAqui = document.getElementById("adicionarAnimesAqui");

  if (animeFavorito.endsWith(".jpg") || animeFavorito.endsWith(".png")) {
    listaAnimes.push("<img src=" + animeFavorito + ">");
    animeAqui.innerHTML = animeAqui.innerHTML + listaAnimes;
    //nomeAnimes.push("<p>" + nomeAnimeFavorito + "</p>");

    animeAqui.innerHTML = animeAqui.innerHTML; //+ nomeAnimes;
  } else if (animeFavorito == listaAnimes.indexOf(animeFavorito)) {
    alert("Ja inserido");
  }

  // document.getElementById("nomeAnime").value = "";
  document.getElementById("inserir").value = "";
}

//function remover(array) {
//  var animeAqui = document.getElementById("inserir").value;
//var index = array.indexOf(animeAqui);

//if (index > -1) {
//console.log(array);
//console.log(index);

//array.splice(index, 1);
//}
//console.log(array);
//}