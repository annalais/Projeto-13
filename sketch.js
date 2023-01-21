var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

 var select_sprites = Math.round(random(1,3));

  if(frameCount % 80 == 0){
    if( select_sprites == 2){
     createApples();
   } 
    else if(select_sprites == 2){
      createOrange();  
    }
    else{
       createRleaves();
      }}

 rabbit.x = World.mouseX;

   edges= createEdgeSprites();
   rabbit.collide(edges);

   drawSprites();
  
}

function createApples(){
 apple = createSprite(random(50, 350), 40,10,10);
 apple.addImage(appleImg);
 apple.scale = 0.07;
 apple.velocityY = 5;
 apple.lifetime = 150;

}

function createOrange(){
 Orange = createSprite(random(50,350), 0,10,10);
 Orange.addImage(orangeImg);
 Orange.scale = 0,08;
 Orange.velocityY = 5;
 Orange.lifetime = 150;

}

function createRleaves(){
 Rleaves = createSprite(random(50,350),40,10,10);
 Rleaves.addImage(redImg);
  Rleaves.scale = 0.06;
 Rleaves.velocityY = 5;
 Rleaves.lifetime = 150;

}



