var ground
var diagonal
var b
var bot, player
var vx = 1, vz = 1, x = 0
var s = 2
var go,hit
var cam 
var t

function preload(){
    go = loadSound('assects/death.mp3');
    hit = createAudio('assects/pong.mp3');
}

function setup() {
    createCanvas(windowWidth - 25, windowHeight - 25, WEBGL);
    cam = createCamera()
    cam.setPosition(0,-900,2000)

    t = createGraphics(windowWidth - 25,windowHeight)

    ground = new Box(0,0,0,900,0,2000)
    diagonal = new Box(0,-2,0,10,0,2000)
    b = new Sphere(0,-20,0,20)
    bot = new Box(b.x,-35,-1000,80,50,30)
    player = new Box(x,-35,1000,80,50,30)
    cam.lookAt(0,0,0)
}
  
function draw() {
    background(200);
    board()
    paddles()
    ball()
    m()
    push()
    noStroke()
    translate(-45,-850,1800)
    texture(t)
    plane(300)
    pop()
}
function m(){
    if(keyIsPressed){
        if (keyCode === LEFT_ARROW) {
            x = x - (s + 3)
        } else if (keyCode === RIGHT_ARROW) {
            x = x + (s + 3)
        }
    }
    if(x > ground.w / 2){
        x = x - (s + 3)
    }
    if(x < -ground.w / 2){
        x = x + (s + 3)
    }
}
function windowResized() {
    resizeCanvas(windowWidth - 25, windowHeight - 25);
}  
