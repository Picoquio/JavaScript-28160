
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
        this.estado = '0KM'; // porque el auto es 0 KM
    }
}

//vamos llenando nuestro stock inicial de autos
const auto1 = new NuevoAutoUsado('Honda', 'Accord', 2009, 20000);
const auto2 = new NuevoAutoUsado('Ford', 'Mondeo', 2014, 28000);
const auto3 = new NuevoAutoUsado('Toyota', 'Corolla', 2011, 18000);
const auto4 = new NuevoAutoUsado('Peugeot', '3008', 2015, 40000);
const auto5 = new NuevoAutoUsado('Volkswagen', 'Amarok', 2016, 42000);
const auto6 = new NuevoAuto0Km('Toyota', 'Hilux', 2022, 60000);
const auto7 = new NuevoAuto0Km('Volkswagen', 'Passat', 2022, 60000);
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

//preguntamos al usuario si quiere ver el stock total en la consola
const promptPpal = prompt('Ingrese 1 para ofrecernos su auto. Ingrese 2 para ver nuestro stock de autos.')

if (promptPpal === '1') {
    const userPrompt = new NuevoAutoUsado (
        prompt('Ingrese la marca de su automóvil'),
        prompt('Ingrese el modelo de su automóvil'),
        parseInt(prompt('Ingrese el año de fabricación')),
        parseInt(prompt('Ingrese el precio que pretende recibir'))
    )
}


else if (promptPpal === '2') {
    let numeracion= 1;  //Para que en el console.log del for siguiente aparezcan los autos de manera enumerada.

    for (let i = 0; i < stockTotal.length; i++) {
        if (i <= 0) {
            console.log('A continuación, el stock total de autos')
        }
        
        console.log(`${numeracion}. Marca: ${stockTotal[i].marca}. Modelo: ${stockTotal[i].modelo}. Estado: ${stockTotal[i].estado} Año: ${stockTotal[i].año}. Precio: ${stockTotal[i].precio}`)
        numeracion += 1;
    }
}
else {
    console.log('Fuera de aquí! \n*(ruido de cargar la escopeta)*')
}

