function board(){
    push()
    fill("green")
    strokeWeight(25)
    stroke(255, 255, 255)
    ground.update()
    pop()

    push()
    noStroke()
    diagonal.update()
    pop()
}