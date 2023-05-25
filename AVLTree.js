let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


var window_height = window.innerHeight;
var window_width = window.innerWidth;


canvas.style.background = "grey";
var x = 200;
var y = 100;

var rightx = 1500;
var leftx  =  1500;


class Node
{   
    constructor(xpos,ypos,radius,color,data,px,py,x){
        this.xpos = xpos,
        this.ypos = ypos,
        this.radius = radius,
        this.color = color,
        this.data = data,
        this.flag  = 0,
        this.left = null,   
        this.right =  null,
        this.height =  1,
        this.parentX = px,
        this.parenty = py
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
        context.fillText(this.data, this.xpos, this.ypos);
        context.fillStyle="black";      //backgroundcolor of node
    } 

    drawByParent(context){
        console.log(this.parentX + " parentX");
        console.log(this.parenty + "Parent y");
        context.beginPath();
        context.strokeStyle = 'blue';
        context.textAlign = 'center';
        context.textBaseline='middle';
        context.font='20px Arial';
        context.lineWidth = 5;
        context.arc(this.parentX-100,this.parenty+100,this.radius,0,Math.PI *2, false);
        context.stroke();
        context.fill();
        context.fillStyle="cyan";   
        console.log("heelo");    //color of node
        context.fillText(this.data, this.parentX-100, this.parenty+100);
        context.fillStyle="black";      //backgroundcolor of node
    } 


    drawlineLeft(context){
        context.moveTo(this.parentX+25, this.parenty);
        context.lineTo(this.xpos-25, this.ypos);
        context.stroke();
    }

    drawlineRight(context){
        context.moveTo(this.parentX-25, this.parenty);
        context.lineTo(this.xpos+25, this.ypos);
        context.stroke();
    }

    update(){
        context.clearRect(0, 0,window_width,window_height);
        this.draw(context);
        this.xpos += 10;
        this.ypos += 10;
    }

}
let dummy = null;
let root2 = null;
var x_max = 800;



function heights(root,node,h){
    if(root == null) return 0;
    if(root == node) return h;
    return Math.max(heights(root.left,node,h+1),heights(root.right,node,h+1));
}

const x_width = [512,256,128,64,32,16,8,4,2,1];

class AVLTree{
    inoder(root){
        if(root === null) return;
        this.inoder(root.left);
        console.log(root.data);
        this.inoder(root.right);
    }

    preorder(root){
        if(root === null) return;

        console.log(root.data);
        this.inoder(root.left);
        this.inoder(root.right);
    }

    heights(root){
        if(root == null) return 0;
        return root.height;
    }

    balancefactor(root){
        if(root == null) return 0;
        return this.heights(root.left) - this.heights(root.right);
    }

    rotateRight(root){
        let temp;
        temp = root.left;


        temp.xpos = root.xpos;
        temp.ypos = root.ypos;

        temp.left.parentX = temp.xpos;
        temp.left.parenty = temp.ypos;

        root.xpos = root.left.xpos;
        if(root.right) root.ypos = root.right.ypos;

        root.left = temp.right;
        temp.right = root;

        

        root.height = 1 + Math.max(this.heights(root.left), this.heights(root.right));
        temp.height = 1 + Math.max(this.heights(root.left), this.heights(root.right));

        context.clearRect(0, 0,window_width,window_height);
        temp.draw(context);
        root.draw(context);
        temp.left.drawByParent(context);

        return temp;
    }


    rotateLeft(root){
        let temp;
        temp = root.right;
        root.right = temp.left;
        temp.left = root;

        root.height = 1 + Math.max(this.heights(root.left), this.heights(root.right));
        temp.height = 1 + Math.max(this.heights(root.left), this.heights(root.right));
        return temp;
    }

    LR(root){
        root.left = this.rotateLeft(root.left);
        root = this.rotateRight(root);
        return root;
    }

    LR(root){
        root.right = this.rotateRight(root.right);
        root = this.rotateLeft(root);
        return root;
    }

    LL(root){
        root = this.rotateRight(root);
        return root;
    }

    RR(root){
        root = this.rotateLeft(root);
        return root;
    }


    drawWithParent(data){
        let curr;
        
        var h = 0;
        var parentXpos = dummy.xpos;
        var parentYpos = dummy.ypos; 
        h = heights(root2,dummy,1);  
        if(dummy.flag == 1){      
            curr = new Node(parentXpos + x_width[h-1],parentYpos + y,25,"black",data);
        }else{
           
            curr = new Node(parentXpos - x_width[h-1],parentYpos +y,25,"black",data);
        }
        curr.parentX = dummy.xpos;
        curr.parenty = dummy.ypos;
        if(dummy.flag == 1){ 
            curr.draw(context);
            curr.drawlineLeft(context);
        }else if(dummy.flag==0){
            curr.draw(context);
            curr.drawlineRight(context);
        }else{}
        return curr;
    }
   
    insert(root,data){
        let curr;
        var bf = 0;
        var h = 0;
        if(root == null){     
           return this.drawWithParent(data);
        }

        if(data < root.data){
            dummy = root;
            dummy.flag = 0;
            root.left = this.insert(root.left,data);

            bf = this.balancefactor(root);
            console.log(bf + "   " + data);

            if(bf >= 2){
                if(data < root.left.data){
                    console.log("LL");
                    //root = this.LL(root);
                    
                }else{
                    console.log("LR");
                    root = LR(root);
                }
            }

        }else if(data > root.data){
            dummy = root;
            dummy.flag = 1;
            root.right = this.insert(root.right,data);
            //root.right.draw(context);
            bf = this.balancefactor(root);
            console.log(bf + " " + data);

            if(bf <= -2){
                if(data > root.right.data){
                   console.log("RR");
                   //root = RR(root);
                }
            }else{
                   console.log("RL");
                   //root = RL(root);
            }
        }else{
            return null;
        }
        console.log("After LL");
        this.inoder(root);
        console.log("After LL pre");
        this.preorder(root);
        root.height = 1 + Math.max(this.heights(root.left),this.heights(root.right));
        return root;
    }

};


var AVL = new AVLTree();
let root = new Node(1500,100,25,"black",50);
root = root;
root.draw(context);

// let updateNode = function() {
//     requestAnimationFrame(updateNode);
//     root.update();
// }
// updateNode();
// AVL.insert(root,10);

root = AVL.insert(root,5);
root = AVL.insert(root,4);


console.log("inorder");
AVL.inoder(root);
console.log("preorder");
AVL.preorder(root);