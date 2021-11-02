let jasperToy;
let daisyToy; 
let jasperHorse; 
let daisyHorse; 


let x, y; 


function setup() {
  createCanvas(800, 800);
  background(220);
  jasperToy = new Toy (200, 100, color(255, 0, 0)); 
  daisyToy = new Toy (200, 400, color(0, 255, 0)); 
  jasperHorse = new Horse (200, 100, color(255, 0, 0));
  daisyHorse = new Horse (200, 400, color(0, 255, 0)); 
}

function draw() {
  
  scene1(); 
  if (millis() > 5000) {
    scene2();
  
  
}
} 

function scene1(){ 
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
  background(220); 
   if (frameCount % 10 == 0){
    frameRate(32); 
    daisyHorse.move1();
    jasperHorse.move1(); 
    
  } else {
    daisyHorse.move2(); 
    jasperHorse.move2(); 
    
  }
}






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
    
    
  //first two legs
  //leg 2 
  stroke(0); 
  strokeWeight(2); 
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
    
    //leg 2
    stroke(0);
    strokeWeight(2); 
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