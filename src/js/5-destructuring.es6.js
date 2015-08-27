function structureObj(){
	let firstName = 'Joe';
	let lastName = 'Schmoe';
	let person = { 
		firstName: firstName,
		lastName: lastName
	};
	console.log(person);
}

function structureObjShort(){
	let firstName = 'Joe';
	let lastName = 'Schmoe';

	let person = {firstName, lastName};
	console.log(person);
}

// Destructuring
function destructure() {
	let person = { firstName: 'Joe', lastName: 'Schmoe' };

	let { firstName, lastName } = person;
	console.log(firstName);
}

// Available in loops too
function destructureLoop() {
	for (let {title, artist} in songs) {
	  // ...
	}
}
