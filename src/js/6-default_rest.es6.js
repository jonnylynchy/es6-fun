function makeCar(type){
	type = type || 'Ferrari F430';
	console.log(type)
}

function defaultMakeCar(type = 'Ferrari F430'){
	console.log(type)
}

function makeCars(){
	var cars = [];
	for (var i = 0; i < arguments.length; i++)
		cars[i] = arguments[i];
	cars = cars.sort();

	//var cars = Array.prototype.slice.call(arguments);
	console.log(cars);
}

// Rest arguments
function makeCarsRest(...cars){
	console.log(cars);
}