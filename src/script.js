const boxHtmlNum = document.querySelector('.box_random_numbers')

document.querySelector('button').addEventListener('click', initGame);


function initGame(){
    const arrNumRandom = [];
    getRndNum(arrNumRandom);

    showNumbersTimed(boxHtmlNum, arrNumRandom, 5);

    const arrNumUser = [];
    setTimeout(function(){ askUser(arrNumUser) }, 5.5*1000);

    let checkArrayLenght = false;
    while(checkArrayLenght == false){
        if(checkArrayLenght == true){
            let definitiveCheck = checkAnswers(arrNumRandom, arrNumRandom);
        };
    };

    if(definiteveCheck == true){
        boxHtmlNum.innerHTML = "Good job";
    } else {
        boxHtmlNum.innerHTML = "Try again u lost";
    };

};






/**
 * Inserisce nell'array dei numeri random
 * @param {array} array 
 * @returns l'array inserito con i numeri random
 */
function getRndNum(array) {
    for(let i = 0; i < 5; i++){
        array[i] = Math.floor(Math.random() * 201 );
        //console.log('inside funz',array[i]);
    }

    return array;
};


/**
 * Mostra nel browser per un determinato intervallo di tempo dei numeri randomizzati
 * @param {HTMLAnchorElement} wherHtml - puntatore all'elemento presente nell'html
 * @param {array} array - l'array che ha i numeri randomizzati
 * @param {number} sec - secondi che si vuole mostrare i numeri nel browser 
 */
function showNumbersTimed(wherHtml, array, sec){
    wherHtml.innerHTML = `<strong>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]}</strong>`;

    setTimeout(function(){
        boxHtmlNum.innerHTML = "";
    }, sec*1000);
};


/**
 * Chiede all'utente i numeri e li salva in un array
 * @param {array} array 
 * @returns l'array con i numeri inseriti dall'utente
 */
function askUser(array){
    for(let i=0 ; i<5 ; i++){
        array[i] = parseInt(prompt("Scrivi UNO dei numeri che sono apparsi"));
    };

    checkArrayLenght = true;

    return array;
};


function checkAnswers(arrayPc, arrayUser){
    for(let i=0 ; i < arrayPc.lenght ; i++){
        for(let j=0 ; j < arrayPc.lenght ; j++){    
            if(! (arrayPc[i] === arrayUser[j])){
                return false;
            }
        }
    }

    return true;
}