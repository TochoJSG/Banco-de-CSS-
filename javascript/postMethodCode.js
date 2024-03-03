/**
*Code using POST method
*/
async function postData(url='',data={}){
	const response=await fetch(url,{
		method:'POST',//GET, POST, PUT DELETE
		mode:'cors',//no-cors, cors, same-origin
		cache:'no-cache',//default, no-cache, reload, force-cache
		credentials:'same-origin',//include, same-origin, omit
		headers:{
			'Content-Type':'application/json'
		},
		redirect:'follow',//manual,error,follow
		referrerPolicy:'no-referrer',
		body:JSON.stringify(data)//body data type must match "Content-Type"
		});
		return response.json();//Parse Json responseinto native JS array data
	}
postData('https://eample.com/answers',{answers:42})
.then(data=>{
	console.log(data);//JSON data parsed by 'data.json()' call
});