function vypocitaj() {
    const cislo1 = parseFloat(document.getElementById("cislo1").value);
    const cislo2 = parseFloat(document.getElementById("cislo2").value);
    const operacia = document.getElementById("operacia").value;
    let vysledok;

    switch (operacia) {
        case "scitanie":
            vysledok = cislo1 + cislo2;
            break;
        case "odcitanie":
            vysledok = cislo1 - cislo2;
            break;
    }
}