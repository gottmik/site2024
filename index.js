// document.addEventListener("DOMContentLoaded", function() {
//     var index = 0;
//     var images = document.querySelectorAll(".banner img");
//     var interval = setInterval(changeImage, 3000); // Altera a imagem a cada 3 segundos

//     function changeImage() {
//         // Oculta a imagem atual
//         images[index].classList.remove("active");
//         // Incrementa o índice
//         index++;
//         // Se chegarmos ao final, voltamos para o início
//         if (index === images.length) {
//             index = 0;
//         }
//         // Mostra a próxima imagem
//         images[index].classList.add("active");
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
//     var texts = document.querySelectorAll(".rotating-text .text");
//     var index = 0;
//     var interval = setInterval(changeText, 3000); // Altera o texto a cada 3 segundos

//     function changeText() {
//         // Oculta o texto atual
//         texts[index].classList.remove("active");
//         // Incrementa o índice
//         index++;
//         // Se chegarmos ao final, voltamos para o início
//         if (index === texts.length) {
//             index = 0;
//         }
//         // Mostra o próximo texto
//         texts[index].classList.add("active");
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    var texts = document.querySelectorAll(".rotating-content .text");
    var index = 0;
    var interval = setInterval(changeContent,5000); // Altera o conteúdo a cada 3 segundos

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
        var images = ["cargaimed.png", "implantedent.png", "guiada.png"]; // Array com os caminhos das imagens
        var rotatingContent = document.querySelector(".rotating-content");
        rotatingContent.style.backgroundImage = "url(" + images[index] + ")";
    }
});
