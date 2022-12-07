const fs = require('fs');

getData('input.txt').then(data => {
    let letters = data.split('');
    let count = 14;

    letters.every((letter, i) => {
        var current = letters.slice(i, i + 14);
        let temp = [...new Set(current)];

        if (current.length !== temp.length) {
            count++;
        } else {
            console.log('Ending with count ' + count);
            return false;
        }
        return true;
    });
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}