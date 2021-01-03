const changecolors = document.querySelectorAll('.changecolor');
let activeLight = 0;
let btn = document.getElementsByTagName('button')[0];

btn.onclick = function (){
    changecolors[activeLight].className = 'changecolor';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = changecolors[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}