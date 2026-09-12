const kerdesek = [

    {
        kerdes: "Mi Magyarország fővárosa?",

        valaszok: [
            "Debrecen",
            "Budapest",
            "Szeged",
            "Pécs"
        ],

        helyes: 1
    },

    {
        kerdes: "Hány kontinens van a Földön?",

        valaszok: [
            "5",
            "6",
            "7",
            "8"
        ],

        helyes: 2
    },

    {
        kerdes: "Melyik a Naprendszer legnagyobb bolygója?",

        valaszok: [
            "Föld",
            "Mars",
            "Jupiter",
            "Vénusz"
        ],

        helyes: 2
    },

    {
        kerdes: "Melyik évben kezdődött a második világháború?",

        valaszok: [
            "1939",
            "1941",
            "1945",
            "1935"
        ],

        helyes: 0
    },

    {
        kerdes: "Hány lába van egy póknak?",

        valaszok: [
            "6",
            "8",
            "10",
            "12"
        ],

        helyes: 1
    },

    {
        kerdes: "Melyik bolygót nevezik vörös bolygónak?",

        valaszok: [
            "Mars",
            "Jupiter",
            "Szaturnusz",
            "Merkúr"
        ],

        helyes: 0
    },

    {
        kerdes: "Melyik a világ legnagyobb óceánja?",

        valaszok: [
            "Atlanti-óceán",
            "Indiai-óceán",
            "Csendes-óceán",
            "Jeges-tenger"
        ],

        helyes: 2
    },

    {
        kerdes: "Hány játékos van egy focicsapatban a pályán?",

        valaszok: [
            "9",
            "10",
            "11",
            "12"
        ],

        helyes: 2
    },

    {
        kerdes: "Melyik állat a leggyorsabb szárazföldi állat?",

        valaszok: [
            "Oroszlán",
            "Gepárd",
            "Tigris",
            "Ló"
        ],

        helyes: 1
    },

    {
        kerdes: "Hány napból áll egy szökőév?",

        valaszok: [
            "364",
            "365",
            "366",
            "367"
        ],

        helyes: 2
    }

];


let aktualisKerdes = 0;
let pont = 0;


function kerdesMegjelenitese() {

    const adat =
        kerdesek[aktualisKerdes];

    document.getElementById(
        "kerdesSzam"
    ).textContent =
        `Kérdés ${aktualisKerdes + 1} / ${kerdesek.length}`;

    document.getElementById(
        "pontszam"
    ).textContent =
        `Pont: ${pont}`;

    document.getElementById(
        "kerdes"
    ).textContent =
        adat.kerdes;

    const valaszok =
        document.getElementById("valaszok");

    valaszok.innerHTML = "";

    adat.valaszok.forEach(
        (valasz, index) => {

            const gomb =
                document.createElement("button");

            gomb.textContent = valasz;

            gomb.classList.add(
                "valasz"
            );

            gomb.onclick = function () {

                valaszEllenorzese(
                    index,
                    gomb
                );

            };

            valaszok.appendChild(gomb);

        }
    );


    const szazalek =
        (aktualisKerdes /
        kerdesek.length) * 100;

    document.getElementById(
        "haladas"
    ).style.width =
        `${szazalek}%`;
}


function valaszEllenorzese(
    valasztott,
    gomb
) {

    const helyes =
        kerdesek[
            aktualisKerdes
        ].helyes;

    const gombok =
        document.querySelectorAll(
            ".valasz"
        );

    gombok.forEach(
        g => g.disabled = true
    );


    if (valasztott === helyes) {

        pont += 10;

        gomb.classList.add(
            "helyes"
        );

    } else {

        gomb.classList.add(
            "hibas"
        );

        gombok[
            helyes
        ].classList.add(
            "helyes"
        );
    }


    document.getElementById(
        "pontszam"
    ).textContent =
        `Pont: ${pont}`;


    setTimeout(
        () => {

            aktualisKerdes++;

            if (
                aktualisKerdes <
                kerdesek.length
            ) {

                kerdesMegjelenitese();

            } else {

                eredmeny();

            }

        },
        900
    );
}


function eredmeny() {

    localStorage.setItem(
        "jatekosPont",
        pont
    );

    window.location.href =
        "eredmeny.html";
}


kerdesMegjelenitese();

