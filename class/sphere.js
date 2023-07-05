class Sphere{
    constructor(x,y,z,d){
        this.x = x
        this.y = y
        this.z = z
        this.d = d
    }
    update(){
        translate(this.x,this.y,this.z)
        sphere(this.d)
    }
}