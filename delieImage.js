const delieBody = document.getElementById("delieBody");

const IMG_NUMBER = 0;


function getImage(imgNumber){
    const img = new Image();
    img.src = `assets/penguin_cropped.png`;
    img.classList.add("delieImg"); 
    // id list도 할 수 있으려나? 그러면 여러 종류의 delie image마다 각각 id붙여주면 되는데
    delieBody.appendChild(img);
}

function init(){
    getImage(IMG_NUMBER);
}

init();