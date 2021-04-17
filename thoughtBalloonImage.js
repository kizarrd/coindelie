const thoughtBalloon = document.getElementById("thoughtBalloon");


function getImage(){
    const img = new Image();
    img.src = `assets/thought_ballon_02.gif`;
    img.classList.add("thoughtBalloonImg"); 
    // id list도 할 수 있으려나? 그러면 여러 종류의 delie image마다 각각 id붙여주면 되는데
    thoughtBalloon.appendChild(img);
}

function init(){
    getImage();
}

init();