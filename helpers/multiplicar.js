const fs  = require('fs');
require('colors');

const crearArchivo = async (number, listar, hasta = 10) => {

    try {
        
        
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${number} x ${i} = ${number * i}\n`;
        }
        
        if(listar) {
            console.log('==================');
            console.log(`  Tabla del ${number}`.rainbow);
            console.log('==================');
            console.log(salida.underline.blue);
        }

        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
    
        return `tabla-${number}.txt`;
        
    } catch (err) {
        throw err;
    }
    

}

module.exports = {
    crearArchivo
}