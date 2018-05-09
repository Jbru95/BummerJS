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