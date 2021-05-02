var d = new Date();

// if(!localStorage.num_picks_left){
//     localStorage.setItem('num_picks_left', 5);
// }

if(!localStorage.date_last_visited || localStorage.date_last_visited != d.getDate()){
    localStorage.setItem('date_last_visited', d.getDate());
    if(!localStorage.num_picks_left || localStorage.num_picks_left < 5){
        localStorage.setItem('num_picks_left', 5);
    }
}



function filterArray(exchange, keyword){
    var arr1 = [];
    var arr2 = [];
    var i;

    if(exchange=="whatever"){
        for(i=0; i<allCoinList.length; i++){
            arr1.push(allCoinList[i]);
        }
    }else{
        for(i=0; i<allCoinList.length; i++){
            if(eval("allCoinList[i]."+ exchange) == 1){
                arr1.push(allCoinList[i]);
            }
        }
    }

    if(keyword=="whatever"){
        for(i=0; i<arr1.length; i++){
            arr2.push(arr1[i].name);
        }
    }else{
        for(i=0; i<arr1.length; i++){
            if(eval("arr1[i]."+ keyword) == 1){
                arr2.push(arr1[i].name);
            }
        }
    }

    for(i=0; i<arr2.length; i++){
        if(arr2[i] == "더마이다스터치골드"){
            arr2[i] = "더마이다스</br>터치골드";
        }else if(arr2[i] == "리피오크레딧네트워크"){
            arr2[i] = "리피오크레딧</br>네트워크";
        }else if(arr2[i] == "머신익스체인지코인"){
            arr2[i] = "머신</br>익스체인지코인";
        }else if(arr2[i] == "비트코인다이아몬드"){
            arr2[i] = "비트코인</br>다이아몬드";
        }else if(arr2[i] == "비트코인캐시에이비씨"){
            arr2[i] = "비트코인캐시</br>에이비씨";
        }else if(arr2[i] == "스테이터스네트워크토큰"){
            arr2[i] = "스테이터스</br>네트워크토큰";
        }
        // else if(arr[i] == ""){
        //     arr[i] = "";
        // }

    }

    return arr2;
}


var coinBox = document.getElementById("coinGeneratedBox");
var coinBtn = document.getElementById("coinGenerateBtn")
var numberReminder = document.getElementById("number-reminder");
const button = document.querySelector('button');
const adBanner = document.getElementById("adbanner__bottom");

function pickACoin(array_filtered){
    const listSize = array_filtered.length;
    var randomNumber = Math.floor(Math.random() * listSize);
    var coinSelected = array_filtered[randomNumber];
    
    return coinSelected;
}

function giveRandomCoin(array_filtered){
    coinBox.innerHTML = pickACoin(array_filtered);
}

const delieBodyEClosed = document.querySelector(".delieImgEyesClosed");
const thoughtBalloon = document.getElementById("thoughtBalloon");
const thoughtBalloonImg = document.querySelector(".thoughtBalloonImg");

function getThoughtBalloonImage(){
    // if(thoughtBalloon.childNodes[0]){
        //     thoughtBalloon.removeChild(thoughtBalloon.childNodes[0]);
        // }
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

var exchange = document.getElementById("select_exchange").value;
var keyword = document.getElementById("select_keyword").value;

function handleCoinBtnClick(){
    
    if(localStorage.num_picks_left <= 0){
        numberReminder.innerHTML = "오늘의 추천 기회를 모두 소진하였습니다.</br>내일 다시 부탁할 수 있습니다."
        return;
    }else{
        button.disabled = true;
        // array_filtered = filterArray(exchange, keyword);
        if(array_filtered.length == 0){
            document.getElementById("num_filtered_coin").innerHTML = "거래소와 키워드를 다시 선택해 주세요.";
            button.disabled = false;
            return;
        }
        const temp_arr = array_filtered;
        console.log(temp_arr);
        var n_picks_left = parseInt(localStorage.num_picks_left);
        localStorage.num_picks_left = --n_picks_left;
        numberReminder.innerHTML = `남은 추천 기회:  ${localStorage.num_picks_left}번`;
        coinBox.innerHTML = "";
        delieBodyEClosed.style.display = "flex";
        getThoughtBalloonImage();
        
        setTimeout(()=> {coinBox.innerHTML = ".";}, 1500);
        setTimeout(()=> {coinBox.innerHTML = ". .";}, 1700);
        setTimeout(()=> {coinBox.innerHTML = ". . .";}, 1900);
        setTimeout(()=> {coinBox.innerHTML = ". . . !";}, 2100);
    
        setTimeout(()=>{
            delieBodyEClosed.style.display = "none";
            giveRandomCoin(temp_arr);
            button.disabled = false;
        }, 3100);
    }
}


// function handleAdBannerClick(){
//     console.log("clicked");
//     var n_picks_left = parseInt(localStorage.num_picks_left);
//     localStorage.num_picks_left = ++n_picks_left;
//     numberReminder.innerHTML = `남은 추천 기회:  ${localStorage.num_picks_left}번`;
// }

function handleSelected(event){
    exchange = document.getElementById("select_exchange").value;
    keyword = document.getElementById("select_keyword").value;
    array_filtered = filterArray(exchange, keyword);
    document.getElementById("num_filtered_coin").innerHTML = `${array_filtered.length} 개의 코인이 선택되었습니다.`;
}

var array_filtered = null;

function init(){
    numberReminder.innerHTML = `남은 추천 기회:  ${localStorage.num_picks_left}번`;
    array_filtered = filterArray(exchange, keyword);
    document.getElementById("num_filtered_coin").innerHTML = `${array_filtered.length} 개의 코인이 선택되었습니다.`;
    document.getElementById("select_exchange").addEventListener('change', event => handleSelected());
    document.getElementById("select_keyword").addEventListener('change',  event => handleSelected());
    coinBtn.addEventListener("click", handleCoinBtnClick);
}

init();