var bgImg;
var tom,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4,;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png");
    tomImg3 = loadAnimation("cat3.png");
    tomImg4 = loadAnimation("cat4.png");
    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse2.png");
    jerryImg3= loadAnimation("mouse3.png");
    jerryImg4 = loadAnimation("mouse4.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom= createSprite(600,400,100,30);
     jerry = createSprite(400,200,120,40);
     tom.addAnimation("cat",tomImg1);
     jerry.addAnimation("mouse",jerryImg1);
}
  
function draw() {
background(bgImg);
    
     if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.changeAnimation("tomHappy",tomImg1);
      jerry.changeAnimation("jerryHappy",jerryImg2);
     }
          
    
  //For moving and changing animation write code here

 drawSprites();
    }   
 
    function keyPressed(){
        if(keyCode === LEFT_ARROW){ 
     tom.velocityX = -5; 
     tom.addAnimation("tomRunning", tomImg2); 
     tom.changeAnimation("tomRunning"); 
     jerry.addAnimation("jerryTeasing", jerryImg2);
     jerry.frameDelay = 25; 
     jerry.changeAnimation("jerryTeasing"); 
} 
  
    }

    
  







