function paddles(){
    bot.x = b.x;
    player.x = x

    if (collideBoxSphere(player, b)) {
        vz *= -1;
        hit.play()
    }

    push()
    bot.update()
    pop()
    push()
    player.update()
    pop()
}
function collideBoxSphere(box, sphere) {
    // Calculate the half dimensions of the box
    var halfW = box.w / 2;
    var halfH = box.h / 2;
    var halfD = box.d / 2;
    
    // Calculate the distance between the sphere center and the box center
    var dx = abs(sphere.x - box.x);
    var dy = abs(sphere.y - box.y);
    var dz = abs(sphere.z - box.z);
    
    // Check if the distance is less than the sum of the half dimensions
    if (dx <= halfW + sphere.d / 2 && dy <= halfH + sphere.d / 2 && dz <= halfD + sphere.d / 2) {
      return true; // Collision detected
    } else {
      return false; // No collision
    }
  }