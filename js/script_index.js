const slides = document.querySelector('#logos');
const images = document.querySelectorAll('#logos img');

let currentIndex = 0;
const totalImages = images.length;
const imagesToShow = 4; // Número de imágenes a mostrar a la vez

function showNextImage() {
    currentIndex = (currentIndex + imagesToShow) % totalImages;
    slides.style.transform = `translateX(${-currentIndex * (100 / imagesToShow)}%)`;
    console.log("cambiando imagen")
}

setInterval(showNextImage, 3000); // Cambia cada 3 segundos
