class Map{
    constructor(position, size, background){
        this.position = position
        this.size = size
        this.background = background
        this.ground = {x:0, y:0, w:0, h:0}
        this.objects = []
    }
    setup(){
        this.background = loadImage(this.background)
        this.ground.x += this.position.x
        this.ground.y += this.position.y + 350
        this.ground.w = this.size.w
        this.ground.h = 20
        let object = new Object('',{x:0,y:150}, {w:50,h:50})
        object.position.x += this.position.x
        object.position.y += this.position.y
        this.objects.push(object)
    }
    draw(){
        image(this.background, this.position.x, this.position.y, this.size.w, this.size.h)
        this.objects.forEach(object => {
            rect(object.position.x,object.position.y,object.size.w,object.size.h)
        });
        rect(this.ground.x,this.ground.y,this.ground.w,this.ground.h)
    }
}

class Object{
    constructor(img, position, size){
        this.img = img
        this.position = position
        this.size = size
        this.active = false
    }
}
export var rooms = []
function start() {
    var room1 = new Map({x:0,y:10},{w:673,h:384}, './img/background_1.png')
    var room2 = new Map({x:674,y:50},{w:673,h:384}, './img/background_1.png')
    rooms.push(room1)
    rooms.push(room2)
}

start()