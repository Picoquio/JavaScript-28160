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
const repuesto1 = new Repuesto('Pastillas de freno', 200, '../images/1.jpg')
const repuesto2 = new Repuesto('Bujías', 400, '../images/bujias.jpg')
const repuesto3 = new Repuesto('Neumático', 1200, '../images/ruedas.jpg')
const repuesto4 = new Repuesto('Bomba de nafta', 700, '../images/bombaNafta.jpg')
const repuesto5 = new Repuesto('Liquido refrigerante', 180, '../images/refrigerante.jpg')
const repuesto6 = new Repuesto('Liquido para transmisión', 180, '../images/liquidoTransmision.jpg')
const repuesto7 = new Repuesto('Aceite lubricante', 180, '../images/aceite.jpg')
const repuesto8 = new Repuesto('Espejo retrovisor', 200, '../images/espejo.jpg')
const repuesto9 = new Repuesto('Ópticas faro led', 500, '../images/faros.jpg')

//Array donde iran los objetos "repuesto"
const stockRepuestos = [];

//llenamos el array de repuestos
pushToArray(stockRepuestos, repuesto1, repuesto2, repuesto3, repuesto4, repuesto5, repuesto6, repuesto7, repuesto8, repuesto9)


//anclaje a DOM
const cardsRepuestos = document.getElementById('cardsRepuestos')
const buttonCarrito = document.getElementById('buttonCarrito')

for (let i = 0; i < stockRepuestos.length; i++) {
    cardsRepuestos.innerHTML += `
    <div class="card" style="width: 18rem; display: inline-block"">
        <img class="card-img-top" src="${stockRepuestos[i].imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${stockRepuestos[i].nombre}</h5>
            <p class="card-text">Precio: ${stockRepuestos[i].precio}</p>
            <a class="btn btn-primary alCarrito">Agregar al carrito</a>
        </div>
     </div>
    ` 
}

// Eventos

document.querySelectorAll('.alCarrito').forEach(item => {
    item.addEventListener('click', () => {
      //handle click 
      Toastify({
        text: "Agregado al carrito :)",
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    })
  })

  buttonCarrito.addEventListener('click', () => {
    console.log('hola')
    swal({
      title: "Error", 
      text: `Distinguido tutor: esta funcionalidad no se encuentra disponible todavía. Disculpe las molestias`, 
      icon: "error"
  })
  })



