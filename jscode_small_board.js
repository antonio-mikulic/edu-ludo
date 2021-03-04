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

            if (getFieldNumberById(this.position, this.type) + numberOfFields < 28) {
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
            this.start = "40";
            this.finish = "51";
        }
    }

    class BluePiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "bluePiece";
            this.start = "06";
            this.finish = "15";
        }
    }

    class RedPiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "redPiece";
            this.start = "610";
            this.finish = "59";
        }
    }

    class GreenPiece extends Piece {
        constructor(position) {
            super(position);
            this.type = "greenPiece";
            this.start = "104";
            this.finish = "95";
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

    let playBoxFields = [new PlayBoxField("50", 1), new PlayBoxField("40", 2), new PlayBoxField("31", 3), new PlayBoxField("22", 4), 
    new PlayBoxField("13", 5), new PlayBoxField("04", 6), new PlayBoxField("05", 7), new PlayBoxField("06", 8), new PlayBoxField("17", 9),
    new PlayBoxField("28", 10), new PlayBoxField("39", 11), new PlayBoxField("410", 12), new PlayBoxField("510", 13), new PlayBoxField("610", 14),
    new PlayBoxField("79", 15), new PlayBoxField("88", 16), new PlayBoxField("97", 17), new PlayBoxField("106", 18), new PlayBoxField("105", 19), 
    new PlayBoxField("104", 20), new PlayBoxField("93", 21), new PlayBoxField("82", 22), new PlayBoxField("71", 23), new PlayBoxField("60", 24) 
    ];
    
    
    let yellowPlayBoxFields = [
    new PlayBoxField("50", 24), new PlayBoxField("40", 1), new PlayBoxField("31", 2), new PlayBoxField("22", 3), 
    new PlayBoxField("13", 4), new PlayBoxField("04", 5), new PlayBoxField("05", 6), new PlayBoxField("06", 7), new PlayBoxField("17", 8),
    new PlayBoxField("28", 9), new PlayBoxField("39", 10), new PlayBoxField("410", 11), new PlayBoxField("510", 12), new PlayBoxField("610", 13),
    new PlayBoxField("79", 14), new PlayBoxField("88", 15), new PlayBoxField("97", 16), new PlayBoxField("106", 17), new PlayBoxField("105", 18), 
    new PlayBoxField("104", 19), new PlayBoxField("93", 20), new PlayBoxField("82", 21), new PlayBoxField("71", 22), new PlayBoxField("60", 23),
    new PlayBoxField("51", 25), new PlayBoxField("52", 26), new PlayBoxField("53", 27), new PlayBoxField("54", 28)
    ];


    let bluePlayBoxFields = [
    new PlayBoxField("50", 18), new PlayBoxField("40", 19), new PlayBoxField("31", 20), new PlayBoxField("22", 21), 
    new PlayBoxField("13", 22), new PlayBoxField("04", 23), new PlayBoxField("05", 24), new PlayBoxField("06", 1), new PlayBoxField("17", 2),
    new PlayBoxField("28", 3), new PlayBoxField("39", 4), new PlayBoxField("410", 5), new PlayBoxField("510", 6), new PlayBoxField("610", 7),
    new PlayBoxField("79", 8), new PlayBoxField("88", 9), new PlayBoxField("97", 10), new PlayBoxField("106", 11), new PlayBoxField("105", 12), 
    new PlayBoxField("104", 13), new PlayBoxField("93", 14), new PlayBoxField("82", 15), new PlayBoxField("71", 16), new PlayBoxField("60", 17),
    new PlayBoxField("15", 25), new PlayBoxField("25", 26), new PlayBoxField("35", 27), new PlayBoxField("45", 28),
    
    ];

    let redPlayBoxFields = [ 
    new PlayBoxField("50", 12), new PlayBoxField("40", 13), new PlayBoxField("31", 14), new PlayBoxField("22", 15), 
    new PlayBoxField("13", 16), new PlayBoxField("04", 17), new PlayBoxField("05", 18), new PlayBoxField("06", 19), new PlayBoxField("17", 20),
    new PlayBoxField("28", 21), new PlayBoxField("39", 22), new PlayBoxField("410", 23), new PlayBoxField("510", 24), new PlayBoxField("610", 1),
    new PlayBoxField("79", 2), new PlayBoxField("88", 3), new PlayBoxField("97", 4), new PlayBoxField("106", 5), new PlayBoxField("105", 6), 
    new PlayBoxField("104", 7), new PlayBoxField("93", 8), new PlayBoxField("82", 9), new PlayBoxField("71", 10), new PlayBoxField("60", 11),
    new PlayBoxField("59", 25), new PlayBoxField("58", 26), new PlayBoxField("57", 27), new PlayBoxField("56", 28)

    ];

    let greenPlayBoxFields = [    
    new PlayBoxField("50", 6), new PlayBoxField("40", 7), new PlayBoxField("31", 8), new PlayBoxField("22", 9), 
    new PlayBoxField("13", 10), new PlayBoxField("04", 11), new PlayBoxField("05", 12), new PlayBoxField("06", 13), new PlayBoxField("17", 14),
    new PlayBoxField("28", 15), new PlayBoxField("39", 16), new PlayBoxField("410", 17), new PlayBoxField("510", 18), new PlayBoxField("610", 19),
    new PlayBoxField("79", 20), new PlayBoxField("88", 21), new PlayBoxField("97", 22), new PlayBoxField("106", 23), new PlayBoxField("105", 24), 
    new PlayBoxField("104", 1), new PlayBoxField("93", 2), new PlayBoxField("82", 3), new PlayBoxField("71", 4), new PlayBoxField("60", 5),
    new PlayBoxField("95", 25), new PlayBoxField("85", 26), new PlayBoxField("75", 27), new PlayBoxField("65", 28)

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
        let bluePieces = [new BluePiece("09"), new BluePiece("010"), new BluePiece("19"), new BluePiece("110")];
        let redPieces = [new RedPiece("99"), new RedPiece("910"), new RedPiece("109"), new RedPiece("1010")];
        let greenPieces = [new GreenPiece("90"), new GreenPiece("91"), new GreenPiece("100"), new GreenPiece("101")];


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
