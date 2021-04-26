var d = new Date();

if(!localStorage.date_last_visited_counsel || localStorage.date_last_visited_counsel != d.getDate()){
    localStorage.setItem('date_last_visited_counsel', d.getDate());
    if(!localStorage.num_counsel_left || localStorage.num_counsel_left < 5){
        localStorage.setItem('num_counsel_left', 5);
    }
    var arr = [];
    localStorage.setItem('coin_already_counseled', JSON.stringify(arr));
}


var coinBox = document.getElementById("coinGeneratedBox");
var coinBtn = document.getElementById("coinGenerateBtn")
var numberReminder = document.getElementById("number-reminder-counsel");
const button = document.querySelector('button');

function pickACoin(coinList){
    const listSize = coinList.length;
    var randomNumber = Math.floor(Math.random() * listSize);
    var coinSelected = coinList[randomNumber];
    
    return coinSelected;
}

function giveRandomThought(){
    coinBox.innerHTML = pickACoin(thoughtList);
}

const delieBodyEClosed = document.querySelector(".delieImgEyesClosed");
const thoughtBalloon = document.getElementById("thoughtBalloon");
const thoughtBalloonImg = document.querySelector(".thoughtBalloonImg");
const coinNotSearched = document.getElementById("coinNotSearched");


function getThoughtBalloonImage(){
    setTimeout(()=> {
        thoughtBalloonImg.style.display = "none"; 
        const thoughtBalloonMakingImg = new Image();
        thoughtBalloonMakingImg.src = `assets/thought_balloon_01.gif`;
        thoughtBalloonMakingImg.classList.add("thoughtBalloonGeneratingImg"); 
        thoughtBalloon.appendChild(thoughtBalloonMakingImg);
    }, 0);
    
    setTimeout(()=> {
        thoughtBalloonImg.style.display = "flex";
        thoughtBalloon.removeChild(document.querySelector(".thoughtBalloonGeneratingImg"));
    }, 1500);

}


function handleCoinBtnClick(){
    
    var coin_counseled_string = localStorage.getItem("coin_already_counseled");
    var coin_arr_counseled = JSON.parse(coin_counseled_string);

    if(localStorage.num_counsel_left <= 0){
        numberReminder.innerHTML = "오늘의 상담 기회를 모두 소진하였습니다.</br>내일 다시 부탁할 수 있습니다."
    }else if(!coinSearched.innerHTML){
        coinNotSearched.innerHTML = "코인을 검색하여 선택해 주세요.";
    }else if(coin_arr_counseled.includes(coinSearched.innerHTML)){ 
        coinNotSearched.innerHTML = "같은 코인은 내일 다시 상담할 수 있습니다.";
    }else{
        coin_arr_counseled.push(coinSearched.innerHTML);
        localStorage.coin_already_counseled = JSON.stringify(coin_arr_counseled);
        coinNotSearched.innerHTML = '';
        button.disabled = true;
        var n_counsel_left = parseInt(localStorage.num_counsel_left);
        localStorage.num_counsel_left = --n_counsel_left;
        numberReminder.innerHTML = `남은 상담 기회:  ${localStorage.num_counsel_left}번`;
        coinBox.innerHTML = "";
        delieBodyEClosed.style.display = "flex";
        getThoughtBalloonImage();
        
        setTimeout(()=> {coinBox.innerHTML = ".";}, 1500);
        setTimeout(()=> {coinBox.innerHTML = ". .";}, 1700);
        setTimeout(()=> {coinBox.innerHTML = ". . .";}, 1900);
        setTimeout(()=> {coinBox.innerHTML = ". . . !";}, 2100);
    
        setTimeout(()=>{
            delieBodyEClosed.style.display = "none";
            giveRandomThought();
            button.disabled = false;
        }, 3100);
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