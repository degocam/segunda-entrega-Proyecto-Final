//Esta es la estructura de la página de inicio de la app

const grilla = document.getElementById('grilla');

/*En esta constante creamos un objeto que representa una grilla que contiene todas las peliculas que actualmente se muestran en el cine ficticio
sus horarios, nombre y poster*/
const grillaPelis = [
    {nombre: "Black Widow", horario: "16:30, 18:45, 20:55", img:"resources/widow.svg"},
    {nombre: "El Conjuro: El Diablo Me<br>Obligó a Hacerlo", horario: "15:10, 17:40, 19:20", img:"resources/conjuro.svg"},
    {nombre: "The Suicide Squad", horario: "15:45, 18:30, 21:10", img:"resources/suicide.svg"},
    {nombre: "Venom: Habrá Matanza", horario: "16:10, 18:55, 20:40", img: "resources/venom.svg"},
    {nombre: "Halloween Kills", horario: "17:40, 20:30, 22:10", img: "resources/halloween.svg"},
    {nombre: "Jackass Por Siempre", horario: "15:15, 17:40, 20:10", img: "resources/jackass.svg"},
    {nombre: "Top Gun: Maverick", horario: "15:55, 16:35, 18:50", img: "resources/top-gun.svg"},
    {nombre: "Matrix IV", horario: "18:00, 20:20, 22:00", img: "resources/matrix.svg"},
    {nombre: "Spiderman: Sin Camino<br> A Casa", horario: "17:00, 19:20, 21:00", img: "resources/spiderman.svg"},
    {nombre: "Sing 2", horario: "14:15, 16:30, 18:00", img: "resources/sing-2.svg"}
    // {nombre: "Amor Sin Barreras", horario: "17:20, 19:45, 21:50", img: "resources/wss.svg"}
];

//Se instancia cada película a partir de la grilla
for (const pelicula of grillaPelis){
    let cardPeli = document.createElement('div');

//A través de DOM le damos el formato en que se va a mostrar la info del array de cada película en el HTML    
    cardPeli.innerHTML = 
        `<h2>${pelicula.nombre}</h2>
        <a href="buy-page.html"><img src="${pelicula.img}" alt="${pelicula.nombre}"></a>
        <h3>Horarios</h3>
        <p>${pelicula.horario}</p>`

//Anidamos cardPeli en el body
    grilla.appendChild(cardPeli);
}
