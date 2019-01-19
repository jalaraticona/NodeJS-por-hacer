let description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
let completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Genera un una tarea por hacer', {
        description
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        description,
        completado
    })
    .command('borrar', 'Borrar la tarea por hacer o completada', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}