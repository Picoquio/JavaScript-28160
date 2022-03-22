
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
    constructor (marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = 'usado'; // porque el auto es usado
    }
}

// Class para dar de alta autos 0km
class NuevoAuto0Km {
    constructor(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = '0km'; // porque el auto es 0 KM
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
const auto1 = new NuevoAutoUsado('Honda', 'Accord', 2009, 20000);
const auto2 = new NuevoAutoUsado('Ford', 'Mondeo', 2014, 28000);
const auto3 = new NuevoAutoUsado('Toyota', 'Corolla', 2011, 18000);
const auto4 = new NuevoAutoUsado('Toyota', 'SW4', 2015, 40000);
const auto5 = new NuevoAutoUsado('Ford', 'Ranger', 2016, 42000);
const auto6 = new NuevoAuto0Km('Toyota', 'Hilux', 2022, 60000);
const auto7 = new NuevoAuto0Km('Ford', 'F-150', 2022, 70000);
const auto8 = new NuevoAuto0Km('Honda', 'Passport', 2022, 80000);

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



//Anclajes a DOM
    const formFiltro = document.getElementById('filterForm');
    const cardsAutos = document.getElementById('cardsAutos')
    const mostrarStockTotal = document.getElementById('mostrarStockTotal');
    const buttonCarrito = document.getElementById('buttonCarrito')
    const clima = document.getElementById('clima');

// function que pone en el innerHTML los autos que correspondan. Hago esta function para evitar lineas de código más abajo
const llenaDiv = (stockMarca, stockModelo, stockAño, stockPrecio, stockEstado) => {
    cardsAutos.innerHTML += `
            <div class="col">
            <div class="card mb-4 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem; display: inline-block; max-width: 75%">
                <div class="card-body">
                    <h5 class="card-title"> ${stockMarca} ${stockModelo}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Año: ${stockAño}</li>
                            <li>Precio: ${stockPrecio}</li>
                            <li>Estado: ${stockEstado}</li>
                        </ul>
                    </p>
                    <a href="#" class="btn btn-success">Contactar</a>
                </div>
            </div>
            </div> `
}

// Eventos
    
    formFiltro.addEventListener('submit', (e) =>  {
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
            
            for(let i = 0; i < stockTotal.length; i++) {
                if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado) {
                llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado );
                }
            } 
        }

        else if (!autoNuevo.modelo) /*Por si no ingresa ese dato en el formulario */ {
            for(let i = 0; i < stockTotal.length; i++) {
                if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.año === stockTotal[i].año) {
                    llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado ); 
                }
            }
        }

        else if (!autoNuevo.fabricacion) /*Por si no ingresa ese dato en el formulario */ {
            for(let i = 0; i < stockTotal.length; i++) {
                if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.modelo === stockTotal[i].modelo) {
                    llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado );  
                }
            }
        }

        else {
            for(let i = 0; i < stockTotal.length; i++) {
                if (autoNuevo.marca === stockTotal[i].marca && autoNuevo.precioMin < stockTotal[i].precio && autoNuevo.precioMax > stockTotal[i].precio && autoNuevo.estado === stockTotal[i].estado && autoNuevo.modelo === stockTotal[i].modelo && autoNuevo.año === stockTotal[i].año ) {
                    llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado );  
                }
            }
        }

        
        if (cardsAutos.innerHTML === '') {
            cardsAutos.innerHTML = '<p>No se encontraron resultados. Pruebe cambiando los parámetros de búsqueda</p>'
        }

    })

    mostrarStockTotal.addEventListener('click', () => {
        cardsAutos.innerHTML = ''; // para que el innerHTML se reinicie cada vez que hacemos un submit / click
        for(let i = 0; i < stockTotal.length; i++) {
            llenaDiv(stockTotal[i].marca, stockTotal[i].modelo, stockTotal[i].año, stockTotal[i].precio, stockTotal[i].estado );  
        }
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





    

     

    


































// Código viejo a continuación. Por ahora no lo descarto por si alguna lógica me es de utilidad


// //Función que se utilizará más abajo para filtrar autos según la marca
// const filtroPorMarca = (Marca) => {
//     /* el parámetro "Marca" sirve para indicarle al código qué value filtrar en los objetos del array "stockTotal". Ver más arriba en la instanciación de los autos 
//     cómo escribir los nombres de las marcas. P.ej.: 'Honda', 'Ford', etc. */
//         nuevoArray = stockTotal.filter( objeto => {
//         return objeto.marca === Marca
//     })

//     let numeracion= 1;  //Para que en el console.log del for siguiente aparezcan los autos de manera enumerada.
//     for (let i = 0; i < nuevoArray.length; i++) {
//         if (i <= 0) {

//             let crear1 = document.createElement('p');
//             crear1.innerHTML =  `<h2>A continuación, los vehículos marca ${Marca}:</h2>`
//             document.body.appendChild(crear1);
//             // console.log(`A continuación, los vehículos marca ${Marca} en nuestro stock`)
//         }
        
//         let crear2 = document.createElement('p');
//         crear2.innerHTML = `${numeracion}. Modelo: ${nuevoArray[i].modelo}. Estado: ${nuevoArray[i].estado} Año: ${nuevoArray[i].año}. Precio: ${nuevoArray[i].precio}`;
//         document.body.appendChild(crear2);
//         // console.log(`${numeracion}. Modelo: ${nuevoArray[i].modelo}. Estado: ${nuevoArray[i].estado} Año: ${nuevoArray[i].año}. Precio: ${nuevoArray[i].precio}`)
//         numeracion += 1;
//     }
// }

// //pedimos input al usuario
// const promptPpal = prompt('Ingrese 1 para ofrecernos su auto. Ingrese 2 para consultar por nuestro stock de vehículos')

// if (promptPpal === '1') {
//     const userPrompt = new NuevoAutoUsado (
//         prompt('Ingrese la marca de su automóvil'),
//         prompt('Ingrese el modelo de su automóvil'),
//         parseInt(prompt('Ingrese el año de fabricación')),
//         parseInt(prompt('Ingrese el precio que pretende recibir'))
//     )
//     let buscaId = document.getElementById('uno');
//     buscaId.innerHTML = `Nos ha ofrecido un ${userPrompt.marca} modelo ${userPrompt.modelo}, del año ${userPrompt.año} por un precio de ${userPrompt.precio}. En breve lo contactaremos, muchas gracias.`
//     //alert(`Nos ha ofrecido un ${userPrompt.marca} modelo ${userPrompt.modelo}, del año ${userPrompt.año} por un precio de ${userPrompt.precio}. En breve lo contactaremos, muchas gracias.`)
// }

// else if (promptPpal === '2') {
//     const propmtStock = prompt('Ingrese 1 para ver nuestro stock total de vehículos. Ingrese 2 para ver el stock de vehículos HONDA. Ingrese 3 para ver el stock de vehículos FORD. Ingrese 4 para ver el stock de vehículos TOYOTA.')

//     if (propmtStock === '1') {
//         let numeracion= 1;  //Para que en el console.log del for siguiente aparezcan los autos de manera enumerada.

//         for (let i = 0; i < stockTotal.length; i++) {
//             if (i <= 0) {
//                 let crear1 = document.createElement('p');
//                 crear1.innerHTML = '<h2>A continuación, el stock total de automóviles:</h2>'
//                 document.body.appendChild(crear1);
        
//                // console.log('A continuación, el stock total de autos')
//             }
            
//             let crear2 = document.createElement('p');
//             crear2.innerHTML = `${numeracion}. Marca: ${stockTotal[i].marca}. Modelo: ${stockTotal[i].modelo}. Estado: ${stockTotal[i].estado} Año: ${stockTotal[i].año}. Precio: ${stockTotal[i].precio}`;
//             document.body.appendChild(crear2);
//            // console.log(`${numeracion}. Marca: ${stockTotal[i].marca}. Modelo: ${stockTotal[i].modelo}. Estado: ${stockTotal[i].estado} Año: ${stockTotal[i].año}. Precio: ${stockTotal[i].precio}`)
//             numeracion += 1;
//         }
//     }

//     else if (propmtStock === '2') {
//         filtroPorMarca('Honda')
//     }
    

//     else if (propmtStock === '3') {
//         filtroPorMarca('Ford')  
//     }

   
//     else if (propmtStock === '4') {
//         filtroPorMarca('Toyota')
//     };
// }
 











