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
const repuesto6 = new Repuesto('Liquido transmisión', 180, '../images/liquidoTransmision.jpg')
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
    <div class ="col">
    <div class="card mb-4 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem; display: inline-block;">
        <img class="card-img-top" src="${stockRepuestos[i].imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title" style="font-size:0.85vw">${stockRepuestos[i].nombre}</h5>
            <p class="card-text">Precio: ${stockRepuestos[i].precio}</p>
            <a class="btn btn-primary d-flex justify-content-center alCarrito">Agregar al carrito</a>
        </div>
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

   // función que sirve para cambiar el icono del clima
   const callbackFetch = (data) => {

    /*la API nos provee un URL para cada uno de los iconitos. cada url se diferencia por un número de dos dígitos. 
    ver https://openweathermap.org/weather-conditions. Haré una sola manipulación del DOM más abajo, y le pasaré el valor de los dígitos del URL
    a través de condicionales */
    let idUrl = '';
    switch (data.weather[0].main){
        case 'Thunderstorm':
            idUrl = '11';
            break;
        case 'Drizzle':
            idUrl = '09';
            break;
        case 'Snow':
            idUrl = '13';
            break;
        case 'Clear': 
            idUrl = '01';
            break;
    }

    if(data.weather[0].description === 'light rain' || data.weather[0].description === 'moderate rain' || data.weather[0].description === 'heavy intensity rain' || data.weather[0].description === 'very heavy rain' || data.weather[0].description === 'extreme rain') {
        idUrl = '10'
    }
    else if (data.weather[0].description === 'freezing rain') {
        idUrl = '13'
    }
    else if (data.weather[0].description === 'light intensity shower rain' || data.weather[0].description === 'shower rain' || data.weather[0].description === 'heavy intensity shower rain' || data.weather[0].description === 'ragged shower rain') {
        idUrl = '09'
    }
    else if (data.weather[0].description === 'mist' || data.weather[0].description === 'Smoke' || data.weather[0].description === 'Haze' || data.weather[0].description === 'sand/ dust whirls' || data.weather[0].description === 'fog' || data.weather[0].description === 'sand' || data.weather[0].description === 'dust' || data.weather[0].description === 'volcanic ash' || data.weather[0].description === 'squalls' || data.weather[0].description === 'tornado') {
        idUrl = '50'
    }
    else if (data.weather[0].description === 'few clouds: 11-25%') {
        idUrl = '02'
    }
    else if (data.weather[0].description === 'scattered clouds: 25-50%') {
        idUrl = '03'
    }
    else if (data.weather[0].description === 'broken clouds: 51-84%' || data.weather[0].description === 'overcast clouds: 85-100%') {
        idUrl = '04'
    }

    //manipulación del DOM, donde utilizamos la variable 'idUrl' para modificar el url de la imagen segun los condicionales
    clima.innerHTML =  `<span style="line-height: 2.5rem;">°C <span class="fw-bold ">${data.main.temp.toFixed(1)}</span> CABA </span> 
    <img src="http://openweathermap.org/img/wn/${idUrl}d@2x.png" class="rounded float-end" style="max-width: 50%; height: 30%;" alt="">`;
    
  }

  fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.45&appid=60487b36d1b98aba11d57dc39f976eab&units=metric ')
  .then(response => response.json())
  .then(callbackFetch)



