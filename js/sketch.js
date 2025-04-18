let snowflakes = []; // snowflakes

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("hero");
  cnv.id("snowCanvas"); 

  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake());
  }
}


function draw() {
  clear(); 
  for (let flake of snowflakes) {
    flake.update();
    flake.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Snowflake {
  constructor() {
    this.x = random(width);
    this.y = random(-50, -10); //  starts in the top
    this.size = random(2, 8);
    // depends on the size the speed 
    this.speed = map(this.size, 2, 8, 1, 3);
  }
  
  update() {
    this.y += this.speed;
    this.x += random(-0.5, 0.5);
    if (this.y > height) {
      this.y = random(-50, -10);
      this.x = random(width);
    }
  }
  
  show() {
    noStroke();
    fill(255, 300);
    ellipse(this.x, this.y, this.size);
  }
}
