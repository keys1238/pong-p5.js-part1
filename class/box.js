class Box{
    constructor(x,y,z,w,h,d){
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        this.h = h
        this.d = d
    }0.
    update(){
        translate(this.x,this.y,this.z)
        box(this.w,this.h,this.d)
    }
}