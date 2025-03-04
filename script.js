function mostrarGaleria() {
    var galeria = document.getElementById("galeria");
    if (galeria.style.display === "none" || galeria.style.display === "") {
        galeria.style.display = "grid";
    } else {
        galeria.style.display = "none";
    }
}
