$(document).ready(function() {
    $('#body').show();

    $.getScript("assets/js/crud.js", function() {
       console.log("Script loaded but not necessarily executed.");
    });

});


    var questions = [];
    var questionsEasy = [];
    var questionsNormal = [];
    var questionsHard = [];

    window.onload = function() {
        $('#ajax-panel').hide();
        getCustomQuestions();

    };

    var allowMove = "dontAllow";

    var waitForMove = 0;

    var turns = ["yellow", "blue", "red", "green"];
    var turnHelper = 0;
    var turn = turns[turnHelper];

    var turnCounter = 0;

    var diceResult;
    var lastRoll;
    var randomNumber;

    var dice = {
        sides: 6,
        roll: function() {
            lastRoll = randomNumber;
            randomNumber = Math.floor(Math.random() * this.sides) + 1;

            if (waitForMove == 1) {
                document.getElementById('moveMessage').innerHTML = "Pomaknite pijunca!";
                return diceResult;
            } else if (isEverybodyHome(turn) && turnCounter < 3) {
                waitForMove = 1;
                turnCounter += 1;
            } else {
                turnCounter = 1;
                nextTurn(lastRoll);
            }
            waitForMove = 1;
            return randomNumber;
        }
    }

    // Changes turns between players

    function nextTurn(lastRoll) {
        if (lastRoll == 6) {
            return true;
        } else {
            turnHelper += 1;
            turn = turns[turnHelper];

            if (turnHelper == 3) {
                turnHelper = -1;
            }
        }
    }

    // Checks if all pieces of specific player are in home box

    function isEverybodyHome(playerColor) {
        var isEverybodyHome = true;

        for (var i = 0; i < allPieces.length; i++) {
            if (allPieces[i].type == (playerColor + "Piece")) {
                if (allPieces[i].position != allPieces[i].boxPosition) {
                    isEverybodyHome = false;
                    break;
                }
            }
        }
        return isEverybodyHome;
    }

    function finishTurn() {
        diceResult = 0;
        waitForMove = 0;
        document.getElementById('PlaceForResult').innerHTML = "Bacite kockicu!";
        document.getElementById('moveMessage').innerHTML = "";
    }


    function printDice(number) {
        document.getElementById('PlaceForResult').innerHTML = number;
        document.getElementById('PlaceForCurrentTurn').innerHTML = turn;
    }

    function isNumber(n) { 
        return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
    }

    var audio = document.getElementById("audio");
    var button = document.getElementById('diceButton');
    button.onclick = function() {
        diceResult = dice.roll();
        audio.play();
        printDice(diceResult);

        if (diceResult == 1) { document.getElementById('diceButton').src = "images/1.svg"; } 
        else if (diceResult == 2) { document.getElementById('diceButton').src = "images/2.svg"; } 
        else if (diceResult == 3) { document.getElementById('diceButton').src = "images/3.svg"; } 
        else if (diceResult == 4) { document.getElementById('diceButton').src = "images/4.svg"; } 
        else if (diceResult == 5) { document.getElementById('diceButton').src = "images/5.svg"; } 
        else if (diceResult == 6) { document.getElementById('diceButton').src = "images/6.svg"; }

        if (turn == "yellow") { document.getElementById('turn').src = "images/fig_zuta.svg"; } 
        else if (turn == "blue") { document.getElementById('turn').src = "images/fig_plava.svg"; } 
        else if (turn == "red") { document.getElementById('turn').src = "images/fig_crvena.svg"; } 
        else if (turn == "green") { document.getElementById('turn').src = "images/fig_zelena.svg"; }

        if (isEverybodyHome(turn) && diceResult != 6) {
            finishTurn();
        }else{
            printQuestion(diceResult);
        };
    };

    var skipTurn = document.getElementById('skipTurn');
    skipTurn.onclick = function() {
        finishTurn();
    };


    // This method changes position of Piece by changing field classes

    function changePostitionOnBoard(pieceType, oldPosition, newPosition) {
        console.log("change pos called, old position is:",oldPosition," new position is: ", newPosition, " and pieceType is: ", pieceType);
        document.getElementById(oldPosition).classList.remove(pieceType);
        document.getElementById(newPosition).classList.add(pieceType);
    }

    function getFieldNumberById(fieldId, pieceColor) {
        console.log(pieceColor);
        if (pieceColor == 'yellowPiece') {
            for (var i = 0; i < yellowPlayBoxFields.length; i++) {
                if (yellowPlayBoxFields[i].elementId == fieldId) {
                    return yellowPlayBoxFields[i].numOfField;
                }
            }
        } else if (pieceColor == 'bluePiece') {
            for (var i = 0; i < bluePlayBoxFields.length; i++) {
                if (bluePlayBoxFields[i].elementId == fieldId) {
                    return bluePlayBoxFields[i].numOfField;
                }
            }
        } else if (pieceColor == 'redPiece') {
            for (var i = 0; i < redPlayBoxFields.length; i++) {
                if (redPlayBoxFields[i].elementId == fieldId) {
                    return redPlayBoxFields[i].numOfField;
                }
            }
        } else if (pieceColor == 'greenPiece') {
            for (var i = 0; i < greenPlayBoxFields.length; i++) {
                if (greenPlayBoxFields[i].elementId == fieldId) {
                    return greenPlayBoxFields[i].numOfField;
                }
            }
        } else {
            for (var i = 0; i < playBoxFields.length; i++) {
                if (playBoxFields[i].elementId == fieldId) {
                    return playBoxFields[i].numOfField;
                }
            }
        }

    }

    function getFieldIdByNumber(fieldNumber, pieceColor) {
        console.log(pieceColor);
        if (pieceColor == 'yellowPiece') {
            for (var i = 0; i < yellowPlayBoxFields.length; i++) {
                if (yellowPlayBoxFields[i].numOfField == fieldNumber) {
                    return yellowPlayBoxFields[i].elementId;
                }
            }
        } else if (pieceColor == 'bluePiece') {
            for (var i = 0; i < bluePlayBoxFields.length; i++) {
                if (bluePlayBoxFields[i].numOfField == fieldNumber) {
                    return bluePlayBoxFields[i].elementId;
                }
            }
        } else if (pieceColor == 'redPiece') {
            for (var i = 0; i < redPlayBoxFields.length; i++) {
                if (redPlayBoxFields[i].numOfField == fieldNumber) {
                    return redPlayBoxFields[i].elementId;
                }
            }
        } else if (pieceColor == 'greenPiece') {
            for (var i = 0; i < greenPlayBoxFields.length; i++) {
                if (greenPlayBoxFields[i].numOfField == fieldNumber) {
                    return greenPlayBoxFields[i].elementId;
                }
            }
        } else {
            for (var i = 0; i < playBoxFields.length; i++) {
                if (playBoxFields[i].numOfField == fieldNumber) {
                    return playBoxFields[i].elementId;
                }
            }
        }
    }

    function isFieldOccupied(fieldId) {
        var isFieldOccupied = false;

        for (var i = 0; i < allPieces.length; i++) {
            if (allPieces[i].position == fieldId) {
                isFieldOccupied = true;
                break;
            }
        }

        return isFieldOccupied;
    }

    function getPieceObjectOnField(fieldId) {
        for (var i = 0; i < allPieces.length; i++) {
            if (allPieces[i].position == fieldId) {
                return allPieces[i];
                break;
            }
        }
    }

    class Piece {
        constructor(position) {
            this.position = position;
            this.boxPosition = position;
        }


        // Moves piece to field id
        move(newPos) {
            if (isFieldOccupied(newPos)) {
                if (getPieceObjectOnField(newPos).type != this.type) {
                    getPieceObjectOnField(newPos).reset();
                    changePostitionOnBoard(this.type, this.position, newPos);
                    console.log("Piece: " + this.type + " was moved from " + this.position + " to position " + newPos);

                    this.position = newPos;
                }
            } else {
                changePostitionOnBoard(this.type, this.position, newPos);
                console.log("Piece: " + this.type + " was moved from " + this.position + " to position " + newPos);

                this.position = newPos;
            }


        }

        // Moves piece based on number of fields
        moveSmart(numberOfFields) {
            // //if(this.pieceType == "yellowPiece" && (getFieldNumberById(this.position) + numberOfFields > 55))
            // if(getFieldNumberById(this.position) + numberOfFields < 57){
            //   this.move(getFieldIdByNumber(getFieldNumberById(this.position) + numberOfFields));
            // }else{
            //   this.move(getFieldIdByNumber(getFieldNumberById(this.position) + numberOfFields - 56));
            // }

            if (getFieldNumberById(this.position, this.type) + numberOfFields < 60) {
                this.move(getFieldIdByNumber(getFieldNumberById(this.position, this.type) + numberOfFields, this.type));
                console.log("moveSmart called, current position: ", this.position, " . Move for: ", numberOfFields);
            }
        }

        reset() {
            this.move(this.boxPosition);
            this.position = this.boxPosition;
        }
    }

    class YellowPiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "yellowPiece";
            this.start = "50";
            this.finish = "71";
        }
    }

    class BluePiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "bluePiece";
            this.start = "09";
            this.finish = "07";
        }
    }

    class RedPiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "redPiece";
            this.start = "914";
            this.finish = "714";
        }
    }

    class GreenPiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "greenPiece";
            this.start = "145";
            this.finish = "147";
        }
    }

    class Player {
        constructor(name) {
            this.name = name;
        }
    }

    class PlayBoxField {
        constructor(elementId, numOfField) {
            this.elementId = elementId;
            this.numOfField = numOfField;
        }
    }



    let playBoxFields = [new PlayBoxField("50", 1), new PlayBoxField("51", 2), new PlayBoxField("52", 3), new PlayBoxField("53", 4), new PlayBoxField("54", 5),
        new PlayBoxField("55", 6), new PlayBoxField("45", 7), new PlayBoxField("35", 8), new PlayBoxField("25", 9), new PlayBoxField("15", 10),
        new PlayBoxField("05", 11), new PlayBoxField("06", 12), new PlayBoxField("07", 13), new PlayBoxField("08", 14), new PlayBoxField("09", 15),
        new PlayBoxField("19", 16), new PlayBoxField("29", 17), new PlayBoxField("39", 18), new PlayBoxField("49", 19), new PlayBoxField("59", 20),
        new PlayBoxField("510", 21), new PlayBoxField("511", 22), new PlayBoxField("512", 23), new PlayBoxField("513", 24), new PlayBoxField("514", 25),
        new PlayBoxField("614", 26), new PlayBoxField("714", 27), new PlayBoxField("814", 28), new PlayBoxField("914", 29), new PlayBoxField("913", 30),
        new PlayBoxField("912", 31), new PlayBoxField("911", 32), new PlayBoxField("910", 33), new PlayBoxField("99", 34),
        new PlayBoxField("109", 35), new PlayBoxField("119", 36), new PlayBoxField("129", 37), new PlayBoxField("139", 38), new PlayBoxField("149", 39),
        new PlayBoxField("148", 40), new PlayBoxField("147", 41), new PlayBoxField("146", 42), new PlayBoxField("145", 43), new PlayBoxField("135", 44),
        new PlayBoxField("125", 45), new PlayBoxField("115", 46), new PlayBoxField("105", 47), new PlayBoxField("95", 48), new PlayBoxField("94", 49),
        new PlayBoxField("93", 50), new PlayBoxField("92", 51), new PlayBoxField("91", 52), new PlayBoxField("90", 53), new PlayBoxField("80", 54),
        new PlayBoxField("70", 55), new PlayBoxField("60", 56)
    ];

    let yellowPlayBoxFields = [new PlayBoxField("50", 1), new PlayBoxField("51", 2), new PlayBoxField("52", 3), new PlayBoxField("53", 4), new PlayBoxField("54", 5),
        new PlayBoxField("55", 6), new PlayBoxField("45", 7), new PlayBoxField("35", 8), new PlayBoxField("25", 9), new PlayBoxField("15", 10),
        new PlayBoxField("05", 11), new PlayBoxField("06", 12), new PlayBoxField("07", 13), new PlayBoxField("08", 14), new PlayBoxField("09", 15),
        new PlayBoxField("19", 16), new PlayBoxField("29", 17), new PlayBoxField("39", 18), new PlayBoxField("49", 19), new PlayBoxField("59", 20),
        new PlayBoxField("510", 21), new PlayBoxField("511", 22), new PlayBoxField("512", 23), new PlayBoxField("513", 24), new PlayBoxField("514", 25),
        new PlayBoxField("614", 26), new PlayBoxField("714", 27), new PlayBoxField("814", 28), new PlayBoxField("914", 29), new PlayBoxField("913", 30),
        new PlayBoxField("912", 31), new PlayBoxField("911", 32), new PlayBoxField("910", 33), new PlayBoxField("99", 34),
        new PlayBoxField("109", 35), new PlayBoxField("119", 36), new PlayBoxField("129", 37), new PlayBoxField("139", 38), new PlayBoxField("149", 39),
        new PlayBoxField("148", 40), new PlayBoxField("147", 41), new PlayBoxField("146", 42), new PlayBoxField("145", 43), new PlayBoxField("135", 44),
        new PlayBoxField("125", 45), new PlayBoxField("115", 46), new PlayBoxField("105", 47), new PlayBoxField("95", 48), new PlayBoxField("94", 49),
        new PlayBoxField("93", 50), new PlayBoxField("92", 51), new PlayBoxField("91", 52), new PlayBoxField("90", 53), new PlayBoxField("80", 54),
        new PlayBoxField("70", 55), new PlayBoxField("71", 56), new PlayBoxField("72", 57), new PlayBoxField("73", 58), new PlayBoxField("74", 59)
    ];

    let bluePlayBoxFields = [new PlayBoxField("09", 1),
        new PlayBoxField("19", 2), new PlayBoxField("29", 3), new PlayBoxField("39", 4), new PlayBoxField("49", 5), new PlayBoxField("59", 6),
        new PlayBoxField("510", 7), new PlayBoxField("511", 8), new PlayBoxField("512", 9), new PlayBoxField("513", 10), new PlayBoxField("514", 11),
        new PlayBoxField("614", 12), new PlayBoxField("714", 13), new PlayBoxField("814", 14), new PlayBoxField("914", 15), new PlayBoxField("913", 16),
        new PlayBoxField("912", 17), new PlayBoxField("911", 18), new PlayBoxField("910", 19), new PlayBoxField("99", 20),
        new PlayBoxField("109", 21), new PlayBoxField("119", 22), new PlayBoxField("129", 23), new PlayBoxField("139", 24), new PlayBoxField("149", 25),
        new PlayBoxField("148", 26), new PlayBoxField("147", 27), new PlayBoxField("146", 28), new PlayBoxField("145", 29), new PlayBoxField("135", 30),
        new PlayBoxField("125", 31), new PlayBoxField("115", 32), new PlayBoxField("105", 33), new PlayBoxField("95", 34), new PlayBoxField("94", 35),
        new PlayBoxField("93", 36), new PlayBoxField("92", 37), new PlayBoxField("91", 38), new PlayBoxField("90", 39), new PlayBoxField("80", 40),
        new PlayBoxField("70", 41), new PlayBoxField("60", 42), new PlayBoxField("50", 43), new PlayBoxField("51", 44), new PlayBoxField("52", 45), new PlayBoxField("53", 46),
        new PlayBoxField("54", 47), new PlayBoxField("55", 48), new PlayBoxField("45", 49), new PlayBoxField("35", 50), new PlayBoxField("25", 51),
        new PlayBoxField("15", 52), new PlayBoxField("05", 53), new PlayBoxField("06", 54), new PlayBoxField("07", 55), new PlayBoxField("17", 56),
        new PlayBoxField("27", 57), new PlayBoxField("37", 58), new PlayBoxField("47", 59)
    ];

    let redPlayBoxFields = [new PlayBoxField("914", 1), new PlayBoxField("913", 2),
        new PlayBoxField("912", 3), new PlayBoxField("911", 4), new PlayBoxField("910", 5), new PlayBoxField("99", 6),
        new PlayBoxField("109", 7), new PlayBoxField("119", 8), new PlayBoxField("129", 9), new PlayBoxField("139", 10), new PlayBoxField("149", 11),
        new PlayBoxField("148", 12), new PlayBoxField("147", 13), new PlayBoxField("146", 14), new PlayBoxField("145", 15), new PlayBoxField("135", 16),
        new PlayBoxField("125", 17), new PlayBoxField("115", 18), new PlayBoxField("105", 19), new PlayBoxField("95", 20), new PlayBoxField("94", 21),
        new PlayBoxField("93", 22), new PlayBoxField("92", 23), new PlayBoxField("91", 24), new PlayBoxField("90", 25), new PlayBoxField("80", 26),
        new PlayBoxField("70", 27), new PlayBoxField("60", 28), new PlayBoxField("50", 29), new PlayBoxField("51", 30), new PlayBoxField("52", 31), new PlayBoxField("53", 32),
        new PlayBoxField("54", 33), new PlayBoxField("55", 34), new PlayBoxField("45", 35), new PlayBoxField("35", 36), new PlayBoxField("25", 37),
        new PlayBoxField("15", 38), new PlayBoxField("05", 39), new PlayBoxField("06", 40), new PlayBoxField("07", 41), new PlayBoxField("08", 42), new PlayBoxField("09", 43),
        new PlayBoxField("19", 44), new PlayBoxField("29", 45), new PlayBoxField("39", 46), new PlayBoxField("49", 47), new PlayBoxField("59", 48),
        new PlayBoxField("510", 49), new PlayBoxField("511", 50), new PlayBoxField("512", 51), new PlayBoxField("513", 52), new PlayBoxField("514", 53),
        new PlayBoxField("614", 54), new PlayBoxField("714", 55), new PlayBoxField("713", 56), new PlayBoxField("712", 57), new PlayBoxField("711", 58), new PlayBoxField("710", 59)
    ];

    let greenPlayBoxFields = [new PlayBoxField("145", 1), new PlayBoxField("135", 2),
        new PlayBoxField("125", 3), new PlayBoxField("115", 4), new PlayBoxField("105", 5), new PlayBoxField("95", 6), new PlayBoxField("94", 7),
        new PlayBoxField("93", 8), new PlayBoxField("92", 9), new PlayBoxField("91", 10), new PlayBoxField("90", 11), new PlayBoxField("80", 12),
        new PlayBoxField("70", 13), new PlayBoxField("60", 14), new PlayBoxField("50", 15), new PlayBoxField("51", 16), new PlayBoxField("52", 17), new PlayBoxField("53", 18),
        new PlayBoxField("54", 19), new PlayBoxField("55", 20), new PlayBoxField("45", 21), new PlayBoxField("35", 22), new PlayBoxField("25", 23),
        new PlayBoxField("15", 24), new PlayBoxField("05", 25), new PlayBoxField("06", 26), new PlayBoxField("07", 27), new PlayBoxField("08", 28), new PlayBoxField("09", 29),
        new PlayBoxField("19", 30), new PlayBoxField("29", 31), new PlayBoxField("39", 32), new PlayBoxField("49", 33), new PlayBoxField("59", 34),
        new PlayBoxField("510", 35), new PlayBoxField("511", 36), new PlayBoxField("512", 37), new PlayBoxField("513", 38), new PlayBoxField("514", 39),
        new PlayBoxField("614", 40), new PlayBoxField("714", 41), new PlayBoxField("814", 42), new PlayBoxField("914", 43), new PlayBoxField("913", 44),
        new PlayBoxField("912", 45), new PlayBoxField("911", 46), new PlayBoxField("910", 47), new PlayBoxField("99", 48), new PlayBoxField("109", 49),
        new PlayBoxField("119", 50), new PlayBoxField("129", 51), new PlayBoxField("139", 52), new PlayBoxField("149", 53),
        new PlayBoxField("148", 54), new PlayBoxField("147", 55), new PlayBoxField("137", 56), new PlayBoxField("127", 57), new PlayBoxField("117", 58), new PlayBoxField("107", 59)
    ];


    let allPieces = [];


    var setDice = document.getElementById('diceButton');
    setDice.style.width = "0px";

    var turnImg = document.getElementById('turnsection');
    turnImg.style.display = "none";

    var setBoard = document.getElementById('setBoardButton');
    setBoard.onclick = function() {
        setBoard.style.display = "none";
        skipTurn.style.display ="inline";
        setDice.style.width = "120px";
        turnImg.style.display = "block";
        let yellowPieces = [new YellowPiece("00"), new YellowPiece("01"), new YellowPiece("10"), new YellowPiece("11")];
        let bluePieces = [new BluePiece("013"), new BluePiece("014"), new BluePiece("113"), new BluePiece("114")];
        let redPieces = [new RedPiece("1313"), new RedPiece("1314"), new RedPiece("1413"), new RedPiece("1414")];
        let greenPieces = [new GreenPiece("130"), new GreenPiece("131"), new GreenPiece("140"), new GreenPiece("141")];


        allPieces = yellowPieces.concat(bluePieces, redPieces, greenPieces);

        console.log(allPieces);

        for (var i = 0; i < 4; i++) {
            document.getElementById(yellowPieces[i].position).classList.add("yellowPiece");
            document.getElementById(yellowPieces[i].position).classList.add("homeBox");
            document.getElementById(bluePieces[i].position).classList.add("bluePiece");
            document.getElementById(bluePieces[i].position).classList.add("homeBox");
            document.getElementById(redPieces[i].position).classList.add("redPiece");
            document.getElementById(redPieces[i].position).classList.add("homeBox");
            document.getElementById(greenPieces[i].position).classList.add("greenPiece");
            document.getElementById(greenPieces[i].position).classList.add("homeBox");

        }

        var yellowElements = document.getElementsByClassName('yellowPiece');
        var blueElements = document.getElementsByClassName('bluePiece');
        var redElements = document.getElementsByClassName('redPiece');
        var greenElements = document.getElementsByClassName('greenPiece');
        
        // click events
        addClickEvent();

        function addClickEvent() {
            for (var i = 0; i < yellowElements.length; i++) {

                yellowElements[i].addEventListener('click', function() {
                    if (turn == "yellow") {
                        console.log(this);
                        if (this.classList.contains("homeBox")) {
                            for (var i = 0; i < 4; i++) {
                                if (yellowPieces[i].position == this.id && diceResult == 6) {
                                    console.log(yellowPieces);
                                    console.log(yellowPieces[i].position + "<- yellowPieces position " + this.id + "<- clicked element id");
                                    yellowPieces[i].move(yellowPieces[i].start);
                                }
                            }

                        } else {
                            for (var i = 0; i < 4; i++) {
                                if (yellowPieces[i].position == this.id) {

                                    console.log("Insite yellow turn allow. Move state is: ", allowMove);

                                    if(allowMove === "allow"){
                                        yellowPieces[i].moveSmart(diceResult);
                                    }
                                }   
                            }
                        }
                        finishTurn();
                        addClickEvent();    

                    }
                });
            }

            for (var i = 0; i < blueElements.length; i++) {

                blueElements[i].addEventListener('click', function() {
                    if (turn == "blue") {
                        console.log(this);
                        if (this.classList.contains("homeBox")) {
                            for (var i = 0; i < 4; i++) {
                                if (bluePieces[i].position == this.id && diceResult == 6) {
                                    console.log(bluePieces);
                                    console.log(bluePieces[i].position + "<- bluePieces position " + this.id + "<- clicked element id");
                                    bluePieces[i].move(bluePieces[i].start);
                                }
                            }

                        } else {
                            for (var i = 0; i < 4; i++) {
                                if (bluePieces[i].position == this.id) {
                                    console.log("Insite blue turn allow. Move state is: ", allowMove);

                                    if(allowMove === "allow"){

                                        bluePieces[i].moveSmart(diceResult);
                                    }

                                }
                            }
                        }
                        finishTurn();
                        addClickEvent();    

                    }
                });
            }

            for (var i = 0; i < redElements.length; i++) {

                redElements[i].addEventListener('click', function() {
                    if (turn == "red") {
                        console.log(this);
                        if (this.classList.contains("homeBox") && turn == "red") {
                            for (var i = 0; i < 4; i++) {
                                if (redPieces[i].position == this.id && diceResult == 6) {
                                    console.log(redPieces);
                                    console.log(redPieces[i].position + "<- redPieces position " + this.id + "<- clicked element id");
                                    redPieces[i].move(redPieces[i].start);
                                }
                            }

                        } else if (turn == "red") {
                            for (var i = 0; i < 4; i++) {
                                if (redPieces[i].position == this.id) {

                                    console.log("Insite red turn allow. Move state is: ", allowMove);
                                    if(allowMove === "allow"){

                                        redPieces[i].moveSmart(diceResult);
                                    }
                                }
                            }
                        }
                        finishTurn();
                        addClickEvent();    
                    }
                });
            }

            for (var i = 0; i < greenElements.length; i++) {

                greenElements[i].addEventListener('click', function() {
                    if (turn == "green") {
                        console.log(this);
                        if (this.classList.contains("homeBox") && turn == "green") {
                            for (var i = 0; i < 4; i++) {
                                if (greenPieces[i].position == this.id && diceResult == 6) {
                                    console.log(greenPieces);
                                    console.log(greenPieces[i].position + "<- greenPieces position " + this.id + "<- clicked element id");
                                    greenPieces[i].move(greenPieces[i].start);
                                }
                            }

                        } else if (turn == "green") {
                            for (var i = 0; i < 4; i++) {
                                if (greenPieces[i].position == this.id) {
                                    console.log("Insite yellow turn allow. Move state is: ", allowMove);
                                    if(allowMove === "allow"){
                                        greenPieces[i].moveSmart(diceResult);
                                    }
                                }
                            }
                        }
                        finishTurn();
                        addClickEvent();  
                    }
                });
            }
        }

    };

    function getAllQuestions(){
    $.ajax({
            url: 'ajax/getAllQuestions.php',
            type: 'POST',
            dataType: 'json',
        })
        .then(function(data) {
            console.log("Getting questions success");
            questions = data;
            sortQuestionsByDifficulty(data);
            console.log(questions);
        })
        .fail(function(e) {
            console.log("Getting questions failed");
        })
        .always(function(data) {
            console.log("complete");
        });
    }

    function getCustomQuestions(){
        var parts = window.location.search.substr(1).split("&");
        var vars = {};
        for (var i = 0; i < parts.length; i++) {
            var temp = parts[i].split("=");
            vars[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
        }
        if (!('wQ' in vars)) {
            vars['wQ'] = "usingAllQuestions";
            vars['qG'] = "sve";
            vars['pp'] = "";    
        }
        console.log(vars);

    $.ajax({
            url: 'ajax/getCustomQuestions.php',
            type: 'POST',
            dataType: 'json',
            data: vars,
        })
        .then(function(data) {
            console.log("Getting questions success");
            questions = data;
            sortQuestionsByDifficulty(data);
            console.log(questions);
        })
        .fail(function(e) {
            console.log("Getting questions failed");
        })
        .always(function(data) {
            console.log("complete");
        });
    }

    function searchForQuestion(difficulty){
        var returnData =[];
        console.log("Finding question...");
        if (difficulty === "easy") {
            rNum = Math.floor(Math.random() * questionsEasy.length);
            var searchingFor = questionsEasy[rNum].id;
            console.log("Easy question found! Question id = ", searchingFor);

            questionsEasy.forEach(function(element) {
                if(element.id == searchingFor){
                    returnData.push(element);
                }
            });
            
        }else if(difficulty === "normal"){
            rNum = Math.floor(Math.random() * questionsNormal.length);
            var searchingFor = questionsNormal[rNum].id;
            console.log("Normal question found! Question id = ", searchingFor);

            questionsNormal.forEach(function(element) {
                if(element.id == searchingFor){
                    returnData.push(element);
                }
            });

        }else if(difficulty === "hard"){
            rNum = Math.floor(Math.random() * questionsHard.length);
            var searchingFor = questionsHard[rNum].id;
            console.log("Hard question found! Question id = ", searchingFor);

            questionsHard.forEach(function(element) {
                if(element.id == searchingFor){
                    returnData.push(element);
                }
            });

        }

        console.log(returnData);
        return returnData;
    }
    function sortQuestionsByDifficulty(data){
        for (var i = 0; i < data.length;  i++) {
            if(data[i].difficultyId === "1"){
                questionsEasy.push(data[i]);
            }else if(data[i].difficultyId === "2"){
                questionsNormal.push(data[i]);
            }else if(data[i].difficultyId === "3"){
                questionsHard.push(data[i]);
            };
        }
        console.log(questionsEasy, questionsNormal, questionsHard);
    }

    function printQuestion(diceNumber){
        var difficulty = "";
        switch(diceNumber){
            case 1: 
            case 2:
                difficulty = 'easy';
                break; 
            case 3:
            case 4:
                difficulty = 'normal';
                break;
            case 5:
            case 6:
                difficulty = 'hard';
                break;

        }

        console.log(difficulty);
        var questions = searchForQuestion(difficulty);
        console.log("Question received at printQuestion!", questions);

        if(questions !== undefined) {
            $('#ajax-panel').show();

            $('#ajax-panel').html(""); 
            $('#ajax-panel').append('<p>Grupa pitanja: ' + questions[0].questionGroupName + ' </p>');
            $('#ajax-panel').append('<p>Pitanje: ' + questions[0].questionDescription + '</p>');
            answer = "";

            if (difficulty === 'easy') {
                $('#ajax-panel').append('<select id=answer><option value=Točno>Točno</option><option value=Netočno>Netočno</option></select>');
                    
                    questions.forEach(function(element) {
                        if(element.answerIsCorrect == 1){
                            answer = element.answerDescription;
                        }
                    });

            }else if(difficulty === 'normal') {
                $('#ajax-panel').append('<select id=answer><option value=' + questions[0].answerDescription + '>' 
                    + questions[0].answerDescription + '</option><option value=' + questions[1].answerDescription + '>'
                    + questions[1].answerDescription + '</option><option value=' + questions[2].answerDescription + '>'
                    + questions[2].answerDescription + '</option></select>');
                    
                    questions.forEach(function(element) {
                        if(element.answerIsCorrect == 1){
                            answer = element.answerDescription;
                        }
                    });


            }else if(difficulty === 'hard') {
                $('#ajax-panel').append('<label for=answerWriten>Unesite odgovor: </label><input id=answerWriten type=textarea name=question>');
                answer = questions[0].answerDescription;
            }

            $('#ajax-panel').append('<input style="display:none" id=correctAnswer value=' + answer + ' >');
            $('#ajax-panel').append('<input style="display:none" id=questionDifficulty value=' + difficulty + ' >');
            $('#ajax-panel').append('<input name=answerButton id=answerButton type=submit value=Odgovorite>');
        }
    }



    $(document).on("submit","form#ajax-panel", function(event){
    event.preventDefault();
        var dataObj2={
            answer: $("#answer option:selected").val(),
            answerWriten: $("#answerWriten").val(),
            correctAnswer: $("#correctAnswer").val(),
            difficulty: $("#questionDifficulty").val(),
        }



        console.log(dataObj2);
        if(dataObj2.difficulty === "hard"){
            dataObj2.answer = dataObj2.answerWriten;
            if(!isNumber(answer)){
                dataObj2.correctAnswer.toLowerCase();
                dataObj2.answer.toLowerCase();
            }
        } 

        if(dataObj2.answer == dataObj2.correctAnswer){
            $('#ajax-panel').html("");
            $('#ajax-panel').html("<p>Točno!</p><br/><p>Kliknite na figuricu za pomak!</p><audio autoplay src='tocno.mp3'></audio>");
            allowMove = "allow";
            setTimeout(function(){$('#ajax-panel').hide();  }, 500);
        }else{
            console.log("Question is wrong");
            $('#ajax-panel').html("");
            $('#ajax-panel').html("<p>Netočno!</p><br/><p>Ne možete se pomaknuti!</p><audio autoplay src='netocno.mp3'></audio>");
            allowMove = "dontAllow";
            finishTurn();
            setTimeout(function(){$('#ajax-panel').hide();  }, 500);        
        }
    });
