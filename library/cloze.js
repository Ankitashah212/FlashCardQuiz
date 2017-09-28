function clozeCard(sentence, cloze){

    if (this instanceof clozeCard) {
        this.sentence = sentence;
        this.cloze = cloze;
    } else {
        return new clozeCard(sentence, cloze);
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
