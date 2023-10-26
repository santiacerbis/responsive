// Obtenemos el elemento con id "carrousel"
const carrousel = document.querySelector('#carrousel');

    // Iniciar el carrousel con el intervalo de 2 segundos(2000ms)
    setInterval(() => {
        const currentSlide = carrousel.querySelector('.carousel-item.active');
        const nextSlide = currentSlide.nextElementSibling || carrousel.querySelector('.carousel-item:first-child');
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }, 2000); 
    