const fs = require('fs');

getData('input.txt').then(data => {
    const input = data.split('\n');
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charConversion = lowerCaseLetters + upperCaseLetters;
    let rowPriority = [];

    input.forEach(item => {
        console.log(item);
        let middle = (item.length / 2) - 1;
        let container1 = Array.from(item.substring(0, middle + 1));
        let container2 = Array.from(item.substring(middle + 1, item.length + 1));
        let intersect = container1.filter(x => container2.includes(x));

        if (intersect.length <= 0) {
            console.log('none found');
            return;
        }

        rowPriority.push(charConversion.indexOf(intersect[0]) + 1);
    })
    console.log(`Total priority is ${rowPriority.reduce((a, b) => a + b, 0)}`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}