function setup() {
    createCanvas(500, 500);
     background("white");
  }
  
  function draw() {
   
  
    stroke("blue");
    fill("pink");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }