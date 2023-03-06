//voglio creare una griglia di gioco numerata da 1 a 100 che spunta non appena l'utente preme il bottone
//creo gli elementi html del contenitore del contenitore della griglia e del bottone
//creo le variabili del contenitore e del bottone
//creo le variabili del numero di celle nella griglia
//creo gli elementi div uno alla volta in un ciclo for presi dalla funzione
//creo l'evento clic per il bottone
//creo la funzione in cui redigere le istruzioni da dare al click del bottone
//--> nel click voglio che:
    //si crei un nuovo elemento che sarà un div
    //codesto elemento venga appeso nel contenitore generale
    //creo la funzione che fa si che vengano generati dei numeri all'interno delle celle
//do le ultime modifiche con CSS

//creo gli elementi html del contenitore del contenitore della griglia e del bottone
const contEl = document.getElementById('general-cnt');
const btnEl = document.getElementById('grid-on');
const resultEl = document.getElementById("result-cnt");

//creo le variabili del numero di celle nella griglia
let celle = 101;
let bombSpawn = [];

//creo gli elementi div uno alla volta in un ciclo for presi dalla funzione

//creo l'evento clic per il bottone
//voglio creare un array di 16 numeri casuali (fatto)
//SE la cella cliccata corrisponde alla stessa cifra di una bomba... BUM!!! ovviamente intendo che la casella si colorerà di rosso e il gioco si interromperà
//far sì che questi numeri siano compresi nei blocchi dell'esercizio attraverso forse un comando di parametri o forse tramite un'altra funzione(?)
btnEl.addEventListener("click", function() {
    
    for (i = 1; i < celle; i++) {
        //creo la funzione in cui redigere le istruzioni da dare al click del bottone 
        //--> dopo aver creato la funzione la appccico qua in una variabile
        SquareSpawn(i, 10);
    }
    bombSpawn = Array.from({length: 16}, () => Math.floor(Math.random() * 100) + 1);
        console.log(bombSpawn);
});



function SquareSpawn(celNum, colNum) {
    // console.log(bombSpawn);

    //--> nel click voglio che:
    //si crei un nuovo elemento che sarà un div
    //codesto elemento venga appeso nel contenitore generale

    let cellaEl = document.createElement('div');
    cellaEl.innerText = celNum;
    //cellaEl.style.width = `calc(100% / ${colNum})`;
    //cellaEl.style.height = `calc(100% / ${colNum})`;
    cellaEl.classList.toggle('quadrato');
    // cellaEl.style.display = "none";
    //cellaEl.classList.toggle("quadrato");
    contEl.append(cellaEl);

    cellaEl.addEventListener('click', function() {
        //voglio creare un array di 16 numeri casuali, lo inserisco prima del periodo in modo tale che l'array non si ripeta
        cellaEl.classList.add("clicked");
        let vittoria;
        if (bombSpawn.includes(parseInt(cellaEl.innerText))) {
            cellaEl.style.backgroundColor = "red";
            //document.writeln("hai perso! ricarica per ricominciare");
            vittoria = false;
        } else {
            cellaEl.style.backgroundColor = "blue";
            console.log(celNum);
        }
        //adesso voglio dire che ad essere stampato su console il numero della casella cliccata, come lo traduco nel linguaggio js?
    });
}