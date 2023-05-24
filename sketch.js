function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
}