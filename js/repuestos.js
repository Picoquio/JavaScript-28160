//Función que pushea una cantidad indeterminada de objetos a un array determinado.
const pushToArray = (array, ...objetos) => {
    array.push(...objetos)
}



//Self-explanatory
class Repuesto {
    constructor(nombre, precio, imagen, imagenChica) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.imagenChica = imagenChica;
    }
}

// creamos los repuestos
const repuesto1 = new Repuesto('Pastillas de freno', 200, '../images/1.jpg', '../images/1c.jpg')
const repuesto2 = new Repuesto('Bujías', 400, '../images/bujias.jpg', '../images/bujiasc.jpg')
const repuesto3 = new Repuesto('Neumático', 1200, '../images/ruedas.jpg', '../images/ruedasc.jpg')
const repuesto4 = new Repuesto('Bomba de nafta', 700, '../images/bombaNafta.jpg', '../images/bombaNaftac.jpg')
const repuesto5 = new Repuesto('Liquido refrigerante', 180, '../images/refrigerante.jpg', '../images/refrigerantec.jpg')
const repuesto6 = new Repuesto('Liquido transmisión', 180, '../images/liquidoTransmision.jpg', '../images/liquidoTransmisionc.jpg')
const repuesto7 = new Repuesto('Aceite lubricante', 180, '../images/aceite.jpg', '../images/aceitec.jpg')
const repuesto8 = new Repuesto('Espejo retrovisor', 200, '../images/espejo.jpg', '../images/espejoc.jpg')
const repuesto9 = new Repuesto('Ópticas faro led', 500, '../images/faros.jpg', '../images/farosc.jpg')

//Array donde iran los objetos "repuesto"
const stockRepuestos = [];

//llenamos el array de repuestos
pushToArray(stockRepuestos, repuesto1, repuesto2, repuesto3, repuesto4, repuesto5, repuesto6, repuesto7, repuesto8, repuesto9)


//anclajes a DOM
const cardsRepuestos = document.getElementById('cardsRepuestos')
const itemsCarrito = document.getElementById('itemsCarrito')

for (let i = 0; i < stockRepuestos.length; i++) {
    cardsRepuestos.innerHTML += `
    <div class ="col">
    <div class="card mb-4 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem; display: inline-block;">
        <img class="card-img-top" src="${stockRepuestos[i].imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title" style="font-size:0.85vw">${stockRepuestos[i].nombre}</h5>
            <p class="card-text">Precio: ${stockRepuestos[i].precio}</p>
            <a class="btn btn-primary d-flex justify-content-center alCarrito" id="${i}">Agregar al carrito</a>
        </div>
     </div>
     </div>
    `
}

// Eventos

//notifica al usuario que el item fue agregado al carrito
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
            onClick: function () { } // Callback after click
        }).showToast();
    })
})


// carga configuración del DOM del carrito según local storage
for (let i = 0; i < stockRepuestos.length; i++) {
    if (JSON.parse(localStorage.getItem(`repuesto${i}`))) {
        let getStorage = JSON.parse(localStorage.getItem(`repuesto${i}`))
        let idEliminar = `a${i}` // id dinamicos para el botón que elimina del carrito
        let idCard = `b${i}` // id's dinámicos para el div que contiene la carta
        itemsCarrito.innerHTML += `
        <div class="card mb-4 shadow-sm p-3 mb-5 rounded" id="${idCard}">
            <div class="row">
                <div class="col-5 d-flex justify-content-center" >
                    <img class="card-img-left pb-2" src="${getStorage.imagenChica}" alt="Card image cap">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title text-dark">${getStorage.nombre}</h5>
                        <p class="card-text text-dark">Precio: $${getStorage.precio}</p>
                    </div>
                </div>
            </div>
            <div class="row " >
                <div class="col-5 d-flex justify-content-center">
                    <button class="btn btn-secondary btn-sm eliminar" id="${idEliminar}"type="submit">Eliminar</button>
                </div>
                <div class="col ">
                    <div class="btn-group-bg" style="margin-left: 16px;" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">-</button>
                        <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
            `

    document.addEventListener('click', function(e){
        if(e.target && e.target.id== idEliminar){
            document.getElementById(idCard).style.display = "none";  
        }
    });
    document.addEventListener('click', function(e){
        if(e.target && e.target.id== idEliminar){
            localStorage.removeItem(`repuesto${i}`) 
        }
    });
        
    }
}

document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'myDynamicallyAddedElementID'){
         console.log('pelotudo')
    }
});


// Manda los items al local storage
for (let i = 0; i < stockRepuestos.length; i++) {
    //manda items al local storage
    let idBotonRepuesto = document.getElementById(i);
    idBotonRepuesto.addEventListener('click', () => {
        localStorage.setItem(`repuesto${i}`, JSON.stringify(stockRepuestos[i]))
    })

    // manipula DOM
    idBotonRepuesto.addEventListener('click', () => {
        let getStorage = JSON.parse(localStorage.getItem(`repuesto${i}`))
        itemsCarrito.innerHTML += `
            <div class ="col">
            <div class="card mb-4 shadow-sm p-3 mb-5 bg-secondary rounded" style="width: 18rem; display: inline-block;">
                <img class="card-img-left" src="${getStorage.imagen}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:0.85vw">${getStorage.nombre}</h5>
                    <p class="card-text">Precio: ${getStorage.precio}</p>
                    <a class="btn btn-primary d-flex justify-content-center alCarrito" id="${i}">Agregar al carrito</a>
                </div>
             </div>
             </div>`
    })
}











// función que sirve para cambiar el icono del clima
const callbackFetch = (data) => {

    /*la API nos provee un URL para cada uno de los iconitos. cada url se diferencia por un número de dos dígitos. 
    ver https://openweathermap.org/weather-conditions. Haré una sola manipulación del DOM más abajo, y le pasaré el valor de los dígitos del URL
    a través de condicionales */
    let idUrl = '';
    switch (data.weather[0].main) {
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

    if (data.weather[0].description === 'light rain' || data.weather[0].description === 'moderate rain' || data.weather[0].description === 'heavy intensity rain' || data.weather[0].description === 'very heavy rain' || data.weather[0].description === 'extreme rain') {
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
    else if (data.weather[0].description === 'few clouds') {
        idUrl = '02'
    }
    else if (data.weather[0].description === 'scattered clouds') {
        idUrl = '03'
    }
    else if (data.weather[0].description === 'broken clouds' || data.weather[0].description === 'overcast clouds') {
        idUrl = '04'
    }

    //manipulación del DOM, donde utilizamos la variable 'idUrl' para modificar el url de la imagen segun los condicionales
    clima.innerHTML = `<span style="line-height: 2.5rem;">°C <span class="fw-bold ">${data.main.temp.toFixed(1)}</span> CABA </span> 
    <img src="http://openweathermap.org/img/wn/${idUrl}d@2x.png" class="rounded float-end" style="max-width: 50%; height: 30%;" alt="">`;


}

fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.45&appid=60487b36d1b98aba11d57dc39f976eab&units=metric ')
    .then(response => response.json())
    .then(callbackFetch)



