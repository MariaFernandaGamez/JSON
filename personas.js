//----------- LECTURA DE ARCHIVOS JSON -------------//

//1.
const fs = require ('fs');

let dataPersonas = fs.readFileSync('data/personas.json');
console.log(dataPersonas);

let personas = JSON.parse(dataPersonas);
console.log(personas);

//2. 
let jsonPersonasData = require('./data/personas.json');
console.log(jsonPersonasData);
console.log(typeof (jsonPersonasData));


//----------- ESCRITURA DE ARCHIVOS JSON -------------//

let dataCursos = {
    "cursos" : [
        {
            "codigo" : "001",
            "nombre" : "Lenguaje"
        },
        {
            "codigo" : "002",
            "nombre" : "Matematicas"
        },
        {
            "codigo" : "003",
            "nombre" : "Ciencias"
        }
    ]
};

let jsonCursosData = JSON.stringify(dataCursos);
console.log(jsonCursosData);
console.log(typeof jsonCursosData);

const fs = require ('fs');

fs.writeFile('./data/cursos.json', jsonCursosData, (error)=> {
    if(error) {
        console.log('error')
    };
    console.log('Archivo JSON cargado exitosamente')
});


