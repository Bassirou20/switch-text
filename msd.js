let tab= ['mon premier', 'mon deuxieme','mon troisieme', 'mon quatrieme'];
let gauche = document.querySelector('.gauche');
for (let i = 0; i < tab.length; i++) {
    const text = tab[i];

    let paragraph = document.createElement('p');
    paragraph.textContent= text;
    gauche.appendChild(paragraph)  
}