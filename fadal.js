let droite = document.querySelector('.droit');
let btn_droite = document.querySelector('.fa-arrow-right');
let tabGauche = gauche.childNodes;

function remove(){
    let paras = document.querySelectorAll('.gauche p')
    paras.forEach(function(para){
        para.classList.remove('select');
    })
}

function moveRight(){
    let element = this;
    remove();
   element.classList.add("select");
}

btn_droite.addEventListener('click',()=>{
   let element=document.querySelector('.select')
   element.removeEventListener('mouseover',moveRight);
    remove();
    droite.appendChild(element);
})

tabGauche.forEach(element=>{
    element.addEventListener('mouseover',moveRight);
});