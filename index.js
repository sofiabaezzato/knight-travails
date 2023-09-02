/* A Queue class for queue-like functionality */
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(obj) {
        this.items.push(obj);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

/* Every node is a position on the gameboard and it's connected
   with the previous one and the next ones */
class Node {
    constructor(position) {
        this.position = position;
        this.parent = null;
        this.distance = null;
    }
}

/* Relative [x, y] knight's possible moves */
let moves = [ [2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2] ]
let queue = new Queue()

function knightMoves(start, end) {
    let x
    let y
    /* If the queue is empty create the tree's root node */
    if (queue.isEmpty()) {
        addNode(start[0], start[1], null)
    } else {
        /* Select and dequeue the first node of the queue */
        let firstNode = queue.dequeue()

        /* If the first node is the target end node, print the path and return */
        if (firstNode.position[0] === end[0] && firstNode.position[1] === end[1]) {
            logPath(firstNode)
            queue = new Queue()
            return;
        }
        /* Create all the possible moves from the selected position */
        for (let i = 0; i <= 7; i++) {
            x = firstNode.position[0] + moves[i][0]
            y = firstNode.position[1] + moves[i][1]
            /* If the new node is inside the board and is not the parent, create the new node */
            if(isGameboard(x, y) && notParent(x, y, firstNode)) {
                addNode(x, y, firstNode)
            }
        }
    }
    /* Change the new start position with the new starting point */
    /* PROBLEM HERE WHY x and y? */
    knightMoves([x, y], end)
}

/* Create the new node and set node parent and distance from root node */
function addNode(x, y, parent) {
    const node = new Node([x, y])
    node.parent = parent
    node.distance = node.parent ? node.parent.distance + 1 : 0
    queue.enqueue(node)
}

/* Check if the move is within the gameboard */
function isGameboard(x, y) {
    if (x >= 0 && x < 8 && y >= 0 && y < 8) return true
    else return false
}

/* Check if a possible move is the parent node */
function notParent(x, y, parent) {
    if(parent.position[0] === x && parent.position[1] === y) return false
    return true
}

/* Retrive path */
function logPath(endNode) {
    let steps = endNode.distance
    let path = []
    let node = endNode
    for(let i = 0; i < steps + 1; i++) {
        path.push(node.position)
        node = node.parent
    }
    console.log(`You made it in ${steps} moves! Here's your path:`)
    path = path.reverse()
    printPath(path)
}

/* Print path */

function printPath(array) {
    for(let node of array) {
        console.log(node)
    }
}


knightMoves([0, 0], [1, 2])
knightMoves([0, 0], [3, 3])
knightMoves([3, 3], [0, 0])
knightMoves([3, 3], [4, 3])
