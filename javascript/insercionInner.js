const lista=document.getElementById('Dinamica-enHTML');
const conjunto=['a','b','c'];

let plantilla='';
conjunto.forEach(item=>{
	plantilla+=`<li><b>Nombre: </b><span class="text-danger">${item.campo}</span></li>`;
})
lista.innerHTML=plantilla;