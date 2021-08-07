// Acá se obtienen los elementos HTML hechos en buy-page-html (formulario y divs)
const form = document.getElementById('buyTicket');
const divCard = document.getElementById('divCard')
const inputNombre = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputCantEntradas = document.getElementById('cantidad');
const botonComprar = document.getElementById('btn-comprar');

// Evento que crea una card con la información de la película mostrada (Sin el nombre ni la hora)
botonComprar.addEventListener('click', cardCompra);

// Esta función es que recibe y envía los valores de cada input a sus respectivas funciones creadoras
function cardCompra(event){
    event.preventDefault();

    const valorNombre = inputNombre.value;

    const valorEmail = inputEmail.value;

    const valorQEntradas = inputCantEntradas.value;

    crearEntrada(valorNombre, valorEmail, valorQEntradas)

    precioTotal(valorQEntradas, 2990)
}

//Esta es la función que muestra los detalles de la compra
function crearEntrada(valorNombre, valorEmail, valorQEntradas){
    const cardEntrada = document.createElement('div');

    cardEntrada.className ="card-entrada";
    cardEntrada.innerHTML = `<h3>Nombre: ${valorNombre}</h2>
    <h3>email: ${valorEmail} </h3>
    <h3>Cantidad de Entradas :${valorQEntradas}</h3>`;
    
    divCard.appendChild(cardEntrada)
}
