// Inicia Js de Carrusel
const carrousel = document.querySelector('.carrousel-slide');
const flecha = document.querySelectorAll('.flecha');

// Recorrer todos las flechas
flecha.forEach( ( cadaFlecha , i )=> {
    // Asignamos un click a cadaFlecha
    flecha[i].addEventListener('click',()=>{

        // Guardar la posición de ese punto
        let posicion  = i;
        // Calculando el espacio que debe desplazarse el carrousel-slide
        let operacion = posicion * -50;

        // MOVEMOS el carrousel-slide
        carrousel.style.transform = `translateX(${ operacion }%)`;

        // Recorremos todos los punto
        flecha.forEach( ( cadaFlecha , i )=>{
            // Quitamos la clase activo a todos los punto
            flecha[i].classList.remove('activo');
        })
        // Añadir la clase activo en el punto que hemos hecho click
        flecha[i].classList.add('activo')

    })
})

//Termina JS de carrusel 

// Inicia JS de Swiper

const swiper = new Swiper('.swiper', {

    effect: "flip",
    limitRotation: true,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    slideShadows: true, 
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
      
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
      
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
      
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    
});