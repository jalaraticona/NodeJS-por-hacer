const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const crear = (description) => {

    cargarDB();

    let porHacer = {
        description, //gracias a enmascript se sobrentiende los siguiente description: description
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === description;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (description) => {
    cargarDB();
    // let aux = [];
    // for (let tarea of listadoPorHacer) {
    //     if (tarea.description === description) {
    //         console.log('Eliminando');
    //     } else {
    //         aux.push(tarea);
    //     }
    // }
    // // console.log(aux);
    // listadoPorHacer = aux;
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.description !== description;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    // guardarDB();
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}