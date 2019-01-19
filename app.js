// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors')
const porHacer = require('./por-hacer/por-hacer');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        // console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('================'.green);
            console.log(tarea.description);
            console.log('estado: ', tarea.completado);
            console.log('================'.green);
        }
        // console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        // console.log('Actualizar una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        break;
    default:
        console.log('Comando desconocido');
}