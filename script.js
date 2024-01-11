/*
////////////////////////////////////////////////////////////////////pseudo-code

ALGORITHME jeuNombreDevin

VARIABLE
    guessNumber---INTEGER
    userNumber---INTEGER
    counter(i)---INTEGER
    messageUp---STRING
    messageDown---STRING
    messageFinal---STRING

DEBUT

    guessNumber---ALEATOIRE(1,100)
    userNumber---SAISIE "string" _____CONVERTIR(ParseInt)
    counter(i)---ALLANT DE 5 A 1 PAR PAS DE 1
    counter(i)---5
    messageUp---ALERT ("Trop haut")
    messageDown---ALERT ("Trop bas")
    messageFinal---ALERT("Bravo")

    TANTQUE userNumber !== guessNumber && counter(i) <= 5 FAIRE
        SI userNumber < guessNumber ALORS
            messageDown
        SINON 
            messageUp
        FINSI
        userNumber---window.prompt("Essayez de nouveau, donnez un nombre entre 1 et 100")
        counter(i)--
    FINTANTQUE
    SI userNumber === guessNumber ALORS
        messageFinal
    FINSI
    SI counter(i) = 0 ALORS
        finAlgo
    FINSI

FIN
////////////////////////////////////////////////////////code

*/

let guessNumber = (Math.floor(Math.random()*100)+1);
console.log(guessNumber);

let userNumber = parseInt(window.prompt("Donnez un nombre entre 1 et 100"));

let i = 0;


while (userNumber != guessNumber && i < 4) {
    if (userNumber < guessNumber) {
        alert(`Trop bas, il vous reste ${4-i} essais`);
    }else {
        alert(`Trop haut, il vous reste ${4-i} essais`);
    }
    userNumber = parseInt(window.prompt("Donnez un nombre entre 1 et 100"));
    i++;
}

if (userNumber === guessNumber) {
    alert("Bravo! Voulez-vous rejouer ?");
    window.location.reload();
}

if (i == 4) {
    alert("Vous avez perdu! Voulez-vous ré-essayer ?");
    window.location.reload();
}


