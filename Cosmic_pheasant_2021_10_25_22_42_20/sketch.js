let jasperToy;
let daisyToy; 
let jasperHorse; 
let daisyHorse; 
let night = []; 


let x, y; 


function setup() {
  createCanvas(800, 800);
  background(238, 232, 222); 
  background1(); 
  jasperToy = new Toy (200, 200, color(185, 89, 219)); 
  daisyToy = new Toy (200, 500, color(230, 106, 221)); 
  jasperHorse = new Horse (200, 200, color(185, 89, 219));
  daisyHorse = new Horse (200, 500, color(230, 106, 221)); 
  for (let i = 0; i < 50; i++) {
    night.push(new Bright());
    } 
}

function draw() {
  scene1(); 
  if (millis() > 5000) {
    scene2();
  //loop(); 
  
}
} 

function scene1(){ 
  //background1(); 
  jasperToy.display();
  daisyToy.display(); 
  magic(); 
}




  function magic(){ 
     
    
    var r;
    var g; 
    var b; 
    
    r = random(255); //will generate between 0-255
    g = random(100, 200);
    b = random(100); 
    
    
    function star(x, y){ 
      stroke(0);
      strokeWeight(2);
      fill(r, g, b);
      scale(0.5); 
      beginShape(); //star 
        vertex(x, x + 20);
        vertex(x - 10, x + 50);
        vertex(x - 50, x + 50);
        vertex(x - 20, x + 75); 
        vertex(x - 30, x + 110);
        vertex(x, x + 85);
        vertex(x + 30, x + 110); 
        vertex(x + 20, x + 75);
        vertex(x + 50, x + 50); 
        vertex(x + 15, x + 50);
        endShape(CLOSE);
      
} 
    
    
    var num = 100;
    
    if(mouseIsPressed){
      
      
      push();
      translate(mouseX, mouseY);
      if (mouseX < 300){
        star(100, 200, num, num);
        star(350, 200, num, num); 
        star(300, 250, num, num);
      }
      pop(); 
      
      
    }
    
    
    
  }

function scene2(){
  background2(); 
   for (let i = 0; i < night.length; i+= 3) {
    night[i].display();
    night[i].move(); 
   } 
   if (frameCount % 10 == 0){
    frameRate(32); 
    daisyHorse.move1();
    jasperHorse.move1(); 
    
  } else {
    daisyHorse.move2(); 
    jasperHorse.move2(); 
    
  }
}




function background1(){
  
  stroke(0); 
  strokeWeight(2); 
  fill(179, 120, 63); 
  rect(50, 100, 250, 650); 
  
  beginShape(); //chest 
  vertex(300, 100); 
  vertex(370, 50); 
  vertex(370, 700); 
  vertex(300, 750); 
  endShape(CLOSE); 
  
  
  fill(177, 87, 0); 
  beginShape(); //chest lid 
  vertex(370, 50);
  vertex(390, 50);
  vertex(390, 700);
  vertex(370, 700);
  endShape(CLOSE);
  beginShape();
  vertex(370, 700); 
  vertex(390, 700);
  vertex(320, 750); 
  vertex(300, 750); 
  endShape(CLOSE); 
  
  //rug 
  noStroke(); 
  fill(224, 56, 44); //red
  beginShape(); 
  vertex(0, 70);
  vertex(150, 70); 
  vertex(150, 100);
  vertex(50, 100);
  vertex(50, 200);
  vertex(0, 200); 
  endShape(CLOSE); 
  
  fill(8, 205, 240); //blue
  beginShape();
  vertex(150, 70);
  vertex(150, 100);
  vertex(300, 100);
  vertex(300, 70); 
  endShape(CLOSE); 
  
  fill(250, 216, 72); //yellow 
  beginShape(); 
  vertex(300, 70);
  vertex(340, 70);
  vertex(300, 100); 
  endShape(CLOSE); 
  beginShape();
  vertex(392, 70); 
  vertex(450, 70);
  vertex(450, 200);
  vertex(392, 200); 
  endShape(CLOSE); 
  
  fill(252, 149, 34); //orange 
  rect(0, 200, 50, 150);
  
  fill(74, 216, 110); //green 
  rect(392, 200, 58, 150); 
  
  fill(250, 216, 72);
  rect(0, 350, 50, 150); 
  
  fill(8, 205, 240); 
  rect(392, 350, 58, 150);
  
  fill(74, 216, 110); 
  rect(0, 500, 50, 150); 
  
  fill(224, 56, 44); 
  rect(392, 500, 58, 150); 
  
  fill(8, 205, 240); 
  beginShape();
  vertex(0, 650);
  vertex(50, 650); 
  vertex(50, 750);
  vertex(150, 750);
  vertex(150, 800); 
  vertex(0, 800); 
  endShape(CLOSE); 
  
  fill(250, 216, 72); 
  rect(150, 750, 150, 50); 
  
  fill(252, 149, 34); 
  beginShape();
  vertex(392, 650); 
  vertex(450, 650);
  vertex(450, 800); 
  vertex(300, 800); 
  vertex(300, 750);
  vertex(320, 750);
  vertex(390, 700); 
  endShape(CLOSE); 
  
}

function background2(){
  //background(71, 29, 219); 
  noStroke(); 
  fill(92, 62, 219); 
  rect(0,0,800, 200); 
  fill(92, 57, 219); 
  rect(0, 200, 800, 200); 
  fill(92, 48, 219); 
  rect(0, 400, 800, 200); 
  fill(92, 24, 219); 
  rect(0, 600, 800, 200); 
  
  fill(255); 
  ellipse(random(width), random(height), 5, 5); //this gives a stary night effect and makes the stars move randomly 
  
} 

class Bright {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.xPos = 0; 
    this.speed = 5;
  }
  
  display(){
      stroke(0);
      strokeWeight(2);
      fill(246, 247, 250);
      //scale(); 
      beginShape(); //star 
        vertex(this.x, this.y + 20);
        vertex(this.x - 10, this.y + 50);
        vertex(this.x - 50, this.y + 50);
        vertex(this.x - 20, this.y + 75); 
        vertex(this.x - 30, this.y + 110);
        vertex(this.x, this.y + 85);
        vertex(this.x + 30, this.y + 110); 
        vertex(this.x + 20, this.y + 75);
        vertex(this.x + 50, this.y + 50); 
        vertex(this.x + 15, this.y + 50);
      endShape(CLOSE); 

  }
  
  move(){
  
  this.x = this.x + this.speed;

  if (this.x > width || this.x < 0) {
    //this.speed = -3;
    this.speed = -this.speed
  }
  
} 

} //closer to Bright class







class Toy { 
  
  constructor(x, y, c){
    //this.x = width/4; 
    //this.y = height/4; 
    this.x = x; 
    this.y = y; 
    this.c = c; 
  }
  
  display(){
    stroke(0); 
    strokeWeight(2); 
    
    //body 
    
     fill(255); 
    beginShape(); 
    vertex(this.x + 25,this.y - 10); 
    vertex(this.x - 10, this.y + 80); 
    vertex(this.x - 10, this.y + 100); 
    vertex(this.x + 50, this.y + 100); 
    endShape(CLOSE); 
    
    //head
    fill(255); 
    ellipse(this.x - 10, this.y - 48, 30, 50); //ear behind 
    bezier(this.x + 12, this.y - 48, 174 - this.x, this.y + 37, this.x - 47, this.y + 154, this.x + 13, this.y + 55); 
    //line(212, 152, 215, 253); 
    bezier(this.x + 12, this.y - 48, this.x + 40, this.y - 20, this.x + 20, this.y + 50, this.x + 13, this.y + 55 ); 
    ellipseMode(CENTER); 
    ellipse(this.x + 15, this.y - 48, 30, 50); //ear in front
    strokeWeight(7); 
    stroke(this.c); //want to change color 
    bezier(this.x - 75, this.y, this.x - 20, this.y + 50, this.x - 15, this.y + 70, this.x - 10, this.y + 80); //strap
    strokeWeight(2); 
    stroke(0);  
    ellipseMode(CENTER); 
    ellipse(this.x - 10, this.y, 10, 10); //eye
    ellipse(this.x - 80, this.y + 50, 10, 20); //nose
    
  //stick 
    //(200, 300, 200, 600, 230, 600, 230, 300); 
    fill(this.c); 
    rect(this.x + 15, this.y + 100, 20, 100); 
    
  }// closer to display 
  

} //closer to class


class Horse { 
  
  constructor(x, y, c){
    //this.x = width/4; 
    //this.y = height/4; 
    this.x = x; 
    this.y = y; 
    this.c = c; 
  }
  
  
  
  
  
  
  move1(){
    fill(this.c);
    stroke(0); 
    strokeWeight(2); 
    rect(this.x, this.y, 200, 100); //main body 
  
    stroke(0); //neck 
    strokeWeight(2); 
    beginShape();
    vertex(this.x + 200,this.y + 30); 
    vertex(this.x + 150, this.y); 
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 250, this.y - 60); 
    endShape(CLOSE); 
  
    stroke(0); //head 
    strokeWeight(2);
    beginShape();
    vertex(this.x + 165, this.y - 20); 
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 300, this.y - 45);
    vertex(this.x + 290, this.y + 10); 
    endShape(CLOSE);
    
    stroke(0);
    strokeWeight(2);
    beginShape(); //ear
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 185, this.y - 90); 
    vertex(this.x + 185, this.y - 60); 
    endShape(CLOSE);
    
    stroke(0); 
    strokeWeight(2); 
    beginShape(); //other ear 
    vertex(this.x + 210, this.y - 80); 
    vertex(this.x + 230, this.y - 90); 
    vertex(this.x + 220, this.y - 75); 
    endShape(CLOSE);
    
    //horn 
    noStroke();  
    fill(255, 249, 69); 
    beginShape(); 
    vertex(this.x + 193, this. y - 70); 
    vertex(this.x + 200, this.y - 105); 
    vertex(this.x + 220, this.y - 72 ); 
    vertex(this.x + 200, this.y - 77); 
    endShape(CLOSE); 
    
    //tail 
    stroke(this.c); 
    strokeWeight(20); 
    noFill(); 
    bezier(this.x, this.y + 10, this.x - 50, this.y + 50, this.x + 13, this.y + 100, this.x - 60, this.y + 150); 
    
    //wings 
    stroke(164, 255, 251, 150);
    strokeWeight(4); 
    fill(251, 248, 255); 
    beginShape(); 
    vertex(this.x + 140, this.y + 50); 
    vertex(this.x + 20, this.y - 50); 
    vertex(this.x + 25, this.y - 25); 
    //vertex(this.x + 40, this.y - 20); 
    vertex(this.x + 25, this.y -25); 
    vertex(this.x + 35, this.y + 20); 
    //vertex(this.x + 70, this.y + 30); 
    vertex(this.x + 35, this.y + 20); 
    vertex(this.x + 40, this. y + 50); 
    vertex(this.x + 90, this.y + 70); 
    endShape(CLOSE); 
    
    triangle(this.x + 80, this.y - 50, this.x + 80 , this.y, this.x + 120, this.y); 
    
    
  //first two legs
  //leg 2 
  stroke(0); 
  strokeWeight(2); 
  fill(this.c); 
  beginShape(); 
  vertex(this. x + 120, this.y + 100); 
  vertex(this.x + 165, this.y + 100); 
  vertex(this.x + 180, this.y + 150); 
  vertex(this.x + 140, this.y + 150)
  endShape(CLOSE); 
  
  stroke(0);
  strokeWeight(2);
  beginShape(); 
  vertex(this.x + 140, this.y + 150);
  vertex(this.x + 180, this.y + 150);
  vertex(this.x + 170, this.y + 220); 
  vertex(this.x + 130, this.y + 220); 
  endShape(CLOSE);
  
    //leg 1
  stroke(0); 
  strokeWeight(2); 
  beginShape(); //thigh
  vertex(this.x + 150, this.y + 100); 
  vertex(this.x + 200, this.y + 100); 
  vertex(this.x + 220, this.y + 150);
  vertex(this.x + 180, this.y + 150); 
  endShape(CLOSE); 
  
  stroke(0);
  strokeWeight(2); 
  beginShape(); //leg 
  vertex(this.x + 180, this.y + 150);
  vertex(this.x + 220, this.y + 150); 
  vertex(this.x + 210, this.y + 220); 
  vertex(this.x + 175, this.y + 220);
  endShape(CLOSE); 
    
  //leg 3
  stroke(0);
  strokeWeight(2);
  beginShape();  //thigh
  vertex(this.x, this.y + 100); 
  vertex(this.x + 50, this.y + 100); 
  vertex(this.x + 50, this.y + 150); 
  vertex(this.x, this.y + 150); 
  endShape(CLOSE); 
  
  stroke(0);
  strokeWeight(2);
  beginShape(); //leg 
  vertex(this.x + 50, this.y + 150);
  vertex(this.x, this.y + 150);
  vertex(this.x, this.y + 220);
  vertex(this.x + 50, this.y + 220); 
  endShape(CLOSE); 
  
   //leg 4 
  stroke(0);
  strokeWeight(2);
  beginShape();  //thigh
  vertex(this.x + 25, this.y + 100);
  vertex(this.x + 70, this.y + 100); 
  vertex(this.x + 70, this.y + 150); 
  vertex(this.x + 25, this.y + 150); 
  endShape(CLOSE); 
  
  stroke(0);            
  strokeWeight(2); 
  beginShape(); //leg 
  vertex(this.x + 25, this.y + 150); 
  vertex(this.x + 70, this.y + 150); 
  vertex(this.x + 70, this.y + 220);
  vertex(this.x + 25, this.y + 220); 
  endShape(CLOSE); 
  
    
  } // closer to move1
  
  move2(){
    fill(this.c);
    stroke(0); 
    strokeWeight(2); 
    rect(this.x, this.y, 200, 100); //main body 
  
    stroke(0); //neck 
    strokeWeight(2); 
    beginShape();
    vertex(this.x + 200,this.y + 30); 
    vertex(this.x + 150, this.y); 
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 250, this.y - 60); 
    endShape(CLOSE); 
  
    stroke(0); //head 
    strokeWeight(2);
    beginShape();
    vertex(this.x + 165, this.y - 20); 
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 300, this.y - 45);
    vertex(this.x + 290, this.y + 10); 
    endShape(CLOSE);
    
    stroke(0);
    strokeWeight(2);
    beginShape(); //ear
    vertex(this.x + 200, this.y - 80); 
    vertex(this.x + 185, this.y - 90); 
    vertex(this.x + 185, this.y - 60); 
    endShape(CLOSE);
    
    stroke(0); 
    strokeWeight(2); 
    beginShape(); //other ear 
    vertex(this.x + 210, this.y - 80); 
    vertex(this.x + 230, this.y - 90); 
    vertex(this.x + 220, this.y - 75); 
    endShape(CLOSE);
    
     //horn 
    noStroke();  
    fill(255, 249, 69); 
    beginShape(); 
    vertex(this.x + 193, this. y - 70); 
    vertex(this.x + 200, this.y - 105); 
    vertex(this.x + 220, this.y - 72 ); 
    vertex(this.x + 200, this.y - 77); 
    endShape(CLOSE); 
    
     //tail 
    stroke(this.c); 
    strokeWeight(20); 
    noFill(); 
    bezier(this.x, this.y + 10, this.x - 50, this.y + 50, this.x + 13, this.y + 100, this.x - 60, this.y + 100); 
    
    //wings 
    stroke(164, 255, 251, 150);
    strokeWeight(4); 
    fill(251, 248, 255); 
    beginShape(); 
    vertex(this.x + 140, this.y + 50); 
    vertex(this.x + 20, this.y); 
    vertex(this.x + 40, this.y + 50); 
    vertex(this.x + 90, this.y + 70); 
    endShape(CLOSE); 
    
    
    
    //leg 2
    stroke(0);
    strokeWeight(2); 
    fill(this.c); 
    beginShape(); //thigh
    vertex(this.x + 120, this.y + 100);
    vertex(this.x + 165, this.y + 100);
    vertex(this.x + 165, this.y + 150); 
    vertex(this.x + 120, this.y + 150); 
    endShape(CLOSE); 
    
    stroke(0);
    strokeWeight(2); 
    beginShape(); 
    vertex(this.x + 120, this.y + 150);
    vertex(this.x + 165, this.y + 150); 
    vertex(this.x + 165, this.y + 220);
    vertex(this.x + 120, this.y + 220); 
    endShape(CLOSE);
    
    
    //leg 1 
    stroke(0);
    strokeWeight(2); 
    beginShape(); //thigh
    vertex(this.x + 200, this.y + 100); 
    vertex(this.x + 170, this.y + 100); 
    vertex(this.x + 170, this.y + 150);
    vertex(this.x + 200, this.y + 150); 
    endShape(CLOSE); 
  
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(this.x + 170, this.y + 150);
    vertex(this.x + 200, this.y + 150); 
    vertex(this.x + 200, this.y + 220);
    vertex(this.x + 170, this.y + 220); 
    endShape(CLOSE);
    
    
    //leg 4 
  
    stroke(0); 
    strokeWeight(2); 
    beginShape(); 
    vertex(this.x + 50, this.y + 100); 
    vertex(this.x, this.y + 100);
    vertex(this.x + 30, this.y + 150); 
    vertex(this.x + 70, this.y + 150); 
    endShape(CLOSE); 
    
    stroke(0);
    strokeWeight(2);
    beginShape(); 
    vertex(this.x + 70, this.y + 150);
    vertex(this.x + 30, this.y + 150); 
    vertex(this.x + 20, this.y + 220); 
    vertex(this.x + 60, this.y + 220); 
    endShape(CLOSE); 
    
    //leg 3 
    stroke(0);
    strokeWeight(2); 
    beginShape();
    vertex(this.x + 20, this.y + 100); 
    vertex(this.x + 70, this.y + 100); 
    vertex(this.x + 90, this.y + 150);
    vertex(this.x + 60, this.y + 150); 
    endShape(CLOSE); 
    
    //leg 4 
    stroke(0);
    strokeWeight(2); 
    beginShape(); 
    vertex(this.x + 60, this.y + 150);
    vertex(this.x + 90, this.y + 150);
    vertex(this.x + 80, this.y + 220);
    vertex(this.x + 40, this.y + 220); 
    endShape(CLOSE); 
    
    
  } //closer to move 2 
  
  
 

} //closer to class


