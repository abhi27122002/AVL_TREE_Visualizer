let canvas = document.getElementById("canva");
let context = canvas.getContext("2d");
// var window_height = window.innerHeight;
// var window_width = window.innerWidth;
// canvas.width = window_width;
// canvas.height = window_height;
canvas.style.background = "grey";



class Circle{
    constructor(xpos,ypos,radius,color,text){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = 'blue';
        context.textAlign = 'center';
        context.textBaseline='middle';
        context.font='20px Arial';
        context.lineWidth = 5;
        context.arc(this.xpos,this.ypos,this.radius,0,Math.PI *2, false);
        context.stroke();
        context.fill();
        context.fillStyle="cyan";       //color of node
        context.fillText(this.text, this.xpos, this.ypos);
        context.fillStyle="black";      //backgroundcolor of node
    } 
}


let x1 = 50;
let y1 = 50;
let x = 500;            //width
let y = 100;            //height
let all_circles = [];
let  i = 0;

let createCircles = function(circle){
    circle.draw(context);
}

function root(val){
    let my_circle =new Circle(x,y,25,"black",val);
    all_circles.push(my_circle);
    createCircles(all_circles[i]);
    i = i+1;
}

function right(val){
    context.moveTo(x, y+25);
    context.lineTo(x+x1, y+y1);
    context.stroke();
    x = x + x1;
    y = y + y1;
    let my_circle = new Circle(x,y,25,"black",val);
    all_circles.push(my_circle);
    createCircles(all_circles[i]);
    i++;
}

function left(val){
    context.moveTo(x, y+25);
    context.lineTo(x-x1, y+y1);
    context.stroke();
    x = x - x1;
    y = y + y1;
    let my_circle =new Circle(x,y,25,"black",val);
    all_circles.push(my_circle);
    createCircles(all_circles[i]);
    i++;
}

root(50);
left(30);
right(20);
right(50);
left(90);
right(70);
// left(80);



// let my_circle = new Circle(100,100,59,"black",1);
// let my_circle2 = new Circle(100+x1,100+y1,50,"black",2);
// my_circle.draw(context);
// my_circle2.draw(context);



export {root,left,right};
