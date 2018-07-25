/*
    Dato un codice di volo (es: SQ388) restituisce un oggetto che contiene le
    informazioni riguardo:
        aereoporto di partenza
        aereoporto di arrivo
        minuti di ritardo
 */
function getFlightInfo(flightCode) {
    console.log("Hello World");


    var flightInfo = {
        departureAirPort: 'MXP',
        arrivalAirport: 'JFK',
        delay: 37
    }
    console.log(flightInfo);
}

/*
    getFlights(airportCode, selector)
    Dato un aeroporto ed un selettore (una stringa che può prendere il valore
    "departure" o "arrival"), restituisci i codici di tutti i voli in partenza
    o in arrivo da quell'aereoporto (ritorna quindi un array di stringhe, ognuna
    delle quali rappresenta un codice di volo. ([SQ388,UA928,...])
 */
function getFlights(airportCode, selector) {

}


/*
    Crea un nuovo volo
 */
function setFlights() {

}

getFlightInfo();