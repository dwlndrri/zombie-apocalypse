class Mover {
    constructor(){
    
        this.location =
            createVector(random(width/2),random(height/2));
    
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0.01,-0.01);
        this.panjanglebar = random(0, 0);
    }
    display(){
        noStroke();
        fill(255);
        rect(this.location.x, this.location.y, 20, 20);
    }
    move(){
        var mouse = createVector(mouseX, mouseY);
        var w = p5.Vector.sub(mouse,CENTER);

        noStroke();
        fill(255,140,0);
        rect(this.location.x, this.location.y, 20, 20);

        noStroke();
        fill(65,105,225);
        rect(mouse.x, mouse.y, 20, 20);

        var arahMouse = p5.Vector.sub(mouse, this.location);
        var topSpeed = (1, 8);
    
        arahMouse.normalize();
        arahMouse.mult(0.3); 
  
        this.velocity.add(this.acceleration);
        this.velocity.add(arahMouse);
        this.velocity.limit(topSpeed);
        this.location.add(this.velocity);
    }
    cekUjung(){
        if ( this.location.x > windowWidth ) {
            this.location.x = 0;
        }
        else if (this.location.x < 0){
            this.location.x = windowWidth;
        }
        if ( this.location.y > windowHeight ) {
            this.location.y = 0;
        }
        else if (this.location.y < 0){
            this.location.y = windowHeight;
        }
    }
    cekBatas(){
        if (this.location.x < 0 || this.location.x > width){
            this.velocity.x = -1*this.velocity.x
          }
          else if (this.location.y < 0 || this.location.y > height){
            this.velocity.y = -1*this.velocity.y
          }
        }
    }


let zombies = [];  
  
function setup() {
    createCanvas(1320, 540);
    r=3;
    
    for (let i = 0; i < 50; i++) {
        zombies.push(new Mover());
    }
}
  
function draw() {
    background(199,21,133);
    
    //stroke('blue')
    //center = createVector(width/2, height/2);
    //mouse = createVector(mouseX, mouseY);
    //var vec = p5.Vector.sub(mouse);
    //ellipse(mouse.x, mouse.y, 15,15)

    //mover.cekUjung();
    //mover.display();
    //mover.update();

    for (let i = 0; i < zombies.length; i++) {
        zombies[i].move();
        zombies[i].display();
        zombies[i].cekUjung();
        zombies[i].cekBatas();
    }
    //var mover = mouse.heading();
    //stroke('black')
    //Text("Zombie");

}