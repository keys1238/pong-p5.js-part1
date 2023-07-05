function ball(){

    b.x += vx * s;
    b.z += vz * s;

    s = s + 0.01
    
    if (b.x + b.d / 2 > ground.w / 2 || b.x - b.d / 2 < -ground.w / 2) {
        vx *= -1; // Reverse the horizontal velocity
        hit.play()
    }
    if (b.z - b.d / 2 < -ground.d / 2) {
        vz *= -1; // Reverse the depth velocity
        hit.play()
    }
    if(b.z + b.d / 2 > ground.d / 2){
        console.log("game over")
        t.fill("white")
        t.textSize(80);
        t.text("gameOver",windowWidth/2,windowHeight/2)
        noLoop()
    }

    push()
    fill(255, 0, 0); 
    b.update()
    pop()
}