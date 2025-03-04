function mostrarGaleria(id) {
    var galeria = document.getElementById(id);
    if (galeria.style.display === "none" || galeria.style.display === "") {
        galeria.style.display = "grid";
    } else {
        galeria.style.display = "none";
    }
}
