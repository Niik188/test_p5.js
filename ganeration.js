class Map{
    constructor(position, size, background){
        this.position = position
        this.size = size
        this.background = background
    }
    setup(){
        this.background = loadImage(this.background)
    }
    draw(){
        image(this.background, this.position.x, this.position.y, this.size.w, this.size.h)
    }
}

export var room = new Map({x:0,y:10},{w:673,h:384}, './img/background_1.png')