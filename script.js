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
const submitButOne = document.getElementById("submitOne");
const submitButTwo = document.getElementById("submitTwo");
const submitButThree = document.getElementById("submitThree");
const submitButFour = document.getElementById("submitFour");
const beginGameBut = document.getElementById("beginGameButton")

function playerDetails (name, battleCry, teamColor) {
        this.name = name;
        this.battleCry = battleCry;
        this.color = teamColor;
}

teamColorOneChoice.addEventListener("change", ()=>{
    console.log(teamColorOneChoice.value);
    if (teamColorOneChoice.value==="Purple") {
        console.log("hi");
        let OneBackColor = document.getElementById("playerOneInfo");
        let playingSpaceOne = document.getElementById("playerOne");
        OneBackColor.style.backgroundColor="purple";
        playingSpaceOne.style.backgroundColor="purple";
    } else if (teamColorOneChoice.value==="Blue") {
        let OneBackColor = document.getElementById("playerOneInfo");
        let playingSpaceOne = document.getElementById("playerOne");
        OneBackColor.style.backgroundColor="rgb(0, 135, 255)";
        playingSpaceOne.style.backgroundColor="rgb(0, 135, 255)";

    }
})

teamColorTwoChoice.addEventListener("change", ()=>{
    if (teamColorTwoChoice.value==="Red") {
        let TwoBackColor = document.getElementById("playerTwoInfo");
        let playingSpaceTwo = document.getElementById("playerTwo");
        TwoBackColor.style.backgroundColor="red";
        playingSpaceTwo.style.backgroundColor="red";
    }else if (teamColorTwoChoice.value==="Orange") {
        let TwoBackColor = document.getElementById("playerTwoInfo");
        let playingSpaceTwo = document.getElementById("playerTwo");
        TwoBackColor.style.backgroundColor="orange";
        playingSpaceTwo.style.backgroundColor="orange";
    }
})

teamColorThreeChoice.addEventListener("change", ()=>{
    if (teamColorThreeChoice.value==="Green") {
        let ThreeBackColor = document.getElementById("playerThreeInfo");
        let playingSpaceThree = document.getElementById("playerThree");
        ThreeBackColor.style.backgroundColor="rgb(40, 160, 40)";
        playingSpaceThree.style.backgroundColor="rgb(40, 160, 40)";
    }else if (teamColorThreeChoice.value==="Pink") {
        let ThreeBackColor = document.getElementById("playerThreeInfo");
        let playingSpaceThree = document.getElementById("playerThree");
        ThreeBackColor.style.backgroundColor="pink";
        playingSpaceThree.style.backgroundColor="pink";
    }
})

teamColorFourChoice.addEventListener("change", ()=>{
    if (teamColorFourChoice.value==="Yellow") {
        let FourBackColor = document.getElementById("playerFourInfo");
        let playingSpaceFour = document.getElementById("playerFour");
        FourBackColor.style.backgroundColor="yellow";
        playingSpaceFour.style.backgroundColor="yellow";
    }else if (teamColorFourChoice.value==="Brown") {
        let FourBackColor = document.getElementById("playerFourInfo");
        let playingSpaceFour = document.getElementById("playerFour");
        FourBackColor.style.backgroundColor="brown";
        playingSpaceFour.style.backgroundColor="brown";
    }
})

let playerOneDetails={};
let playerTwoDetails={};
let playerThreeDetails={};
let playerFourDetails={};

submitButOne.addEventListener("click", ()=> {
    playerOneDetails = new playerDetails(playerOneName.value,playerOneBattleCry.value,teamColorOneChoice.value);
    let playerOneText = document.getElementById("playerOneText");
    playerOneText.innerText = playerOneDetails.name;
});

submitButTwo.addEventListener("click", ()=> {
    playerTwoDetails = new playerDetails(playerTwoName.value,playerTwoBattleCry.value,teamColorTwoChoice.value);
    let playerTwoText = document.getElementById("playerTwoText");
    playerTwoText.innerText = playerTwoDetails.name;
});

submitButThree.addEventListener("click", ()=> {
    playerThreeDetails = new playerDetails(playerThreeName.value,playerThreeBattleCry.value,teamColorThreeChoice.value);
    let playerThreeText = document.getElementById("playerThreeText");
    playerThreeText.innerText = playerThreeDetails.name;
});

submitButFour.addEventListener("click", ()=> {
    playerFourDetails = new playerDetails(playerFourName.value,playerFourBattleCry.value,teamColorFourChoice.value);
    let playerFourText = document.getElementById("playerFourText");
    playerFourText.innerText = playerFourDetails.name;
});

beginGameBut.addEventListener("click", ()=>{
    if (playerOneDetails.name!==undefined && playerTwoDetails.name!==undefined && playerThreeDetails.name!==undefined && playerFourDetails.name!==undefined) {
        gamebegin()
      } else {
        let instructionText = document.getElementById("instructions")
        instructionText.innerText = "You cannot begin the game until all names have been entered!"
      }
})

let gamebegin = function () {
    console.log(playerOneDetails.name);
    console.log(playerTwoDetails.name);
    console.log(playerThreeDetails.name);
    console.log(playerFourDetails.name);
}



// generate a tic tac toe game board

const gameBoardVar = document.getElementById("gameBoard");

function gameBoardGenerator () {
    for (i=0;i<9;i++) {
        outerDiv = document.createElement("div");
        outerDiv.style.height="200px";
        outerDiv.style.width="200px";
        outerDiv.id="outerDiv" + i;
        outerDiv.classList.add("outsideBox");
        document.getElementById("gameBoard").appendChild(outerDiv);
    }
    for (i=0;i<9;i++) {
        middleDiv = document.createElement("div");
        middleDiv.style.height="150px";
        middleDiv.style.width="150px";
        middleDiv.id="middleDiv" + i;
        middleDiv.classList.add("middleBox");
        document.getElementById("outerDiv" + i).appendChild(middleDiv);
    }
    for (i=0;i<9;i++) {
        innerDiv = document.createElement("div");
        innerDiv.style.height="100px";
        innerDiv.style.width="100px";
        innerDiv.id="innerDiv" + i;
        innerDiv.classList.add("innerBox");
        document.getElementById("middleDiv" + i).appendChild(innerDiv);
    }
}

gameBoardGenerator();
// create an interface that collects players names and stores the information in an object. Name, winning cry

// create functions for the game