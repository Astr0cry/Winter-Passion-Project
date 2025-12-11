const FPS = 60;
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
        this.x/=scalar;
        this.y/=scalar;
    }

    multiply(scalar){
        this.x*=scalar;
        this.y*=scalar;
    }
}

GRAVITY = new Vector2D(0,-120);
GRAVITY.divide(FPS);
class Object{
    constructor(name,mass,element){
        const s = getComputedStyle(element);
        this.name = name;
        this.mass = mass;
        this.width = Number(s.getPropertyValue("width").replace("px",""));
        this.height = Number(s.getPropertyValue("height").replace("px",""));
        this.element = element;
        this.velocity = new Vector2D(0,0);
        this.acc = new Vector2D(0,0)
        this.acc.add(GRAVITY);
        this.pos = new Vector2D(Number(s.getPropertyValue("left").replace("px","")),Number(s.getPropertyValue("bottom").replace("px","")));
    }

    update(){
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.element.style.bottom = `${this.pos.y}px`;
        this.element.style.left = `${this.pos.x}px`;
    }

    handleEdges(width,height){
        if (this.pos.x <= 0 || this.pos.x+this.width > width){
            this.velocity.x = -this.velocity.x;
        }
        if (this.pos.y <= 0 || this.pos.y+100> height){
            this.velocity.y = -this.velocity.y;
        }
    }
}   
const square = new Object("square",10,document.getElementsByTagName("div")[0]);

function frame(){
    square.handleEdges(width,height);
    square.update();
}

setInterval(frame,1000/FPS);
