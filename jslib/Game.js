function Game(){
    // Constants
    this.SIZE = 16;       // Side length of game board
    this.DRAW = 0;         // Used during the draw phase of a turn
    this.MOVE = 1;         // Used during the move phase of a turn
    this.DRAW_BUTTON = [4, 6];        // coordinates of the draw button
    this.SKIP_BUTTON = [4, 9];        // coordinates of the end turn button

    this.players = [null, null, null, null];         // Array of players in this game; can have 2-4 players
    this.deck = new Deck();                      // Deck to hold all the cards in the game
    this.game_grid = [];       // Grid to keep track of where all the minions are
    this.currentPlayer = 0;      // Index of player who is currently taking his or her turn
    this.currentCard = null;        // Card that is currently face-up; null if no card
    this.turnPhase = this.DRAW;    // Tells whether the
    this.playerNum = 0;

    this.initializeGrid();
    this.deck.generate_game_deck();
}

Game.prototype.getDeck = function() {
    return this.deck;
};

Game.prototype.getMinion = function(position) {
    return this.game_grid[position.r][position.c];
};

Game.prototype.removeMinion = function(position) {
    var row = position.r;
    var col = position.c;
    this.game_grid[row][col] = null;
};

Game.prototype.addMinion = function(position, minion) {
    var row = position.r;
    var col = position.c;
    var old_minion = this.game_grid[row][col];
    if (old_minion !== null) {
        old_minion.bummer();
    }
    this.game_grid[row][col] = minion;
};

Game.prototype.Click = function(buttonCoords){
    switch (this.turnPhase) {
        case this.DRAW:
            // Draw a card and go to move phase
            if (buttonCoords[0] === this.DRAW_BUTTON[0] && buttonCoords[1] === this.DRAW_BUTTON[1]) {
                this.currentCard = this.deck.drawCard();
                this.turnPhase = this.MOVE;
            }
            break;
        case this.MOVE:
            // Try to make the selected move. If successful, go to next player's draw phase
            if ((buttonCoords[0] === this.SKIP_BUTTON[0] && buttonCoords[1] === this.SKIP_BUTTON[1]) ||
                this.players[this.currentPlayer].play(this.currentCard, buttonCoords)) {

                //2 Card makes player draw again
                if(this.currentCard.cardNum !== 2){
                    this.nextPlayer();
                }
                this.turnPhase = this.DRAW;
                this.currentCard = null;
            }
            break;
    }
    this.view.update();
};

Game.prototype.initializeGrid = function(){
    for (var col = 0; col < this.SIZE; col++) {
        this.game_grid.push([]);
        for (var row = 0; row < this.SIZE; row++) {
            this.game_grid[col].push(null);
        }
    }
};

Game.prototype.getPlayers = function(){
    return this.players;
};

Game.prototype.addPlayer = function(index, name){
    // should use this instead of in constructor
    this.players[index] = new Player(name, ["yellow", "green", "red", "blue"][index], this);
};

Game.prototype.clearPlayers = function() {
    this.players = [];
};

Game.prototype.getCurrentPlayer = function(){
    return this.players[this.currentPlayer];
};

Game.prototype.getCurrentCard = function(){
    return this.currentCard;
};

Game.prototype.nextPlayer = function(){
    var player = null;
    while (player === null) {
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        player = this.players[this.currentPlayer];
    }
};

Game.prototype.get_winner = function () {
    for (var player_number = 0; player_number < 4; player_number++) {
        var player = this.players[player_number];
        if (player !== null && player.checkWin()) {
            return player;
        }
    }
    return null;
};