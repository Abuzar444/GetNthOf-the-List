class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head;

// our target function to delete from the end of the list
const getNthList = (n) => {
    let newNode = new Node(0);
    newNode.next = head;
    let current = head;
    let len = 0;
    while (current != null) {
        current = current.next;
        len++;
    }
    current = newNode;
    for (let i = 0; i < len - n; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return current.next;
}

//push function will push the to the front of the list 
const push = (data) => {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

//print function will help to print  the out put
const print = () => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

push(5);
push(4);
push(3);
push(2);
push(1);
getNthList(2)
print()