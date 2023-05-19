let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
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
        this.value= null,
        this.parentId = "",
        this.left = null,   
        this.right =  null,
        this.height =  1,
        this.circleEl = null,
        this.textEl= null
        //this.parentX = px;
        //this.parenty = py;
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


    drawline(context){
        context.moveTo(parentX, parenty+25);
        context.lineTo(xpos, zypos);
        context.stroke();
    }
    
};


const dx = 200
const dy = 100
const dxNext = 100
const dyNext = 100

const x = 50;
const y = 50;





// let createCircles = function(circle){
//     circle.draw(context);
// }


const randomId = () => Math.random().toString(36).substr(2, 5);
let all_circles = [];
let my_circle = new Circle(dx,dy,25,"black",90);
my_circle.parentId = randomId();

all_circles.push(my_circle);


// createCircles(all_circles[0]);  //used mto draw circle
let my_circle2 = new Circle(dx-x,dy+y,25,"black",35);
all_circles.push(my_circle2);



var value = 100;
let obj = null;
for (let i = 0; i < all_circles.length; i++) {
    if(all_circles[i].text == 90){
        obj = all_circles[i];
    }
}


let newx = obj.xpos;
let newy = obj.ypos;



let my_circle3 = new Circle(newx+x,newy+y,25,"black",value);
all_circles.push(my_circle3);


// all_circles.forEach(element => {
//     all_circles[element].draw(context);
// });


for (let i = 0; i < all_circles.length; i++) {
    all_circles[i].draw(context);
}



