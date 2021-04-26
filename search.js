const searchInput = document.getElementById("search");
const resultBox = document.getElementById("resultBox");
const searchList = document.getElementById("searchList");
const target = document.querySelectorAll(".targetLi");
const coinSearched = document.getElementById("coinSearched");

function matchSearch(value) {
    const searchID = searchInput.value;
    return value.indexOf(searchID) != -1;
}

function showFilteredCoin(coin) {
    resultBox.style.display = "flex";
    const filteredCoinLi = document.createElement('li');
    filteredCoinLi.innerHTML = `
        <div class="coin_text">
            <span class="coin_span">${coin}</span>
        </div>`
    searchList.appendChild(filteredCoinLi);
}

function printSelected()  {
    coinSearched.style.display = "flex";
    coinSearched.innerText = searchInput.value;
    searchInput.value = '';
}

function init(){
    
    searchInput.addEventListener('keyup', function() {
        searchList.innerHTML = '';
        resultBox.style.display = "none";
        if (searchInput.value) {
            const filteredCoinElement = coinListThought.filter( x => matchSearch(x))
            if (filteredCoinElement) {
                filteredCoinElement.forEach(function(e) {
                    showFilteredCoin(e)
                })
                var coinText = document.querySelectorAll(".coin_text");
                var coinTextSpan = document.querySelectorAll(".coin_span");

                for(var i=0; i < coinText.length; i++){
                    coinText[i].addEventListener("mousedown", function() {
                        searchInput.value = this.getElementsByTagName('span')[0].innerHTML;
                        printSelected();
                    });
                }
                searchInput.addEventListener('focusout', function() {
                    resultBox.style.display = "none";
                })
            }
        }
    })


}

init();