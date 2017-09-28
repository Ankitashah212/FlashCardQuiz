//requires

var basicCard = require('./library/basic.js');
var cardDate = require('./basic.json');
var inquirer = require('inquirer');
var fs = require("fs");

//array of cards
var myCards = [];

// create an array of basic cards from json file
function makeCardsFromJson(inputJson){
    var myArray = [];
    for (i = 0; i < inputJson.basic.length; i++) {
        console.log(inputJson.basic[i].front, inputJson.basic[i].back);
        var card = basicCard(inputJson.basic[i].front, inputJson.basic[i].back);
        myArray.push(card);

    }
    return myArray;
}

// read input file
fs.readFile("basic.json", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        throw error;
    }
    // create an array of basic cards from json file
    myCards =  makeCardsFromJson(JSON.parse(data));
    startGame(myCards);
});




function startGame(inputData) {
    //code
    console.log("called " + inputData.length);
    for (var i = 0; i < inputData.length; i++) {
        console.log(inputData[i]);

    }
}

function endGame() {
    //codes
}

function round() {
    //codes
}

function prompts() {
    //codes
}
