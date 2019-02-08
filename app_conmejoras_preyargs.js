//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');


let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];


for (i = 2; i <= argv.length - 1; i++) {
    var param = (argv[i]).split('=')[0];
    if (param == '--base' || param == '-b') {
        console.log('instruccion crear archivo multiplicar');
    } else {
        console.log(`No hay instrucciones a partir de ${param } `);
    }
}

//console.log(process.argv);
if (parametro.split('=')[0] == '--base') {

    crearArchivo(base)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(`Error: ${err}`));

} else {
    console.log(`No hay instrucciones :´( a partir de \n${argv } `);
}
//console.log(multiplicar.crearArchivo(base));
//npm init