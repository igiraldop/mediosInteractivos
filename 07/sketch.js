var cancion1;
var dur;
var miFuente;
var guitarra;
var boca;
var bocaArriba;
var micro;
var n=1;

var posX;
var posY;
var tam=10;


function preload() {
  cancion1 = loadSound('assets/cancion.mp3');
  miFuente=loadFont('assets/fuente1.ttf');
  guitarra=loadImage('assets/guitarra.png');
  boca=loadImage('assets/boca.png');
  bocaArriba=loadImage('assets/boca arriba.png');
  micro=loadImage('assets/microfono.png');
}

function setup() {
  createCanvas(600, 400);
  //cancion1.play();
  dur = cancion1.duration();
  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(cancion1);
  cancion1.stop((dur/2)+36);

}

function draw() {
  background(0);
//grafica boton play
  fill(255);
  strokeWeight(1)
  triangle(80,20,80,40,90,30);
 
  fill(255)
  textFont('fuente1');
  textSize(23);
  text("PLAY",18,36);
  //Instruccion tocar guitarra
  if (cancion1.currentTime() > (dur / 6) - 44 && cancion1.currentTime()<(dur/6)-20) {
  fill(255)
  textFont('fuente1');
  textSize(23);
  text("GUITAR in",100,36);
  }
  if (cancion1.currentTime() > (dur / 6) - 42&& cancion1.currentTime()<(dur/6)-20) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("3,",220,36);
  }
  if (cancion1.currentTime() > (dur / 6) - 41&& cancion1.currentTime()<(dur/6)-20) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("2,",232,36);
  }
  if (cancion1.currentTime() > (dur / 6) - 40&& cancion1.currentTime()<(dur/6)-20) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("1...",244,36);
  }
  
  //instrucción cantar
  if (cancion1.currentTime() > (dur / 6) -19 && cancion1.currentTime()<(dur/6)+30) {
  fill(255)
  textFont('fuente1');
  textSize(23);
  text("SING in",100,36);
  }
  if (cancion1.currentTime() > (dur / 6) -17 && cancion1.currentTime()<(dur/6)+30) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("3,",190,36);
  }
  if (cancion1.currentTime() > (dur / 6) - 16 && cancion1.currentTime()<(dur/6)+30) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("2,",202,36);
  }
  if (cancion1.currentTime() > (dur / 6) - 15 && cancion1.currentTime()<(dur/6)+30) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("1...",214,36);
  }
  
  //instrucción velocidad
  if (cancion1.currentTime() > (dur / 6) +28 && cancion1.currentTime()<(dur / 2)+10) {
  fill(255)
  textFont('fuente1');
  textSize(23);
  text("FIND NORMAL SPEED in",100,36);
  }
   if (cancion1.currentTime() > (dur / 6) +29  && cancion1.currentTime()<(dur / 2)+10) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("3,",360,36);
  }
 if (cancion1.currentTime() > (dur / 6) +30 && cancion1.currentTime()<(dur / 2)+10) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("2,",372,36);
  }
  if (cancion1.currentTime() > (dur / 6) +31 && cancion1.currentTime()<(dur / 2)+10) {
  fill(255)
  textFont('fuente1');
  textSize(15);
  text("1...",384,36);
  }
 
  

  if (mouseIsPressed == true) {
    if (cancion1.isPlaying() == false) {
      cancion1.play();
      
    }
  } else {
    cancion1.pause();
  }



  var miVol = map(mouseY, height, 0, 0, 1);
  cancion1.setVolume(miVol);

  var miPan = map(mouseX, 0, width, -1, 1);
  cancion1.pan(miPan);

  cancion1.rate(1);

  var nivel = miAnalizador.getLevel();
  
  if (cancion1.currentTime()>=(dur/2)+35){

  cancion1.setVolume(0);
    
}
  
  if (cancion1.currentTime() > (dur / 2)+30 && cancion1.currentTime()<(dur / 2)+35) {
  
    fill(255)
    ellipse(300,200, tam , tam );
    tam = tam + 15;
  }
  
  
  
  //amplitud en circulo mientras cambia velocidad
  if (cancion1.currentTime() > (dur / 6) +32 && cancion1.currentTime()<(dur / 2)+10) {
  
  ellipse(200,200, 100+nivel * 200, 100+nivel * 200);
  }
  
  
  //amplitud en circulo vel normal
  if (cancion1.currentTime() > (dur / 2)+10 && cancion1.currentTime()<(dur / 2)+30) {
  
  ellipse(width / 2, height / 2, nivel * 600, nivel * 600);
    if (nivel > 0.2) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, width);
      var posY = random(0, height);
      fill(random, random, random, 50);
      ellipse(posX, posY, 30, 30);
    }
    }
  }
  
  
  //cambio de velocidad
  if (cancion1.currentTime() > (dur / 6) +32 && cancion1.currentTime()<(dur / 2)+10) {
    var miVel=map(mouseX,0,width,-1,2);
    cancion1.rate(miVel);
    beginShape();
    fill(255);
    vertex(300,0);
    vertex(mouseX,mouseY);
  vertex(300,400);
  endShape(CLOSE);
  }
  
  //intro
  if (cancion1.currentTime() < (dur / 6) - 39){
    
  stroke(255)
  line(0,200+nivel*200,600,200+nivel*200);
  line(0,200+nivel*300,600,200+nivel*300);
  line(0,200+nivel*400,600,200+nivel*400);
  line(0,200+nivel*500,600,200+nivel*500);
  line(0,200+nivel*600,600,200+nivel*600);
  line(0,200+nivel*-200,600,200+nivel*-200);
  line(0,200+nivel*-300,600,200+nivel*-300);
  line(0,200+nivel*-400,600,200+nivel*-400);
  line(0,200+nivel*-500,600,200+nivel*-500);
  line(0,200+nivel*-600,600,200+nivel*-600);
  }
  
  if (cancion1.currentTime() > (dur / 6) - 39&& cancion1.currentTime()<(dur/6)-16) {
    
    //tocando guitarra
  noFill();
  stroke(255);
  ellipse(79,92,56);
  line(79,121,79,197);
  line(79,197,62,234);
  line(79,197,102,234);
  
  line(62,234,70,260);
  line(102,234,90,260);
  line(79,121,45,155);
  line(120,160,155,167);
  image(guitarra,20,130,200,100)
  line(45,155,mouseX,mouseY);
  line(79,121,120,160);
    
    beginShape();
    vertex(150,200);
    vertex(400,mouseY);
    vertex(600,200);
    endShape();
    
    if (nivel > 0.2) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, width);
      var posY = random(0, height);
      fill(0, 0, 0, 50);
      ellipse(posX, posY, 10, 10);
    }
    }
  
  }
  
  
  
  //cantando
  if (cancion1.currentTime() > (dur / 6) -13 && cancion1.currentTime()<(dur/6)+30) {
  
      
      if (nivel > 0.1) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, width);
      var posY = random(0, height);
      stroke(random,random,random);
      line(posX, posY, 300,80);
    
 
    }
        image(boca,180,0,220,150);
    image(micro, mouseX-165,mouseY-175, 320,350);
    
        
      }
        //if (cancion1.currentTime() > (dur / 6) +30 && cancion1.currentTime()<(dur/6)+60) {
    
      //fill(255);
      //ellipse(width/2,height/2,mouseX,mouseY );
      //line(300,200,300,400);
  
      
    
    
  //}
  //ellipse(width / 2, height / 2, nivel * 600, nivel * 600);
    
  
    }
  


}
