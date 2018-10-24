function DoublyLinkedList()
{
  this.previous = undefined;
  this.next = undefined;
  this.data = undefined;
}

DoublyLinkedList.prototype.add = function (value)
{
  if (this.next === undefined && this.previous === undefined && this.data === undefined)
  {
    this.data = value;
  }
  else if (this.next === undefined)
  {
    let obj = new DoublyLinkedList();
    obj.data = value;
    obj.previous = this;
    this.next = obj;
  }
  else
  {
    this.next.add(value);
  }
}

DoublyLinkedList.prototype.addAt = function (value, index)
{
  if (index === 0)
  {
    var obj = new DoublyLinkedList();
    obj.data = value;
    obj.previous = this.previous;
    obj.next = this;

    this.previous.next = obj;
  }
  else if (this.next === undefined)
  {
    this.add(value);
  }
  else
  {
    this.next.addAt(value, --index);
  }
}

DoublyLinkedList.prototype.removeAt = function (index)
{
  if (index === 0)
  {
    this.previous.next = this.next;
    this.next.previous = this.previous;
  }
  else if (this.next === undefined)
  {
    console.log(`list isn't long enough`);
  }
  else
  {
    this.next.removeAt(--index);
  }
}

DoublyLinkedList.prototype.print = function ()
{
  console.log(this.data);
  if (this.next !== undefined)
  {
    this.next.print();
  }
}

DoublyLinkedList.prototype.printReverse = function ()
{
  if (this.next !== undefined)
  {
    this.next.printReverse();
  }
  console.log(this.data);
}

/*

const list = new DoublyLinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.addAt('middle', 2);
list.removeAt(2);

/*

module.exports = DoublyLinkedList;