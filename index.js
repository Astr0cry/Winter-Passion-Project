FPS = 30;
GRAVITY = -4.9;

class Object{
    constructor(name,mass,element){
        const s = getComputedStyle(element);
        this.name = name;
        this.mass = mass;
        this.element = element;
        this.velocity = 0;
        this.xPos = Number(s.getPropertyValue("left").replace("px",""));
        this.yPos = Number(s.getPropertyValue("top").replace("px",""));
    }

    applyVel(){
        t
    }
}   
const square = new Object("square",10,document.getElementsByTagName("div")[0]);

function frame(){
    applyGrav(square);
    square.yPos-=square.velocity;
    square.element.style.top = `${square.yPos}px`;
}
function applyGrav(object){
    object.velocity += GRAVITY;
}

setInterval(frame,1000/FPS);
