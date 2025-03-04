function mostrarGaleria(id) {
    var galeria = document.getElementById(id);
    if (galeria.classList.contains("oculto")) {
        galeria.classList.remove("oculto");
    } else {
        galeria.classList.add("oculto");
    }
}
