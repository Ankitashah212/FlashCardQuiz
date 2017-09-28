//requires

var clozeCard = require('./library/cloze.js');
const cardData = "cloze.json";
var inquirer = require('inquirer');
var fs = require("fs");
var win = 0;

//array of cards
var myCards = [];

// create an array of basic cards from json file
function makeCardsFromJson(inputJson) {
    var myArray = [];
    for (i = 0; i < inputJson.cloze.length; i++) {
        var card = clozeCard(inputJson.cloze[i].sentence, inputJson.cloze[i].cloze);
        myArray.push(card);

    }
    return myArray;
}

// read input file
fs.readFile(cardData, "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        throw error;
    }
    // create an array of basic cards from json file
    myCards = makeCardsFromJson(JSON.parse(data));
    console.log("simple word association game, give the fist word / words you think of:");
    startGame(myCards);
});

var count = 0;
var wantToPlay = true;
function startGame(inputData) {
  
    if (wantToPlay) {
        // start a game
        inquirer.prompt([
            {
                name: "answer",
                message: inputData[count].getQuestion(),
            },
            {
                type: "confirm",
                message: "do you want to keep playing?:",
                name: "confirm",
                default: true
            }
        ]).then(function (answers) {
            if (answers.answer.toLowerCase() == (inputData[count].cloze).toLowerCase()) {
                win++;
            }
            wantToPlay = (answers.confirm && (count < inputData.length));
            count++;
            if (!(wantToPlay)) {
                endGame();
            }
            // run the askquestion function again so as to either end the loop or ask the questions again
            startGame(inputData);
        });
    }

}

function endGame() {
    //codes
    console.log("your score  = " + win + " out of " + count);
}

