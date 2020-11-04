
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, Bg, Bird, bird, Dragon, dragonz, Jet, jet, Boss, bs, Legend, lg;

function preload()
{
	Bird = loadAnimation("Images/bird1.png", "Images/bird2.png", "Images/bird3.png", "Images/bird5.png", "Images/bird6.png");
	Bg = loadImage("Images/sky.gif");	
	Dragon = loadAnimation("Images/dragon1.png", "Images/dragon2.png", "Images/dragon3.png");
	Jet = loadImage("Images/Air.png");
	Boss = loadImage("Images/Images.png");
	Legend = loadImage("Images/Images.jpg")
}

function setup()
{
	createCanvas(displayWidth, displayHeight - 108.6);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bg = createSprite(680, 300, 10, 10);
	bg.addImage("ba", Bg);
	bg.scale = 3;
	
	

	bird = createSprite(300, 40, 40, 40)
	bird.scale = 1.5
	bird.addAnimation("bd", Bird)
	bird.rotation = -90

	dragonz = createSprite(100, displayHeight/2 - 108.6)
	dragonz.scale = 1.2;
	dragonz.addAnimation("dg", Dragon)
	dragonz.rotation = 90

	jet = createSprite(displayWidth - 100, displayHeight/2 - 100)
	jet.scale = 1.3;
	jet.addImage("ar", Jet)
	jet.rotation = -90
	

	bs = createSprite(displayWidth/2 - 400, displayHeight/2 + 100)
	bs.scale = 1.7;
	bs.addImage("igyu", Boss)


	lg = createSprite(displayWidth/2, displayHeight/2 - 50);
	lg.scale = 2.2;
	lg.addImage("uyfv", Legend)
	lg.rotation = 90

	jetsGroup = new Group()
	bossGroup = new Group()
	legendGroup = new Group()
	birdGroup = new Group()



	console.log(displayWidth, displayHeight)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255)

  if(keyWentDown("UP_ARROW") && dragonz.position.y == displayHeight/2 - 108.6)
  {
	  dragonz.position.y = displayHeight/2 - 280
  }

  if(keyWentDown("DOWN_ARROW") && dragonz.position.y == displayHeight/2 - 280)
  {
	  dragonz.position.y = displayHeight/2 - 108.6
  }

  if(keyWentDown("RIGHT_ARROW") && dragonz.position.y == displayHeight/2 - 108.6)
  {
	  dragonz.position.y = displayHeight/2 + 180
  }

  if(keyWentDown("LEFT_ARROW") && dragonz.position.y == displayHeight/2 + 180)
  {
	  dragonz.position.y = displayHeight/2 - 108.6
  }

  drawSprites();
 
}



