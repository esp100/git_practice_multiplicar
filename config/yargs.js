const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {

        alias: 'l',
        default: 10
    }
}

//Paquete yargs salida del aberno & de npm init + npm i yargs --save de en la terminal
//command ( comando de entrada, info al usuario , {objetos que resiviran un parametro obj1, obj2.... })
const argv0 = require('yargs')
    .command('listar', 'Imprime el consola la tabla de multiplicar.\nColoque en formato --base= {numero} ', opts)
    .command('crear', 'Crea la tabla en un archivo txt ', opts)
    .help()
    .argv;

module.exports = {
    argv0
};