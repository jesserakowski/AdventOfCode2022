const fs = require('fs');

getData('input.txt').then(data => {
    let input = data.split('\n');
    let totalScore = 0;
    const shapes = [{ name: "Rock", letters: "A|X", "score": 1, "beats": "Scissors" },
    { name: "Paper", "letters": "B|Y", "score": 2, "beats": "Rock" },
    { name: "Scissors", "letters": "C|Z", "score": 3, "beats": "Paper" }]

    input.forEach((x) => {
        let opponentLetter = x.split(' ')[0];
        let desiredResult = x.split(' ')[1];
        let opponentShape = shapes.find(shape => shape.letters.includes(opponentLetter));

        if (desiredResult === 'Z') {
            totalScore += 6 + shapes.find(shape => shape.beats == opponentShape.name).score
            return;
        }

        if (desiredResult === 'Y') {
            totalScore += 3 + opponentShape.score;
            return;
        }

        totalScore += shapes.find(shape => shape.name === opponentShape.beats).score;
    });

    console.log(`Total score is ${totalScore}.`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}