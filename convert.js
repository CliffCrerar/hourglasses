
// convert text file into test sample 

const file = require('fs')
        .readFileSync('./sample.txt', 'utf8')
        .split('\n') // split by line break into array of rows
        .map(row => row.split('') // split each row into array of values
            .map(n => Number(n))); // convert string to number

console.log('twoDimArr: ', file);

require('fs').writeFileSync('sample.json',JSON.stringify(file),'utf8');  