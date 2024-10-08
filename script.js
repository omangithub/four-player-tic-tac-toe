// generate a tic tac toe game board

const gameBoardVar = document.getElementById("gameBoard");

function gameBoardGenerator () {
    console.log(gameBoardVar)
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
        innerDiv.id="middleDiv" + i;
        innerDiv.classList.add("middleBox");
        document.getElementById("middleDiv" + i).appendChild(innerDiv);
    }
}

gameBoardGenerator();
// create an interface that collects players names and stores the information in an object. Name, winning cry

// create functions for the game