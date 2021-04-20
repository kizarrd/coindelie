var d = new Date();

if(!localStorage.date_last_visited_counsel || localStorage.date_last_visited_counsel != d.getDate()){
    localStorage.setItem('date_last_visited_counsel', d.getDate());
    localStorage.setItem('num_counsel_left', 50);
    var arr = [];
    localStorage.setItem('coin_already_counseled', JSON.stringify(arr));
}


var coinBox = document.getElementById("coinGeneratedBox");
var coinBtn = document.getElementById("coinGenerateBtn")
var numberReminder = document.getElementById("number-reminder-counsel");
var reminder = document.getElementById("reminder");
const button = document.querySelector('button');

function pickACoin(coinList){
    const listSize = coinList.length;
    var randomNumber = Math.floor(Math.random() * listSize);
    var coinSelected = coinList[randomNumber];
    
    return coinSelected;
}

function giveRandomCoin(){
    coinBox.innerHTML = pickACoin(thoughtList);
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


const coinNotSearched = document.getElementById("coinNotSearched");
function handleCoinBtnClick(){
    
    var coin_counseled_string = localStorage.getItem("coin_already_counseled");
    var coin_arr_counseled = JSON.parse(coin_counseled_string);

    if(localStorage.num_counsel_left <= 0){
        console.log("발동")
        numberReminder.innerHTML = "오늘의 상담 기회를 모두 소진하였습니다. 내일 다시 부탁할 수 있습니다."
    }else if(!coinSearched.innerHTML){
        coinNotSearched.innerHTML = "코인을 검색하여 선택해 주세요.";
    }else if(coin_arr_counseled.includes(coinSearched.innerHTML)){ 
        coinNotSearched.innerHTML = "한 번 상담받은 코인은 내일 다시 물어볼 수 있습니다.";
    }else{
        coin_arr_counseled.push(coinSearched.innerHTML);
        localStorage.coin_already_counseled = JSON.stringify(coin_arr_counseled);
        coinNotSearched.innerHTML = '';
        button.disabled = true;
        var n_counsel_left = parseInt(localStorage.num_counsel_left);
        localStorage.num_counsel_left = --n_counsel_left;
        numberReminder.innerHTML = `남은 상담 기회:  ${localStorage.num_counsel_left}번`;
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
    }

}

// else if(!coinListThought.includes(coinSearched.innerHTML)){
//     coinNotSearched.innerHTML = "해당 코인은 델리가 알지 못하는 코인입니다."
// }

function init(){
    numberReminder.innerHTML = `남은 상담 기회:  ${localStorage.num_counsel_left}번`;
    coinBtn.addEventListener("click", handleCoinBtnClick);
}

init();