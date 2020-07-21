import {getHeroeById} from './bases/08-imp-exp-arrays-funcs'
/* 
const promess = new Promise ((resolve,reject) => {
     
        const heroe = getHeroeById(2);
        resolve(heroe)
    // reject ('No se pudo encontrar el heroe');
        

    

});



//Then receive resolve argument 
promess.then((heroe) => {console.log('Heroe',heroe)}) */



const getHeroeByIdAsync = (id) => {
   return  new Promise ((resolve,reject) => {
      if (id){
         const heroe = getHeroeById(id);
         resolve(heroe)
      
      }else{
         reject ('No se pudo encontrar el heroe');
      }

   });
}


//Then receive resolve argument 
/* getHeroeByIdAsync(3).then(heroe => console.log('Heroe',heroe))
.catch(err => console.warn(err)) */

getHeroeByIdAsync(3).then(console.log)
.catch(console.warn);