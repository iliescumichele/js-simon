const boxHtmlNum = document.querySelector('.box_random_numbers')

document.querySelector('button').addEventListener('click', initGame);


function initGame(){
    const arrNumRandom = [];
    getRndNum(arrNumRandom);

    showNumbersTimed(boxHtmlNum, arrNumRandom, 5)

};







function getRndNum(array) {
    for(let i = 0; i < 5; i++){
        array[i] = Math.floor(Math.random() * 201 );
        //console.log('inside funz',array[i]);
    }

    return array;
}


/**
 * Mostra nel browser per un determinato intervallo di tempo dei numeri randomizzati
 * @param {HTMLAnchorElement} wherHtml - puntatore all'elemento presente nell'html
 * @param {array} array - l'array che ha i numeri randomizzati
 * @param {number} sec - secondi che si vuole mostrare i numeri nel browser 
 */
function showNumbersTimed(wherHtml, array, sec){
    wherHtml.innerHTML = `<strong>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]}</strong>`;
    setTimeout(function(){
        wherHtml.classList.add("hide");
    }, sec*1000);
}