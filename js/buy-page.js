//Esta es la sección que brinda información de la película

$(".infoPeli").append(
    `<img src="resources/unavailable.svg" alt="">
    <h2>Nombre Película</h2>
    <p>Duis ullamco irure ex fugiat enim incididunt esse magna officia aliquip ipsum occaecat. 
    Do tempor exercitation irure sint sint laboris minim nulla. Culpa minim nostrud mollit labore aliqua 
    qui incididunt qui Lorem duis pariatur ipsum consequat tempor. Anim cillum dolore minim fugiat in velit cupidatat. 
    Ex in ullamco aliqua laboris ex dolor ut duis dolor ipsum aliqua laboris fugiat.</p>
    <h3>Duración: 115 minutos</h3>
    <h3>Director: Fulano Mengano</h3>`);

//Esta es la sección dónde se elige el horario y se compra la entrada

$(".btn-horarios").click((e)=>{

    $("#qEntradas").slideDown("fast");
});

let horaElegida = $(".btn-horarios").click((e) =>{
    console.log(e.target.value)
});

//Esta función toma la cantidad elegida en el <select> y realiza la operación
let numeroEntradas = document.getElementById("numEntradas");

let cantEntradas = $("#btn-comprar").click(function(e){
    e.preventDefault();

    let cantidadEntradas = parseInt(numeroEntradas.value);
    console.log(cantidadEntradas);
    console.log(precioEntradas(cantidadEntradas, 2990));
});

function precioEntradas (a,b){
    return totalEntradas = a * b;
};

$("#btn-comprar").click((e)=>{
    e.preventDefault();

    $(".cardEntradas").append(
        `<p>Total: </p>
        </div>`
    );
});