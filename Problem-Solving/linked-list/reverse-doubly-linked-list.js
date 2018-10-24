function ListNode(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.insertAtFirst = function(data) {
   let node = new ListNode(data);
    if (this.head) {
        this.head.previous = node;
							 node.next = this.head;
    } else {
						this.tail = node;
				}	
				this.head = node;
    this.length++;
}

DoublyLinkedList.prototype.insertAtLast = function(data) {
				let node = new ListNode(data);
				if (this.head) {
	    	node.previous = this.tail;
	    	this.tail.next = node;
			} else {
					this.head = node;
				}
				this.tail = node;		
    this.length++;
}

DoublyLinkedList.prototype.insertAfterN = function(data,index) {
    if (index <= 0) {
        this.insertAtFirst(data);
    } else if (index >= this.length) {
        this.insertAtLast(data);
    } else {
        let node = new ListNode(data);
        let current = this.head;
        for (i = 1; i < index ;i++) {
            current = current.next;
        }
					
        node.previous = current;
        node.next = current.next;
								node.next.previous=node;
        current.next = node;
        this.length++;
    }
}

DoublyLinkedList.prototype.reverse = function() {
			if  (this.length > 1 && this.head !== this.tail) {
				let current = this.head ;
   	this.head = this.tail;
   	this.tail = current;
		 	while (current.next) {
					let temp = current.next;
					current.next = current.previous;
					current.previous = temp;
					current = temp;
			}
				current.next = current.previous;
				current.previous = null;
			}
}