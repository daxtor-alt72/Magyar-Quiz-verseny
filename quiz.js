const kategoriak = {

    jatek: [
        {
            kerdes: "Melyik játékban található a Creeper?",
            valaszok: [
                "Minecraft",
                "Fortnite",
                "Roblox",
                "Among Us"
            ],
            helyes: 0
        },
        {
            kerdes: "Ki a Super Mario játékok főszereplője?",
            valaszok: [
                "Luigi",
                "Mario",
                "Link",
                "Sonic"
            ],
            helyes: 1
        },
        {
            kerdes: "Melyik cég készítette a PlayStationt?",
            valaszok: [
                "Microsoft",
                "Nintendo",
                "Sony",
                "Valve"
            ],
            helyes: 2
        }
    ],

    zene: [
        {
            kerdes: "Hány húros egy hagyományos gitár?",
            valaszok: [
                "4",
                "5",
                "6",
                "7"
            ],
            helyes: 2
        },
        {
            kerdes: "Melyik hangszernek vannak billentyűi?",
            valaszok: [
                "Gitár",
                "Zongora",
                "Dob",
                "Hegedű"
            ],
            helyes: 1
        },
        {
            kerdes: "Melyik műfajhoz kapcsolódik leginkább a DJ-kultúra?",
            valaszok: [
                "EDM",
                "Country",
                "Blues",
                "Opera"
            ],
            helyes: 0
        }
    ],

    film: [
        {
            kerdes: "Melyik filmben szerepel Jack Sparrow?",
            valaszok: [
                "Titanic",
                "A Karib-tenger kalózai",
                "Avatar",
                "Mátrix"
            ],
            helyes: 1
        },
        {
            kerdes: "Mi a Harry Potter történetekben szereplő varázslóiskola neve?",
            valaszok: [
                "Roxfort",
                "Narnia",
                "Nevermore",
                "Camelot"
            ],
            helyes: 0
        },
        {
            kerdes: "Ki Bruce Wayne?",
            valaszok: [
                "Superman",
                "Vasember",
                "Batman",
                "Pókember"
            ],
            helyes: 2
        }
    ],

    foldrajz: [
        {
            kerdes: "Mi Franciaország fővárosa?",
            valaszok: [
                "London",
                "Párizs",
                "Berlin",
                "Madrid"
            ],
            helyes: 1
        },
        {
            kerdes: "Melyik a Föld legnagyobb óceánja?",
            valaszok: [
                "Atlanti-óceán",
                "Indiai-óceán",
                "Csendes-óceán",
                "Jeges-tenger"
            ],
            helyes: 2
        },
        {
            kerdes: "Melyik országot szokták csizma alakúként emlegetni?",
            valaszok: [
                "Spanyolország",
                "Olaszország",
                "Görögország",
                "Portugália"
            ],
            helyes: 1
        }
    ],

    sport: [
        {
            kerdes: "Hány játékos van egy futballcsapatban a pályán?",
            valaszok: [
                "9",
                "10",
                "11",
                "12"
            ],
            helyes: 2
        },
        {
            kerdes: "Melyik sportban használnak ütőt és labdát?",
            valaszok: [
                "Tenisz",
                "Úszás",
                "Atlétika",
                "Síelés"
            ],
            helyes: 0
        },
        {
            kerdes: "Hány karika található az olimpiai jelképen?",
            valaszok: [
                "4",
                "5",
                "6",
                "7"
            ],
            helyes: 1
        }
    ],

    altalanos: [
        {
            kerdes: "Hány napból áll egy szökőév?",
            valaszok: [
                "364",
                "365",
                "366",
                "367"
            ],
            helyes: 2
        },
        {
            kerdes: "Mi a H₂O?",
            valaszok: [
                "Oxigén",
                "Hidrogén",
                "Víz",
                "Só"
            ],
            helyes: 2
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
        }
    ]
};


const kivalasztott =
    localStorage.getItem(
        "kivalasztottKategoria"
    );


const kerdesek =
    kategoriak[kivalasztott];


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
        document.getElementById(
            "valaszok"
        );

    valaszok.innerHTML = "";


    adat.valaszok.forEach(
        (valasz, index) => {

            const gomb =
                document.createElement(
                    "button"
                );

            gomb.textContent =
                valasz;

            gomb.classList.add(
                "valasz"
            );

            gomb.onclick = () => {

                valaszEllenorzese(
                    index,
                    gomb
                );

            };

            valaszok.appendChild(
                gomb
            );
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


    setTimeout(() => {

        aktualisKerdes++;


        if (
            aktualisKerdes <
            kerdesek.length
        ) {

            kerdesMegjelenitese();

        } else {

            eredmeny();

        }

    }, 900);
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
