var gameState = 0;
var cover_img, story_img, play_img, hints_img;
var story, play, hint1,hint2,hint3,hin4,hint5;
var claps,losing;


function preload()
{
  cover_img = loadImage("images/cover page.png");
  story_img = loadImage("images/story_img.png");
  play_img = loadImage("images/hints_img.png");
  hints_img = loadImage("images/game_page.png");
  claps = loadSound("sounds/applause.wav")
  losing = loadSound("sounds/losing.wav")
}


function setup() {
  createCanvas(700,600);
}


function draw() {
  background(255);  
  if(gameState === 0)
  {
    start();
  }
  if(gameState === 1)
  {
    storyPage()
  }
  if(gameState === 2)
  {
    playPage()
  }
  if(gameState === 3)
  {
    gkPage()
  }
  if(gameState === 4)
  {
    phonesPage()
  }
  if(gameState === 5)
  {
    socialMediaPage()
  }
  if(gameState === 6)
  {
    moviePage()
   }
  if(gameState === 7)
  {
    carsPage()
  }
   drawSprites();
}


function start()
{
  background(cover_img);
  story = createSprite(580,430,150,80);
  story.visible = false
  play = createSprite(400,430,150,80);
  play.visible = false
  if(mousePressedOver(story))
 {
    gameState = 1
 }
 if(mousePressedOver(play))
 gameState = 2
}
function storyPage()
{
  background(story_img);
  textSize(30)
  fill("red")
  text("hai",100,550);
}


function playPage()
{
  background(play_img);
  hint1 = createSprite(65,370,125,141)
  hint1.visible = false
  hint2 = createSprite(203,370,125,141)
  hint2.visible = false
  hint3 = createSprite(346,370,125,141)
  hint3.visible = false
  hint4 = createSprite(487,370,125,141)
  hint4.visible = false
  hint5 = createSprite(631,370,125,141)
  hint5.visible = false
  if(mousePressedOver(hint1))
  {
    gameState = 3
  }
  if(mousePressedOver(hint2))
  {
    gameState = 4
  }
  if(mousePressedOver(hint3))
  {
    gameState = 5
  }
  if(mousePressedOver(hint4))
  {
    gameState = 6
  }
  if(mousePressedOver(hint5))
  {
    gameState = 7
  }
  textSize(40)
  fill("black")
  text("G.K", 25,480)
  text("Phones", 180,480)
  text("S.M", 300, 480)
  text("Movies", 440, 480)
  text("Cars", 590, 480)
}


function gkPage()
{
  background(hints_img)
}
function phonesPage()
{
  background(hints_img)
}
function socialMediaPage()
{
  background(hints_img)
}
function moviePage()
{
  background(hints_img)
}
function carsPage()
{
  background(hints_img)
}

