// user data recorded with a factory function

<<<<<<< HEAD
//is branches working?

// create classes to store the user data
=======
/* function playerDetails (name, battleCry, teamColor) {
        this.name = name;
        this.battleCry = battleCry;
        this.color = teamColor;
} */

// now change the factory function into classes to store  the user data
>>>>>>> 4_player_ttt_classes

let Player = class {
    constructor(name, battleCry, teamColor) {
    this.name = name;
    this.battleCry = battleCry;
    this.teamColor = teamColor;
    }

    get getPlayerName () {
        return this.name;
    }

    set newName (name) {
        if (this.name<10) {
        this.name=name;
        console.log(this.name);
        } else {
        document.getElementById("instructions").innerText="That name is too long!!"
        }
    }

    set newBattleCry (battleCry) {
        if (this.battleCry.length<10) {
        this.battleCry=battleCry;
        console.log(this.battleCry);
        } else {
        document.getElementById("instructions").innerText="Battlecries should be concise. It's too long!!"
        }
    }

    set newTeachColor (teamColor) {
        this.teamColor=teamColor;
        console.log(this.teamColor);
    }      
} 

// generate a board

const gameObj = (function() {
    let playerTurn = 1;
    let gameBoardObj = [];
    let gameStartVariable=false;
    let turnTaken=0;

    const getTurnTaken = (function() {
        return turnTaken;
    })

    const alterTurnTaken = (function(number) {
      turntaken=number;
    })


    const alterPlayerTurn = (function (number) {
        playerTurn=number;
    })

    const getPlayerTurn = () => { return playerTurn };


    const playersReady = (function () {
        gameStartVariable=true;
    })

    const getGamePlayersReady = () => { return gameStartVariable };

    const getGameBoardObj = (function () {
        return gameBoardObj;
    })

    const pushGameObj = (function (value) {
        gameBoardObj.push(value);
    })

    return {
        getTurnTaken,
        alterTurnTaken,
        alterPlayerTurn,
        getPlayerTurn,
        playersReady,
        getGamePlayersReady,
        getGameBoardObj,
        pushGameObj
    }
})();

const game = (function() {

    let playerChoice="";
    let gameStartVariable=gameObj.getGamePlayersReady();

    const getPlayerChoice = () => {
        return playerChoice
    };

    const gameBoardGenerator =(function () {

        for (i=0;i<9;i++) {
            outerDiv = document.createElement("div");
            outerDiv.style.height="200px";
            outerDiv.style.width="200px";
            outerDiv.style.backgroundColor="white";
            outerDiv.id="outerDiv" + i;
            gameObj.pushGameObj(outerDiv.id);
            outerDiv.addEventListener("click",function (e) {
                gameStartVariable=gameObj.getGamePlayersReady();
                if (gameStartVariable===true){
                playerChoice=e.target.id;
                gamePlayerTurn();
            }})
            outerDiv.classList.add("outsideBox");
            document.getElementById("gameBoard").appendChild(outerDiv);  
        }
        for (i=0;i<9;i++) {
            middleDiv = document.createElement("div");
            middleDiv.style.height="150px";
            middleDiv.style.width="150px";
            middleDiv.style.backgroundColor="white";
            middleDiv.id="middleDiv" + i;
            gameObj.pushGameObj(middleDiv.id);
            middleDiv.addEventListener("click",function(e) {
                gameStartVariable=gameObj.getGamePlayersReady();
                if (gameStartVariable===true){
                playerChoice=e.target.id;
                e.stopPropagation();
                gamePlayerTurn();
            }})
            middleDiv.classList.add("middleBox");
            document.getElementById("outerDiv" + i).appendChild(middleDiv);
        }
        for (i=0;i<9;i++) {
            innerDiv = document.createElement("div");
            innerDiv.style.height="100px";
            innerDiv.style.width="100px";
            innerDiv.style.backgroundColor="white";
            innerDiv.id="innerDiv" + i;
            gameObj.pushGameObj(innerDiv.id);
            innerDiv.addEventListener("click",function(e) {
                gameStartVariable=gameObj.getGamePlayersReady();
                if (gameStartVariable===true){
                playerChoice=e.target.id;
                e.stopPropagation();
                gamePlayerTurn();
        }})
            innerDiv.innerText=i+1;
            innerDiv.classList.add("innerBox");
            document.getElementById("middleDiv" + i).appendChild(innerDiv);
    };
    })();

    return {
        getPlayerChoice
    }

})();

const myTeamDetails = (function() {
  let gameStartVariable=gameObj.getGamePlayersReady();

  let playerOneName = document.getElementById("nameOne");
  let playerTwoName = document.getElementById("nameTwo");
  let playerThreeName = document.getElementById("nameThree");
  let playerFourName = document.getElementById("nameFour");
  let playerOneBattleCry = document.getElementById("battleCryOne");
  let playerTwoBattleCry = document.getElementById("battleCryTwo");
  let playerThreeBattleCry = document.getElementById("battleCryThree");
  let playerFourBattleCry = document.getElementById("battleCryFour");
  let teamColorOneChoice = document.getElementById("changeTeamColorOne");
  let teamColorTwoChoice = document.getElementById("changeTeamColorTwo");
  let teamColorThreeChoice = document.getElementById("changeTeamColorThree");
  let teamColorFourChoice = document.getElementById("changeTeamColorFour");
  const submitButOne = document.getElementById("submitOne");
  const submitButTwo = document.getElementById("submitTwo");
  const submitButThree = document.getElementById("submitThree");
  const submitButFour = document.getElementById("submitFour");


  submitButOne.addEventListener("click", ()=> {
    if(gameStartVariable===false){
        if (playerOneName.value.length<10 && playerOneBattleCry.value.length<10) {
    playerOneDetails = new Player(playerOneName.value,playerOneBattleCry.value,teamColorOneChoice.value);
    let playerOneText = document.getElementById("playerOneText");
    playerOneText.innerText = playerOneDetails.name;
        }else if (playerOneName.value.length>=10 ){
    document.getElementById("instructions").innerText = "That name is too long!";           
        }else if (playerOneBattleCry.value.length>=10) {
    document.getElementById("instructions").innerText = "That battlecry is too long! Choose something more pithy!";     
        }
}});

submitButTwo.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerTwoDetails = new Player(playerTwoName.value,playerTwoBattleCry.value,teamColorTwoChoice.value);
    let playerTwoText = document.getElementById("playerTwoText");
    playerTwoText.innerText = playerTwoDetails.name;
}});

submitButThree.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerThreeDetails = new Player(playerThreeName.value,playerThreeBattleCry.value,teamColorThreeChoice.value);
    let playerThreeText = document.getElementById("playerThreeText");
    playerThreeText.innerText = playerThreeDetails.name;
}});

submitButFour.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerFourDetails = new Player(playerFourName.value,playerFourBattleCry.value,teamColorFourChoice.value);
    let playerFourText = document.getElementById("playerFourText");
    playerFourText.innerText = playerFourDetails.name;
}});

teamColorOneChoice.addEventListener("change", ()=>{
    if(gameStartVariable===false) {
    if (teamColorOneChoice.value==="purple") {
        let OneBackColor = document.getElementById("playerOneInfo");
        let playingSpaceOne = document.getElementById("playerOne");
        OneBackColor.style.backgroundColor="purple";
        playingSpaceOne.style.backgroundColor="purple";
    } else if (teamColorOneChoice.value==="blue") {
        let OneBackColor = document.getElementById("playerOneInfo");
        let playingSpaceOne = document.getElementById("playerOne");
        OneBackColor.style.backgroundColor="rgb(0, 135, 255)";
        playingSpaceOne.style.backgroundColor="rgb(0, 135, 255)";

    }
}})

teamColorTwoChoice.addEventListener("change", ()=>{
    if(gameStartVariable===false){
    if (teamColorTwoChoice.value==="red") {
        let TwoBackColor = document.getElementById("playerTwoInfo");
        let playingSpaceTwo = document.getElementById("playerTwo");
        TwoBackColor.style.backgroundColor="red";
        playingSpaceTwo.style.backgroundColor="red";
    }else if (teamColorTwoChoice.value==="orange") {
        let TwoBackColor = document.getElementById("playerTwoInfo");
        let playingSpaceTwo = document.getElementById("playerTwo");
        TwoBackColor.style.backgroundColor="orange";
        playingSpaceTwo.style.backgroundColor="orange";
    }
}})

teamColorThreeChoice.addEventListener("change", ()=>{
    if(gameStartVariable===false){
    if (teamColorThreeChoice.value==="green") {
        let ThreeBackColor = document.getElementById("playerThreeInfo");
        let playingSpaceThree = document.getElementById("playerThree");
        ThreeBackColor.style.backgroundColor="rgb(40, 160, 40)";
        playingSpaceThree.style.backgroundColor="rgb(40, 160, 40)";
    }else if (teamColorThreeChoice.value==="pink") {
        let ThreeBackColor = document.getElementById("playerThreeInfo");
        let playingSpaceThree = document.getElementById("playerThree");
        ThreeBackColor.style.backgroundColor="pink";
        playingSpaceThree.style.backgroundColor="pink";
    }
}})

teamColorFourChoice.addEventListener("change", ()=>{
    if(gameStartVariable===false){
    if (teamColorFourChoice.value==="yellow") {
        let FourBackColor = document.getElementById("playerFourInfo");
        let playingSpaceFour = document.getElementById("playerFour");
        FourBackColor.style.backgroundColor="yellow";
        playingSpaceFour.style.backgroundColor="yellow";
    }else if (teamColorFourChoice.value==="brown") {
        let FourBackColor = document.getElementById("playerFourInfo");
        let playingSpaceFour = document.getElementById("playerFour");
        FourBackColor.style.backgroundColor="brown";
        playingSpaceFour.style.backgroundColor="brown";
    }
}})

})();

const beginGameButFunc = (function () {


    const beginGameBut = document.getElementById("beginGameButton");

    let turnTaken=gameObj.getTurnTaken();
    let gameStartVariable = gameObj.getGamePlayersReady();
    let gridBoxes = gameObj.getGameBoardObj();

    beginGameBut.addEventListener("click", ()=>{
    console.log(gameObj.getGamePlayersReady());
    if (gameStartVariable===true && turnTaken===1) {
        gridBoxes.length=0;
        for (i=0;i<9;i++) {
        let f=document.getElementById("outerDiv" +i);
        f.style.backgroundColor="white";
        let g=document.getElementById("innerDiv" + i);
        g.style.backgroundColor="white";
        let h=document.getElementById("middleDiv" + i);
        h.style.backgroundColor="white";
        gameObj.pushGameObj("outerDiv" +i);
        gameObj.pushGameObj("innerDiv" + i);
        gameObj.pushGameObj("middleDiv" + i);
    }
        gameObj.alterTurnTaken(0);
        gameObj.alterPlayerTurn(1);
    }
    if (gameStartVariable===false) {
        if (playerOneDetails.name!==undefined && playerTwoDetails.name!==undefined && playerThreeDetails.name!==undefined && playerFourDetails.name!==undefined) {
        gamebegin()
      } else {
        let instructionText = document.getElementById("instructions")
        instructionText.innerText = "You cannot begin the game until all names have been entered!"
      }  }
})

})();

let gamebegin = function () {
    gameObj.playersReady();
    let buttonSwitch=document.getElementById("beginGameButton");
    buttonSwitch.innerText="Reset Game";
    buttonSwitch.style.backgroundColor="yellow";
    let instructionText = document.getElementById("instructions")
    let playerOneText = document.getElementById("playerOneText");
    playerOneText.innerText = `Its your turn ${playerOneDetails.name}.\n${playerOneDetails.battleCry}`;
    instructionText.innerText = `Team information locked. ${playerOneDetails.color} team begins and play continues clockwise. Players can choose an outer ring, an inner ring or the center box. If the team completes a line of three of the same box choice, the team wins. A team also wins with a line of one outer, one inner, and one center box (in that order).`
}

function gamePlayerTurn () {

    let playerTurn = gameObj.getPlayerTurn();
    let playerChoice=game.getPlayerChoice();
    let gridBoxes = gameObj.getGameBoardObj();
    let t=document.getElementById(playerChoice);

    if (playerTurn===1 && gridBoxes.includes(playerChoice)) {
        t.style.backgroundColor=playerOneDetails.teamColor;
        gridBoxes = gridBoxes.filter(e => e !== playerChoice);
        let playerOneText = document.getElementById("playerOneText");
        playerOneText.innerText = playerOneDetails.name;
        let playerTwoText = document.getElementById("playerTwoText");
        playerTwoText.innerText = `Its your turn ${playerTwoDetails.name}.\n${playerTwoDetails.battleCry}`;
        gameObj.alterPlayerTurn(2);
        gameObj.alterTurnTaken(1);
}else if (playerTurn===2 && gridBoxes.includes(playerChoice)) {
    t.style.backgroundColor=playerTwoDetails.teamColor;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    let playerTwoText = document.getElementById("playerTwoText");
    playerTwoText.innerText = playerTwoDetails.name;
    let playerThreeText = document.getElementById("playerThreeText");
    playerThreeText.innerText = `Its your turn ${playerThreeDetails.name}.\n${playerThreeDetails.battleCry}`;
    gameObj.alterPlayerTurn(3);
} else if (playerTurn===3 && gridBoxes.includes(playerChoice)) {
    t.style.backgroundColor=playerThreeDetails.teamColor;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    let playerThreeText = document.getElementById("playerThreeText");
    playerThreeText.innerText = playerThreeDetails.name;
    let playerFourText = document.getElementById("playerFourText");
    playerFourText.innerText = `Its your turn ${playerFourDetails.name}.\n${playerFourDetails.battleCry}`;
    gameObj.alterPlayerTurn(4);
} else if (playerTurn===4 && gridBoxes.includes(playerChoice)) {
    t.style.backgroundColor=playerFourDetails.teamColor;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    let playerFourText = document.getElementById("playerFourText");
    playerFourText.innerText = playerFourDetails.name;
    let playerOneText = document.getElementById("playerOneText");
    playerOneText.innerText = `Its your turn ${playerOneDetails.name}.\n${playerOneDetails.battleCry}`;
    gameObj.alterPlayerTurn(1);
}};



// change player each turn

// color and log the choices of each player

// check if a player has three in a row