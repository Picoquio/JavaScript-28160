//Función que pushea una cantidad indeterminada de objetos a un array determinado.
const pushToArray = (array, ...objetos) => {
    array.push(...objetos)
}



//Self-explanatory
class Repuesto {
    constructor(nombre, precio, imagen, imagenChica, id, cantidad, precioReferencia) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.imagenChica = imagenChica;
        this.id = id;
        this.cantidad = cantidad;
        this.precioReferencia = precioReferencia;
    }
}

// creamos los repuestos
const repuesto1 = new Repuesto('Pastillas de freno', 200, '../images/1.jpg', '../images/1c.jpg', 0, 1, 200)
const repuesto2 = new Repuesto('Bujías', 400, '../images/bujias.jpg', '../images/bujiasc.jpg', 1, 1, 400)
const repuesto3 = new Repuesto('Neumático', 1200, '../images/ruedas.jpg', '../images/ruedasc.jpg', 2, 1, 1200)
const repuesto4 = new Repuesto('Bomba de nafta', 700, '../images/bombaNafta.jpg', '../images/bombaNaftac.jpg', 3, 1, 700)
const repuesto5 = new Repuesto('Liquido refrigerante', 180, '../images/refrigerante.jpg', '../images/refrigerantec.jpg', 4, 1, 180)
const repuesto6 = new Repuesto('Liquido transmisión', 180, '../images/liquidoTransmision.jpg', '../images/liquidoTransmisionc.jpg', 5, 1, 180)
const repuesto7 = new Repuesto('Aceite lubricante', 180, '../images/aceite.jpg', '../images/aceitec.jpg', 6, 1, 180)
//const repuesto8 = new Repuesto('Espejo retrovisor', 200, '../images/espejo.jpg', '../images/espejoc.jpg', 7, 1, 200)
const repuesto8 = new Repuesto('Ópticas faro led', 500, '../images/faros.jpg', '../images/farosc.jpg', 8, 1, 500)

//Array donde iran los objetos "repuesto"
const stockRepuestos = [];

//llenamos el array de repuestos
pushToArray(stockRepuestos, repuesto1, repuesto2, repuesto3, repuesto4, repuesto5, repuesto6, repuesto7, repuesto8)


//anclajes a DOM
const cardsRepuestos = document.getElementById('cardsRepuestos')
const itemsCarrito = document.getElementById('itemsCarrito')
const footerCarrito = document.getElementById('footerCarrito')


// muestra los productos en la página manipulando el DOM. Asigna un id dinámico para luego identificar qué producto mandar al carrito
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




// En el locaStorage habrá un array que contiene los productos en forma de objetos

const arrayStorage = [];

if (localStorage.getItem('Array de repuestos')) {
    let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))
    for (let i = 0; i < getStorage.length; i++) {
        arrayStorage.push(getStorage[i])
    }

}



// funcion que establece el contenido del innerhtml del body principal del carrito
const llenarCarrito = (storage) => {
    itemsCarrito.innerHTML = '';
    storage.forEach((item) => {
        itemsCarrito.innerHTML += `
            <div class="card mb-4 shadow-sm p-3 mb-5 rounded" id="${item.id}">
                <div class="row">
                    <div class="col-5 d-flex justify-content-center" >
                        <img class="card-img-left pb-2" src="${item.imagenChica}" alt="Card image cap">
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title text-dark">${item.nombre}</h5>
                            <p class="card-text text-dark">Precio: $${item.precio}</p>
                        </div>
                    </div>
                </div>
                <div class="row " >
                    <div class="col-5 d-flex justify-content-center">
                        <button class="eliminar btn btn-secondary btn-sm " id="${item.id + 'a'}"type="submit">Eliminar</button>
                    </div>
                    <div class="col ">
                        <div class="btn-group-bg" style="margin-left: 16px;" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary" id="${item.id + 'b'}">-</button>
                            <button type="button" class="btn btn-primary">${item.cantidad}</button>
                            <button type="button" class="btn btn-primary" id="${item.id + 'c'}">+</button>
                        </div>
                    </div>
                </div>
            </div>
                `
    })
}




//funcion que establece el contenido del innerhtml del footer del carrito 
const llenarFooter = (precio) => {
    footerCarrito.innerHTML = `
    <hr>
    <div class="row">
        <div class="col">Precio de mis productos</div>
        <div class="col-2">$${precio}</div>
    </div>
    <div class="row">
        <div class="col"><p>Impuesto provisorio sancionado en 1969</p></div>
        <div class="col-2">$${precio * 0.3}</div>
    </div>
    <div class="row">
        <div class="col"><p>Precio total</p></div>
        <div class="col-2">$${precio * 0.3 + precio}</div>
    </div>
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-info">Comprar ahora</button>
    </div>
    `
}


// ------------------------------------------------------

//funcion que elimina productos del carrito (de su innerhtml y del local storage)
const eliminar = (idInner, idArray) => {
    document.getElementById(idInner).style.display = "none"; // remueve el producto del innerhtml del carrito

    // de acá para bajo removemos el producto del local storage y del array 
    let getStorage = JSON.parse(localStorage.getItem('Array de repuestos'));

    for (let i = 0; i < getStorage.length; i++) {
        if (`${getStorage[i].id + 'a'}` == idArray) {
            getStorage.splice(i, 1)
            arrayStorage.splice(i, 1)
        }
    }
    if (arrayStorage.length > 0) {
        //guardamos el array cercenado en el localStorage, toda vez que haya al menos un elemento en el array
        localStorage.setItem('Array de repuestos', JSON.stringify(arrayStorage))

        /*Actualizamos el innerHTML del footer del carrito. Para eso hacemos lo mismo que en las líneas 204-209
         (por un tema de scope redeclaramos todo) */
        let arrayPrecioAcumulado = []
        arrayStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
        let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)

        llenarFooter(precioTotal)
    }

    else {
        //si no hay items en el array de productos, eliminamos la key en el localStorage, y vaciamos el innerHTML del footer
        localStorage.removeItem('Array de repuestos')
        footerCarrito.innerHTML = 'Tu carrito está vacío. 🐭'
    }
}




//función que suma unidades a un producto que ya está en el carrito
const sumaCantidad = (id) => {
    let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))

    //recorremos el array de productos e incrementamos el precio y la cantidad acorde
    for (let i = 0; i < getStorage.length; i++) {

        if (getStorage[i].id + 'c' === id) {

            getStorage[i].precio += getStorage[i].precioReferencia;
            getStorage[i].cantidad++
            arrayStorage[i].precio += arrayStorage[i].precioReferencia;
            arrayStorage[i].cantidad++

        }
    }
    localStorage.setItem('Array de repuestos', JSON.stringify(getStorage))

    llenarCarrito(getStorage)

    //las siguientes tres lineas son necesarias para que llenarFooter(precioTotal) funcione adecuadamente, de lo contrario 'precioTotal' será undefined
    let arrayPrecioAcumulado = []
    getStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
    let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)

    llenarFooter(precioTotal)
}




//funcion que resta unidades a un producto que ya está en el carrito
const restaCantidad = (id) => {

    let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))

    //recorremos el array de productos y disminuimos el precio y la cantidad acorde
    for (let i = 0; i < getStorage.length; i++) {

        if (getStorage[i].id + 'b' === id && getStorage[i].cantidad > 1) {

            getStorage[i].precio -= getStorage[i].precioReferencia;
            getStorage[i].cantidad--
            arrayStorage[i].precio -= arrayStorage[i].precioReferencia;
            arrayStorage[i].cantidad--
        }
    }
    localStorage.setItem('Array de repuestos', JSON.stringify(getStorage))

    llenarCarrito(getStorage)

    // ¿porque este condicional? Para que no se siga restando el precio si la cantidad de prodcuto es 1
    if (getStorage.length > 0) {
        //las siguientes tres lineas son necesarias para que llenarFooter(precioTotal) funcione adecuadamente, de lo contrario 'precioTotal' será undefined
        let arrayPrecioAcumulado = []
        getStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
        let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)

        llenarFooter(precioTotal)
    }
}




// funcion que agrega productos al carrito
const agregarCarrito = (id) => {

    const check = arrayStorage.some((x) => x.id == id) // el .some nos devuelve true si el item ya se encuentra en el carrito (arrayStorage)
    // ¿e.target.id? chequea si el id del objeto es el mismo que el id del botón "aregar al carrito"

    if (check) {
        Toastify({
            text: "El producto ya está en el carrito 🤦‍♂️",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

        return console.log('ya lo tenes en el carrito') //en caso de que el item se encuentre en el carrito, usamos el return para cortar la ejecución del eventlistener
    }
    // ------------------------------------------------------------------------------------------------------------------


    arrayStorage.push(stockRepuestos[id]) // e.target.id hace referencia al botón "agregar al carrito", cuyo id dinámico es igual al respectivo indice del arrayStorage

    localStorage.setItem('Array de repuestos', JSON.stringify(arrayStorage))



    llenarCarrito(arrayStorage)


    /* las siguientes tres lineas se encargan de sumar el precio total de todos los items que hay en el carrito
    Para eso pasamos a un array (arrayPrecioAcumulado) los valores de la key "precio" de cada uno de los objetos (productos)
    que hay en el array "getStorage". Luego utilizamos un .reduce para sumar esos valores y reunirlos en un lugar único
    (la variable "precioTotal") */
    let arrayPrecioAcumulado = []
    arrayStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
    let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)

    llenarFooter(precioTotal)



    // notifica al usuario que su producto ha sido agregado al carrito
    Toastify({
        text: "Agregado al carrito 🛒",
        duration: 3000,
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


}

// carga items del carrito si se encuentran en el localStorage--------------------------------------------------------------------------------------------------------------------------------
if (localStorage.getItem('Array de repuestos')) {
    let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))
    

    llenarCarrito(getStorage)

    /* las siguientes tres lineas se encargan de sumar el precio total de todos los items que hay en el carrito
    Para eso pasamos a un array (arrayPrecioAcumulado) los valores de la key "precio" de cada uno de los objetos (productos)
    que hay en el array "getStorage". Luego utilizamos un .reduce para sumar esos valores y reunirlos en un lugar único
    (la variable "precioTotal") */
    let arrayPrecioAcumulado = []
    getStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
    let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)
    llenarFooter(precioTotal)
}
else {
    itemsCarrito.innerHTML = 'Tu carrito está vacío. 🐭'
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// un solo eventListener para todos los eventos que puedan ocurrir en el carrito (event delegation)
document.addEventListener('click', (e) => {
    let target = e.target;
    //console.log(target.id)
    switch (target.id) {


        //agrega productos al carrito
        case '0':
            agregarCarrito('0');
            break;
        case '1':
            agregarCarrito('1');
            break;
        case '2':
            agregarCarrito('2');
            break;
        case '3':
            agregarCarrito('3');
            break;
        case '4':
            agregarCarrito('4');
            break;
        case '5':
            agregarCarrito('5');
            break;
        case '6':
            agregarCarrito('6');
            break;
        case '7':
            agregarCarrito('7');
            break;
        case '8':
            agregarCarrito('8');
            break;





        // elimina el producto del innerhtml y del localStorage    
        case '0a':
            eliminar('0', '0a');
            break;
        case '1a':
            eliminar('1', '1a');
            break;
        case '2a':
            eliminar('2', '2a');
            break
        case '3a':
            eliminar('3', '3a');
            break;
        case '4a':
            eliminar('4', '4a');
            break;
        case '5a':
            eliminar('5', '5a');
            break;
        case '6a':
            eliminar('6', '6a')
            break;
        case '7a':
            eliminar('7', '7a');
            break;
        case '8a':
            eliminar('8', '8a');
            break


        //auemnta la cantidad en el carrito
        case '0c':
            sumaCantidad('0c');
            break;
        case '1c':
            sumaCantidad('1c');
            break;
        case '2c':
            sumaCantidad('2c');
            break;
        case '3c':
            sumaCantidad('3c');
            break;
        case '4c':
            sumaCantidad('4c');
            break;
        case '5c':
            sumaCantidad('5c');
            break;
        case '6c':
            sumaCantidad('6c');
            break;
        case '7c':
            sumaCantidad('7c');
            break;
        case '8c':
            sumaCantidad('8c');
            break;


        //disminuye la cantidad en el carrito
        case '0b':
            restaCantidad('0b');
            break;
        case '1b':
            restaCantidad('1b');
            break;
        case '2b':
            restaCantidad('2b');
            break;
        case '3b':
            restaCantidad('3b');
            break;
        case '4b':
            restaCantidad('4b');
            break;
        case '5b':
            restaCantidad('5b');
            break;
        case '6b':
            restaCantidad('6b');
            break;
        case '7b':
            restaCantidad('7b');
            break;
        case '8b':
            restaCantidad('8b');
            break;
    }
})


















// // Agrega items al carrito (y más funcionalidades -ver comentarios-)
// document.querySelectorAll('.alCarrito').forEach(item => {
//     item.addEventListener('click', (e) => {
//         //console.log(e.target.id)
//         // Para no agregar dos veces el producto al carrito -----------------------------------------------------------------
//         const check = arrayStorage.some((x) => x.id == e.target.id) // el .some nos devuelve true si el item ya se encuentra en el carrito (arrayStorage)
//         // ¿e.target.id? chequea si el id del objeto es el mismo que el id del botón "aregar al carrito"

//         if (check) {
//             Toastify({
//                 text: "El producto ya está en el carrito 🤦‍♂️",
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "bottom",
//                 position: "right",
//                 stopOnFocus: true,
//                 style: {
//                     background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function () { } // Callback after click
//             }).showToast();

//             return console.log('ya lo tenes en el carrito') //en caso de que el item se encuentre en el carrito, usamos el return para cortar la ejecución del eventlistener
//         }
//         // ------------------------------------------------------------------------------------------------------------------


//         arrayStorage.push(stockRepuestos[e.target.id]) // e.target.id hace referencia al botón "agregar al carrito", cuyo id dinámico es igual al respectivo indice del arrayStorage

//         localStorage.setItem('Array de repuestos', JSON.stringify(arrayStorage))

//         let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))

//         itemsCarrito.innerHTML = '';
//         getStorage.forEach((item) => {
//             itemsCarrito.innerHTML += `
//                 <div class="card mb-4 shadow-sm p-3 mb-5 rounded" id="${item.id}">
//                    <div class="row">
//                        <div class="col-5 d-flex justify-content-center" >
//                            <img class="card-img-left pb-2" src="${item.imagenChica}" alt="Card image cap">
//                        </div>
//                        <div class="col">
//                            <div class="card-body">
//                                <h5 class="card-title text-dark">${item.nombre}</h5>
//                                <p class="card-text text-dark">Precio: $${item.precio}</p>
//                            </div>
//                        </div>
//                    </div>
//                    <div class="row " >
//                        <div class="col-5 d-flex justify-content-center">
//                            <button class="eliminar btn btn-secondary btn-sm " id="${item.id + 'a'}"type="submit">Eliminar</button>
//                        </div>
//                        <div class="col ">
//                            <div class="btn-group-bg" style="margin-left: 16px;" role="group" aria-label="Basic example">
//                                <button type="button" class="btn btn-primary" id="${item.id + 'b'}">-</button>
//                                <button type="button" class="btn btn-primary">${item.cantidad}</button>
//                                <button type="button" class="btn btn-primary" id="${item.id + 'c'}">+</button>
//                            </div>
//                        </div>
//                    </div>
//                 </div>
//                    `

//         })


//         /* las siguientes tres lineas se encargan de sumar el precio total de todos los items que hay en el carrito
//         Para eso pasamos a un array (arrayPrecioAcumulado) los valores de la key "precio" de cada uno de los objetos (productos)
//         que hay en el array "getStorage". Luego utilizamos un .reduce para sumar esos valores y reunirlos en un lugar único
//         (la variable "precioTotal") */
//         let arrayPrecioAcumulado = []
//         getStorage.forEach((x) => arrayPrecioAcumulado.push(x.precio))
//         let precioTotal = arrayPrecioAcumulado.reduce((acumulador, valorActual) => acumulador + valorActual)


//         footerCarrito.innerHTML = `
//             <hr>
//             <div class="row">
//                 <div class="col">Precio de mis productos</div>
//                 <div class="col-2">$${precioTotal}</div>
//             </div>
//             <div class="row">
//                 <div class="col"><p>Impuesto provisorio sancionado en 1969</p></div>
//                 <div class="col-2">$${precioTotal * 0.3}</div>
//             </div>
//             <div class="row">
//                 <div class="col"><p>Precio total</p></div>
//                 <div class="col-2">$${precioTotal * 0.3 + precioTotal}</div>
//             </div>
//             <div class="d-flex justify-content-center">
//                 <button type="button" class="btn btn-info">Comprar ahora</button>
//             </div>
//                 `




//         // notifica al usuario que su producto ha sido agregado al carrito
//         Toastify({
//             text: "Agregado al carrito 🛒",
//             duration: 3000,
//             destination: "https://github.com/apvarun/toastify-js",
//             newWindow: true,
//             close: true,
//             gravity: "bottom", // `top` or `bottom`
//             position: "right", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//                 background: "linear-gradient(to right, #00b09b, #96c93d)",
//             },
//             onClick: function () { } // Callback after click
//         }).showToast();
//     })

// })








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



