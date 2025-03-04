function mostrarGaleria() {
    var galeria = document.getElementById("galeria");
    if (galeria.classList.contains("oculto")) {
        galeria.classList.remove("oculto");
    } else {
        galeria.classList.add("oculto");
    }
}
