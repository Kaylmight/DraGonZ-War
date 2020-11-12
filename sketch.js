
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg, Bg, Bird, bird, Dragon, dragonz, Jet, jet, Boss, bs, Legend, lg, Flame;
var count = 0;
var score = 0;

function preload()
{
	Bird = loadAnimation("Images/bird1.png", "Images/bird2.png", "Images/bird3.png", "Images/bird5.png", "Images/bird6.png");
	Bg = loadImage("Images/sky.gif");	
	Dragon = loadAnimation("Images/dragon1.png", "Images/dragon2.png", "Images/dragon3.png");
	Jet = loadImage("Images/Air.png");
	Boss = loadImage("Images/Images.png");
	Legend = loadImage("Images/Images.jpg")
	Flame = loadAnimation("Images/flame.png", "Images/flame 2.png", "Images/flame3.png", "Images/flame4.png", "Images/flame5.png", "Images/flame6.png")

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
	
	dragonz = createSprite(100, displayHeight/2 - 108.6)
	dragonz.scale = 1.2;
	dragonz.addAnimation("dg", Dragon)
	dragonz.rotation = 90

	

	jetsGroup = new Group()
	bossGroup = new Group()
	legendGroup = new Group()
	birdGroup = new Group()
	flameGroup = new Group()

	console.log(displayWidth, displayHeight)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255)

if(gameState == PLAY)
{
  if(keyDown("UP_ARROW"))
  {
	  dragonz.velocity.y = -5
  }

  if(keyDown("DOWN_ARROW"))
  {
	  dragonz.velocity.y = 5
  }

  if(keyWentUp("space") || keyWentUp("enter"))
  {
 	spawnFlame();
  } 

  if(jetsGroup.x <0)
  {
	  //gameState = END
  }

  if(frameCount <= 20000)
{
 spawnJet();
 spawnBird();
 spawnBoss();
}


  for(var pos = 0; pos<flameGroup.length; pos = pos + 1)
  {
  for(var position = 0; position<jetsGroup.length; position = position + 1)
  {
	  if(jetsGroup.get(position).isTouching(flameGroup.get(pos)))
	  {
		  jetsGroup.get(position).destroy();
		  flameGroup.get(pos).destroy();
	  }
  }


for(var pos = 0; pos<flameGroup.length; pos = pos+1)
{
	for(var position = 0; position<bossGroup.length; position = position + 1)
	{
		if(bossGroup.get(position).isTouching(flameGroup.get(pos)))
		{
			if(keyDown("space"))
			{
				count = count + 1;
			}

			if(count == 3)
			{
				bossGroup.get(position).destroy();
				flameGroup.get(pos).destroy();
				count = 0
			}

		}
	}
}


for(var pos = 0; pos<flameGroup.length; pos = pos+1)
{
	for(var position = 0; position<legendGroup.length; position = position + 1)
	{
		if(legendGroup.get(position).isTouching(flameGroup.get(pos)))
		{
			if(keyDown("enter"))
			{
				count = count + 1;
			}

			if(count == 15)
			{
				legendGroup.get(position).destroy();
				flameGroup.get(pos).destroy();
				count = 0
			}

		}
	}
}
}

/*for(var pos = 0; pos<birdGroup.length; pos = pos + 1)
{
	for(var position = 0; position<dragonz.length; position = position + 1)
	{
		if(dragonz.get(position).isTouching(birdGroup.get(pos)))
		{
			birdGroup.get(pos).destroy();
			score = score + 1
		}
	}
}*/



 drawSprites();
fill(0)
 textSize(49);
 text(score, displayWidth-100, 100)
 textFont("Harrington")
}
}




function spawnJet()
{
	if(frameCount % 100 == 0)
	{
		var jt = createSprite(displayWidth, 90, 90, 90)
			jt.y = random(100, 668)
			jt.scale = 1.3;
			jt.addImage("cd", Jet)
			jt.rotation = 90
			jt.velocityX = -5

			jt.lifetime = 273.2;
    
    		jt.depth = dragonz.depth;
    		dragonz.depth = dragonz.depth + 1;
     		jetsGroup.add(jt)
	}
}

function spawnBoss()
{
	if(frameCount % 5000 == 0)
	{
		var bs = createSprite(displayWidth, 90, 90, 90)
			bs.y = random(200, 568)
			bs.scale = 1.3;
			bs.addImage("bc", Boss)
			bs.velocityX = -5
			bs.rotation = -90

			bs.lifetime = 273.2;
    
    		bs.depth = dragonz.depth;
    		dragonz.depth = dragonz.depth + 1;
     		bossGroup.add(bs)
	}
}

function spawnBird()
{
	if(frameCount % 30 == 0)
	{
		var ba = createSprite(displayWidth, 90, 90, 90)
			ba.y = random(100, 668)
			ba.scale = 1.5;
			ba.addAnimation("bd", Bird)
			ba.rotation = -90
			ba.velocityX = -10

			ba.lifetime = 136.6;
    
    		ba.depth = dragonz.depth;
    		dragonz.depth = dragonz.depth + 1;
     		birdGroup.add(ba)
	}
}

function spawnFlame()
{
	var fl = createSprite(200, dragonz.y, 0, 0)
		fl.scale = 0.5
		fl.addAnimation("yghj", Flame)
		fl.velocityX = 30
		fl.rotation = -90
		flameGroup.add(fl);
}

function spawnLegend()
{
	if(frameCount % 20000 == 0)
	{
		lg = createSprite(displayWidth, displayHeight - 408.6, 90, 90)
		
		lg.scale = 2.2;
		lg.addImage("lg", Legend)
		lg.rotation = 90
		lg.velocityX = -5

		lg.lifetime = 273.2;
		
		lg.depth = dragonz.depth;
		dragonz.depth = dragonz.depth + 1;
		legendGroup.add(lg)
	}	
}

