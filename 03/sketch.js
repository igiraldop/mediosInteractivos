var posx = 0;
var posy = 0;

var nave = -20;
var navey = 0

var dir = 1;
var col = 10;

var solx = 0;
var soly = 0;

var velx = 5;
var vely = 10;

var rayo = 0;
var rayox = 0;

var planex = 0
var planey = 0

function setup() {
  createCanvas(400, 250);

}

function draw() {
  background(0, 13, 53);


  //crear movimiento hacia la esquina inferior izquierda del planeta azul
  fill(0, 255, 228);
  noStroke()
  ellipse(planex + 200, -120 - planey, 100)
  //poner menor velocidad (-) en el eje y para que este se mueva para abajo
  planex = planex + 0.6
  planey = planey - 1

  //sol movimiento
  fill(255, 212, 38);
  noStroke()
  ellipse(solx, 200 - soly, 300)
  //definir velocidad y dirección
  solx = solx + 0.5
  soly = soly - 0.4

  //rayo laser nave estatica
  stroke(246, 255, 110);
  line(rayox + 166, rayo + 118, rayox + 168, rayo + 93)
  line(180, rayo + 118, 182, rayo + 93)

  //crear movimiento del laser solo sobre el eje y.
  rayo = rayo - 4
  //repetición del laser ?
  //if (rayo == 2) {
  //rayo = 0;
  //}

  //nave estatica
  noStroke();
  fill(187);
  quad(162, 117, 169, 118, 169, 145, 150, 145);
  quad(177, 118, 184, 118, 193, 150, 177, 136);
  ellipse(170, 160, 50);
  fill(255, 0, 0)
  ellipse(173, 140, 2)
  ellipse(183, 148, 2)
  ellipse(160, 147, 2);

  //nave movimiento hacia arriba y a la izquierda.
  fill(172, 72, 72);
  noStroke();
  quad(249 + navey, 96 - nave, 300 + navey, 156 - nave, 279 + navey, 175 - nave, 249 + navey, 171 - nave);
  //velocidad y dirección de la nave:
  nave = nave + 0.4
  navey = navey - 0.3


  //fondo de estrellas: variación en lugar y tamaños
  fill(255)
  ellipse(posx, posy, 5);
  ellipse(posx + 200, posy - 200, 3)
  ellipse(posx + 100, posy - 300, 3)
  ellipse(posx + 10, posy + 50, 5)
  ellipse(posx + 10, posy + 80, 7)
  ellipse(posx - 50, posy + 150, 7)
  ellipse(posx + 250, posy + 150, 3)
  ellipse(posx + 300, posy + 10, 5)
  ellipse(posx + 130, posy + 20, 3)
  ellipse(posx + 10, posy + 20, 2)
  ellipse(posx + 30, posy + 170, 2)
  ellipse(posx + 200, posy - 13, 3)
  //velocidad y dirección de las estrellas:
  posx = posx + velx
  posy = posy + vely
  //para que vuelva a empezar:
  if (posx > 270) {
    posx = -200;
  }
  if (posy > 400) {
    posy = -300;
  }

}