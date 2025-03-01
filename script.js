document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mostrar-portafolio").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("portafolio").classList.toggle("oculto");
    });
});
