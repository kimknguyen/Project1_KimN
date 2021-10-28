let toy; 

function setup() {
  createCanvas(800, 800);
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
    stroke(0); 
    strokeWeight(2); 

    //body 
    fill(255); 
    beginShape(); 
    vertex(225,190); 
    vertex(190, 280); 
    vertex(190, 300); 
    vertex(250, 300); 
    endShape(CLOSE); 

    //head 
    fill(255); //change color
    ellipse(190, 152, 30, 50); //ear behind  
    bezier(212, 152, -26, 237, 153, 354, 213, 255); 
    //line(212, 152, 215, 253); 
    bezier(212, 152, 240, 180, 220, 250, 213, 255 )
    ellipseMode(CENTER); 
    ellipse(215, 152, 30, 50); //ear in front
    strokeWeight(7); 
    stroke(0);
    bezier(125, 200, 180, 250, 185, 270, 190, 280); //horse strap
    strokeWeight(2); 
    stroke(0); 
    ellipseMode(CENTER); 
    ellipse(190, 200, 10, 10); //eye
    ellipse(120, 250, 10, 20); //nose

    //stick 
    rect(215, 300, 20, 100); 


  }

}