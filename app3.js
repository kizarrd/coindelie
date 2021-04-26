const searchBtn = document.getElementById("coinGenerateBtn");
const divKeywords = document.querySelector(".keywords");
const divGuitar = document.querySelector(".guitar");


function getCoinName(coin_name){
    const abbrev = allCoinList.find(({name}) => name === coin_name).abbrev;
    document.getElementById("coin_name").innerHTML = `이름: ${coin_name} (${abbrev})`;
}

function getKeywords(coin_name){
    divKeywords.innerHTML = "키워드: ";

    const coin = allCoinList.find(({name}) => name === coin_name);

    const arr = Object.keys(allCoinList[0]);

    for(var i=2; i<arr.length-1; i++){
        if(eval("coin." + arr[i]) == 1){
            const keywordElement = document.createElement("div");
            keywordElement.classList.add("keywords-elements");
            keywordElement.innerHTML = arr[i];
            divKeywords.appendChild(keywordElement);
        }
    }
}

function getGuitar(coin_name){
    divGuitar.innerHTML = "기타: ";
    const coin = allCoinList.find(({name}) => name === coin_name);
    
    if(coin.기타){
        divGuitar.innerHTML = `기타: ${coin.기타}`;
    }
}

function handleCoinBtnClick(){
    if(!coinSearched.innerHTML){
        coinNotSearched.innerHTML = "코인을 검색하여 선택해 주세요.";
    }else{
        const coin_name = coinSearched.innerHTML;
        getCoinName(coin_name);
        getKeywords(coin_name);
        getGuitar(coin_name);
    }
}



function init(){
    searchBtn.addEventListener("click", handleCoinBtnClick);
}

init();