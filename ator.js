let yAtor = 555;
let xAtor = 100;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 35, 35)
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}