let yCarros = [62, 150, 232];
let xCarros = [750, 770, 752];
let velocidadeCarros = [2, 3, 4];

function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i += 1){
    image(imgCarros[i], xCarros[i], yCarros[i], 80, 55);
  }
}

function movimentaCarro(){
  for(let i = 0; i < velocidadeCarros.length; i += 1){
   xCarros[i] -= velocidadeCarros[i]; 
  }
}


function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i += 1){
    if(passouDaTela(xCarros[i])){
    xCarros[i] = 750;
    }
  }
}

function passouDaTela(xCarro){
  return xCarro < -90
}