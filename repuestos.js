//Función que pushea una cantidad indeterminada de objetos a un array determinado.
const pushToArray = (array, ...objetos) => {
    array.push(...objetos)
}



//Self-explanatory
class Repuesto {
    constructor (nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// creamos los repuestos
const repuesto1 = new Repuesto('Pastillas de freno', 200, 'https://http2.mlstatic.com/D_NQ_NP_701407-MLA32496072407_102019-V.webp')
const repuesto2 = new Repuesto('Bujías', 400, 'https://http2.mlstatic.com/D_NQ_NP_642379-MLA40835465698_022020-V.webp')
const repuesto3 = new Repuesto('Neumático', 1200, 'https://http2.mlstatic.com/D_NQ_NP_638692-MLA32238541281_092019-V.webp')
const repuesto4 = new Repuesto('Bomba de nafta', 700, 'https://http2.mlstatic.com/D_NQ_NP_689035-MLA31041134127_062019-V.webp')
const repuesto5 = new Repuesto('Liquido refrigerante', 180, 'https://http2.mlstatic.com/D_NQ_NP_680624-MLA47074917793_082021-V.webp')
const repuesto6 = new Repuesto('Liquido para transmisión', 180, 'https://http2.mlstatic.com/D_NQ_NP_972116-MLA44923286875_022021-V.webp')
const repuesto7 = new Repuesto('Aceite lubricante', 180, 'https://http2.mlstatic.com/D_NQ_NP_837617-MLA41501044111_042020-V.webp')
const repuesto8 = new Repuesto('Espejo retrovisor', 200, 'https://http2.mlstatic.com/D_NQ_NP_900507-MLA42142836684_062020-V.webp')
const repuesto9 = new Repuesto('Ópticas faro led', 500, 'https://http2.mlstatic.com/D_NQ_NP_773730-MLA48858915772_012022-V.webp')

//Array donde iran los objetos "repuesto"
const stockRepuestos = [];

//llenamos el array de repuestos
pushToArray(stockRepuestos, repuesto1, repuesto2, repuesto3, repuesto4, repuesto5, repuesto6, repuesto7, repuesto8, repuesto9)


//anclaje a DOM
const cardsRepuestos = document.getElementById('cardsRepuestos');

for (let i = 0; i < stockRepuestos.length; i++) {
    cardsRepuestos.innerHTML += `
    <div class="card" style="width: 18rem; display: inline-block"">
        <img class="card-img-top" src="${stockRepuestos[i].imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${stockRepuestos[i].nombre}</h5>
            <p class="card-text">Precio: ${stockRepuestos[i].precio}</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
     </div>
    ` 
}



