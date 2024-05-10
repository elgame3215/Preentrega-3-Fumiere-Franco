class Player {
    cards = [];
    isPlaying = true;
    askCard() {
        this.cards.push( randomCard() );
    }
    stand() {
        this.isPlaying = false;
    }
}