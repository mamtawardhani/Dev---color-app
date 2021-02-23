var l, li=[]
var bg

function setup() {
  createCanvas(800,400);
 bg=createColorPicker()
}

function draw() {
  background(bg.value());  

  if(mouseIsPressed){
    l = new Line()
    li.push(l)
  }


  for(var i=0; i< li.length; i++){
    li[i].display()
  }

  drawSprites();
}