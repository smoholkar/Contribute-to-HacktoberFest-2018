
class trieNode {
    constructor(value, children = [], isEndNode = false) {
        this.value = value;
        this.children = children;
        this.isEndNode = isEndNode;
    }
}

class trie {
    constructor(root = new trieNode('\0', [])) {
        this.root = root;
    }

    insertKey(node = this.root, key = '') {
        if (key.length <= 0) return 0;
        var matchedNode = node.children.filter(child=> child.value == key[0]);

        if (matchedNode.length) {
            if (key.length == 1) {
                matchedNode[0].isEndNode = true;        // in case of prefix key
                return 0;
            }
            this.insertKey(matchedNode[0], key.substr(1));
            return 0;
        }

        var newNode = (key.length == 1) ? new trieNode(key, [], true) : new trieNode(key[0], []);

        node.children.push(newNode);

        this.insertKey(newNode, key.substr(1));
    };

    searchKey(node = this.root, key = '') {
        if (key.length <= 0) return -1;

        var matchedNode = node.children.filter(child=> child.value == key[0]);

        if (matchedNode.length) {
            if (key.length == 1) {
                if (matchedNode[0].isEndNode == true) return 1;
                else return -1;
            } else 
                return this.searchKey(matchedNode[0], key.substr(1));
        } else {
            return -1;
        }
    }
}

var trieInstance = new trie();
var keys = ["the", "a", "there", "answer", "any", "by", "bye", "their" ];

for (const key of keys) {
    trieInstance.insertKey(trieInstance.root, key);
}

(trieInstance.searchKey(trieInstance.root, "the") > 0) ? console.log("Present in Trie") : console.log("Not present in Trie");
(trieInstance.searchKey(trieInstance.root, "these") > 0) ? console.log("Present in Trie") : console.log("Not present in Trie");
(trieInstance.searchKey(trieInstance.root, "their") > 0) ? console.log("Present in Trie") : console.log("Not present in Trie");
(trieInstance.searchKey(trieInstance.root, "thaw") > 0) ? console.log("Present in Trie") : console.log("Not present in Trie");

// Output:
// Present in trie
// Not present in trie
// Present in trie
// Not present in trie
