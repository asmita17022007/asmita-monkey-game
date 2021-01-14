var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(500, 500);

  ground = createSprite(250, 465, 1200, 10);
  ground.velocityX = -4;

  monkey = createSprite(50, 435);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  FoodGroup = new Group();
  ObstacleGroup = new Group();

  score = 0;

}


function draw() {
  background("white");

  stroke("black");
  textSize(20);
  text("Survival Time : " + score, 180, 30);
  score = score + Math.round(getFrameRate() / 60);

  if (ground.x < 0) {

    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {

    monkey.velocityY = -13;
  }

  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);

  if (World.frameCount % 80 == 0) {
    food()
  }

  if (World.frameCount % 300 == 0) {
    stone();
  }
  drawSprites();
}

function food() {

  banana = createSprite(500, Math.round(random(120, 200)), 10, 10);
  banana.addAnimation("banana", bananaImage);
  banana.velocity.x = -6;
  banana.scale = 0.1;
  banana.lifetime = 150;
}

function stone() {

  obstacle = createSprite(500, 442);
  obstacle.addImage(obstacleImage);
  obstacle.velocity.x = -8;
  obstacle.scale = 0.1;
  obstacle.lifetime = 150;
}