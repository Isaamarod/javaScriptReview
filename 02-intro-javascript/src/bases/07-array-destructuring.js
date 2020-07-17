//Classic mode

const characters = ['Marilyn', 'Paco Martinez Soria', 'Carmen Sevilla']


console.log(characters[0]);


const [,p2] =characters;

console.log(p2)

const [,,p3] =characters;

console.log(p3)

const reuturnArray = () => { return ['ABD',3];}

const [a,b] = reuturnArray();
console.log(a,b)

//Tarea
//1. the first position will be named name
//2. the second position will be name setName


const useState = (valor) =>{
 return [valor, () => {return console.log('que pasa')}];
}
const [,setName] = useState('Goku');

console.log(setName)
