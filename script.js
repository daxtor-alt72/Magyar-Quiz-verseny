function inditas() {

    const nev = document.querySelector("input").value;

    const orszag =
        document.querySelector("select").value;

    if (nev === "") {

        alert("❗ Kérlek, írd be a neved!");

        return;
    }

    if (
        orszag === "" ||
        orszag === "-- Válassz országot --"
    ) {

        alert("❗ Kérlek, válaszd ki az országodat!");

        return;
    }

    localStorage.setItem(
        "jatekosNev",
        nev
    );

    localStorage.setItem(
        "jatekosOrszag",
        orszag
    );

    window.location.href =
        "kategoria.html";
}

