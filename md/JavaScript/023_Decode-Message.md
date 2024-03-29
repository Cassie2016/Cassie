文档地址：[https://bigfrontend.dev/problem/decode-message](https://bigfrontend.dev/problem/decode-message)
### question
Your are given a 2-D array of characters. There is a hidden message in it.
```
I B C A L K A
D R F C A E A
G H O E L A D
```
The way to collect the message is as follows

1. start at top left
2. move diagonally(对角的) down right
3. when cannot move any more, try to switch to diagonally up right
4. when cannot move any more, try switch to diagonally down right, repeat 3
5. stop when cannot neither move down right or up right. the character on the path is the message

for the input above, IROCLED should be returned.<br />_notes_<br />if no characters could be collected, return empty string

### solution
started at top left <br />down right +1, +1<br />up right +1, -1


1、for a 2D array, row’s length is equal to array.length,  column's length is equal to arr[0].length.<br />2、Detemine the given array is a 2D array, if it isn't, return empty string, else……<br />3、Define a row pointer as row and a column pointer as col.<br />4、Define a direction as row's direction, 1 down -1 up，at the same time, column's direction is always +1, from 0 column to last column.<br />5、start a while loop to get target string by making the pointer active within valid boundaries<br />6、In the while loop, everytime we record a letter, we move the row pointer through defined direction, and move the column pointer to the next column. after we do that, we need to determine if the row pointer is in the 2D array, if it isn't, we need to move it into the valid one by change row direction and move row pointer twice accorddingly.<br />7、The last step is return str.

```javascript
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} arr
 * @return {string}
 */
function decode(arr) {
    const rows = arr?.length
    const cols = arr[0]?.length
    let str = ''
    if (!rows || !cols) return str
    let row = 0 // row pointer
    let col = 0 // colomn pointer
    let direction = 1 // row's direction, 1 down -1 up


    // make the pointer active within valid boundaries
    while ((row >= 0 && row <= rows-1) && col < cols) {
        str += arr[row][col]
        col++
        row += direction
        // try to fix invalid row pointer into the valid one
        if (row < 0 || row > rows-1) {
            direction = -direction
            row += direction*2
        }
    }
    return str
}


let array = [
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

// [row, col]
// start
//   ↓                          [-1,5]
// [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6]
// [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,8] <-- end
// [2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6]
//                   [3,3]                   [3,7]

decode(array) // IROCLED
```


