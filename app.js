const coinList = ["Dogecoin", "Metadium", "Ripple", "Groestlcoin", "Pixel", "dKargo", "Qtum"];

var coinBox = document.getElementById("coinGeneratedBox");
var coinBtn = document.getElementById("coinGenerateBtn")

function pickACoin(coinList){
    const listSize = coinList.length;
    console.log(listSize);
    var randomNumber = Math.floor(Math.random() * 7);
    var coinSelected = coinList[randomNumber];
    
    return coinSelected;
}

function giveRandomCoin(){
    coinBox.innerHTML = pickACoin(coinList);
}

function handleCoinBtnClick(){
    
    // move penguin, and then
    giveRandomCoin();
}

function init(){
    coinBtn.addEventListener("click", handleCoinBtnClick);
}

init();