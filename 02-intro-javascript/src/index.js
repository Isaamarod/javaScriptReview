import heroes, { otros } from './data/heroes';

const getHeroeById = (id) => heroes.find((element) => element.id===id);
console.log (otros)

console.log (getHeroeById(2))


const getHeroeByOwner = (owner) => heroes.filter((element) => element.owner===owner);
console.log (getHeroeByOwner('DC'))


