const nev =
    localStorage.getItem(
        "jatekosNev"
    );

const orszag =
    localStorage.getItem(
        "jatekosOrszag"
    );

const pont =
    localStorage.getItem(
        "jatekosPont"
    );


document.getElementById(
    "jatekosNev"
).textContent =
    nev || "Ismeretlen játékos";


document.getElementById(
    "jatekosOrszag"
).textContent =
    orszag || "Ismeretlen ország";


document.getElementById(
    "vegsoPont"
).textContent =
    pont || "0";


document.getElementById(
    "koszontes"
).textContent =
    `Szép munka, ${nev}! 🎉`;


function ujJatek() {

    window.location.href =
        "kategoria.html";
}


function ranglista() {

    window.location.href =
        "ranglista.html";
}

