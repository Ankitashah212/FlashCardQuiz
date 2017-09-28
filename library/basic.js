function basicCard(front, back) {
    if (this instanceof basicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new basicCard(front, back);
    }

}

basicCard.prototype.printInfo = function () {

    console.log(this.front, this.back);
}

module.exports = basicCard;
