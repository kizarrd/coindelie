var d = new Date();

// if(!localStorage.num_picks_left){
//     localStorage.setItem('num_picks_left', 3);
// }

if(!localStorage.date_last_visited || localStorage.date_last_visited != d.getDate()){
    localStorage.setItem('date_last_visited', d.getDate());
    localStorage.setItem('num_picks_left', 3);
}


var coinBox = document.getElementById("coinGeneratedBox");
var coinBtn = document.getElementById("coinGenerateBtn")
var numberReminder = document.getElementById("number-reminder");
var reminder = document.getElementById("reminder");
const button = document.querySelector('button');

function pickACoin(coinList){
    const listSize = coinList.length;
    var randomNumber = Math.floor(Math.random() * listSize);
    var coinSelected = coinList[randomNumber];
    
    return coinSelected;
}

function giveRandomCoin(){
    coinBox.innerHTML = pickACoin(coinList);
}

function handleCoinBtnClick(){
    button.disabled = true;
    var n_picks_left = parseInt(localStorage.num_picks_left);

    if(n_picks_left == 0){
        reminder.innerHTML = "오늘의 추천 기회를 모두 소진하였습니다. 내일 다시 부탁할 수 있습니다."
        return;
    }else{
        localStorage.num_picks_left = --n_picks_left;
        numberReminder.innerHTML = `남은 추천 기회:  ${localStorage.num_picks_left}번`;
    }


    coinBox.innerHTML = "";
    delieBodyEClosed.style.opacity = 1;
    getThoughtBalloonImage();
    
    setTimeout(()=> {coinBox.innerHTML = ".";}, 1500);
    setTimeout(()=> {coinBox.innerHTML = ". .";}, 2300);
    setTimeout(()=> {coinBox.innerHTML = ". . .";}, 3100);
    setTimeout(()=> {coinBox.innerHTML = ". . . !";}, 3900);

    setTimeout(()=>{
        delieBodyEClosed.style.opacity = 0;
        giveRandomCoin();
        button.disabled = false;
    }, 5000);
    // setTimeout(giveRandomCoin, 0);

}

const thoughtBalloon = document.getElementById("thoughtBalloon");
const delieEyesClosed = document.getElementsByClassName("delieEyesClosed");

function getThoughtBalloonImage(){
    if(thoughtBalloon.childNodes[0]){
        thoughtBalloon.removeChild(thoughtBalloon.childNodes[0]);
    }

    setTimeout(()=> {
        const thoughtBalloonMakingImg = new Image();
        thoughtBalloonMakingImg.src = `assets/thought_balloon_01.gif`;
        thoughtBalloonMakingImg.classList.add("thoughtBalloonImg"); 
        thoughtBalloon.appendChild(thoughtBalloonMakingImg);
    }, 0);
    setTimeout(()=> {
        const thoughtBalloonNormalImg = new Image();
        thoughtBalloonNormalImg.src = `assets/thought_ballon_02.gif`;
        thoughtBalloonNormalImg.classList.add("thoughtBalloonImg"); 
        thoughtBalloon.appendChild(thoughtBalloonNormalImg);
        thoughtBalloon.removeChild(thoughtBalloon.childNodes[0]);
    }, 1500);
}



function init(){
    numberReminder.innerHTML = `남은 추천 기회:  ${localStorage.num_picks_left}번`;
    coinBtn.addEventListener("click", handleCoinBtnClick);
}

init();