const knightMoves = require("./knightMoves")

/* Test cases */

knightMoves([0, 0], [1, 2])
// You made it in 1 moves! Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]

knightMoves([0, 0], [3, 3])
// You made it in 2 moves! Here's your path:
// [ 0, 0 ]
// [ 2, 1 ]
// [ 3, 3 ]

knightMoves([3, 3], [0, 0])
// You made it in 2 moves! Here's your path:
// [ 3, 3 ]
// [ 1, 2 ]
// [ 0, 0 ]

knightMoves([3, 3], [4, 3])
// You made it in 3 moves! Here's your path:
// [ 3, 3 ]
// [ 5, 4 ]
// [ 3, 5 ]
// [ 4, 3 ]

knightMoves([0, 0], [7, 7])
// You made it in 6 moves! Here's your path:
// [ 0, 0 ]
// [ 2, 1 ]
// [ 4, 2 ]
// [ 6, 3 ]
// [ 4, 4 ]
// [ 6, 5 ]
// [ 7, 7 ]