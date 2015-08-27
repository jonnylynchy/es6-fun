let car = 'Ferrari F430';
let motorSound = 'vroom vroom';

function osStrings(){
	let makeNoise = 'The ' + car + ' sounds like ' + motorSound + '!';
	console.log(makeNoise);
}

function nsStrings(){
	let makeNoise = `The ${car} sounds like ${motorSound}!`;
	console.log(makeNoise);
}
