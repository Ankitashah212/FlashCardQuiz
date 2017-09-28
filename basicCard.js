//requires

var basicCard = require('./library/basic.js');
const cardData = "basic.json";
var inquirer = require('inquirer');
var fs = require("fs");
var win = 0;

//array of cards
var myCards = [];

// create an array of basic cards from json file
function makeCardsFromJson(inputJson) {
    var myArray = [];
    for (i = 0; i < inputJson.basic.length; i++) {
        // console.log(inputJson.basic[i].front, inputJson.basic[i].back);
        var card = basicCard(inputJson.basic[i].front, inputJson.basic[i].back);
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

function startGame(inputData) {
    if (count < (inputData.length)) {
        // start a game
        inquirer.prompt([
            {
                name: "answer",
                message: inputData[count].front,
            }
        ]).then(function (answers) {
            // check if correct ans
            if (answers.answer.toLowerCase() == (inputData[count].back).toLowerCase()) {
                win++;
            }
            count++;
            // run the function again so as to either end the loop or ask the questions again
            startGame(inputData);
        });
    } else {
        endGame();
    }
}

function endGame() {
    //codes
    console.log("your score  = " + win + " out of " + count);
}

