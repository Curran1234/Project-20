var bgImg, catImage, mouseImage, catImag2, mouseImage2;

var tom,jerry;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    
    catImage = loadAnimation("cat.png, cat2.png");
    catImage2 = loadAnimation("cat3.png, cat4.png");

    mouseImage = loadAnimation("mouse.png, mouse2.png");
    mouseImage2 = loadAnimation("mouse3.png, mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(200,200,10,10)
    tom.addAnimation("cat", catImage);
    tom.scale = 0.4
    
    jerry = createSprite(150,200,10,10)
    jerry.addAnimation("mouse", mouseImage);
    jerry.scale = 0.4

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        jerry.changeAnimation("mouse");
        tom.changeAnimation("cat");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        jerry.addAnimation("mouseTeasing", mouseImage2)
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 25;
    }

}
