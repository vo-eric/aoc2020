const fs = require('fs');

let data = fs
  .readFileSync('./data.txt', {
    encoding: 'utf-8'
  })
  .split('\n');

  
// Part 1
let numValidPartOne = 0;

for (let row of data) {
  let parts = row.split(' ');
  let range = parts[0].split('-');
  let min = parseInt(range[0]);
  let max = parseInt(range[1]);
  let password = parts[2];
  let count = 0;

  let letter = parts[1][0];

  for (let char of password) {
    if (char === letter) count++;
  }

  if (count >= min && count <= max) numValidPartOne++; 
}

//Part 2
let numValidPartTwo = 0;

for (let row of data) {
  let parts = row.split(' ');
  let acceptedIndices = parts[0].split('-');
  let pos1 = parseInt(acceptedIndices[0]);
  let pos2 = parseInt(acceptedIndices[1]);
  let password = parts[2];
  let indices = [];
  let letter = parts[1][0];

  for (let i = 0; i < password.split('').length; i++) {
    if (password[i] === letter ) indices.push(i + 1);
  }

  //Checks to see if the index is in either pos1 or pos2 and NOT in both pos1 and pos2
  if (
    (indices.includes(pos1) || indices.includes(pos2)) && 
    !(indices.includes(pos1) && indices.includes(pos2))
    ) {
    numValidPartTwo++;
  }
}

console.log(numValidPartOne);
console.log(numValidPartTwo);