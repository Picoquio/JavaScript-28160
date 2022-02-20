
// Class para dar de alta autos usados
class NuevoAutoUsado {
    constructor (marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = 'usado.'; // porque el auto es usado
    }
}

// Class para dar de alta autos 0km
class NuevoAuto0Km {
    constructor(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estado = '0KM.'; // porque el auto es 0 KM
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

//Función que se utilizará más abajo para filtrar autos según la marca
const filtroPorMarca = (Marca) => {
    /* el parámetro "Marca" sirve para indicarle al código qué value filtrar en los objetos del array "stockTotal". Ver más arriba en la instanciación de los autos 
    cómo escribir los nombres de las marcas. P.ej.: 'Honda', 'Ford', etc. */
        nuevoArray = stockTotal.filter( objeto => {
        return objeto.marca === Marca
    })

    let numeracion= 1;  //Para que en el console.log del for siguiente aparezcan los autos de manera enumerada.
    for (let i = 0; i < nuevoArray.length; i++) {
        if (i <= 0) {
            console.log(`A continuación, los vehículos marca ${Marca} en nuestro stock`)
        }
        
        console.log(`${numeracion}. Modelo: ${nuevoArray[i].modelo}. Estado: ${nuevoArray[i].estado} Año: ${nuevoArray[i].año}. Precio: ${nuevoArray[i].precio}`)
        numeracion += 1;
    }
}

//pedimos input al usuario
const promptPpal = prompt('Ingrese 1 para ofrecernos su auto. Ingrese 2 para consultar por nuestro stock de vehículos')

if (promptPpal === '1') {
    const userPrompt = new NuevoAutoUsado (
        prompt('Ingrese la marca de su automóvil'),
        prompt('Ingrese el modelo de su automóvil'),
        parseInt(prompt('Ingrese el año de fabricación')),
        parseInt(prompt('Ingrese el precio que pretende recibir'))
    )
    alert(`Nos ha ofrecido un ${userPrompt.marca} modelo ${userPrompt.modelo}, del año ${userPrompt.año} por un precio de ${userPrompt.precio}. En breve lo contactaremos, muchas gracias.`)
}

else if (promptPpal === '2') {
    const propmtStock = prompt('Ingrese 1 para ver nuestro stock total de vehículos. Ingrese 2 para ver el stock de vehículos HONDA. Ingrese 3 para ver el stock de vehículos FORD. Ingrese 4 para ver el stock de vehículos TOYOTA.')

    if (propmtStock === '1') {
        let numeracion= 1;  //Para que en el console.log del for siguiente aparezcan los autos de manera enumerada.

        for (let i = 0; i < stockTotal.length; i++) {
            if (i <= 0) {
                console.log('A continuación, el stock total de autos')
            }
            
            console.log(`${numeracion}. Marca: ${stockTotal[i].marca}. Modelo: ${stockTotal[i].modelo}. Estado: ${stockTotal[i].estado} Año: ${stockTotal[i].año}. Precio: ${stockTotal[i].precio}`)
            numeracion += 1;
        }
    }

    else if (propmtStock === '2') {
        filtroPorMarca('Honda')
    }
    

    else if (propmtStock === '3') {
        filtroPorMarca('Ford')  
    }

   
    else if (propmtStock === '4') {
        filtroPorMarca('Toyota')
    };
}
 




