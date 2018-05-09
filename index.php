<!DOCTYPE html>
<html lang="en">
<head>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="site.con.js"></script>
    <script>
        $(document).ready(function() {
            game = new Game();
            new GameView(game);
        });
    </script>
    <meta charset="UTF-8">
    <title>Bummer Game</title>
    <link href="css/bummer.css" type="text/css" rel="stylesheet" />
</head>
<header>
    <h1>Minion Bummer</h1>
</header>
<body>
<form class="name">
    <h2>Player select</h2>
    <h3>Team Craig</h3>
    <p>
        <label for="p1">Player 1 name:</label>
        <input type="text" name="p1" id="p1">
        <img src="images/minion-yellow.png" alt="yellow-minion"/>
    </p>
    <p>
        <label for="p2">Player 2 name:</label>
        <input type="text" name="p2" id="p2">
        <img src="images/minion-green.png" alt="green-minion"/>
    </p>
    <p>
        <label for="p3">Player 3 name:</label>
        <input type="text" name="p3" id="p3">
        <img src="images/minion-red.png" alt="red-minion"/>
    </p>
    <p>
        <label for="p4">Player 4 name:</label>
        <input type="text" name="p4" id="p4">
        <img src="images/minion-blue.png" alt="blue-minion"/>
    </p>
    <p class="gripe"></p>
    <p>
        <input type="submit" name="Submit Names" id="Submit Names">
    </p>

</form>

<div class ="game"></div>

</body>
</html>