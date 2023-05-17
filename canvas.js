// let canvas = document.getElementById("canva");
// let context = canvas.getContext("2d");

// var window_height = window.innerHeight;
// var window_width = window.innerWidth;


// canvas.width = window_width;
// canvas.height = window_height;
// canvas.style.background = "red";

// context.fillStyle = "white";
// context.fillRect(20,20,200,200);

// context.beginPath();
// context.strokeStyle='blue';
// context.lineWidth = 20;


// context.arc(500,500,50,0,Math.PI *2, false);
// context.stroke();
// context.closePath();



//Canvas video -- 2
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

let x1 = 100;
let y1 = 100;
let x = 100;
let y = 100;

// let my_circle = new Circle(100,100,59,"black",1);
// let my_circle2 = new Circle(100+x1,100+y1,50,"black",2);
// my_circle.draw(context);
// my_circle2.draw(context);

let all_circles = [];

let createCircles = function(circle){
    circle.draw(context);
}



//Dynamic implementation
for(var number=0;number<10;number++){
    let my_circle =new Circle(x,y,50,"black",number);
    all_circles.push(my_circle);
    createCircles(all_circles[number]);
    x = x + x1;
    y = y + y1;
}



//Canvas video - 3
//background of circle and text in a circle


//Caanvas videos - 4 -> move a circle from one location to another


