/* import fetch from 'node-fetch'

fetch('https://pokeapi.co/api/v2/pokemon/132/')
.then(response => {
    response.json()
    .then(pokemon => {
        return console.log(pokemon);
    })
})
.catch(error => console.log(error))

//añadir al package.json "type": "module", */

/* const axios = require('axios')

axios.get("http://localhost:3000/api/movies")
.then(response => {
    console.log(response.data);
})
.catch(error => console.log(error)) */

/* let marcas = ['CocaCola','Pepsi','Manaos','La Vichi Ahora','Naranpol','Kitchening Bar','Havana','Smirnoff','brugal','Quilmes','Andes','INCA','Salta Cautiva','Cunnington','Corona']

marcas = marcas.map(marca => {
  let elemento = {
    nombre : marca,
    createdAt: new Date,
    updatedAt: new Date
  }
  return elemento
})

console.log(marcas); */

let boolean = true

console.log(Number(boolean));