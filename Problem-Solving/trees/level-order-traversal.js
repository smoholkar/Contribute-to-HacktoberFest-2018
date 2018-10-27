/* Working Code for Level order traversal (breadth-first-search) */

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

function Node(data) {
    this.data = data;
	
	//pointer to link node with its parent
    this.parent = null;
	
	// container for node's child items
    this.children = [];
}

var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree._root.children[2].children[0].children.push(new Node('eight'));
tree._root.children[2].children[0].children[0].parent = tree._root.children[2].children[0];

/*
 
At this point, we have created a tree that looks like below
 
 one 						(level: 0)
 ├── two 						(level: 1)
 │   ├── five 						(level: 2)
 │   └── six  						(level: 2)
 ├── three 						(level: 1)
 └── four  						(level: 1)
     └── seven						(level: 2)
		 └── eight						(level: 3)
		 
*/

function Queue(data) {
	this.items = []; 
}

//This function adds an element at the rear of a queue
Queue.prototype.enqueue = function (newItem) {
		this.items.push(newItem)
}

//Removes an element from the front of queue, returns 0 if queue is empty
Queue.prototype.dequeue = function () {
    if(this.items.length) 
          return this.items.shift(); 
	return 0;
}

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
    queue.enqueue(this._root);
    currentTreeNode = queue.dequeue();
 
    while(currentTreeNode){
        for (var i = 0, length = currentTreeNode.children.length; i < length; i++) {
            queue.enqueue(currentTreeNode.children[i]);
        }
        callback(currentTreeNode);
        currentTreeNode = queue.dequeue();
    }
};

tree.traverseBF(function(node) {
    console.log(node.data);
});