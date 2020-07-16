//Asignacion desestructurante

  const person = {
     name: 'Isa',
     age=26,
     pass='hello',
  };




  console.log(persona.nombre);
  console.log(persona.age);
  console.log(persona.pass);

  const person2 = {
    name: 'Isa',
    age:26,
    pass:'hello',
 };



  const  {name}=person2; //extract from person2 the name

  console.log(name);