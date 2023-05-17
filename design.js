let body = document.body;
body.appendChild.bind("type2");

let rootNode = document.querySelector("tree");
var node = document.createElement('li');
let anchor = document.createElement('a');
anchor.innerHTML = 3;
node.appendChild(anchor);
const nodeList = document.querySelectorAll('ul');
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].appendChild(node);
}



rootNode = document.querySelector("tree");
node = document.createElement('li');
anchor = document.createElement('a');
anchor.innerHTML = 4;
node.appendChild(anchor);
document.querySelector('ul').appendChild(node);


var parent = document.createElement('ul');
node = document.createElement('li');
anchor = document.createElement('a');
anchor.innerHTML = 4;

