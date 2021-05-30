var backgroundFightImg;
var gameState = "choose";
var count = 0;
var player1;
var r1Attack;
var player2;
let gravity =0.03
let hop = -16;
var speed=0,direction=0;
var jAttack;
var jport;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9;
var random_number
var count=0
var playerHealth = 100;
var enemyHealth=100
var rAttackAnimation;
var fire;
var r1Attack;
var drAttack;
var jAttack;
var kAttack;
var lAttack;
var mAttack;
var meAttack;
var rAttack;
var sAttack;
var superNo;
var resetButton

function preload(){
  //background image
    backgroundFightImg = loadImage("game_background_1/game_background_1.png");
    dr = loadImage("dragon/Idle1.png")
    j = loadImage("jinn_animation/Idle1.png")
    m = loadImage("Mage/mage.png")
    me = loadImage("medusa/Idle1.png")
    s = loadImage("small_dragon/Idle1.png")
    r1 = loadImage("reaper1/reaperman1.png");
    r2 = loadImage("reaper2/reaperman2.png");
    r3 = loadImage("reaper3/reaperman3.png")

   fightCount = loadSound("fight.mp3");
    battleMusic = loadSound("battle.mp3");

    r1AttackAnimation = loadAnimation("reaper1/Throwing/Attack1.png", "reaper1/Throwing/Attack2.png", "reaper1/Throwing/Attack3.png", "reaper1/Throwing/Attack4.png", "reaper1/Throwing/Attack5.png", "reaper1/Throwing/Attack6.png", "reaper1/Throwing/Attack7.png", "reaper1/Throwing/Attack8.png", "reaper1/Throwing/Attack9.png", "reaper1/Throwing/Attack10.png", "reaper1/Throwing/Attack11.png", "reaper1/Throwing/Attack12.png")
    r1sword = loadImage("reaper1/Sword.png")
    drAttackAnimation = loadAnimation("dragon/Attack1.png", "dragon/Attack2.png", "dragon/Attack3.png", "dragon/Attack4.png")
    jAttackAnimation = loadAnimation("jinn_animation/Attack1.png", "jinn_animation/Attack2.png", "jinn_animation/Attack3.png", "jinn_animation/Attack4.png")
    f=loadImage("dragon/Fire_Attack1.png")
    jPortAnimation = loadAnimation("jinn_animation/Magic_Attack1.png", "jinn_animation/Magic_Attack2.png", "jinn_animation/Magic_Attack3.png", "jinn_animation/Magic_Attack4.png", "jinn_animation/Magic_Attack5.png", "jinn_animation/Magic_Attack6.png")
    r2AttackAnimation = loadAnimation("reaper2/Throwing/Attack1.png", "reaper2/Throwing/Attack2.png", "reaper2/Throwing/Attack3.png", "reaper2/Throwing/Attack4.png", "reaper2/Throwing/Attack5.png", "reaper2/Throwing/Attack6.png", "reaper2/Throwing/Attack7.png", "reaper2/Throwing/Attack8.png", "reaper2/Throwing/Attack9.png", "reaper2/Throwing/Attack10.png", "reaper2/Throwing/Attack11.png", "reaper2/Throwing/Attack12.png")
    r2sword = loadImage("reaper2/Sword.png")
    r3AttackAnimation = loadAnimation("reaper3/Throwing/Attack1.png", "reaper3/Throwing/Attack2.png", "reaper3/Throwing/Attack3.png", "reaper3/Throwing/Attack4.png", "reaper3/Throwing/Attack5.png", "reaper3/Throwing/Attack6.png", "reaper3/Throwing/Attack7.png", "reaper3/Throwing/Attack8.png", "reaper3/Throwing/Attack9.png", "reaper3/Throwing/Attack10.png", "reaper3/Throwing/Attack11.png", "reaper3/Throwing/Attack12.png")
    r3sword = loadImage("reaper3/Sword.png")
    mAattackAnimation = loadAnimation("Mage/Attack_Extra/attack_extra0.png", "Mage/Attack_Extra/attack_extra1.png", "Mage/Attack_Extra/attack_extra2.png", "Mage/Attack_Extra/attack_extra3.png", "Mage/Attack_Extra/attack_extra4.png", "Mage/Attack_Extra/attack_extra5.png")
    mAattackAnimation.frameDelay = 1.5;
    mFireAnimation = loadAnimation("Mage/Fire_Extra/fire_extra1.png", "Mage/Fire_Extra/fire_extra2.png", "Mage/Fire_Extra/fire_extra3.png", "Mage/Fire_Extra/fire_extra4.png")
    meAttackAnimation = loadAnimation("medusa/Attack1.png", "medusa/Attack2.png", "medusa/Attack3.png", "medusa/Attack4.png", "medusa/Attack5.png", "medusa/Attack6.png")
    meAttackAnimation.frameDelay = 1.5;
    stoneA = loadImage("medusa/Stone2.png")
    sAttackAnimation = loadAnimation("small_dragon/Attack1.png", "small_dragon/Attack2.png", "small_dragon/Attack3.png")
    sFireA = loadAnimation("small_dragon/Fire_Attack1.png", "small_dragon/Fire_Attack2.png", "small_dragon/Fire_Attack3.png", "small_dragon/Fire_Attack4.png")

r1DieAnim = loadAnimation("reaper1/Dying/Die1.png", "reaper1/Dying/Die2.png", "reaper1/Dying/Die3.png", "reaper1/Dying/Die4.png", "reaper1/Dying/Die5.png", "reaper1/Dying/Die6.png", "reaper1/Dying/Die7.png", "reaper1/Dying/Die8.png", "reaper1/Dying/Die9.png", "reaper1/Dying/Die10.png", "reaper1/Dying/Die11.png");
drDieAnim = loadAnimation("dragon/Death1.png", "dragon/Death2.png", "dragon/Death3.png", "dragon/Death4.png", "dragon/Death5.png")
jDieAnim = loadAnimation("jinn_animation/Death1.png", "jinn_animation/Death2.png", "jinn_animation/Death3.png", "jinn_animation/Death4.png", "jinn_animation/Death5.png", "jinn_animation/Death6.png")
r2DieAnim = loadAnimation("reaper2/Dying/Die1.png", "reaper2/Dying/Die2.png", "reaper2/Dying/Die3.png", "reaper2/Dying/Die4.png", "reaper2/Dying/Die5.png", "reaper2/Dying/Die6.png", "reaper2/Dying/Die7.png", "reaper2/Dying/Die8.png", "reaper2/Dying/Die9.png", "reaper2/Dying/Die10.png", "reaper2/Dying/Die11.png")
r3DieAnim = loadAnimation("reaper3/Dying/Die1.png", "reaper3/Dying/Die2.png", "reaper3/Dying/Die3.png", "reaper3/Dying/Die4.png", "reaper3/Dying/Die5.png", "reaper3/Dying/Die6.png", "reaper3/Dying/Die7.png", "reaper3/Dying/Die8.png", "reaper3/Dying/Die9.png", "reaper3/Dying/Die10.png", "reaper3/Dying/Die11.png")
mDieAnim = loadAnimation("Mage/Death/death1.png", "Mage/Death/death2.png", "Mage/Death/death3.png", "Mage/Death/death4.png", "Mage/Death/death5.png", "Mage/Death/death6.png", "Mage/Death/death7.png", "Mage/Death/death8.png", "Mage/Death/death9.png", "Mage/Death/death10.png")
meDieAnim = loadAnimation("medusa/Death1.png", "medusa/Death2.png", "medusa/Death3.png", "medusa/Death4.png", "medusa/Death5.png", "medusa/Death6.png")
sDieAnim = loadAnimation("small_dragon/Death1.png", "small_dragon/Death2.png", "small_dragon/Death3.png", "small_dragon/Death4.png")

er1DieAnim = loadAnimation("enemy/reaperman1/Die1.png", "enemy/reaperman1/Die2.png", "enemy/reaperman1/Die3.png", "enemy/reaperman1/Die4.png", "enemy/reaperman1/Die5.png", "enemy/reaperman1/Die6.png", "enemy/reaperman1/Die7.png", "enemy/reaperman1/Die8.png", "enemy/reaperman1/Die9.png", "enemy/reaperman1/Die10.png", "enemy/reaperman1/Die11.png")
edrDieAnim = loadAnimation("enemy/dragon/Death1.png", "enemy/dragon/Death2.png", "enemy/dragon/Death3.png", "enemy/dragon/Death4.png", "enemy/dragon/Death5.png");
ejDieAnim = loadAnimation("enemy/jinn/Death1.png", "enemy/jinn/Death2.png", "enemy/jinn/Death3.png", "enemy/jinn/Death4.png", "enemy/jinn/Death5.png", "enemy/jinn/Death6.png")
er2DieAnim = loadAnimation("enemy/reaperman2/Die1.png", "enemy/reaperman2/Die2.png", "enemy/reaperman2/Die3.png", "enemy/reaperman2/Die4.png", "enemy/reaperman2/Die5.png", "enemy/reaperman2/Die6.png", "enemy/reaperman2/Die7.png", "enemy/reaperman2/Die8.png", "enemy/reaperman2/Die9.png", "enemy/reaperman2/Die10.png", "enemy/reaperman2/Die11.png")
er3DieAnim = loadAnimation("enemy/reaperman3/Die1.png", "enemy/reaperman3/Die2.png", "enemy/reaperman3/Die3.png", "enemy/reaperman3/Die4.png", "enemy/reaperman3/Die5.png", "enemy/reaperman3/Die6.png", "enemy/reaperman3/Die7.png", "enemy/reaperman3/Die8.png", "enemy/reaperman3/Die9.png", "enemy/reaperman3/Die10.png", "enemy/reaperman3/Die11.png")
emDieAnim = loadAnimation("enemy/mage/death1.png", "enemy/mage/death2.png", "enemy/mage/death3.png", "enemy/mage/death4.png", "enemy/mage/death5.png", "enemy/mage/death6.png", "enemy/mage/death7.png", "enemy/mage/death8.png", "enemy/mage/death9.png", "enemy/mage/death10.png")
emeDieAnim = loadAnimation("enemy/medusa/Death1.png", "enemy/medusa/Death2.png", "enemy/medusa/Death3.png", "enemy/medusa/Death4.png", "enemy/medusa/Death5.png", "enemy/medusa/Death6.png")
erDieAnim = loadAnimation("enemy/rogue/death1.png", "enemy/rogue/death2.png", "enemy/rogue/death3.png", "enemy/rogue/death4.png", "enemy/rogue/death5.png", "enemy/rogue/death6.png", "enemy/rogue/death7.png", "enemy/rogue/death8.png", "enemy/rogue/death9.png", "enemy/rogue/death10.png")
esDieAnim = loadAnimation("enemy/small_dragon/Death1.png", "enemy/small_dragon/Death2.png", "enemy/small_dragon/Death3.png", "enemy/small_dragon/Death4.png");

e1 = loadImage("enemy/reaperman1/reaperman1.png")
e2=loadImage("enemy/dragonattack.png")
e3=loadImage("enemy/jiinattack.png")
e4=loadImage("enemy/reaperman2/reaperman2.png")
e5=loadImage("enemy/reaperman3/reaperman3.png")
e6=loadImage("enemy/mageattack.png")
e7=loadImage("enemy/medusaattack.png")
e8=loadImage("enemy/smalldrattack.png")

e1Attack = loadAnimation("enemy/reaperman1/Attack1.png", "enemy/reaperman1/Attack2.png", "enemy/reaperman1/Attack3.png", "enemy/reaperman1/Attack4.png", "enemy/reaperman1/Attack5.png", "enemy/reaperman1/Attack6.png", "enemy/reaperman1/Attack7.png", "enemy/reaperman1/Attack8.png", "enemy/reaperman1/Attack9.png", "enemy/reaperman1/Attack10.png", "enemy/reaperman1/Attack11.png", "enemy/reaperman1/Attack12.png");
e2Attack = loadAnimation("enemy/dragon/Attack1.png", "enemy/dragon/Attack2.png", "enemy/dragon/Attack3.png", "enemy/dragon/Attack4.png");
e3Attack = loadAnimation("enemy/jinn/Attack1.png", "enemy/jinn/Attack2.png", "enemy/jinn/Attack3.png", "enemy/jinn/Attack4.png");
e4Attack = loadAnimation("enemy/reaperman2/Attack1.png", "enemy/reaperman2/Attack2.png", "enemy/reaperman2/Attack3.png", "enemy/reaperman2/Attack4.png", "enemy/reaperman2/Attack5.png", "enemy/reaperman2/Attack6.png", "enemy/reaperman2/Attack7.png", "enemy/reaperman2/Attack8.png", "enemy/reaperman2/Attack9.png", "enemy/reaperman2/Attack10.png", "enemy/reaperman2/Attack11.png", "enemy/reaperman2/Attack12.png");
e5Attack = loadAnimation("enemy/reaperman3/Attack1.png", "enemy/reaperman3/Attack2.png", "enemy/reaperman3/Attack3.png", "enemy/reaperman3/Attack4.png", "enemy/reaperman3/Attack5.png", "enemy/reaperman3/Attack6.png", "enemy/reaperman3/Attack7.png", "enemy/reaperman3/Attack8.png", "enemy/reaperman3/Attack9.png", "enemy/reaperman3/Attack10.png", "enemy/reaperman3/Attack11.png", "enemy/reaperman3/Attack12.png");
e6Attack = loadAnimation("enemy/mage/attack1.png", "enemy/mage/attack2.png", "enemy/mage/attack3.png", "enemy/mage/attack4.png", "enemy/mage/attack5.png", "enemy/mage/attack6.png", "enemy/mage/attack7.png");
e7Attack = loadAnimation("enemy/medusa/Attack1.png", "enemy/medusa/Attack2.png", "enemy/medusa/Attack3.png", "enemy/medusa/Attack4.png", "enemy/medusa/Attack5.png", "enemy/medusa/Attack6.png");
e8Attack = loadAnimation("enemy/small_dragon/Attack1.png", "enemy/small_dragon/Attack2.png", "enemy/small_dragon/Attack3.png");

er1sword = loadImage("enemy/reaperman1/Sword.png")
er2sword = loadImage("enemy/reaperman2/Sword.png")
er3sword = loadImage("enemy/reaperman3/Sword.png")
e2Fire = loadImage("enemy/dragon/fire.png")
e3port = loadImage("enemy/jinn/port.png")
e6fire = loadImage("enemy/mage/fire.png")
e8fire = loadImage("enemy/small_dragon/fire.png")

fightMusic = loadSound("fightaudio.mp3.mp3")

playAgain = loadImage("playagain.png")
  }


function setup() {
  createCanvas(1365, 665);

  bottom = createSprite(width / 2, 390, width, 10);
  bottom.immovable = true;
  bottom.visible=false

  //resetbutton = new Button()

  if(gameState === "choose"){
    background(backgroundFightImg);

  //row 1
  reaperman1 = createSprite(350, 200, 100, 100)
  reaperman1.scale = 0.15;
  reaperman1.addImage(r1)
  dragon = createSprite(475, 210, 100, 100)
  dragon.addImage(dr)
  jinn = createSprite(650, 200, 100, 100)
  jinn.scale = 1.4
  jinn.addImage(j)
  reaperman2 = createSprite(800, 200, 100, 100)
  reaperman2.scale = 0.15;
  reaperman2.addImage(r2)

  //row2
  reaperman3 = createSprite(350, 350, 100, 100)
  reaperman3.scale = 0.15;
  reaperman3.addImage(r3)
  mage = createSprite(475, 350, 100, 100)
  mage.scale = 1.5;
  mage.addImage(m)
  medusa = createSprite(650, 375, 100, 100);
  medusa.scale = 1.5;
  medusa.addImage(me)
  smallDragon = createSprite(800, 375, 100, 100)
  smallDragon.scale = 1.5;
  smallDragon.addImage(s)

  }


  player1 = createSprite(200, 300, 100, 100)
  player1.addImage(r1)
  player1.friction = 0.01;
  player1.maxSpeed = 2;
  player1.visible=false
  player1.scale = 0.15;
  player1.debug = true;
  player1.setCollider("rectangle", -15, 5, 75, 105)
  r1Attack = createSprite(player1.x, player1.y, 100, 100)
  r1Attack.scale = 0.15;
  r1Attack.addAnimation("attack", r1AttackAnimation)
  r1Attack.visible = false;
  r1Attack.setCollider("rectangle", -15, 5, 75, 105)

  player2 = createSprite(200, 300, 100, 100);
  player2.addImage(dr);
  player2.friction = 0.01;
  player2.maxSpeed = 2;
  player2.visible=false
  player2.debug = true;
  player2.setCollider("rectangle", 0, 5, 115, 105)
  drAttack = createSprite(player2.x, player2.y, 100, 100);
  drAttack.addAnimation("attack", drAttackAnimation)
  drAttack.visible = false;
  drAttack.debug = true;
  drAttack.setCollider("rectangle", 0, 5, 115, 105)

  player3 = createSprite(200, 300, 100, 100);
  player3.scale = 1.4;
  player3.addImage(j);
  player3.friction = 0.01;
  player3.maxSpeed = 2;
  player3.visible=false
  player3.debug = true;
  player3.setCollider("rectangle", -15, 5, 50, 105)
  jAttack = createSprite(player3.x, player3.y, 100, 100)
  jAttack.addAnimation("attack", jAttackAnimation)
  jAttack.scale = 1.4;
  jAttack.visible = false;
  jAttack.debug = true;
  jAttack.setCollider("rectangle", -15, 5, 50, 105)

  player4 = createSprite(200, 300, 100, 100);
  player4.scale = 0.15;
  player4.addImage(r2)
  player4.friction = 0.01;
  player4.maxSpeed = 2;
  player4.visible=false
  player4.debug = true;
  player4.setCollider("rectangle", -15, 5, 75, 105)
  r2Attack = createSprite(player4.x, player4.y, 100, 100)
  r2Attack.scale = 0.15;
  r2Attack.addAnimation("attack", r2AttackAnimation)
  r2Attack.visible = false;
  r2Attack.debug = true;
  r2Attack.setCollider("rectangle", -15, 5, 100, 105)

  player5 = createSprite(200, 300, 100, 100);
  player5.scale = 0.15;
  player5.addImage(r3)
  player5.friction = 0.01;
  player5.maxSpeed = 2;
  player5.visible=false
  player5.debug = true;
  player5.setCollider("rectangle", 0, 0, 75, 75)
  r3Attack = createSprite(player5.x, player5.y, 100, 100)
  r3Attack.addAnimation("attack", r3AttackAnimation);
  r3Attack.scale = 0.15;
  r3Attack.visible = false;
  r3Attack.debug = true;
  r3Attack.setCollider("rectangle", 0, 0, 75, 75)

  player6 = createSprite(200, 300, 100, 100)
  player6.scale = 1.5;
  player6.addImage(m)
  player6.friction = 0.01;
  player6.maxSpeed = 2;
  player6.visible=false
  player6.debug = true;
  player6.setCollider("rectangle", -10, 10, 50, 75)
  mAttack = createSprite(player6.x, player6.y, 100, 100);
  mAttack.addAnimation("attack", mAattackAnimation);
  mAttack.scale = 1.5;
  mAttack.visible = false;
  mAttack.debug = true;
  mAttack.setCollider("rectangle", -10, 10, 50, 75)


  player7 = createSprite(200, 300, 100, 100);
  player7.scale = 1.5;
  player7.addImage(me)
  player7.friction = 0.01;
  player7.maxSpeed = 2;
  player7.visible=false
  player7.debug = true;
  player7.setCollider("rectangle", -10, 10, 50, 75)
  meAttack = createSprite(player7.x, player7.y, 100, 100)
  meAttack.addAnimation("attack", meAttackAnimation)
  meAttack.scale = 1.5;
  meAttack.visible = false;
  meAttack.debug = true;
  meAttack.setCollider("rectangle", -10, 10, 50, 75)

  player8 = createSprite(200, 300, 100, 100);
  player8.scale = 1.5;
  player8.addImage(s)
  player8.friction = 0.01;
  player8.maxSpeed = 2;
  player8.visible=false;
  player8.debug = true;
  player8.setCollider("rectangle", 0, 0, 50, 50)
  sAttack = createSprite(player8.x, player8.y, 100, 100);
  sAttack.addAnimation("attack", sAttackAnimation);
  sAttack.scale = 1.5;
  sAttack.visible = false;
  sAttack.debug = true;
  sAttack.setCollider("rectangle", 0, 0, 50, 30)

  fireGroup = new Group();
  jportGroup = new Group();
  mfireGroup = new Group();
  stoneGroup = new Group();
  sfireGroup = new Group();
  sGroup = new Group();

  visibility = 255;

  enemy1 =createSprite(1000,300,50,50)
  enemy1.addAnimation("attack", e1Attack)
  enemy1.scale = 0.15;
  enemy1.visible=false
  enemy1.velocity.x=-0.5
  enemy1.setCollider("rectangle", -15, 5, 75, 105)
  enemy2 =createSprite(1000,300,50,50)
  enemy2.addAnimation("attack", e2Attack)
  enemy2.visible=false
  enemy2.velocity.x=-0.5
  enemy2.debug = true;
  enemy2.setCollider("rectangle", 0, 5, 115, 105)
  enemy3 =createSprite(1000,300,50,50)
  enemy3.addAnimation("attack", e3Attack)
  enemy3.velocity.x=-0.5
  enemy3.scale = 1.4;
  enemy3.debug = true;
  enemy3.setCollider("rectangle", -15, 5, 50, 105)
 // jport = createSprite(player3.x+130,player3.y,20,20)
 // jPortAnimation.frameDelay = 0.1;
 // jport.visible=false
 // jport.addAnimation("attack", jPortAnimation)
  enemy3.visible=false
  enemy4 =createSprite(1200,300,50,50)
  enemy4.addAnimation("attack", e4Attack)
  enemy4.visible=false
  enemy4.velocity.x=-0.5
  enemy4.scale = 0.15;
  enemy4.debug = true;
  enemy4.setCollider("rectangle", -15, 5, 100, 105)
  enemy5 =createSprite(1200,300,50,50)
  enemy5.addAnimation("attack", e5Attack)
  enemy5.velocity.x=-0.5
  enemy5.visible=false
  enemy5.scale = 0.15;
  enemy5.debug = true;
  enemy5.setCollider("rectangle", 0, 0, 75, 75)
  enemy6 =createSprite(1200,300,50,50)
  enemy6.addAnimation("attack", e6Attack)
  enemy6.velocity.x=-0.5
  enemy6.visible=false
  enemy6.scale = 1.5;
  enemy6.debug = true;
  enemy6.setCollider("rectangle", -10, 10, 50, 75)
  enemy7 =createSprite(1200,300,50,50)
  enemy7.addAnimation("attack", e7Attack)
  enemy7.velocity.x=-0.5
  enemy7.visible=false
  enemy7.scale = 1.5;
  enemy7.debug = true;
  enemy7.setCollider("rectangle", -10, 10, 50, 75)
  enemy8 =createSprite(1200,300,50,50)
  enemy8.addAnimation("attack", e8Attack)
  enemy8.velocity.x=-0.5
  enemy8.visible=false
  enemy8.scale = 1.5;
  enemy8.debug = true;
  enemy8.setCollider("rectangle", 0, 10, 60, 75)

  enemyFireGroup = new Group();
  enemyPortGroup = new Group();
  menemyFireGroup = new Group();
  enemyStoneGroup = new Group();
  senemyFireGroup = new Group();
  swenemygroup = new Group();

  //releaseBarrier = createSprite(enem)
  random_number =Math.round(random(1,8))

  e1Die = createSprite(enemy1.x, enemy1.y, 100, 100);
  e1Die.addAnimation("die", er1DieAnim);
  e1Die.scale = 0.15;
  e1Die.visible = false

  e2Die = createSprite(enemy2.x, enemy2.y, 100, 100);
  e2Die.addAnimation("die", edrDieAnim);
  e2Die.visible = false

  e3Die = createSprite(enemy3.x, enemy3.y, 100, 100);
  e3Die.addAnimation("die", ejDieAnim);
  e3Die.scale = 1.5;
  e3Die.visible = false

  e4Die = createSprite(enemy4.x, enemy4.y, 100, 100);
  e4Die.addAnimation("die", er2DieAnim);
  e4Die.scale = 0.15;
  e4Die.visible = false;

  e5Die = createSprite(enemy5.x, enemy5.y, 100, 100);
  e5Die.addAnimation("die", er3DieAnim);
  e5Die.scale = 0.15;
  e5Die.visible = false

  e6Die = createSprite(enemy6.x, enemy6.y, 100, 100);
  e6Die.addAnimation("die", emDieAnim);
  e6Die.scale = 1.5;
  e6Die.visible = false

  e7Die = createSprite(enemy7.x, enemy7.y, 100, 100);
  e7Die.addAnimation("die", emeDieAnim);
  e7Die.scale = 1.5;
  e7Die.visible = false

  e8Die = createSprite(enemy8.x, enemy8.y, 100, 100);
  e8Die.addAnimation("die", esDieAnim);
  e8Die.scale = 0.15;
  e8Die.visible = true

  //resetButton = createButton("Reset");
  //resetButton.position(height, 30)
}

function draw() {
  background(backgroundFightImg);
  drawSprites();
  //resetbutton.display()
  if(gameState==="choose"){
  fill("black");
  textSize(30);
  text("SELECT YOUR CHARACTER", 450, 500)
  //resetButton.visible = false
  }

  superNo = Math.round(random(1, 2));

if(mousePressedOver(reaperman1)||mousePressedOver(dragon)||mousePressedOver(jinn)||mousePressedOver(reaperman2)||mousePressedOver(reaperman3)||mousePressedOver(mage)||mousePressedOver(medusa)||mousePressedOver(smallDragon)){
  gameState="play"

 if(random_number===1){
enemy1.visible=true
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }

 if(random_number===2){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=true
//enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }
 if(random_number===3){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=true
//enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();

 }
 if(random_number===4){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=true
//enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }
 if(random_number===5){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=true;
//enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }
 if(random_number===6){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=true;
//enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }

 if(random_number===7){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=true;
//enemy7.destroy();
enemy8.visible=false
enemy8.destroy();
 }

 if(random_number===8){
enemy1.visible=false
enemy1.destroy();
enemy2.visible=false
enemy2.destroy();
enemy3.visible=false
enemy3.destroy();
enemy4.visible=false
enemy4.destroy();
enemy5.visible=false
enemy5.destroy();
enemy6.visible=false
enemy6.destroy();
enemy7.visible=false
enemy7.destroy();
enemy8.visible=true;
//enemy8.destroy();
}

}

if(gameState==="play"){
  textSize(30)
  fill(0)
  text("Enemy Health = "+Math.round(enemyHealth), 900, 500)

Math.round(playerHealth);
  fill(0)
  textSize(30)
  text("Player Health = "+Math.round(playerHealth),300,500)

  //hideButton()
}
if(gameState === "play" && mousePressedOver(reaperman1)){
   player1.visible=true
   //player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

 }
 if(gameState === "play"&&mousePressedOver(dragon)){
  fill(0)
  textSize(30)
  text("Player Health = "+playerHealth,300,300)
  player1.visible=false
   player1.destroy()
   player2.visible = true;
   //player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

}

if(gameState === "play"&&mousePressedOver(jinn)){
textSize(30)
fill(0)
text("Player Health = "+playerHealth,300,300)
player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = true;
   //player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

}

if(gameState === "play"&&mousePressedOver(reaperman2)){
textSize(30)
fill(0)
text("Player Health = "+playerHealth,300,300)
player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = true;
   //player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

}

if(gameState === "play"&&mousePressedOver(mage)){
textSize(30)
fill(0)
text("Player Health = "+playerHealth,300,300)

   player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = true;
   //player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

}

if(gameState === "play"&&mousePressedOver(medusa)){
textSize(30)
fill(0)
text("Player Health = "+playerHealth,300,300)

player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = true;
   //player7.destroy()
   player8.visible = false;
   player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)

}

if(gameState === "play"&&mousePressedOver(smallDragon)){
fill(0)
textSize(30)
text("Player Health = "+playerHealth,300,300)
player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = false;
   player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = true;
   //player8.destroy()
   fightMusic.play()
   fightMusic.setVolume(0.1)
}

if(gameState === "play"&&mousePressedOver(reaperman3)){
  textSize(30)
  fill(0)
  text("Player Health = "+playerHealth,300,300)
  player1.visible=false
   player1.destroy()
   player2.visible = false;
   player2.destroy()
   player3.visible = false;
   player3.destroy()
   player4.visible = false;
   player4.destroy()
   player5.visible = true;
   //player5.destroy()
   player6.visible = false;
   player6.destroy()
   player7.visible = false
   player7.destroy()
   player8.visible = false;
   player8.destroy()
}

speed=0
direction=0
bottom.collide(player1)
bottom.collide(player2)
bottom.collide(player3)
bottom.collide(player4)
bottom.collide(player5)
bottom.collide(player6)
bottom.collide(player7)
bottom.collide(player8)

  if(keyWentDown("p")&&player1.visible===true){
    player1.visible = false;
    r1Attack.visible = true;
    r1Attack.x = player1.x;
    r1Attack.y = player1.y;
    sword1 = createSprite(player1.x+130,player1.y,20,20)
    sword1.addImage(r1sword)
    sword1.scale = 0.2;
    sword1.velocity.x = 3;
    sword1.debug = true;
    sword1.setCollider("rectangle", 0, -10, 20, 10)
    sGroup.add(sword1)
    sGroup.setLifetimeEach(1365);
  }

  if(keyWentUp("p")&&r1Attack.visible === true){
    r1Attack.visible = false;
    player1.visible = true;
    sGroup.setLifetimeEach(1365);
  }
  if(keyWentDown("p")&&player2.visible===true){
    player2.visible = false;
    drAttack.visible = true;
    drAttack.x = player2.x;
    drAttack.y = player2.y;
    fire =createSprite(player2.x+130,player2.y,20,20)
    fire.velocity.x=3
    fire.addImage(f)
    fire.setCollider("circle", -30, 0, 20)
    fireGroup.add(fire);
    fireGroup.setLifetimeEach(1365)
  }
  if(keyWentUp("p")&&drAttack.visible===true){
    player2.visible = true;
    drAttack.visible = false;
    fireGroup.setLifetimeEach(1365)
  }

  if(keyWentDown("p")&&player3.visible === true){
    jAttack.visible = true;
    jAttack.x = player3.x;
    jAttack.y = player3.y;
    player3.visible = false;
    jport = createSprite(player3.x+130,player3.y,20,20)
    jPortAnimation.frameDelay = 0.1;
    jport.addAnimation("attack", jPortAnimation)
    jport.velocity.x = 3;
    jport.debug = true;
    jport.setCollider("circle", -30, 0, 20)
    jportGroup.add(jport);
    jportGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&jAttack.visible === true){
    player3.visible = true;
    jAttack.visible = false;
    jportGroup.setLifetimeEach(1365)
  }

  if(keyWentDown("p")&&player4.visible === true){
    r2Attack.visible = true;
    r2Attack.x = player4.x;
    r2Attack.y = player4.y;
    player4.visible = false;
    sword2 = createSprite(player4.x+130,player4.y,20,20)
    sword2.addImage(r2sword)
    sword2.scale = 0.2;
    sword2.velocity.x = 3;
    sword2.debug = true;
    sword2.setCollider("rectangle", 0, 0, 20, 10)
    sGroup.add(sword2)
    sGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&r2Attack.visible === true){
    player4.visible = true;
    r2Attack.visible = false;
  }

  if(keyWentDown("p")&player5.visible === true){
    r3Attack.visible = true;
    r3Attack.x = player5.x;
    r3Attack.y = player5.y;
    player5.visible = false;
    sword3 = createSprite(player5.x+130,player5.y,20,20)
    sword3.addImage(r3sword);
    sword3.scale = 0.2;
    sword3.velocity.x = 3;
    sword3.debug = true;
    sword3.setCollider("rectangle", 0, 0, 20, 10)
    sGroup.add(sword3)
    sGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&r3Attack.visible === true){
    player5.visible = true;
    r3Attack.visible = false;
    sGroup.setLifetimeEach(1365)
  }

  if(keyWentDown("p")&&player6.visible === true){
    mAttack.visible = true;
    mAttack.x = player6.x;
    mAttack.y = player6.y;
    player6.visible = false;
    mFire = createSprite(player6.x+130,player6.y,20,20)
    mFire.addAnimation("fire", mFireAnimation)
    mFire.frameDelay = 0.1;
    mFire.velocity.x = 3;
    mFire.debug = true;
    mFire.setCollider("circle", -30, 0, 20)
    mfireGroup.add(mFire);
    mfireGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&mAttack.visible === true){
    player6.visible = true;
    mAttack.visible = false;
    mfireGroup.setLifetimeEach(1365)
  }

  if(keyWentDown("p")&&player7.visible === true){
    player7.visible = false;
    meAttack.visible = true;
    meAttack.x = player7.x;
    meAttack.y = player7.y;
    stone = createSprite(player7.x+130,player7.y,20,20)
    stone.addImage(stoneA);
    stone.velocity.x = 3;
    stone.debug = true;
    stone.setCollider("circle", -20, 0, 20)
    stoneGroup.add(stone);
    stoneGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&meAttack.visible === true){
    player7.visible = true;
    meAttack.visible = false;
    stoneGroup.setLifetimeEach(1365)
  }

  if(keyWentDown("p")&&player8.visible === true){
    player8.visible = false;
    sAttack.visible = true;
    sAttack.x = player8.x;
    sAttack.y = player8.y;
    sAttack.scale = 1.5;
    sFire = createSprite(player8.x+130,player8.y,20,20)
    sFire.scale = 1.5;
    sFire.addAnimation("fire", sFireA)
    sFire.velocity.x = 3;
    sFireA.frameDelay = 0.1;
    sFire.debug = true;
    sFire.setCollider("circle", -20, 0, 20)
    sfireGroup.add(sFire);
    sfireGroup.setLifetimeEach(1365)
  }

  if(keyWentUp("p")&&sAttack.visible === true){
    player8.visible = true;
    sAttack.visible = false;
    sfireGroup.setLifetimeEach(1365)
  }

  player1.velocity.y += gravity;
  player2.velocity.y += gravity;
  player3.velocity.y += gravity;
  player4.velocity.y += gravity;
  player5.velocity.y += gravity;
  player6.velocity.y += gravity;
  player7.velocity.y += gravity;
  player8.velocity.y += gravity;

  hiding()


  if( keyDown("space")){
    jump(player1);
    jump(player2);
    jump(player3);
    jump(player4);
    jump(player5);
    jump(player6);
    jump(player7);
    jump(player8);
    }
   else if (keyCode === 40) { //down
    move(player1, 2, 90);
    move(player2, 2, 90);
    move(player3, 2, 90);
    move(player4, 2, 90);
    move(player5, 2, 90);
    move(player6, 2, 90);
    move(player7, 2, 90);
    move(player8, 2, 90);
  }
  else if (keyCode === 38) { // up/jump
    move(player1, 2, 270);
    move(player2, 2, 270);
    move(player3, 2, 270);
    move(player4, 2, 270);
    move(player5, 2, 270);
    move(player6, 2, 270);
    move(player7, 2, 270);
    move(player8, 2, 270);
  }
  else if (keyCode === 39) { //right
    move(player1, 2, 0);
    move(player2, 2, 0);
    move(player3, 2, 0);
    move(player4, 2, 0);
    move(player5, 2, 0);
    move(player6, 2, 0);
    move(player7, 2, 0);
    move(player8, 2, 0);
  }
  else if (keyCode === 37) { //left
    move(player1, 2, 180);
    move(player2, 2, 180);
    move(player3, 2, 180);
    move(player4, 2, 180);
    move(player5, 2, 180);
    move(player6, 2, 180);
    move(player7, 2, 180);
    move(player8, 2, 180);
  }

  if(sGroup.isTouching(enemy1)||sGroup.isTouching(enemy2)||sGroup.isTouching(enemy3)||sGroup.isTouching(enemy4)||sGroup.isTouching(enemy5)||sGroup.isTouching(enemy6)||sGroup.isTouching(enemy7)||sGroup.isTouching(enemy8)){
    enemyHealth = enemyHealth-6.7;
    sGroup[0].destroy();
  }

  if(fireGroup.isTouching(enemy1)||fireGroup.isTouching(enemy2)||fireGroup.isTouching(enemy3)||fireGroup.isTouching(enemy4)||fireGroup.isTouching(enemy5)||fireGroup.isTouching(enemy6)||fireGroup.isTouching(enemy7)||fireGroup.isTouching(enemy8)){
    fireGroup[0].destroy()
    enemyHealth = enemyHealth-6.8
  }

  if(jportGroup.isTouching(enemy1)||jportGroup.isTouching(enemy2)||jportGroup.isTouching(enemy3)||jportGroup.isTouching(enemy4)||jportGroup.isTouching(enemy5)||jportGroup.isTouching(enemy6)||jportGroup.isTouching(enemy7)||jportGroup.isTouching(enemy8)){
    enemyHealth = enemyHealth-6.5
    jportGroup[0].destroy()
  }

  if(mfireGroup.isTouching(enemy1)||mfireGroup.isTouching(enemy2)||mfireGroup.isTouching(enemy3)||mfireGroup.isTouching(enemy4)||mfireGroup.isTouching(enemy5)||mfireGroup.isTouching(enemy6)||mfireGroup.isTouching(enemy7)||mfireGroup.isTouching(enemy8)){
    enemyHealth = enemyHealth-6.3;
    mfireGroup[0].destroy();
  }

  if(stoneGroup.isTouching(enemy1)||stoneGroup.isTouching(enemy2)||stoneGroup.isTouching(enemy3)||stoneGroup.isTouching(enemy4)||stoneGroup.isTouching(enemy5)||stoneGroup.isTouching(enemy6)||stoneGroup.isTouching(enemy7)||stoneGroup.isTouching(enemy8)){
    enemyHealth = enemyHealth-6.4;
    stoneGroup[0].destroy();
  }

  if(sfireGroup.isTouching(enemy1)||sfireGroup.isTouching(enemy2)||sfireGroup.isTouching(enemy3)||sfireGroup.isTouching(enemy4)||sfireGroup.isTouching(enemy5)||sfireGroup.isTouching(enemy6)||sfireGroup.isTouching(enemy7)||sfireGroup.isTouching(enemy8)){
    enemyHealth = enemyHealth-7;
    sfireGroup[0].destroy();
  }

  //A.I. damaging for enemy 2, 3, 6, 7, 9
  if(frameCount%80 === 0&&superNo === 2&&enemy1.visible === true){
    swenemy =createSprite(enemy1.x-130,enemy1.y,20,20)
    swenemy.scale = 0.2;
    swenemy.velocity.x=-3
    swenemy.addImage(er1sword)
    swenemy.debug = true;
    swenemy.setCollider("rectangle", 0, 0, 20, 10)
    swenemygroup.add(swenemy);
    swenemygroup.setLifetimeEach(1365)
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy2.visible === true){
    enemyFire =createSprite(enemy2.x-130,enemy2.y,20,20)
    enemyFire.velocity.x=-3
    enemyFire.addImage(e2Fire)
    enemyFire.setCollider("circle", -30, 0, 20)
    enemyFireGroup.add(enemyFire);
    enemyFireGroup.setLifetimeEach(1365);
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy3.visible === true){
    enemyPort = createSprite(enemy3.x-130,enemy3.y,20,20)
    //enemyPortAnimation.frameDelay = 0.1;
    enemyPort.addImage(e3port)
    enemyPort.velocity.x = -3;
    enemyPort.debug = false;
    enemyPort.setCollider("circle", -30, 0, 20)
    enemyPortGroup.add(enemyPort)
    enemyPortGroup.setLifetimeEach(1365)
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy4.visible === true){
    swenemy2 =createSprite(enemy4.x-130,enemy4.y,20,20);
    swenemy2.scale = 0.2;
    swenemy2.velocity.x=-3
    swenemy2.addImage(er2sword)
    swenemy2.debug = true;
    swenemy2.setCollider("rectangle", 0, 0, 20, 10)
    swenemygroup.add(swenemy2);
    swenemygroup.setLifetimeEach(1365);
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy5.visible === true){
    swenemy3 =createSprite(enemy5.x-130,enemy5.y,20,20);
    swenemy3.scale = 0.2;
    swenemy3.velocity.x=-3
    swenemy3.addImage(er3sword)
    swenemy3.debug = true;
    swenemy3.setCollider("rectangle", 0, 0, 20, 10)
    swenemygroup.add(swenemy3);
    swenemygroup.setLifetimeEach(1365)
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy6.visible === true){
    menemyFire = createSprite(enemy6.x-130,enemy6.y,20,20)
    menemyFire.addImage(e6fire)
    //menemyFire.frameDelay = 0.1;
    menemyFire.velocity.x = -3;
    menemyFire.debug = false;
    menemyFire.setCollider("circle", -30, 0, 20)
    menemyFireGroup.add(menemyFire);
    menemyFireGroup.setLifetimeEach(1365)
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy7.visible === true){
    enemyStone = createSprite(enemy7.x-130,enemy7.y,20,20)
    enemyStone.addImage(stoneA);
    enemyStone.velocity.x = -3;
    enemyStone.debug = true;
    enemyStone.setCollider("circle", -20, 0, 20)
    enemyStoneGroup.add(enemyStone)
    enemyStoneGroup.setLifetimeEach(1365)
  }

  if(frameCount%80 === 0&&superNo === 2&&enemy8.visible === true){
    senemyFire = createSprite(enemy8.x-130,enemy8.y,20,20)
    senemyFire.scale = 1.5;
    senemyFire.addImage(e8fire)
    senemyFire.velocity.x = -3;
    //senemyFireA.frameDelay = 0.1;
    senemyFire.debug = true;
    senemyFire.setCollider("circle", -20, 0, 20)
    senemyFireGroup.add(senemyFire)
    senemyFireGroup.setLifetimeEach(1365)
  }

  //for changing player health
  if(swenemygroup.isTouching(player1)||swenemygroup.isTouching(player2)||swenemygroup.isTouching(player3)||swenemygroup.isTouching(player4)||swenemygroup.isTouching(player5)||swenemygroup.isTouching(player6)||swenemygroup.isTouching(player7)||swenemygroup.isTouching(player8)){
    playerHealth = playerHealth-6.7;
    swenemygroup[0].destroy()
  }
  if(enemyFireGroup.isTouching(player1)||enemyFireGroup.isTouching(player2)||enemyFireGroup.isTouching(player3)||enemyFireGroup.isTouching(player4)||enemyFireGroup.isTouching(player5)||enemyFireGroup.isTouching(player6)||enemyFireGroup.isTouching(player7)||enemyFireGroup.isTouching(player8)){
    playerHealth = playerHealth-7
    enemyFireGroup[0].destroy()
  }

  if(enemyPortGroup.isTouching(player1)||enemyPortGroup.isTouching(player2)||enemyPortGroup.isTouching(player3)||enemyPortGroup.isTouching(player4)||enemyPortGroup.isTouching(player5)||enemyPortGroup.isTouching(player6)||enemyPortGroup.isTouching(player7)||enemyPortGroup.isTouching(player8)){
    playerHealth = playerHealth-6.5
    enemyPortGroup[0].destroy()
  }

  if(menemyFireGroup.isTouching(player1)||menemyFireGroup.isTouching(player2)||menemyFireGroup.isTouching(player3)||menemyFireGroup.isTouching(player4)||menemyFireGroup.isTouching(player5)||menemyFireGroup.isTouching(player6)||menemyFireGroup.isTouching(player7)||menemyFireGroup.isTouching(player8)){
    playerHealth = playerHealth-6.3;
    menemyFireGroup[0].destroy();
  }

  if(enemyStoneGroup.isTouching(player1)||enemyStoneGroup.isTouching(player2)||enemyStoneGroup.isTouching(player3)||enemyStoneGroup.isTouching(player4)||enemyStoneGroup.isTouching(player5)||enemyStoneGroup.isTouching(player6)||enemyStoneGroup.isTouching(player7)||enemyStoneGroup.isTouching(player8)){
    playerHealth = playerHealth-6.4;
    enemyStoneGroup[0].destroy();
  }

  if(senemyFireGroup.isTouching(player1)||senemyFireGroup.isTouching(player2)||senemyFireGroup.isTouching(player3)||senemyFireGroup.isTouching(player4)||senemyFireGroup.isTouching(player5)||senemyFireGroup.isTouching(player6)||senemyFireGroup.isTouching(player7)||senemyFireGroup.isTouching(player8)){
    playerHealth = playerHealth-7;
    senemyFireGroup[0].destroy();
  }


  if(enemyHealth<0){
    visibility = visibility-5;
  }

   if(enemyHealth<0&&enemy1.visible === true){
     gameState = "end"
     e1Die.visible = true
     enemy1.visible = false
     e1Die.x = enemy1.x
     visibility = visibility - 5;
     tint(255, visibility)
    
   }

   if(visibility<0&&gameState === "end"){
    e1Die.visible = false;
    textSize(30)
     fill("white")
     textFont("algerian")
     text("YOU WIN", 650, 300)
   }

   if(enemyHealth<0&&enemy2.visible === true){
    gameState = "end"
    e2Die.visible = true
    //e2Die.scale = 0.15;
    enemy2.visible = false
    e2Die.x = enemy2.x
    visibility = visibility - 5;
    tint(255, visibility)
    
  }

  if(visibility<0&&gameState === "end"){
    e2Die.visible = false;
    textSize(30)
    fill("white")
    textFont("algerian")
    text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy3.visible === true){
    gameState = "end"
    e3Die.visible = true
    enemy3.visible = false
    e3Die.x = enemy3.x
    visibility = visibility - 5;
    tint(255, visibility)
  
  }

  if(visibility<0&&gameState === "end"){
    e3Die.visible = false;
    textSize(30)
    fill("white")
    textFont("algerian")
    text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy4.visible === true){
    gameState = "end"
    e4Die.visible = true
    enemy4.visible = false
    e4Die.x = enemy4.x
    visibility = visibility - 5;
    tint(255, visibility)

  }

  if(visibility<0&&gameState === "end"){
    e4Die.visible = false;
    textSize(30)
    fill("white")
    textFont("algerian")
    text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy5.visible === true){
    gameState = "end"
    e5Die.visible = true
    enemy5.visible = false
    e5Die.x = enemy5.x
    visibility = visibility - 5;
    tint(255, visibility)
  
  }

  if(visibility<0&&gameState === "end"){
    e5Die.visible = false

    textSize(30)
     fill("white")
     textFont("algerian")
     text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy6.visible === true){
    gameState = "end"
    e6Die.visible = true
    enemy6.visible = false
    e6Die.x = enemy6.x
    visibility = visibility - 5;
    tint(255, visibility)
  }

  if(visibility<0&&gameState === "end"){
    e6Die.visible = false;
  
    textSize(30)
     fill("white")
     textFont("algerian")
     text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy7.visible === true){
    gameState = "end"
    e7Die.visible = true;
    enemy7.visible = false
    e7Die.x = enemy7.x
    visibility = visibility - 5;
    tint(255, visibility)
  }

  if(visibility<0&&gameState === "end"){
    e7Die.visible = false
    textSize(30)
     fill("white")
     textFont("algerian")
     text("YOU WIN", 650, 300)
  }

  if(enemyHealth<0&&enemy8.visible === true){
    gameState = "end"
    e8Die.visible = true
    enemy8.visible = false
    e8Die.x = enemy8.x
    
    //visibility = visibility - 5;
    //tint(255, visibility)
  }

  /*if(visibility<0&&gameState === "end"){
    e8Die.visible = false;
  }

  if(playerHealth<0){
    gameState="end";
  }

  if(gameState === "end"&&enemyHealth<0){
    background("black")
    textSize(30)
    fill("white")
    text("YOU WIN", 650, 300)
  }

  if(gameState === "end"&&playerHealth<0){
    background("black")
    textSize(30)
    fill("white")
    text("YOU LOSE", 650, 300)
  }*/
}

function jump(sprite) {
  sprite.velocity.y = hop;
}

function move(sprite, speed, direction) {
  sprite.setSpeed(speed, direction)
}

function hiding(){
  if(gameState === "play"){
    //making all characters false and changing x to make them out of mouse reach
    reaperman1.visible = false;
    dragon.visible = false;
    jinn.visible = false;
    reaperman2.visible = false;
    reaperman3.visible = false;
    mage.visible = false
    medusa.visible = false;
    smallDragon.visible = false;

    reaperman1.y = -200;
    dragon.y = -200;
    jinn.y = -200;
    reaperman2.y = -200;
    reaperman3.y = -200;
    mage.y = -200;
    medusa.y = -200;
    smallDragon.y = -200;
  }

}