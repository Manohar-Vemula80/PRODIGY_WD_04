let boxes=document.querySelectorAll(".box");
let Resetbtn=document.querySelector(".resetbt");
let Newgamebtn=document.querySelector(".new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".p")

let turnO= true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame=() =>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    msg.innerText = ""
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText ="O";
            turnO=false;
        }else{
            box.innerText ="X";
            turnO=true;
        }
        box.disabled= true;

        checkWinner();
    });
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner) =>{
    msgcontainer.innerText=`congratulation ,winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" &&  pos2val!="" &&  pos3val!=""){
            if(pos1val===pos2val  && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
        
    }
};

Newgamebtn.addEventListener("click",resetgame);
Resetbtn.addEventListener("click",resetgame);