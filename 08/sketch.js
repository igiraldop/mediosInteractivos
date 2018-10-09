var ladron;
var policia;
var pandilla = [];
var policias = [];
var asustada;
var gemelas = [];
var calvo;
var calvox=0;
var calvoy=0;
var coqueta;
var bb;
var doggo;

function setup() {
  createCanvas(400, 400);
  ladron = new robo(300, 200);
  calvo= new catcall(80,200);
  coqueta= new flirt(320,200);
  bb= new bebe(200,200);
  doggo= new perro(200,100);
  //asustada= new mujer(50,50);
  //policia= new arresto(100,150);

  for (var i = 0; i < 10; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(0, height);

    policias[i] = new robo(tempX, tempY, 1);
  }

  for (var i1 = 0; i1 < 10; i1 = i1 + 1) {
    var tempX2 = random(0, width);
    var tempY2 = random(0, height);

    pandilla[i1] = new robo(tempX2, tempY2, 2);
  }
  for (var i4 = 0; i4 < 2; i4 = i4 + 1) {
    var tempX3 = random(0, width);
    var tempY3 = random(0, height);
    gemelas[i4] = new robo(tempX3, tempY3, 3)
  }
  for (var i6 = 0; i6 < 1; i6 = i6 + 1) {
  var tempX4 = random(0, width);
  var tempY4 = random(0, height);
  }
}

function draw() {
  background(220);
 
  
calvo.dibujarse();
  calvo.saltar();
  coqueta.dibujarse();
  coqueta.saltar();
  bb.dibujarse();
  bb.moversepoco();
  doggo.dibujarse();
  doggo.moverseloco();

  
  if (mouseIsPressed == true) {
    policias[policias.length] = new robo(mouseX, mouseY, 1);
  }

  for (var i = 0; i < policias.length; i = i + 1) {
    policias[i].dibujarse();
    policias[i].moverse();


    for (var i3 = 0; i3 < pandilla.length; i3 = i3 + 1) {
      if (dist(pandilla[i3].x, pandilla[i3].y, policias[i].x, policias[i].y) < 30) {
        pandilla[i3].morirse();
      }
    }
    
    
for (var i4 = 0; i4 < gemelas.length; i4 = i4 + 1) {
        gemelas[i4].dibujarse();
        gemelas[i4].moversemas();
    

      for (var i5 = 0; i5 < gemelas.length; i5 = i5 + 1) {
        if (dist(pandilla[i5].x, pandilla[i5].y, gemelas[i5].x, gemelas[i5].y) < 100) {
          gemelas[i5].morirse();
        }
      }

      for (var i2 = 0; i2 < pandilla.length; i2 = i2 + 1) {
      pandilla[i2].dibujarse();
      pandilla[i2].moversemas();

      }
    }
  }
}
  
    function robo (miX, miY, miTipo) {
      // caraceristicas
      this.x = miX;
      this.y = miY;
      this.estaVivo = true;
      this.tipo = miTipo;


      // habilidades
      this.dibujarse = function() {
        if (this.estaVivo == true) {
          if (this.tipo == 1) {
            //policia
            fill(249, 190, 138);
            ellipse(this.x + 0, this.y + 0, 50);
            fill(0);
            quad(this.x - 20, this.y - 13, this.x + 20, this.y - 14, this.x + 12, this.y - 10, this.x - 18, this.y - 10);
            fill(31, 43, 181);
            rect(this.x - 21, this.y - 25, 41, 12);
            fill(214, 193, 43);
            quad(this.x - 1, this.y - 23, this.x + 3, this.y - 21, this.x - 1, this.y - 16, this.x - 5, this.y - 21);
            stroke(0);
            line(this.x - 6, this.y - 6, this.x - 14, this.y - 8);
            line(this.x + 2, this.y - 6, this.x + 12, this.y - 8);
            ellipse(this.x - 9, this.y - 5, 7, 2);
            ellipse(this.x + 9, this.y - 5, 7, 2);
            fill(0);
            ellipse(this.x + 3, this.y + 12, 15, 8);
          }

          if (this.tipo == 2) {
            //ladron
            fill(0);
            ellipse(this.x + 0, this.y + 0, 50);
            beginShape();
            fill(226, 151, 105);
            vertex(this.x - 17, this.y - 9);
            vertex(this.x - 0, this.y - 5);
            vertex(this.x + 16, this.y - 9);
            vertex(this.x + 16, this.y + 2);
            vertex(this.x - 0, this.y - 0);
            vertex(this.x - 17, this.y + 2);
            endShape(CLOSE);
            fill(0);
            ellipse(this.x - 9, this.y - 5, 7, 2);
            ellipse(this.x + 9, this.y - 5, 7, 2);
          }
          if (this.tipo == 3) {
            //asustada
            fill(249, 190, 138);
            ellipse(this.x + 0, this.y + 0, 50);
            beginShape();
            fill(168, 45, 17);
            vertex(this.x - 18, this.y + 22);
            vertex(this.x - 20, this.y - 1);
            vertex(this.x - 16, this.y - 11);
            vertex(this.x + 14, this.y - 11);
            vertex(this.x + 19, this.y - 2);
            vertex(this.x + 18, this.y + 22);
            vertex(this.x + 29, this.y + 22);
            vertex(this.x + 27, this.y - 14);
            vertex(this.x + 10, this.y - 26);
            vertex(this.x + 0, this.y - 25);
            vertex(this.x - 7, this.y - 26);
            vertex(this.x - 21, this.y - 19);
            vertex(this.x - 27, this.y - 11);
            vertex(this.x - 27, this.y + 22);
            endShape(CLOSE);
            line(this.x - 9, this.y - 9, this.x - 16, this.y - 8);
            line(this.x + 7, this.y - 9, this.x + 14, this.y - 8);
            ellipse(this.x - 9, this.y - 5, 7, 2);
            ellipse(this.x + 9, this.y - 5, 7, 2);
            fill(0);
            ellipse(this.x + 0, this.y + 12, 15, 8);
          }
          
          
        }
      }
      this.moverse = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);

      }
      this.moversemas = function() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);

      }
      this.morirse = function() {
        this.estaVivo = false;
      }
    }

function catcall(miX,miY){
this.x = miX;
this.y = miY;

this.dibujarse=function(){
            //calvo
            fill(244, 211, 189);
            ellipse(this.x + 0, this.y + 0, 50);
            ellipse(this.x - 11, this.y - 3, 7, 2);
            ellipse(this.x + 11, this.y - 3, 7, 2);
            line(this.x - 5, this.y - 8, this.x - 13, this.y - 5);
            line(this.x + 2, this.y - 5, this.x + 15, this.y - 7);
            line(this.x - 0, this.y +14, this.x +6, this.y +13);
            line(this.x +6, this.y +13, this.x + 11, this.y +9);
  beginShape();
  fill(244, 211, 189)
  vertex(this.x +8, this.y+23);
  vertex(this.x +0, this.y+25);
  vertex(this.x +89, this.y+25);
  vertex(this.x +102, this.y+30);
  vertex(this.x +109, this.y+17);
  vertex(this.x +99, this.y+13);
  vertex(this.x +96, this.y+9);
  vertex(this.x +89, this.y+17);
  endShape(CLOSE);
            
          }


this.saltar=function(){
 this.x = this.x + random(-0.5,0.5);
 this.y = this.y + random(-4,4);
}
}

function flirt(miX,miY){
this.x = miX;
this.y = miY;
this.estaVivo = true;
  
this.dibujarse=function(){
  if (this.estaVivo == true) {
            //calvo
            fill(249, 190, 138);
            ellipse(this.x + 0, this.y + 0, 50);
            ellipse(this.x - 11, this.y - 3, 7, 2);
            ellipse(this.x + 11, this.y - 3, 7, 2);
            line(this.x - 5, this.y - 8, this.x - 13, this.y - 5);
            line(this.x + 2, this.y - 5, this.x + 15, this.y - 7);
            line(this.x - 0, this.y +14, this.x +6, this.y +13);
            line(this.x +6, this.y +13, this.x + 11, this.y +9);
  					beginShape();
            fill(229, 221, 66);
            vertex(this.x - 18, this.y + 22);
            vertex(this.x - 20, this.y - 1);
            vertex(this.x - 16, this.y - 11);
            vertex(this.x + 14, this.y - 11);
            vertex(this.x + 19, this.y - 2);
            vertex(this.x + 18, this.y + 22);
            vertex(this.x + 29, this.y + 22);
            vertex(this.x + 27, this.y - 14);
            vertex(this.x + 10, this.y - 26);
            vertex(this.x + 0, this.y - 25);
            vertex(this.x - 7, this.y - 26);
            vertex(this.x - 21, this.y - 19);
            vertex(this.x - 27, this.y - 11);
            vertex(this.x - 27, this.y + 22);
            endShape(CLOSE);
  beginShape();
  fill(249, 190, 138);
  vertex(this.x -8, this.y+23);
  vertex(this.x +0, this.y+25);
  vertex(this.x -89, this.y+25);
  vertex(this.x -102, this.y+30);
  vertex(this.x -109, this.y+17);
  vertex(this.x -99, this.y+13);
  vertex(this.x -96, this.y+9);
  vertex(this.x -89, this.y+17);
  endShape(CLOSE);
  
  }
          }

this.saltar=function(){
 this.x = this.x + random(-0.5,0.5);
 this.y = this.y + random(-4,4);
}
this.morirse = function() {
		this.estaVivo = false;
}
}

function bebe(miX,miY){
this.x = miX;
this.y = miY;

this.dibujarse=function(){
fill(249, 190, 138);
  ellipse(this.x + 0, this.y + 0, 35);
  line(this.x - 2, this.y - 4, this.x - 7, this.y - 4);
  line(this.x + 2, this.y - 4, this.x + 7, this.y - 4);
  line(this.x - 4, this.y - 8, this.x - 8, this.y - 7);
  line(this.x + 4, this.y - 8, this.x + 8, this.y - 7);
  curve(this.x -6, this.y +26,this.x - 4, this.y + 8,this.x + 5, this.y +8,this.x -6, this.y +26);
} 
 this.moversepoco = function() {
        this.x = this.x + random(-0.5,0.5);
        this.y = this.y + random(-0.5,0.5);
 }
  
}
  
function perro(miX,miY){
this.x = miX;
this.y = miY;

this.dibujarse=function(){
  
  fill(94,58,18);
  ellipse(this.x + 0, this.y + 0, 40);
  fill(0);
  ellipse(this.x -5, this.y -2, 3);
  ellipse(this.x +5, this.y -2, 3);
  ellipse(this.x -0, this.y +4, 16,8);
  ellipse(this.x -17, this.y -0, 10,36);
  ellipse(this.x +17, this.y -0, 10,36);
}
this.moverseloco = function() {
        this.x = this.x + random(-50,50);
        this.y = this.y + random(-50,50);
}
}
