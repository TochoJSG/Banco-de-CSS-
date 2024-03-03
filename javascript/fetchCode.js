/**
*Fetch API for fetching HTTP
*
*@author Jorge
*/
const url="https://adming.org/post";
const opcionesPeticion={
	method:"POST",//GET PUT,HEAD, POST DELETE...
	headers:{
		"X-Hola":"Valor",
		"Content-Type":"application/json",
	},
	body:"El cuerpo",
};
fetch(url,opcionesPeticion)
	.then(resRaw=>{
		//Code as text
		return resRaw.text();
		//Optional Methods
		resRaw.arrayBuffer();
		resRaw.blob();
		resRaw.formData();
		resRaw.json();
	}).then(decodifiedRes=>{
		//Do something with results
	}).catch(error=>{console.log("Error en la peticion: ",error)});