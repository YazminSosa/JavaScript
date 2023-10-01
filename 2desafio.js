const datos = require('./users.json').users


let cantidadDePersonas = datos.length;

//------------ Uso de filter y map --------------
const mujeres = datos.filter(usuario => usuario.gender === 'female' && usuario.bloodGroup === 'A+');

const nombresYApellidosMujeres = mujeres.map(mujer => `${mujer.firstName} ${mujer.lastName}`);

//------------ for each---------------

let contadorMenoresDe30 = 0;

datos.forEach(usuario => {
  if (usuario.age < 30) {
    contadorMenoresDe30++;
  }
});



// -----------Reduce--------------
totaldepersonas = datos.reduce(
  (cantidad, usuario) => {
    if (usuario.gender === 'male') {
      cantidad.hombres++;
    } else if (usuario.gender === 'female') {
      cantidad.mujeres++;
    }
    return cantidad;
  },
  { hombres: 0, mujeres: 0 }
);

//---------Información legible para el jefe--------------
console.log(`La cantidad de personas en la lista es: ${cantidadDePersonas}`);
console.log('Mujeres con grupo sanguíneo A+:');
console.log(nombresYApellidosMujeres);
console.log(`La cantidad de personas menores de 30 años es: ${contadorMenoresDe30}`);
console.log(`- Cantidad de hombres: ${totaldepersonas.hombres}`);
console.log(`- Cantidad de mujeres: ${totaldepersonas.mujeres}`);




























