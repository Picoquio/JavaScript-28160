
//                                                             CÓDIGO JS DE LA PÁGINA INDEX

// clase para generar usuarios, comentada hasta que le de funcionalidad.
// class Usuario {
//     constructor(nombre, mail, password) {
//         this.nombre = nombre;
//         this.mail = mail;
//         this.password = password;
//     } 
// }

// idem clase usuarios 
//const arrayUsuarios = [];

// Class para dar de alta autos usados
class NuevoAutoUsado {
    constructor(marca, modelo, año, precio, img, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = 'usado'; // porque el auto es usado
        this.img = img;
        this.id = id;
    }
}

// Class para dar de alta autos 0km
class NuevoAuto0Km {
    constructor(marca, modelo, año, precio, img, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = '0km'; // porque el auto es 0 KM
        this.img = img;
        this.id = id;
    }
}

//
class AutoPorForm {
    constructor(marca, modelo, año, precioMin, precioMax, estado) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precioMin = precioMin;
        this.precioMax = precioMax;
        this.estado = estado;
    }
}

//vamos llenando nuestro stock inicial de autos
const auto1 = new NuevoAutoUsado('Honda', 'Accord', 2009, 20000, '../images/accord.jpg', 0);
const auto2 = new NuevoAutoUsado('Ford', 'Mondeo', 2014, 28000, '../images/mondeo.jpg', 1);
const auto3 = new NuevoAutoUsado('Toyota', 'Corolla', 2011, 18000, '../images/corolla.jpg', 2);
const auto4 = new NuevoAutoUsado('Toyota', 'SW4', 2015, 40000, '../images/sw4.jpg', 3);
const auto5 = new NuevoAutoUsado('Ford', 'Ranger', 2016, 42000, '../images/ranger.jpg', 4);
const auto6 = new NuevoAuto0Km('Toyota', 'Hilux', 2022, 60000, '../images/hilux.jpg', 5);
const auto7 = new NuevoAuto0Km('Ford', 'F-150', 2022, 70000, '../images/f150.jpg', 6);
const auto8 = new NuevoAuto0Km('Honda', 'Passport', 2022, 80000, '../images/passport.jpg', 7);

//Array donde irá el stock total de autos
const stockTotal = [];

//function que 'pushea' autos ingresados al array con el stock total
const pushTotal = (auto) => {
    stockTotal.push(auto);
}

pushTotal(auto1);
pushTotal(auto2);
pushTotal(auto3);
pushTotal(auto4);
pushTotal(auto5);
pushTotal(auto6);
pushTotal(auto7);
pushTotal(auto8);


document.addEventListener('click', (e) => console.log(e.target.id))


//Anclajes a DOM
const formFiltro = document.getElementById('filterForm');
const cardsAutos = document.getElementById('cardsAutos')
const mostrarStockTotal = document.getElementById('mostrarStockTotal');
// const buttonCarrito = document.getElementById('buttonCarrito')
const clima = document.getElementById('clima');
const tituloProductos = document.getElementById('tituloProductos')
tituloProductos.innerHTML = '<h5> Seleccione parámetros de búsqueda </h5>';


// function que pone en el innerHTML los autos que correspondan. Hago esta function para evitar lineas de código más abajo
const llenaDiv = (stockMarca, stockModelo, stockAño, stockPrecio, stockEstado, stockImg, stockId) => {
    cardsAutos.innerHTML += `
            <div class="col">
            <div class="card mb-4 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem; display: inline-block; max-width: 75%">
            <img class="card-img-top" src="${stockImg}" alt="Card image cap">    
            <div class="card-body">
                    <h5 class="card-title"> ${stockMarca} ${stockModelo}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Año: ${stockAño}</li>
                            <li>Precio: ${stockPrecio}</li>
                            <li>Estado: ${stockEstado}</li>
                        </ul>
                    </p>
                    <a href="#" class="btn btn-success contacto" id=${stockId}>Contactar</a>
                </div>
            </div>
            </div> `
    tituloProductos.innerHTML = '';


}

// Eventos

formFiltro.addEventListener('submit', (e) => {
    e.preventDefault();

    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let fabricacion = document.getElementById('fabricacion').value;
    let precioMin = document.getElementById('precioMin').value;
    let precioMax = document.getElementById('precioMax').value;
    let ceroKm = document.querySelector('input[name="respuesta"]:checked').value;

    let autoNuevo = new AutoPorForm(marca, modelo, fabricacion, precioMin, precioMax, ceroKm);

    cardsAutos.innerHTML = ''; // para que el innerHTML se reinicie cada vez que hacemos un submit


    /* A continuación hay algunos condicionales pensados para la posibilidad de que el usuario no complete todos los campos en el formulario.
    Otra alternativa era poner todos los inputs como 'required', pero quise imitar el funcionamiento de los filtradores de la vida real -por 
    así decirlo- que no le requieren al usuario llenar todos y cada uno de los campos */

    if (!autoNuevo.modelo && !autoNuevo.fabricacion) /*Por si no ingresa esos datos en el formulario. */ {

        for (let i = 0; i < stockTotal.length; i++) {
            if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado) {
                llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado, stockTotal[i].img, stockTotal[i].id);
            }
        }
    }

    else if (!autoNuevo.modelo) /*Por si no ingresa ese dato en el formulario */ {
        for (let i = 0; i < stockTotal.length; i++) {
            if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.año === stockTotal[i].año) {
                llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado, stockTotal[i].img, stockTotal[i].id);
            }
        }
    }

    else if (!autoNuevo.fabricacion) /*Por si no ingresa ese dato en el formulario */ {
        for (let i = 0; i < stockTotal.length; i++) {
            if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.modelo === stockTotal[i].modelo) {
                llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado, stockTotal[i].img, stockTotal[i].id);
            }
        }
    }

    else {
        for (let i = 0; i < stockTotal.length; i++) {
            if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.modelo === stockTotal[i].modelo && autoNuevo.año === stockTotal[i].año) {
                llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado, stockTotal[i].img, stockTotal[i].id);
            }
        }
    }


    if (cardsAutos.innerHTML === '') {
        tituloProductos.innerHTML = '<h5>No se han encontrado resultados. Pruebe cambiando los parámetros de búsqueda</h5>';
    }

})

mostrarStockTotal.addEventListener('click', () => {
    cardsAutos.innerHTML = ''; // para que el innerHTML se reinicie cada vez que hacemos un submit / click
    for (let i = 0; i < stockTotal.length; i++) {
        llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado, stockTotal[i].img, stockTotal[i].id);
    }
})




const swalAlert = (id) => {

    swal({
        title: `${stockTotal[id].marca} ${stockTotal[id].modelo} Seleccionado. Ingrese su número telefónico`,
        content: {
            element: "input",
            attributes: {
                placeholder: "Ingrese su número de teléfono",
                type: "number",
            },
        },
    })
        .then((value) => {
            if (parseInt(value)) {
                swal('¡Recibido!', `En breve nuestro equipo lo contactará al: ${value}. ¡Muchas gracias!`, 'success');
            }
            else {
                swal({
                    icon: 'error',
                    title: 'Ingrese un número de teléfono',
                })
                // swalAlert(id)
                
            }
        }
        );
} 

document.addEventListener('click', (e) => {
    let target = e.target;
    switch (target.id) {


        case '0':
            swalAlert(0)
            break;
        case '1':
            swalAlert(1)
            break;
        case '2':
            swalAlert(2)
            break;
        case '3':
            swalAlert(3)
            break;
        case '4':
            swalAlert(4)
            break;
        case '5':
            swalAlert(5)
            break;
        case '6':
            swalAlert(6)
            break;
        case '7':
            swalAlert(7)
            break;
        case '8':
            swalAlert(8)
            break;

    }
})



//No necesariamente la mejor práctica, pero cumple el objetivo
// document.addEventListener('click', (e) => {
//     if (e.target.innerHTML == 'OK') {
//         swal({
//             title: "Recibido!", 
//             text: `En breve lo contactará un miembro de nuestro equipo`, 
//             icon: "success",
//         })
//     }
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
        <img src="http://openweathermap.org/img/wn/${idUrl}d@2x.png" class="rounded float-end" style="max-width: 50%; height: 30%;" alt="" >`;

}

fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.45&appid=60487b36d1b98aba11d57dc39f976eab&units=metric ')
    .then(response => response.json())
    .then(callbackFetch)





