const argv = require('yargs').option('n', {
    alias: 'number',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Es la tabla en consola'
}).option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Es el limite de la tabla de multiplicar'
}).check((argv, option) => {
    if (isNaN(argv.n)) {
        throw "Debe ser un número";
    } else {
        return true;
    }
}).argv;

module.exports = argv;