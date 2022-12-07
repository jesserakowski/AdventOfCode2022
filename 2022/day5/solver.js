const fs = require('fs');

getData('input.txt').then(data => {
    const input = data.split('\n');
    const stackDepth = input.findIndex(f => f.length === 0) - 1;
    const stackWidth = input[stackDepth].trim().split(' ').map(Number).pop();
    let stacks = [];
    const movements = input.slice(input.findIndex(f => f.length === 0) + 1);

    for (let w = 0; w < stackWidth * 4; w += 4) {
        let currStack = [];
        for (let d = 0; d < stackDepth; d++) {
            var crate = input[d].substring(w, w + 3).trim();
            if (crate.length > 0) {
                currStack.push(crate);
            }
        }
        stacks.push(currStack);
    }
    
    movements.forEach(item => {
        let moves = item.split(' ').map(Number).filter(Number.isInteger);
        let howMany = moves[0];
        let from = moves[1] - 1;
        let to = moves[2] - 1;
        stacks[to] = stacks[from].splice(0, howMany).reverse().concat(stacks[to]); // reverse added to solve part 2
    });

    let output = '';
    for (let i = 0; i < stackWidth; i++) {
        output += stacks[i][0];
    }

    console.log(`The top crates are ${output.replaceAll('[', '').replaceAll(']', '')}`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}