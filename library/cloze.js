const log4js = require('log4js');
log4js.configure({
    appenders: { clozeErr: { type: 'file', filename: 'output.log' } },
    categories: { default: { appenders: ['clozeErr'], level: 'info' } }
});

//logger object to log output
const logger = log4js.getLogger('clozeErr');



function clozeCard(sentence, cloze) {

    if (this instanceof clozeCard) {
        this.sentence = sentence;
        this.cloze = cloze;
    } else {
        if (sentence.includes(cloze)) {
            return new clozeCard(sentence, cloze);
        }
        else {
            logger.fatal("Faulty Card : doesn't contain cloze " + sentence + "  " + cloze);
        }
    }

}
clozeCard.prototype.filler = "  ... ";

clozeCard.prototype.printInfo = function () {

    console.log(this.sentence, this.cloze);
}

clozeCard.prototype.getQuestion = function () {

    return (this.sentence.replace(this.cloze, this.filler))
}

module.exports = clozeCard;
