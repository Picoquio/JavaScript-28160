//Anclajes a DOM
const formVenta = document.getElementById('formVenta')
const buttonCarrito = document.getElementById('buttonCarrito')



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


buttonCarrito.addEventListener('click', () => {
    console.log('hola')
    swal({
      title: "Error", 
      text: `Distinguido tutor: esta funcionalidad no se encuentra disponible todavía. Disculpe las molestias`, 
      icon: "error"
  })
  })