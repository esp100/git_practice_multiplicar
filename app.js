//Paquete yargs salida del aberno & de npm init + npm i yargs --save de en la terminal
//command ( comando de entrada, info al usuario , {objetos que resiviran un parametro obj1, obj2.... })
const argv0 = require('./config/yargs').argv0;

const colors = require('colors');

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv0._[0];
switch (comando) {


    case 'listar':

        listarTabla(argv0.base, argv0.limite)
            .then(testo => console.log(`La tabla de base ${argv0.base}, hasta ${ argv0.limite} es la siguiente: \n${testo}`.rainbow))
            .catch(err => console.log(`Error: ${err}`));

        break;

    case 'crear':
        console.log(`Crear la tabla con base ${argv0.base} y límite ${ argv0.limite}`);

        crearArchivo(argv0.base, argv0.limite)
            .then(archivo => console.log(`Archivo creado: `.red, `${archivo}`.rainbow))
            .catch(err => console.log(`Error: ${err}`));
        break;

    default:
        console.log(`Comando no reconocido`);
}

//console.log(argv0);
console.log('Base', argv0.base);
console.log('Límite', argv0.limite);