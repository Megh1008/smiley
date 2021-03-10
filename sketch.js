var canvas;
var music;
var box;
var surf1,surf2,surf3,surf4,surf5,surf6;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
     surf1=createSprite(600,347,70,20);
surf1.shapeColor=("pink");
surf2=createSprite(500,347,70,20);
surf2.shapeColor=("green");
surf3=createSprite(400,347,70,20);
surf3.shapeColor=("blue");
surf4=createSprite(300,347,70,20);
surf4.shapeColor=("yellow");
surf5=createSprite(200,347,70,20);
surf5.shapeColor=("red");
surf6=createSprite(100,347,70,20);
surf6.shapeColor=("purple");


    //create box sprite and give velocity
 box =createSprite(600,332,20,20);
 box.velocityX=-2;
if(surf1.isTouching(box)){
    box.shapeColor=("pink");
}

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(surf2.isTouching(box)){
        box.shapeColor=("green");
    }
    
    if(surf3.isTouching(box)){
        box.shapeColor=("blue");
    }
    if(surf4.isTouching(box)){
        box.shapeColor=("yellow");
    }
    if(surf5.isTouching(box)){
        box.shapeColor=("red");
    }
    if(surf6.isTouching(box)){
        box.shapeColor=("purple");
    }

    //add condition to check if box touching surface and make it box


    drawSprites();
}
