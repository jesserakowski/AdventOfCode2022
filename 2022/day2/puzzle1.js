const fs = require('fs');

getData('input.txt').then(data => {
    let input = data.split('\n');
    let totalScore = 0;
    const shapes = [{ name: "Rock", letters: "A|X", "score": 1, "beats": "Scissors" },
    { name: "Paper", "letters": "B|Y", "score": 2, "beats": "Rock" },
    { name: "Scissors", "letters": "C|Z", "score": 3, "beats": "Paper" }]

    input.forEach((x) => {
        let opponentLetter = x.split(' ')[0];
        let playerLetter = x.split(' ')[1];
        let opponentShape = shapes.find(shape => shape.letters.includes(opponentLetter));
        let playerShape = shapes.find(shape => shape.letters.includes(playerLetter));

        if (playerShape.beats == opponentShape.name) {
            totalScore += 6 + playerShape.score;
            return;
        }

        if (playerShape == opponentShape) {
            totalScore += 3 + playerShape.score;
            return;
        }

        totalScore += playerShape.score;
    });

    console.log(`Total score is ${totalScore}.`);
});

function getData(file) {
    return fs.promises.readFile(`${__dirname}/${file}`, 'utf8');
}