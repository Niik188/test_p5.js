class Map{
    constructor(position, size, background){
        this.position = position
        this.size = size
        this.background = background
        this.ground = {x:0, y:0, w:0, h:0}
    }
    setup(){
        this.background = loadImage(this.background)
        this.ground.y = 364
        this.ground.w = this.size.w
        this.ground.h = 20
    }
    draw(){
        image(this.background, this.position.x, this.position.y, this.size.w, this.size.h)
        rect(this.ground.x,this.ground.y,this.ground.w,this.ground.h)
    }
}

export var room = new Map({x:0,y:10},{w:673,h:384}, './img/background_1.png')