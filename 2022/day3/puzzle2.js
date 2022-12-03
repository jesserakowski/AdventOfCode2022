const fs = require('fs');

getData('input.txt').then(data => {
    const input = data.split('\n');
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charConversion = lowerCaseLetters + upperCaseLetters;
    let currSack = [];
    let groupSacks = [];
    let runningTotal = 0;

    input.forEach((item, index) => {
        currSack.push(Array.from(item));
        if ((index + 1) % 3 === 0) {
            groupSacks.push(currSack);
            currSack = [];
        }
    })

    groupSacks.forEach((item, index) => {
        let sharedLetter = item[0].filter(x => item[1].includes(x) && item[2].includes(x));

        if (sharedLetter[0] === undefined) {
            return;
        }

        runningTotal += (charConversion.indexOf(sharedLetter[0]) + 1);
    });
    console.log(`Total is ${runningTotal}`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}