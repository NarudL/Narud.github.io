function mostrarGaleria(id) {
    document.querySelectorAll('.galeria').forEach(galeria => {
        galeria.classList.add('oculto');
    });

    document.getElementById(id).classList.remove('oculto');
}
