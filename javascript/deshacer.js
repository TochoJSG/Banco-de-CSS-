// Creamos el JSON

/* var elJSON = [
    {nombre: 'Fernando', num: 89875, sexo: 'masculino'},
    {nombre: 'Octavio', num: 76867, sexo: 'masculino'},
    {nombre: 'Sandra', num: 45345, sexo: 'femenino'},
    {nombre: 'Alvaro', num: 23, sexo: 'masculino'},
    {nombre: 'Roxana', num: 4545, sexo: 'femenino'},
    {nombre: 'Benito', num: 234, sexo: 'masculino'},
    {nombre: 'Alejandra', num: 8900, sexo: 'femenino'},
    {nombre: 'Carlos', num: 5654, sexo: 'masculino'}
]; */

const elJSON = 'https://api.mercadolibre.com/sites/MLM/search?category=1055'

// Pintamos en pantalla el JSON normal
/* var jsonN = document.getElementById('jsonN');
jsonN.textContent = JSON.stringify(elJSON);
console.log(JSON.stringify(elJSON)); */
/*var jsonN = document.getElementById('jsonN');
jsonN.textContent = JSON.parse(elJSON);
console.log(JSON.parse(elJSON));

function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

// Ordenamos el json.
// Ojo, hay que incluir como parámetro:
// El JSON origninal
// La propiedad que queremos ordenar
// El orden (asc | desc)
var oJSON = sortJSON(elJSON, 'num', 'asc');
// Ej. var oJSON = sortJSON(elJSON, 'nombre', 'asc');
// Ej. var oJSON = sortJSON(elJSON, 'sexo', 'desc');

// Pintamos en pantalla el JSON ordenado
console.log(JSON.stringify(oJSON));
var jsonO = document.getElementById('jsonO');
jsonO.textContent = JSON.stringify(oJSON);*/
fetch(elJSON)
.then(res => res.json())
.then(data => {
	data.forEach(results =>{
		console.log(results.price)
	});
})
.catch(err => console.log(err))