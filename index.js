document.addEventListener("DOMContentLoaded", function() {
    var texts = document.querySelectorAll(".rotating-content .text");
    var index = 0;
    var images = ["cargaimed.png", "implantedent.png", "guiada.png"]; // Array com os caminhos das imagens
    var rotatingContent = document.querySelector(".rotating-content");

    function changeContent() {
        // Oculta o texto atual
        texts[index].classList.remove("active");
        // Incrementa o índice
        index++;
        // Se chegarmos ao final, voltamos para o início
        if (index === texts.length) {
            index = 0;
        }
        // Mostra o próximo texto
        texts[index].classList.add("active");

        // Troca a imagem de fundo da div
        rotatingContent.style.backgroundImage = "url(" + images[index] + ")";
    }

    // Inicializa o conteúdo imediatamente
    texts[index].classList.add("active");
    rotatingContent.style.backgroundImage = "url(" + images[index] + ")";

    // Define o intervalo para trocar o conteúdo
    var interval = setInterval(changeContent, 5000);
});
