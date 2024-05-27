//your JS code here. If required.

let age = documet.getElementById('age');
let name = documet.getElementById('name');
let btn = documet.getElementById('btn');

function promise(name, age) {
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			if(age > 18){
				resolve(`welcome, ${name}. You can vote`);
				
			} else {
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		}, 4000);
	});
}

btn.addEventListener('click', function(){
	if(name === "" && age === ""){
		alert("Please enter valid details")
	} else {
		promise(name, age);
	}
});
