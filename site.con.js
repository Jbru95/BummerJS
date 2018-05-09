/*! DO NOT EDIT project3 2018-05-02 */
function Card(cardNum) {
    this.SAFE_SPACES = [0, 60, 61, 62, 63, 64, 65];
    this.cardNum = cardNum;
}

Card.prototype.getCardNum = function () {
    return this.cardNum;
};

Card.prototype.playCard = function (minion, buttonClicked) {
    var r = buttonClicked[0];
    var c = buttonClicked[1];
    var button = minion.getPositionFromArray(c, r);

    switch (this.cardNum) {
        case 1:
            if (minion.getPosition() === 66) {
                if (button === 1) {
                    minion.move(-65);
                    return true;
                }
            } else if (minion.getPosition() < 65) {
                if (button === minion.getPosition() + 1) {
                    minion.move(1);
                    return true;
                }
            }
            break;
        case 2:
            if (minion.getPosition() === 66) {
                if (button === 2) {
                    minion.move(-64);
                    return true;
                }
            } else if (minion.getPosition() === 0) {
                if (button === 1) {
                    minion.move(1);
                    return true;
                }
            } else if (minion.getPosition() < 64) {
                if (button === minion.getPosition() + 2) {
                    minion.move(2);
                    return true;
                }
            }
            break;
        case 3:
            if (minion.getPosition() === 66) {
                if (button === 3) {
                    minion.move(-63);
                    return true;
                }
            } else if (minion.getPosition() < 63 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 3) {
                    minion.move(3);
                    return true;
                }
            }
            break;

        case 4:
            if (minion.getPosition() === 66) {
                if (button === 56) {
                    minion.move(-10);
                    return true;
                }
            } else if (minion.getPosition() === 4) {
                if (button === 66) {
                    minion.move(62);
                    return true;
                }
            } else if (minion.getPosition() < 4 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 56) {
                    minion.move(56);
                    return true;
                }
            } else if (minion.getPosition() !== 0) {
                if (button === minion.getPosition() - 4) {
                    minion.move(-4);
                    return true;
                }
            }
            break;

        case 5:
            if (minion.getPosition() === 66) {
                if (button === 5) {
                    minion.move(-61);
                    return true;
                }
            } else if (minion.getPosition() < 61 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 5) {
                    minion.move(5);
                    return true;
                }
            }
            break;

        case 7:
            if (minion.getPosition() === 66) {
                if (button === 7) {
                    minion.move(-59);
                    return true;
                }
            } else if (minion.getPosition() < 59 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 7) {
                    minion.move(7);
                    return true;
                }
            }
            break;

        case 8:
            if (minion.getPosition() === 66) {
                if (button === 8) {
                    minion.move(-58);
                    return true;
                }
            } else if (minion.getPosition() < 58 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 8) {
                    minion.move(8);
                    return true;
                }
            }
            break;

        case 10:
            if (minion.getPosition() === 66) {
                if (button === 10) {
                    minion.move(-56);
                    return true;
                } else if (button === 59) {
                    minion.move(-7);
                    return true;
                }
            } else if (minion.getPosition() === 1) {
                if (button === 66) {
                    minion.move(65);
                    return true;
                }
            } else if (minion.getPosition() > 1 && button === minion.getPosition() - 1) {
                minion.move(-1);
                return true;
            } else if (minion.getPosition() < 56 && minion.getPosition() > 0 && button === minion.getPosition() + 10) {
                minion.move(10);
                return true;
            }
            break;

        case 11:
            if (minion.getPosition() === 66) {
                if (button === 11) {
                    minion.move(-55);
                    return true;
                } else if (button === 58) {
                    minion.move(-8);
                    return true;
                }
            } else if (minion.getPosition() === 2) {
                if (button === 66) {
                    minion.setPosition(66);
                    return true;
                }
            } else if (minion.getPosition() === 1) {
                if (button === 59) {
                    minion.setPosition(59);
                    return true;
                }
            } else if (minion.getPosition() > 2 && button === minion.getPosition() - 2) {
                minion.move(-2);
                return true;
            } else if (minion.getPosition() < 55 && minion.getPosition() > 0 && button === minion.getPosition() + 11) {
                minion.move(11);
                return true;
            }
            break;

        case 12:
            if (minion.getPosition() === 66) {
                if (button === 12) {
                    minion.move(-54);
                    return true;
                }
            } else if (minion.getPosition() < 54 && minion.getPosition() > 0) {
                if (button === minion.getPosition() + 12) {
                    minion.move(12);
                    return true;
                }
            }
            break;

        case 13:
            if (minion.getPosition() === 0 && $.inArray(button, this.SAFE_SPACES) === -1 &&
                minion.game.getMinion({r: r, c: c}) !== null && minion.game.getMinion({r: r, c: c}).color !== minion.color) {
                minion.move(button);
                return true;
            }
            break;

        default:
            return false;
    }
};
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
function GameView(game) {
    this.game = game;
    game.view = this;

    this.game_div = $('div.game');
    this.name_form = $('form.name');
    var that = this;
    this.name_form.submit(function(event) {
        event.preventDefault();
        var gripe = $(".gripe");
        gripe.text("");

        var player_count = 0;

        for (var player_number = 1; player_number <= 4; player_number++) {
            var name = $('#p' + player_number).val();
            if (name !== "") {
                that.game.addPlayer(player_number - 1, name);
                player_count += 1;
            }
        }

        if(player_count < 2){
            gripe.text("Please enter at least 2 players!");
            that.game.clearPlayers();
        } else{
            that.name_form.hide();
            that.build_board();
            that.game_div.show();
        }
    });
}

GameView.prototype.build_board = function() {
    // Build board
    var html = '';
    for (var row = 0; row < 16; row++) {
        html += '<div class="row">';
        for (var col = 0; col < 16; col++) {
            html += '<div class="cell"><button></div>';
        }
        html += '</div>';
    }
    html += '<image src="" alt="current card" height="308px" width="200px" class="card">' +
        '<p class = "player_display">Player: <span id="current_player"></span>\n' +
        '<image id="current_minion" src="" height="28px" width="28px" alt="current player\'s minion"></p>';
    $('.game').html(html);

    // Install click listeners
    var rows = this.game_div.children();
    for (row = 0; row < 16; row++) {
        var cells = rows.eq(row).children();
        for (col = 0; col < 16; col++) {
            this.install_listener(cells.eq(col).children(), this.game, row, col);
        }
    }

    this.update();
};

GameView.prototype.install_listener = function(button, game, row, col) {
    button.click(function() {
        game.Click([row, col]);
    });
};

GameView.prototype.update = function() {
    // If someone has won, replace the board with a congratulation
    var winner = this.game.get_winner();
    if (winner !== null) {
        this.game_div.html('<form><h2>Congratulations!</h2><h2>' + winner.name + ' wins!</h2></form>');
        this.game_div.css('background-image', 'none');
        this.game_div.css('border', 'none');
        this.game_div.css('height', 'auto');
        this.game_div.css('width', 'auto');
        return;
    }

    // Update card
    var card = this.game.getCurrentCard();
    var card_image = $('.card');
    if (card === null) {
        card_image.attr('src', 'images/card-back.png');
    } else if (card.getCardNum() === 13) {
        card_image.attr('src', 'images/card-bummer.png');
    } else {
        card_image.attr('src', 'images/card-' + card.getCardNum() + '.png');
    }

    // Update current player
    var player1 = this.game.getCurrentPlayer();
    if(player1 !== null){
        $('#current_player').html(player1.getName());
        $('#current_minion').attr('src', 'images/minion-' + player1.getColor() + '.png');
    } else{
        this.game.nextPlayer();
        player1 = this.game.getCurrentPlayer();
        $('#current_player').html(player1.getName());
        $('#current_minion').attr('src', 'images/minion-' + player1.getColor() + '.png');
    }

    // Add minions
    $('.cell').css('background-image', 'none');     // Clear old minions
    var players = this.game.getPlayers();
    for (var i = 0; i < 4; i++) {
        player = players[i];
        if (player !== null) {
            var minions = player.getMinions();
            for (var j = 0; j < 3; j++) {
                var minion = minions[j];
                var position = minion.getArrayFromPosition();
                var color = minion.getColor();
                var cell = this.game_div.children().eq(position.r).children().eq(position.c);
                cell.css('background-image', 'url(images/minion-' + color + '.png)');
            }
        }
    }

    // Add 'Draw Card' and 'End Turn' buttons
    var button_row = this.game_div.children().eq(4);
    button_row.children().eq(6).css('background-image', 'url(images/draw.png)');
    button_row.children().eq(9).css('background-image', 'url(images/end_turn.png)');
};
function Minion(c, homeBase, game){
    this.POSSIBLEPOSITIONS = 0;
    this.SLIDE = [13, 14, 15, 21, 22, 23, 24, 28, 29, 30, 36, 37, 38, 39, 43, 44, 45, 51, 52, 53, 54];
    this.SLIDE_START = [13,21,28,36,43,51];
    this.position = 0;
    //this.state;
    this.game = game;
    this.color = c;
    this.homeBase = homeBase;
    switch(c){
        case "blue":
            this.image = "images/minion-blue.png";
            break;
        case "green":
            this.image = "images/minion-green.png";
            break;
        case "red":
            this.image = "images/minion-red.png";
            break;
        case "yellow":
            this.image = "images/minion-yellow.png";
            break;
    }
}

Minion.prototype.move = function(distance) {
    this.game.removeMinion(this.getArrayFromPosition());
    this.position += distance;
    this.game.addMinion(this.getArrayFromPosition(), this);
    if($.inArray(this.position, this.SLIDE_START) !== -1) {
        while ($.inArray(this.position, this.SLIDE) !== -1) {
            this.move(1);
        }
    }
};

Minion.prototype.bummer = function() {
    this.game.removeMinion(this.getArrayFromPosition(this.position));
    this.position = 0;
    this.game.addMinion(this.getArrayFromPosition(this.position), this);
};

Minion.prototype.getYellowArray = function() {
    if(this.position === 0) {
        // We are at home!
        return {c: 13, r: 3 + this.homeBase};
    } else if(this.position <= 12) {
        return {c: 15, r: 3 + this.position};
    } else if(this.position <= 27) {
        return {c: 15 - (this.position - 12), r: 15};
    } else if(this.position <= 42) {
        return {c: 0, r: 15 - (this.position - 27)};
    } else if(this.position <= 57) {
        return {c: (this.position - 42), r: 0};
    } else if(this.position <= 59) {
        return {c: 15, r:  (this.position - 57)};
    } else if(this.position <= 64) {
        return {c: 15 - (this.position - 59), r: 2};
    } else if(this.position === 65){    // Home is at 65
        return {c: 8, r: 1 + this.homeBase};
    } else if(this.position === 66){
        return {c: 15, r: 3};
    }
    return [];
};

Minion.prototype.getArrayFromPosition = function() {
    var cell = this.getYellowArray();
    var r = cell.r;
    var c = cell.c;
    switch(this.color) {
        case "yellow":
            return cell;
        case "red":     // Red
            return {c: this.game.SIZE - c - 1, r: this.game.SIZE - r - 1};
        case "green":     // Green
            return {c: this.game.SIZE - r - 1, r: c};
        case "blue":     // Blue
            return {c: r, r: this.game.SIZE - c - 1};
        default:
            return [];
    }
};
Minion.prototype.getYellowPosition = function(c, r) {
    if(c === 13 && r >= 3 && r <= 5) {
        return 0;  // We are at home!
    } else if(c === 15 && r >= 4 && r <=15) {
        return r - 3;
    } else if(r === 15 && c >= 1 && c <= 15) {
        return 27 - c;
    } else if(c === 0 && r >= 1 && r <= 15) {
        return 42 - r;
    } else if(r === 0 && c >= 0 && c <= 15) {
        return 42 + c;
    } else if(c ===15 && r >= 0 && r <= 1) {
        return 57 + r;
    } else if(r === 2 && c >= 10 && c <=15) {
        return 74 - c;
    } else if(r >= 1 && r <= 3 && c === 8) {
        return 65;  // Home is at 65
    } else if(r === 3 && c === 15){
        return 66;    // between 59 and 1
    }
    return [];
};

Minion.prototype.getPositionFromArray = function(c, r) {
    switch(this.color){
        case "yellow":
            return this.getYellowPosition(c, r);
        case "red":     // Red
            return this.getYellowPosition(this.game.SIZE - c - 1, this.game.SIZE - r - 1);
        case "green":     // Green
            return this.getYellowPosition(r, this.game.SIZE - c - 1);
        case "blue":     // Blue
            return this.getYellowPosition(this.game.SIZE - r - 1, c);
    }
    return [];
};

Minion.prototype.getPosition = function() {
    return this.position;
};

Minion.prototype.setPosition = function(position) {
    this.position = position;
};

Minion.prototype.getState = function() {
    return this.state;
};

Minion.prototype.setState = function(state) {
    this.state = state;
};

Minion.prototype.getImage = function() {
    return this.image;
};

Minion.prototype.getGame = function() {
    return this.game;
};

Minion.prototype.setGame = function(game) {
    this.game = game;
};

Minion.prototype.getColor = function() {
    return this.color;
};
function Player(name, color, game){
    this.NUM_MINIONS = 3;
    this.name = name;
    this.color = color;
    this.minions = [];
    for (var i = 0; i < this.NUM_MINIONS; i++) {
        this.minions.push(new Minion(color, i, game));
    }
    this.game = game;
    this.bummer = false;

}
Player.prototype.play = function(card, buttonCoords) {
    //if($card->getCardNum() == 13){
    // $this->bummer = true;
    //}
    for (var i = 0; i < 3; i++) {
        if(card.playCard(this.minions[i], buttonCoords)){
            return true; // Play was successful
        }
    }
    return false; // Invalid play
};

Player.prototype.getName = function(){
    return this.name;
};

Player.prototype.getColor = function(){
    return this.color;
};

Player.prototype.checkWin = function(){
    for(var i = 0; i < this.NUM_MINIONS; i++){
        if(this.minions[i].getPosition() !== 65){
            return false;
        }
    }
    return true;
};

Player.prototype.setName = function(name) {
    this.name = name;
};

Player.prototype.getMinions = function(){
    return this.minions;
};

Player.prototype.isBummer = function(){
    return this.bummer;
};