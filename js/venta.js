//Anclajes a DOM
const formVenta = document.getElementById('formVenta')




//Eventos
formVenta.addEventListener('submit', (e) => {
    e.preventDefault();

    let marca = document.getElementById('marca').value
    let modelo = document.getElementById('modelo').value;
    let fabricacion = document.getElementById('fabricacion').value
    let precio = document.getElementById('precio').value

    
    
    
    
    
    
    swal({
        title: "Recibido!", 
        text: `Nos ha ofrecido un ${marca} ${modelo} del año ${fabricacion}. En breve lo contactaremos. `, 
        icon: "success"
    })
    //formVenta.reset()
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
    clima.innerHTML =  `<span style="line-height: 2.5rem;">°C <span class="fw-bold ">${data.main.temp.toFixed(1)}</span> CABA </span> 
    <img src="http://openweathermap.org/img/wn/${idUrl}d@2x.png" class="rounded float-end" style="max-width: 50%; height: 30%;" alt="">`;
    
  }

  fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.45&appid=60487b36d1b98aba11d57dc39f976eab&units=metric ')
  .then(response => response.json())
  .then(callbackFetch)



   // carga items del carrito si se encuentran en el localStorage (y más funcionalidad, ver más abajo)
   if (localStorage.getItem('Array de repuestos')) {
    let getStorage = JSON.parse(localStorage.getItem(`Array de repuestos`))

        itemsCarrito.innerHTML = '';
        getStorage.forEach((item) => {
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
                            <button type="button" class="btn btn-primary" id="">-</button>
                            <button type="button" class="btn btn-primary">${item.cantidad}</button>
                            <button type="button" class="btn btn-primary" id="">+</button>
                        </div>
                    </div>
                </div>
                </div>
                `

            //mediante un click en el botón "eliminar" el usuario elimina el producto tanto del innerhtml del carrito como del localStorage
            document.addEventListener('click', function (e) {
                if (e.target && e.target.id == `${item.id + 'a'}`) {
                    document.getElementById(`${item.id}`).style.display = "none"; // elimina el innerthml del item en el carrito

                    //de acá para abajo eliminamos el producto del local storage
                    let arrayAModificar = JSON.parse(localStorage.getItem('Array de repuestos'));
        
                    for (let i = 0; i < arrayAModificar.length; i++) {
                        if (`${arrayAModificar[i].id + 'a'}` == e.target.id) {
                            arrayAModificar.splice(i,1)
                        }
                    }
                    localStorage.setItem('Array de repuestos', JSON.stringify(arrayAModificar))
                }
            });
        })
}
