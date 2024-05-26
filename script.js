//your JS code here. If required.

let age = documet.getElementById('age');
let name = documet.getElementById('name');
let btn = documet.getElementById('btn');

btn.addEventListener('click', display());


function display(age) {
	return new Promise((resolve) =>{
		setTimeout(() =>{
			resolve(age);
		}, 4000);
	});
}

display(age)
.then((res) =>{
	const age1 = age.innerText;
	if(age1 > 18){
		return `welcome, ${name}. You can vote`
	} else {
		re
	}
})
