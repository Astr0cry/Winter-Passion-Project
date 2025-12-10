const FPS = 30;
const width = window.innerWidth;
const height = window.innerHeight;
class Vector2D{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    add(other){
        this.x+=other.x;
        this.y+=other.y;
    }

    divide(scalar){
        this.x/scalar;
        this.y/scalar;
    }
}

GRAVITY = new Vector2D(0,-4.9);
GRAVITY.divide(FPS);

class Object{
    constructor(name,mass,element){
        const s = getComputedStyle(element);
        this.name = name;
        this.mass = mass;
        this.element = element;
        this.velocity = new Vector2D(0,0);
        console.log(this.velocity)
        this.acc = new Vector2D(0,0)
        this.acc.add(GRAVITY);
        console.log(this.acc);
        this.pos = new Vector2D(Number(s.getPropertyValue("left").replace("px","")),Number(s.getPropertyValue("bottom").replace("px","")));
        console.log(this.pos);
    }

    update(){
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.element.style.bottom = `${this.pos.y}px`;
        this.element.style.left = `${this.pos.x}px`;
    }

    handleEdges(width,height){
        if (this.pos.x < 0 || this.pos.x < width){
            this.acc.x = -this.acc.x;
        }
        if (this.pos.y < 0 || this.pos.y < height){
            this.acc.y = -this.acc.y;
        }
    }
}   
const square = new Object("square",10,document.getElementsByTagName("div")[0]);

function frame(){
    square.update();
}

setInterval(frame,1000/FPS);
