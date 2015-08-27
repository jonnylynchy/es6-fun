'use strict';

// Fat Arrows / Arrow functions =======================
// Less code... same result
function noArrowTest(){
	let people = ['John', 'Dave', 'Susan', 'Daphne'].filter(function(person){
		if(person !== 'Daphne'){
			return true;
		}
	});
	console.log(people);
}

function arrowTest(){
	let people = ['John', 'Dave', 'Susan', 'Daphne'].filter((person) => person !== 'Daphne');
	console.log(people);
}
