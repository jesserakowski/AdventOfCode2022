const fs = require('fs');

getData('input.txt').then(data => {
    const input = data.split('\n');
    let entireOverlapTotal = 0;
    let partialOverlapTotal = 0;

    input.forEach(item => {
        let currentPair = item.split(',');
        let begin = parseInt(currentPair[0].substring(0, currentPair[0].indexOf('-')));
        let end = parseInt(currentPair[0].substring(currentPair[0].indexOf('-') + 1));
        let begin1 = parseInt(currentPair[1].substring(0, currentPair[1].indexOf('-')));
        let end1 = parseInt(currentPair[1].substring(currentPair[1].indexOf('-') + 1));
        let rng = [...Array(end - begin + 1).keys()].map(x => x + begin);
        let rng2 = [...Array(end1 - begin1 + 1).keys()].map(x => x + begin1);

        if (rng.every(f => rng2.includes(f)) ||
            rng2.every(f => rng.includes(f))) {
            entireOverlapTotal++;
        }

        if (rng.find(f => rng2.includes(f)) !== undefined ||
            rng2.find(f => rng.includes(f)) !== undefined) {
            partialOverlapTotal++;
        }
    })

    console.log(`Total sets containing entire range: ${entireOverlapTotal}`);
    console.log(`Total sets containing partial range: ${partialOverlapTotal}`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}