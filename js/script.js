function changeImage(args) {

  var imagem = document.getElementById("imageArt");
  var indexImage = document.getElementById("numberM").textContent;

  var musicNames = ["Welcome To The Rodeo", "Lust", "I"];
  let iN = indexImage;

  if (args == "prev"){

    if(iN == "1") {
      console.log("ERROR - INDEX MUITO BAIXO");
    }
    else if (iN > "1") {
      iN = (Number(iN) - 1 + '');
      imagem.src = "./images/"+iN+".png";
      document.getElementById("numberM").textContent = iN;
      document.getElementById("nameM").textContent = musicNames[Number(iN)-1];
    }

  } else if (args == "next"){

    if(iN == "3") {
      console.log("ERROR - INDEX MUITO ALTO");
    }
    else if (iN < "3") {
      iN = (Number(iN) + 1 + '');
      imagem.src = "./images/"+iN+".png";
      document.getElementById("numberM").textContent = iN;
      document.getElementById("nameM").textContent = musicNames[Number(iN)-1];
    }
  }
}

function searchImage(){
  for (var i = 0; i < musicNames.Length; i++) {
    console.log(musicNames[i]);
}
}