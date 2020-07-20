import heroes, { otros } from '../data/heroes';

export const getHeroeById = (id) => heroes.find((element) => element.id===id);
//console.log (otros)

//console.log (getHeroeById(2))


export const getHeroeByOwner = (owner) => heroes.filter((element) => element.owner===owner);
//console.log (getHeroeByOwner('DC'))