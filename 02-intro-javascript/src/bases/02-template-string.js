const name = 'Isa';
const surname='Amaya'


//const nombrecompleto= name + ' '+surname;
const nombrecompleto= `${name} ${surname} ${1+1}`;

console.log(nombrecompleto);


function getSaludo(name){
    return 'hola mundo'+ name
}

console.log(`Éste es un texto: ${getSaludo(name)}`)