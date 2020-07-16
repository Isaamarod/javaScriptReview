//OPTION 1 NOT RECOMMEND POSSIBLE PISADA
/* function saludar (name){
    return `Hello, ${name}`;
}


console.log(saludar('Isa')); */

const saludar = function(name){
    return `Hello,${name}`;
}

console.log(saludar('Isa'))

const saludar2 = (name) => {
    return `Hello,${name}`;
}

console.log(saludar2('HOLOWI'))


//AL TENER SOLO 1 RETURN SE PUEDE SIMPLIFIAR MAS
const saludar3 = (name) =>  `Hello,${name}`;


console.log(saludar3('HOLOWI3'))


//No recibe nada
const saludar4 = () =>  `Hello world`;


console.log(saludar4())



const getUser = () => ({
    uid: 'esto es un objecto porque va entre parentesis',
    pass: 123
    
});

const user =getUser();

console.log(user);

//1. Tarea transformar a funcion flecha
//2. Tiene que devolver un objeto implicito
//3. Pruebas

/* function getUsuarioActivo(nombre){
    return {
        uid:'ABC',
        username: nombre
    }
}

const usuarioActivo= getUsuarioActivo('Isa');
console.log(usuarioActivo); */


const getUsuarioActivo = (nombre) => ({
        uid:'ABC',
        username: nombre
});

const usuarioActivo= getUsuarioActivo('Isa');
console.log(usuarioActivo);