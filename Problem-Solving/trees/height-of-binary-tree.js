class Tree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }

    updateHeight(node = this, i = 0){
        if(node == null)
            return;
        this.updateHeight(node.left, i + 1);
        this.updateHeight(node.right, i + 1);
        if (this.height < i)
            this.height = i;
    }

    getHeight(){
        this.updateHeight();
        return this.height;
    }
    
    // More methods

    insert(value){
        if(this.value > value)
            if(this.left != null)
                this.left.insert(value);
            else
                this.left = new Tree(value);
        else
            if(this.right != null)
                this.right.insert(value);
            else
                this.right = new Tree(value);
    }

    LNR(node = this){
        if(node == null)
            return;
        this.LNR(node.left);
        console.log(node.value);
        this.LNR(node.right);
    }

    NLR(node = this){
        if(node == null)
            return;
        console.log(node.value);
        this.NLR(node.left);
        this.NLR(node.right);
    }

    LRN(node = this){
        if(node == null)
            return;
        this.LRN(node.left);
        this.LRN(node.right);
        console.log(node.value);
    }
}

// test

var nums = [ 8, 3, 1, 6, 4, 7, 10, 14, 13];
var tree = new Tree(nums[0]);
for(i = 1; i < nums.length; i++)
    tree.insert(nums[i]);

console.log('Height: ' + tree.getHeight());