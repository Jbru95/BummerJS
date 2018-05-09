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