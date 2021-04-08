const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.n, argv.l, argv.h).then( response => {
    console.log(response.underline.green + ' creado'.underline.green);
}).catch( err => {
    console.log(err);
});