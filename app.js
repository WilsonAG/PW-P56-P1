/* archivo principal */
// TODO: Chino

const argv = require('./src/configs/yargs').argv;
const tareas = require('./src/controllers/CountryController')
const colors = require('colors');

let comand = argv._[0];
c
switch (comand) {
    case 'publicar':
        console.log('pagina web ');
        break;
    case 'guardar':
        console.log('guardar los resultados');
        break;
    default:
        console.log('Comando no reconocido');
}