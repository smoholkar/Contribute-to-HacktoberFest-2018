/* Find the height of binary tree - javascript #22 */
// First created the binary tree and inserted test nodes
// The last function gets the height of the tree
// Test values are 40, 25, 58, 11, 33

// Set root
function Node(name, value) 
{
    this.name = name;
    this.value = value;
}

// Set left node
Node.prototype.setLeft = function(left) 
{
    this.left = left;
}

// Set right node
Node.prototype.setRight = function(right) 
{
    this.right = right;
}

// Function to insert node to tree
function insertNode(root, newNode) 
{
    if(root) 
	{
		// If the new node is greater than the root,
		// Set to the right of the root
        if(root.value < newNode.value) 
		{
            if(root.right) 
			{
                insertNode(root.right, newNode);
            }
			
			else 
			{
                root.setRight(newNode);
            }
			
        } 
		
		// Else, the new node is less than the root,
		// Set to the left of the root
		else 
		{
            if(root.left) 
			{
                insertNode(root.left, newNode);
            } 
			
			else 
			{
                root.setLeft(newNode);
            }
        }
    } 
	
	// If root does not exist, create a new node
	else 
	{
		root = newNode;
    }
	
    return root;
}

insertValue();

// Function to create a test tree
function insertValue() 
{
    node1 = new Node('1', 40);
    node2 = new Node('2', 25);
    node3 = new Node('3', 58);
    node4 = new Node('4', 11);
    node5 = new Node('5', 33);


    var tree = insertNode(tree, node1);
    tree = insertNode(tree, node2);
    tree = insertNode(tree, node3);
    tree = insertNode(tree, node4);
    tree = insertNode(tree, node5);

	console.log("Pre order Traversal: ");
	preorder(tree);
	
	console.log("\nIn order Traversal: ");
	inorder(tree);
	
	var heightValue = height(tree);
	console.log("\nHeight: " + heightValue);
}

// Get the preorder traversal
function preorder(root) 
{
	if(root)
	{
		console.log(root.value);
		preorder(root.left);
		preorder(root.right);	
	}
}

// Get the inorder traversal
function inorder(root)
{
	if(root)
	{
		inorder(root.left);
		console.log(root.value);
		inorder(root.right);
	}
}

/* Find the height of binary tree - javascript #22 */
// Get height of the tree
function height(node) 
{
    if(node) 
	{
        return 1 + Math.max(height(node.left), height(node.right));
    } 
	
	else 
	{
        return 0;
    }
}
