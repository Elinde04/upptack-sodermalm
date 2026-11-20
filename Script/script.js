// Hämtar kryssrutor från HTML //
let kryssrutor = document.querySelectorAll(".bucketlist input");

// Hämtar texten som visar hur många aktiviteter som är klara //
let antal = document.getElementById("antal");

// Räknar hur många aktiviteter finns totalt //
let total = kryssrutor.length;

// Går igenom alla kryssrutor //
kryssrutor.forEach(function(ruta) {
    // Kollar efter när en användare kryssar i eller av en aktivitet//
    ruta.addEventListener("change", function() {
        //Räknar hur många rutor som är i kryssade//
        let klara = document.querySelectorAll(".bucketlist input:checked").length;
        //Updaterar texten med antalet klara aktiviteter//
        antal.textContent = `Du har gjort ${klara} av ${total} aktiviteter`;
        //Kontrollerar om alla aktiviteter är klara//
        if (klara === total) {
            //Gör texten grön när alla aktiviteter är klara//
            antal.style.color = "green";
        } else {
            //Gör texten svart om det finns aktiviteter kvar//
            antal.style.color = "black";
        }
    
});
});