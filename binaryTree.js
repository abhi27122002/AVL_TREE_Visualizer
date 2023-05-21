// Node class
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// canvas.height = window_height;
canvas.style.background = "grey";



class Node
{   
    
    constructor(xpos,ypos,radius,color,data,px,py){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.data = data,
        this.parentId = "",
        this.left = null,   
        this.right =  null,
        this.height =  1,
        this.circleEl = null,
        this.textEl= null
        this.parentX = px;
        this.parenty = py;
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


    drawlineLeft(context){
        context.moveTo(this.parentX, this.parenty+25);
        context.lineTo(this.xpos+25, this.ypos);
        context.stroke();
    }

    drawlineRight(context){
        context.moveTo(this.parentX, this.parenty+25);
        context.lineTo(this.xpos-25, this.ypos);
        context.stroke();
    }
}


var x = 300;
const y = 100;

function heights(root,node,h){
    if(root == null) return 0;
    if(root == node) return h;
    return  1 + Math.max(heights(root.left,node,h+1),heights(root.right,node,h+1));
}



// Binary Search tree class
class BinarySearchTree
{
	constructor()
	{
		// root of a binary search tree
		this.root = null;
	}

	// function to be implemented
	// insert(data)

	// remove(data)
				

	// Helper function
	// findMinNode()
	// getRootNode()
    //inorder(node)
	// preorder(node)			
	// postorder(node)
	// search(node, data)
    
    // getheight(root,node,h);
    
    

    insert(data)
    {
        
        // Creating a node and initialising
        // with data
                        
        // root is null then node will
        // be added to the tree and made root.
        if(this.root === null){
            this.root = new Node(1500,100,25,"black",data);
            this.root.draw(context);
        }
        else{

            // find the correct position in the
            // tree and add the node
        this.insertNode(this.root, data);
        }
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, data)
    {
        
        // if the data is less than the node
        // data move left of the tree
       

        if(data < node.data)
        { 
            if(node.left === null)
            {
                var h =  heights(this.root,node,1);
                var divison = x / h;
                console.log(h + "   " + data + "      " + divison);
                node.left = new Node(node.xpos-(x/h),node.ypos+y,25,"black",data,node.xpos,node.ypos);
                node.left.draw(context);
                node.left.drawlineLeft(context);
               
            }
            else{
                this.insertNode(node.left, data);
            }
        }else{
            if(node.right === null){
                var h =  heights(this.root,node,1);
                var divison = x / h;
                console.log(h + "   " + data + "      " + divison);
                node.right = new Node(node.xpos+(x/h),node.ypos+y,25,"black",data,node.xpos,node.ypos);      
                node.right.draw(context);
                node.right.drawlineRight(context);
            }
            else{
                this.insertNode(node.right,data);
            }
        }


        // node.height = 1 + node.height;
        return node;
    }


    // Performs inorder traversal of a tree
    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }


    
}





// helper method which creates a new node to
// be inserted and calls insertNode

// search for a node with given data
// search(node, data)
// {
// // if trees is empty return null
// 	if(node === null)
// 		return null;

// 	// if data is less than node's data
// 	// move left
// 	else if(data < node.data)
// 		return this.search(node.left, data);

// 	// if data is more than node's data
// 	// move right
// 	else if(data > node.data)
// 		return this.search(node.right, data);

// 	// if data is equal to the node data
// 	// return node
// 	else
// 		return node;
// }


var BST = new BinarySearchTree();
// BST.getheight(this.root,new node,0);
BST.insert(50);
BST.insert(10);
BST.insert(100);
BST.insert(150);
BST.insert(1);
BST.insert(14);
BST.insert(90);
BST.insert(80);
BST.insert(79);
BST.insert(77);
BST.insert(76);
BST.insert(75);
BST.insert(74);
BST.insert(73);
BST.insert(72);
BST.insert(71);
BST.insert(70);
BST.insert(69);
BST.insert(67);
BST.insert(65);
BST.insert(66);
BST.insert(17);
BST.insert(18);



                     