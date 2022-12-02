const fs = require('fs');

getData('input1.txt').then(data => {
  let input = data.split('\n\n');
  let maxValue = 0;

  input.forEach(x => {
    let sum = x.split('\n')
      .map(Number)
      .reduce((a, b) => a + b, 0);
    
    if (sum > maxValue) {
      maxValue = sum;
    }
  });

  console.log(`Max value is ${maxValue}`);
});

function getData(file) {
  return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}