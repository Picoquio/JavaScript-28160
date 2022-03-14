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