// Create an interface to collect player information and log it to an object

const PlayerOneForm = document.getElementById("formOne");
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
let gameStartVariable=false;
const submitButOne = document.getElementById("submitOne");
const submitButTwo = document.getElementById("submitTwo");
const submitButThree = document.getElementById("submitThree");
const submitButFour = document.getElementById("submitFour");
const beginGameBut = document.getElementById("beginGameButton");
const gameBoardVar = document.getElementById("gameBoard");
let playerChoice="";
let playerTurn = 1;


function playerDetails (name, battleCry, teamColor) {
        this.name = name;
        this.battleCry = battleCry;
        this.color = teamColor;
}

teamColorOneChoice.addEventListener("change", ()=>{
    if(gameStartVariable===false) {
    if (teamColorOneChoice.value==="purple") {
        console.log("hi");
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

let playerOneDetails={};
let playerTwoDetails={};
let playerThreeDetails={};
let playerFourDetails={};
let gridBoxes = [];
let turnTaken=0;

submitButOne.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerOneDetails = new playerDetails(playerOneName.value,playerOneBattleCry.value,teamColorOneChoice.value);
    let playerOneText = document.getElementById("playerOneText");
    playerOneText.innerText = playerOneDetails.name;
    console.log(playerOneDetails)
}});

submitButTwo.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerTwoDetails = new playerDetails(playerTwoName.value,playerTwoBattleCry.value,teamColorTwoChoice.value);
    let playerTwoText = document.getElementById("playerTwoText");
    playerTwoText.innerText = playerTwoDetails.name;
    console.log(playerTwoDetails)
}});

submitButThree.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerThreeDetails = new playerDetails(playerThreeName.value,playerThreeBattleCry.value,teamColorThreeChoice.value);
    let playerThreeText = document.getElementById("playerThreeText");
    playerThreeText.innerText = playerThreeDetails.name;
    console.log(playerThreeDetails)
}});

submitButFour.addEventListener("click", ()=> {
    if(gameStartVariable===false){
    playerFourDetails = new playerDetails(playerFourName.value,playerFourBattleCry.value,teamColorFourChoice.value);
    let playerFourText = document.getElementById("playerFourText");
    playerFourText.innerText = playerFourDetails.name;
    console.log(playerFourDetails)
}});

beginGameBut.addEventListener("click", ()=>{
    console.log("I made it this far")
    if (gameStartVariable===true && turnTaken===1) {
        gridBoxes.length=0;
        for (i=0;i<9;i++) {
        let f=document.getElementById("outerDiv" +i);
        f.style.backgroundColor="white";
        let g=document.getElementById("innerDiv" + i);
        g.style.backgroundColor="white";
        let h=document.getElementById("middleDiv" + i);
        h.style.backgroundColor="white";
        gridBoxes.push("outerDiv" +i);
        gridBoxes.push("innerDiv" + i);
        gridBoxes.push("middleDiv" + i);
    }
        turnTaken=0;
        playerTurn=1;
    }
    if (gameStartVariable===false) {
        if (playerOneDetails.name!==undefined && playerTwoDetails.name!==undefined && playerThreeDetails.name!==undefined && playerFourDetails.name!==undefined) {
        gamebegin()
      } else {
        let instructionText = document.getElementById("instructions")
        instructionText.innerText = "You cannot begin the game until all names have been entered!"
      }  }
})

let gamebegin = function () {
    gameStartVariable=true;
    let buttonSwitch=document.getElementById("beginGameButton");
    buttonSwitch.innerText="Reset Game";
    buttonSwitch.style.backgroundColor="yellow";
    let goodByeMenu = document.getElementById("topBox");
    let instructionText = document.getElementById("instructions")
    instructionText.innerText = `Team information locked. ${playerOneDetails.color} team begins and play continues clockwise. Players can choose an outer ring, an inner ring or the center box. If the team completes a line of three of the same box choice, the team wins. A team also wins with a line of one outer, one inner, and one center box (in that order).`
}



// generate a tic tac toe game board

function gameBoardGenerator () {
    for (i=0;i<9;i++) {
        outerDiv = document.createElement("div");
        outerDiv.style.height="200px";
        outerDiv.style.width="200px";
        outerDiv.style.backgroundColor="white";
        outerDiv.id="outerDiv" + i;
        gridBoxes.push(outerDiv.id);
        outerDiv.addEventListener("click",function (e) {
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
        gridBoxes.push(middleDiv.id);
        middleDiv.addEventListener("click",function(e) {
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
        gridBoxes.push(innerDiv.id);
        innerDiv.addEventListener("click",function(e) {
            if (gameStartVariable===true){
            playerChoice=e.target.id;
            e.stopPropagation();
            gamePlayerTurn();
    }})
        innerDiv.innerText=i+1;
        innerDiv.classList.add("innerBox");
        document.getElementById("middleDiv" + i).appendChild(innerDiv);
    }
}

gameBoardGenerator();

// create functions for the game

function gamePlayerTurn () {
    console.log(gridBoxes);
    console.log(playerChoice);
    let t=document.getElementById(playerChoice);
    if (playerTurn===1 && gridBoxes.includes(playerChoice)) {
        console.log(playerTurn);
        console.log(playerChoice);
        console.log(playerOneDetails.color);
        t.style.backgroundColor=playerOneDetails.color;
        gridBoxes = gridBoxes.filter(e => e !== playerChoice);
        playerTurn=2;
        turnTaken=1;
}else if (playerTurn===2 && gridBoxes.includes(playerChoice)) {
    console.log(playerTurn);
    console.log(playerChoice);
    console.log(playerTwoDetails.color);
    t.style.backgroundColor=playerTwoDetails.color;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    playerTurn=3;
} else if (playerTurn===3 && gridBoxes.includes(playerChoice)) {
    console.log(playerTurn);
    console.log(playerChoice);
    console.log(playerThreeDetails.color);
    t.style.backgroundColor=playerThreeDetails.color;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    playerTurn=4;
} else if (playerTurn===4 && gridBoxes.includes(playerChoice)) {
    console.log(playerTurn);
    console.log(playerChoice);
    console.log(playerFourDetails.color);
    t.style.backgroundColor=playerFourDetails.color;
    gridBoxes = gridBoxes.filter(e => e !== playerChoice);
    playerTurn=1;
}}



// change player each turn

// color and log the choices of each player

// check if a player has three in a row