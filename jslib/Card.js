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