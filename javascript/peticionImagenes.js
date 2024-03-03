fetch('flores.jpg').then(function(response){
	if(response.ok){
		response.blob().then(function(miBlob){
			var objectURL=URL.createObjectURL(miBlob);
			miImagen.src=objectURL;
		});
	}else{
		console.log('respuesta de Red Ok');
	}
}).catch(function(error){
	console.log('Problema conn la peticion: ',error);
})


var myHeaders=new Headers();
var myInit={method:'GET',
			headers:myHeaders,
			mode:'cors',
			cache:'default'};
var myRequest=new Request('flores.jpg',myInit);
fetch(myRequest).then(function(response){
	return response.blob();
}).then(function(myBlob){
	var objectURL=URL.createObjectURL(myBlob);
	myImage.src=objectURL;
})