const fs = require('fs');

let data = fs
  .readFileSync('day1.txt', {
    encoding: 'utf-8'
  })
  .split('\n');


//Part 1
for (let i = 0; i < data.length; i++) {
  for (let j = i + 1; j < data.length; j++) {
    if (parseInt(data[i]) + parseInt(data[j]) === 2020) {
      console.log(parseInt(data[i] * parseInt(data[j])));
    }
  }
}

//Part 2
for (let i = 0; i < data.length; i++) {
  for (let j = i + 1; j < data.length; j++) {
    for (let k = i + j + 1; k < data.length; k++) {
      if (parseInt(data[i]) + parseInt(data[j]) + parseInt(data[k]) === 2020) {
        console.log(parseInt(data[i] * parseInt(data[j]) * parseInt(data[k])));
      }
    }
  }
}

