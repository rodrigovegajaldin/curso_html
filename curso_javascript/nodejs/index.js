const programa1 = require('./programa1.js');//aqui tenemos que poner too el path al modulo 
//si el modulo es nuestro se pone el ./ y si es modulo de node es sin el ./
const os = require('os');

console.log(programa1.add(1,3));
console.log('la plataforma es: ',os.platform());
console.log('el release es: ',os.release());
console.log('memoria libre: ',os .freemem());
