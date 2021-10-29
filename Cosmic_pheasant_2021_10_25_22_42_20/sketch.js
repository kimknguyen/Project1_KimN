let jasperToy;
let daisyToy; 
let x, y, c; 


function setup() {
  createCanvas(800, 800);
  jasperToy = new Toy (200, 100, color(255, 0, 0)); 
  daisyToy = new Toy (200, 400, color(0, 255, 0)); 
}

function draw() {
  background(220);
  jasperToy.display(); 
  daisyToy.display(); 
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
    rect(this.x + 15, this.y + 100, 20, 100); 
    
  }// closer to display 
  


} //closer to class