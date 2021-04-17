const delieBody = document.getElementById("delieBody");


const delieTailImg = new Image();
const delieLLWingImg = new Image();
const delieRLWingImg = new Image();
const delieBodyEOpen = new Image();
const delieBodyEClosed = new Image();

function getDelieImage(){
    delieTailImg.src = `assets/delie-tail.png`;
    delieTailImg.classList.add("delieImg"); 
    delieLLWingImg.src = `assets/deliewing-left-low.png`;
    delieLLWingImg.classList.add("delieImg"); 
    delieRLWingImg.src = `assets/deliewing-right-low.png`;
    delieRLWingImg.classList.add("delieImg"); 
    delieBodyEOpen.src = `assets/deliebody-eyes-open.png`;
    delieBodyEOpen.classList.add("delieImg"); 
    delieBodyEClosed.src = `assets/deliebody-eyes-closed.png`;
    delieBodyEClosed.classList.add("delieImg"); 

    delieBodyEClosed.style.opacity = 0;

    delieBody.appendChild(delieTailImg);
    delieBody.appendChild(delieLLWingImg);
    delieBody.appendChild(delieRLWingImg);
    delieBody.appendChild(delieBodyEOpen);
    delieBody.appendChild(delieBodyEClosed);

}

function init(){
    getDelieImage();
}

init();