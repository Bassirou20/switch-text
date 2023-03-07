let droite = document.querySelector('.droit');
let btn_droite = document.querySelector('.fa-arrow-right');
let tabGauche = gauche.childNodes;

function moveRight(){
    let element = this;
    element.style.background="red";
    btn_droite.addEventListener('click',()=>{
        droite.appendChild(element);
    })
}

tabGauche.forEach(element=>{
    element.addEventListener('mouseover',moveRight);
});