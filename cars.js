// 1) En una aplicacion WEB los datos JSON se reciben como una cadena

const cars = `[
    {
        "modelo" : "ford mustang",
        "produccion" : 2010,
        "millaje" : 1200
    },
    {
        "modelo" : "honda accord",
        "produccion" : 2021,
        "millaje" : 4560
    },
    {
        "modelo" : "volkswagen Golf",
        "produccion" : 2016,
        "millaje" : 58200
    }
]
`;

console.log(typeof cars);

// 2) Para convertir la cadena en un objeto JS usarv el metodo parse

const jsonData = JSON.parse(cars);
console.log(typeof jsonData)

// 3) Despues el objeto se puede manipular como cualquier otro objeto

const carrosNuevos = jsonData.filter(
    (car) => car.produccion > 2010 && car.millaje < 30000);

console.log(carrosNuevos);

// 4) Para convertir los datos en una cadena usar el metodo stringify

const newCars = JSON.stringify(carrosNuevos);
console.log(typeof newCars);

// 5) Modificar archivo JSON con node

const fs = require('fs');

    // a) Creamos un nuevo objeto

const carroNuevo = {
    modelo : 'Mini Cooper',
    produccion : 2022,
    millaje :500
};

const newCar = JSON.stringify(carroNuevo);

/* b) Metodo writeFile('ruta json donde se escribira el objeto', objeto, (funcion flecha en caso de error))
        Este metodo modifica todo el archivo ya existente dejando unicamente el objeto que estamos ingresando
*/
fs.writeFile('data/cars.json', newCar, (error)=> {
    if(error) throw error;
    console.log('Informacion recibida')
});