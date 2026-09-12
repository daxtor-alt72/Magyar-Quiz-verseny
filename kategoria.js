function kvizInditas(kategoria) {

    localStorage.setItem(
        "kivalasztottKategoria",
        kategoria
    );

    window.location.href = "quiz.html";
}

