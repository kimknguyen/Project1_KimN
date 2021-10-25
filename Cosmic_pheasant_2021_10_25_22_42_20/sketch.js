let toy; 

function setup() {
  createCanvas(400, 400);
  toy = new Toy(); 

}

function draw() {
  background(220);
  toy.display(); 

}


//class for toy 
class Toy {
  constructor(){
    this.x = 50; 
    this.y = 50; 
    this.c = color(255);
  }

  display(){
    ellipse(50, 50, 10, 10); 
  }

}