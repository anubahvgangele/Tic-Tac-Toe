const Boxes =  document.querySelectorAll(".box");

const gameInfo = document.querySelector(".game-info");

const NewGameButton = document.querySelector(".btn");

let CurrentPlayer;

let GameGrid;

let WinningPositions = [[0,1,2] , [3,4,5] , [6,7,8] ,[0,3,6] , [1,4,7], [2,5,8] , [0,4,8] , [2,4,6]];

//Let's Create a function to initialize a function

function InitializeGame(){
    CurrentPlayer = "X";
    GameGrid = ["" , "" , "" , "" , "" , "" , "" , "" , "" ];
    NewGameButton.classList.remove("active");
    
    Boxes.forEach((box , index) => {
        box.innerText = "";
        Boxes[index].style.pointerEvents = "all";
        box.classList.remove("win");
        
    })
    gameInfo.innerText = `Current Player-${CurrentPlayer}`;

     
    
   
}

InitializeGame();

function CheckGameOver(){
    let answer = "";
    WinningPositions.forEach((position) => {
        if(GameGrid[position[0]] !== "" && GameGrid[position[1]] !== "" && GameGrid[position[2]] !== "")
            { 
                if((GameGrid[position[0]] === GameGrid[position[1]]) && (GameGrid[position[1]] === GameGrid[position[2]])) 
                    {
                        if(GameGrid[position[0]] === "X"){
                            answer = "X";
                            
                        }
                            
                        else{
                            answer = "0";
                            
                        }
                        Boxes.forEach((box) => {
                            box.style.pointerEvents = "none";
                        } 
                        );
                        
                        Boxes[position[0]].classList.add("win");
                        Boxes[position[1]].classList.add("win");
                        Boxes[position[2]].classList.add("win");

        }
    }
         
});
    if(answer !== ""){
        gameInfo.innerText = `Winning Player - ${answer}`;

            NewGameButton.classList.add("active");

                return;
}
//Check Tie
let FillCount = 0;
GameGrid.forEach((box) => {
    if(box !== ""){
        FillCount++;
    }
}
);
if(FillCount === 9){
    gameInfo.innerText = "Game Tie!";
    NewGameButton.classList.add("active");
}
    
}
           

Boxes.forEach((box , index) => box.addEventListener("click" , () => {
    handleClick(index);
}))


function handleClick(index){
    if(GameGrid[index] === ""){
        Boxes[index].innerText = CurrentPlayer;
        GameGrid[index] = CurrentPlayer;
        Boxes[index].style.pointerEvents = "none";
 
         
        //Swap Karo Turn ko
        SwapTurn();
        //CheckGameOver
        CheckGameOver();
       
        
    }
}

function SwapTurn(){
    if(CurrentPlayer === "X")
        CurrentPlayer = "0";

    else
        CurrentPlayer = "X";

    gameInfo.innerText = `Current Player - ${CurrentPlayer}`;
}



NewGameButton.addEventListener("click" , InitializeGame);










