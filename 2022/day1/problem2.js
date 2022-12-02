const fs = require('fs');

getData('problem1.txt').then(data => {
    let input = data.split('\n\n');
    let maxValues = [];

    input.forEach(x => {
        let sum = x.split('\n')
            .map(Number)
            .reduce((a, b) => a + b, 0);

        maxValues.push(sum);

        if (maxValues.length > 3) {
            maxValues.sort((a, b) => b - a);
            maxValues.pop();
        }
    });

    let sumOfMaxValues = maxValues.reduce((a, b) => a + b, 0);
    console.log(`Sum of top 3 is ${sumOfMaxValues}`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}