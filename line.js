class Line{
    constructor(){
        this.x= mouseX
        this.y=mouseY


        this.px=pwinMouseX
        this.py=pwinMouseY
    }


    display(){
        line(this.px,this.py, this.x,this.y)
    }
}