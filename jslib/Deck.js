function Deck() {
    this.deck = [];
    this.deckSize = 0;
    this.DECK_LIST = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 7, 7, 7, 7, 8, 8, 8, 8, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];
    // this.DECK_LIST = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 13, 13, 13, 13]; // More 1's and 2's (for testing)
    this.card_pop = null;
}

Deck.prototype.generate_game_deck = function(){
    for(var i =0; i<this.DECK_LIST.length; i++){
        this.addCard(this.DECK_LIST[i]);
    }
    this.shuffleDeck();
};

Deck.prototype.drawCard = function(){
    //pops and returns card at end of deck array, returns null if 0 cards in deck
    if (this.deckSize > 0){//
        this.deckSize -= 1;
    }
    else if (this.deckSize === 0){//if deck is empty
        this.generate_game_deck(); //generate a new deck, deckSize set back at 45
        this.deckSize -= 1;
    }
    this.card_pop = this.deck[this.deck.length-1];
    return this.deck.pop();
};

Deck.prototype.getDeck = function(){
    return this.deck;
};

Deck.prototype.getDeckSize = function(){
    return this.deckSize;
};

Deck.prototype.addCard = function(cardNum){
    var card = new Card(cardNum);
    this.deck.push(card);
    this.deckSize += 1;
};

Deck.prototype.shuffleDeck = function(){
    this.shuffle(this.deck);
};

Deck.prototype.getCardPop = function() {
    return this.card_pop;
};

Deck.prototype.shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};

