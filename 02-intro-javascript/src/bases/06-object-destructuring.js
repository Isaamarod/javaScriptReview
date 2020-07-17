//Asignacion desestructurante

  const person = {
     name: 'Isa',
     age:26,
     pass:'hello',
  };




  console.log(person.nombre);
  console.log(person.age);
  console.log(person.pass);

  const person2 = {
    name: 'Isa',
    age:26,
    pass:'hello',
    role: 'Biomedical researcher',
 };



  const  {name,age,pass}=person2; //extract from person2 the name

  console.log(name,age,pass);

  const returnPerson =(user) => {
    const  {name,age,pass}=user;

    console.log(name,age,pass);
  }
  returnPerson(person2)
//Receive deestructuration from argument and default atb that doesn't exist

const returnPerson2 =({name,edad,role}) => {
   

   console.log(name,age,role);
 }
 returnPerson2(person)

//Receive deestructuration from argument and default atb that exist

 const returnPerson3 =({name,edad,role='Researcher'}) => {
   

   console.log(name,edad,role);
 }
 returnPerson3(person2)



 const returnPerson4 =({name,edad,role}) => {
   

   return{
      nombreClave: pass,
      anios: age,
      position:{
         lat:12.345,
         long:89.56
      }
   }
 }

 const avenger = returnPerson4 (person2);

 console.log(avenger)

// const {nombreClave,anios,position:{lat}} = returnPerson4 (person2);
 const {nombreClave,anios,position} = returnPerson4 (person2);

 const {lat,long} = position;


 console.log(nombreClave,anios,position);
 console.log(lat,long);
