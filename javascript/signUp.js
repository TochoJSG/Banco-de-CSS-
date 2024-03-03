var clients = [];
function addClientToJson(nombre, correo, contrasenia){
	var newClient = {
		name : nombre,
		email : correo,
		password : contrasenia
	};
	clients.push(newClient);
}

document.querySelector('#btnLogUp').addEventListener('click', guardarCliente);

function guardarCliente(){
	var fNombre = document.querySelector('#txtName').value,
	fCorreo = document.querySelector('#txtMail').value,
	fPw = document.querySelector('#txtPw').value;
	/*fPw2 = document.querySelector('#txtPw2').value;*/
	
	//if(String(fPw) === String(fPw2)){
		addClientToJson(fNombre,fCorreo,fPw);
	//}
}