//your JS code here. If required.

let age = document.getElementById('age').value;
let name = document.getElementById('name').value;
let btn = document.getElementById('btn');

function promise(name, age) {
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			if(age > 18){
				resolve(
					alert(`welcome, ${name}. You can vote`)
				)
				
			} else {
				alert(`Oh sorry ${name}. You aren't old enough.`)
			}
		}, 4000)
	});
}

btn.addEventListener('click', function(){
	if(name === "" && age === ""){
		alert("Please enter valid details")
	} else {
		promise(name, age)
	}
});
