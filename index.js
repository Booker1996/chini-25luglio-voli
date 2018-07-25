/*
    Dato un codice di volo (es: SQ388) restituisce un oggetto che contiene le
    informazioni riguardo:
        aereoporto di partenza
        aereoporto di arrivo
        minuti di ritardo
 */
function getFlightInfo(flightCode) {
    var lunVoli = voli.length;
    for (var i=0; i<lunVoli; i++){

        if(voli[i].flightCode==flightCode){
            var fligthInfo = {
                departureAirport: voli[i].departureAirport,
                arrivalAirport: voli[i].arrivalAirport,
                delay: voli[i].delay
            };
            return fligthInfo;
        }
    }
    return "Errore! Volo non trovato!";


    //console.log(flightInfo);
}

/*
    getFlights(airportCode, selector)
    Dato un aeroporto ed un selettore (una stringa che può prendere il valore
    "departure" o "arrival"), restituisci i codici di tutti i voli in partenza
    o in arrivo da quell'aereoporto (ritorna quindi un array di stringhe, ognuna
    delle quali rappresenta un codice di volo. ([SQ388,UA928,...])
 */
function getFlights(airportCode, selector) {
    var lunVoli = voli.length;
    var listavoli = [];
    if(selector=="departure"){
        for(var i = 0; i<lunVoli; i++){
            if(voli[i].departureAirport==airportCode){
                listavoli.push(voli[i].flightCode);
            }
        }
    }else if(selector=="arrival"){
        for(var i = 0; i<lunVoli; i++){
            if(voli[i].arrivalAirport==airportCode){
                listavoli.push(voli[i].flightCode);
            }
        }
    }
    return listavoli;


}

/*
    Crea un nuovo volo
 */
function setFlights(flightCode, departureAirport, arrivalAirport, delay) {
    var volo ={
        flightCode: flightCode,
        departureAirport: departureAirport,
        arrivalAirport: arrivalAirport,
        delay: delay
    }
    voli.push(volo);
}


var voli = [];
voli[0] = {
    flightCode: 'SQ388',
    departureAirport: 'MXP',
    arrivalAirport: 'JFK',
    delay: 37
};
voli[1] = {
    flightCode: 'UA928',
    departureAirport: 'MXP',
    arrivalAirport: 'CIA',
    delay: 89
};

console.log(getFlightInfo("SQ388"));
//setFlights("CI400","BOH","CIA",12);
console.log(getFlights("MXP","departure"));
console.log(getFlights("CIA","arrival"));
console.log(getFlights("MXP","arrival"));
console.log(getFlights("MXP","dsd"));
