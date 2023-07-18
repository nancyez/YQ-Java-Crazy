//Array de objetos 
/*
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Mermelada de pera',
        precio: 100.00,
        sabor: 'Sabor: pera.',
        contenido: 'Contenido: 500g.',
        categoria:'Mermeladas',
        imagen: '../assets/ImgProductos/Mermelada-de-pera.png'
    },
    {
        id: 2,
        nombre: 'Mermelada de zarzamora',
        precio: 100.00,
        sabor: 'Sabor: zarzamora.',
        contenido: 'Contenido: 500g.',
        categoria:'Mermeladas',
        imagen: '../assets/ImgProductos/Mermelada-de-zarzamora.png'
    },    
    {
        id: 3,
        nombre: 'Mermelada de ciruela',
        precio: 100.00,
        sabor: 'Sabor: ciruela.',
        contenido: 'Contenido: 500g.',
        categoria:'Mermeladas',
        imagen: '../assets/ImgProductos/Mermelada-de-ciruela.png'
    },
    {
        id: 4,
        nombre: 'Peras en almibar',
        precio: 150.00,
        sabor: 'Sabor: pera.',
        contenido: 'Contenido: 1L.',
        categoria:'Almibares',
        imagen: '../assets/ImgProductos/Almibar-de-peras-grande.png'
    },
    {
        id: 5,
        nombre: 'Peras en almibar',
        precio: 100.00,
        sabor: 'Sabor: pera.',
        contenido: 'Contenido: 500g.',
        categoria:'Almibares',
        imagen: '../assets/ImgProductos/Almibar-de-peras.png'
    },
    {
        id: 6,
        nombre: 'Duraznos en almibar',
        precio: 150.00,
        sabor: 'Sabor: durazno.',
        contenido: 'Contenido: 1000g.',
        categoria:'Almibares',
        imagen: '../assets/ImgProductos/Almibar-de-durazno.png'
    },
    {
        id: 7,
        nombre: 'Licor de pera',
        precio: 250.00,
        sabor: 'Sabor: pera.',
        contenido: 'Contenido: 750ml.',
        categoria:'Licor',
        imagen: '../assets/ImgProductos/Licor-de-pera.png'
    },
    {
        id: 8,
        nombre: 'Licor de zarzamora',
        precio: 250.00,
        sabor: 'Sabor: zarzamora.',
        contenido: 'Contenido: 750ml.',
        categoria:'Licor',
        imagen: '../assets/ImgProductos/Licor-de-zarzamora.png'
    },
    {
        id: 9,
        nombre: 'Licor de ciruela',
        precio: 250.00,
        sabor: 'Sabor: ciruela.',
        contenido: 'Contenido: 750ml.',
        categoria:'Licor',
        imagen: '../assets/ImgProductos/Licor-de-ciruela.png'
    },
]

// Funcionalidades Carrito de compras
const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');

const closeModal=document.querySelector('.jsModalClose');

addToCart.forEach(btn => {
    
    btn.addEventListener('click',(event)=>{

        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        //abrimos el modal
        modal.classList.add('active');

    })

});

//CERRAR EL MODAL
closeModal.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})

//CERRAMOS MODAL CUANDO HACEMOS CLICK FUERA DEL CONTENDINO DEL MODAL
window.onclick = (event)=>{
    const modal=document.querySelector('.modal.active');

    if(event.target == modal){
        modal.classList.remove('active');
    }
}*/

// cart 
//Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Open Cart
cartIcon.onclick = () => { cart.classList.add("active");
};
// Close Cart
closeCart.onclick= () => { cart.classList.remove("active");
};

//Cart Working JS
if (document.readyState == "loading") { document.addEventListener("DOMContentLoaded", ready);
} else {
ready();
}

// Making Function
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove') 
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < removeCartButtons.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}

// Remove Items From Cart
function removeCartItem(event) { 
    var buttonClicked = event.target   
    buttonClicked.parenElement.remove()
    updatetotal();

}
//Quantity Changes

//Update Total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) { 
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerHTML = "$" + Total;

    }

}


