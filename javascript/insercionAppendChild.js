const elementoDOM=document.querySelector('#lista');
const arrayInser=['a','b','c'];
const fragmento=document.createDocumentFragment();
arrayInser.forEach(item=>{
	const li = document.create('li');
	li.classList.add('list');
	
	const b = document.createDocumentFragment('b');
	b.textContent='Nombre: ';
	
	const span=document.createDocumentFragment('span');
	span.classList.add('text-danger');
	span.textContent=item.campo;
	
	li.appendChild(b);
	li.appendChild(span);
	fragmento.appendChild(li);
})
elementoDOM.appendChild(fragmento);

/*
<li><b>Nombre: </b><span class="text-danger">${item.campo}</span></li>
*/