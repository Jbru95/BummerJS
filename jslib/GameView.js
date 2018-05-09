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