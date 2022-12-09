var player1, player1Img
var player2, player2Img
var pista, pistaImg
var obstaculo1, obstaculo1Img, obstaculo1Group
var obstaculo2, obstaculo2Img, obstaculo2Group
var coin, coinImg, coinGroup
var fuel, fuelImg, fuelGroup
var gameState1 = 0
var selectCharacter
var formulário

function preload() {
player1Img = loadImage('P1.png')
player2Img = loadImage('P2.png')
pistaImg = loadImage('Pista.jpg')
obstaculo1Img = loadImage('Cone.png')
obstaculo2Img = loadImage('Barrel.png')
coinImg = loadImage('coin.png')
fuelImg = loadImage('Gasolina.png')
}

function setup()  {
createCanvas(windowWidth, windowHeight)
player1 = createSprite(50, height/2-100)
player2 = createSprite(50, height/2+100)
pista = createSprite(width/2, height/2)
obstaculo1Group = createGroup()
obstaculo2Group = createGroup()
coinGroup = createGroup()
fuelGroup = createGroup()
player1.addImage('p1', player1Img)
player2.addImage('p2', player2Img)
pista.addImage('pista', pistaImg)
formulário = new Form ()
}

function draw() {
drawSprites()
if(gameState==0){
    background('planodefundo.png')
 formulário.display()
 player1.visible = false
 player2.visible = false
 pista.visible = false

}
else if (gamestate==1){
    obs1()
    obs2()
    coins()
    fuelF()
    player1.visible = true
    player2.visible = true
    pista.visible = true

 if(selectCharacter==1){
   movPlayer(player1)
 }
 else if (selectCharacter==2){
    movPlayer(player2)
 }
}
}

function obs1() {
    if(frameCount/100==0){
        obstaculo1 = createSprite(width+20, random(0,height));
        obstaculo1.addImage('piche', obstaculo1Img);
        obstaculo1.lifetime= 100
        obstaculo1.velocityX = -20
        obstaculo1Group.add(obstaculo1)
    }
}

function obs2() {
    if(frameCount/100==0){
        obstaculo2 = createSprite(width+20, random(0,height));
        obstaculo2.addImage('barril', obstaculo2Img);
        obstaculo2.lifetime= 100
        obstaculo2.velocityX = -20
        obstaculo2Group.add(obstaculo2)
    }
}
function coins() {
    if(frameCount/50==0){
        coin = createSprite(width+20, random(0,height));
        coin.addImage('moeda', coinImg);
        coin.lifetime= 100
        coin.velocityX = -20
        coinGroup.add(coin)
    }
}
function fuelF() {
    if(frameCount/80==0){
        fuel = createSprite(width+20, random(0,height));
        fuel.addImage('gas', fuelImg);
        fuel.lifetime= 100
        fuel.velocityX = -20
        fuelGroup.add(fuel)
    }
}

function movPlayer(jogador){
    if(keyDown(LEFT_ARROW)){
        jogador.x -= 5;
    }
    if(keyDown(RIGHT_ARROW)){
        jogador.x += 5;
    }
    if(keyDown(UP_ARROW)){
        jogador.y -= 5;
    }
    if(keyDown(DOWN_ARROW)){
        jogador.y += 5;
    }
}