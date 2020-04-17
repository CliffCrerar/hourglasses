/* 
    Highest Value Hour Glass Solutions 
    Author: Cliff Crerar
*/

// function: determines the current our glass
// - will be executed during iterations
// - takes the xc and yc parameter which are the two parts of a co-ordinate
// - then from that origin and returns it's sum to the current iteration
// - r is the two dimensional array or table

function calculateOne(xc, yc, r) { // function statement 

    try { // error handles the function of any of the positions return undefined

        /* Hour glasses are defined by 7 co-ordinates */
        return [
        /* position 0 */r[yc][xc],
        /* position 1 */r[yc][xc + 1],
        /* position 2 */r[yc][xc + 2],
        /* position 3 */r[yc + 1][xc + 1],
        /* position 4 */r[yc + 2][xc],
        /* position 5 */r[yc + 2][xc + 1],
        /* position 6 */r[yc + 2][xc + 2]
        ]
        // uses a reducer function to sum the values in the hourglass array
        .reduce((total, next) => {
            if (next === null) // if value is null then throw error
                throw new Error('No position can be undefined');
            return total += next
        });

    } catch (err) {
        return null;
        // if error is thrown function returns null 
        // it is bad practice to use undefined
        // undefined is a type that can be use to evaluation but
        // must never be explicitly assigned 
        // 
        // WRONG:
        //      let variable = undefined
        // OK:
        //      if(variable===undefined) { } else { }

    }
}

function solution(arr) {

    const // declarations
        xMax = arr[0].length,
        yMax = arr.length;

    let
        h = 0; // highest value starts at highest value 0;

    console.log('length of X: ', xMax); // logs the number of columns
    console.log('length of Y: ', yMax); // logs the number of rows

    for (let y = 0; y < arr.length; y++) {

        for (let x = 0; x < arr[y].length; x++) {

            const i = calculateOne(x, y, arr);

            h = i === null ? h : i > h ? i : h; // nested ternary statements
            // above is called a ternary statement,
            // condition ? *value if true* : *value if false*
            // just syntactic sugar and more concise than a 
            /**
                if(condition){
                    do something if true
                } else {
                    do something if false
                }
             */
        }
    }
    return h; // write pure functions, always use return even if return  void
}

console.log('|----------------------------------------------------------------|');
console.log('|-------------------------- LOAD TEST ---------------------------|');

const testSampleOne = [
    [0, 1, 0, 1, 0, 2, 0, 3, 0, 4, 2, 0, 3, 4, 5, 0, 3, 4, 1, 0, 2, 3],
    [3, 2, 0, 3, 4, 0, 4, 5, 3, 0, 4, 0, 2, 3, 4, 0, 4, 0, 5, 3, 4, 3],
    [1, 2, 0, 3, 2, 3, 0, 4, 4, 0, 5, 3, 4, 5, 0, 6, 0, 5, 6, 4, 2, 3],
    [2, 3, 0, 4, 0, 2, 3, 4, 0, 5, 0, 3, 4, 5, 3, 5, 0, 6, 4, 0, 5, 2],
    [2, 3, 0, 4, 2, 3, 5, 3, 0, 4, 5, 3, 0, 4, 5, 0, 3, 4, 5, 0, 2, 4],
    [2, 3, 4, 0, 2, 5, 4, 3, 0, 5, 3, 0, 6, 3, 0, 2, 3, 4, 2, 4, 3, 5]
]

const testSolutionOne = solution(testSampleOne);
console.log('testSolutionOne: ', testSolutionOne);

const testSampleTwo = JSON.parse(require('fs').readFileSync('./sample.json','utf8'));
const testSolutionTwo = solution(testSampleTwo);
console.log('testSolutionTwo: ', testSolutionTwo);
console.log('|-------------------------- LOAD TEST ---------------------------|');

const problem = [
    [0, 1, 5, 2, 2, 5, 0, 0, 7],
    [0, 2, 5, 8, 9, 2, 0, 1, 3],
    [1, 0, 2, 2, 6, 5, 3, 0, 4],
    [8, 8, 0, 0, 7, 1, 2, 0, 9],
    [7, 0, 1, 1, 0, 8, 2, 4, 7],
    [0, 0, 0, 0, 2, 3, 5, 8, 0]
]
const problemAnswer = solution(problem);
console.log('|-------------------------- ANSWER ---------------------------|');
console.log('\tproblemAnswer: ', problemAnswer);
console.log('|-------------------------- ANSWER ---------------------------|');



