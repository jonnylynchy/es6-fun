'use strict';

// Straight outta mozilla (MDN)

// Creating an interator object - just needs to have a "next()" function that returns a value and boolean "done"
function createIterator(array){
	var nextIndex = 0;
	
	return {
	   next: function(){
		   return nextIndex < array.length ?
			   {value: array[nextIndex++], done: false} :
			   {done: true};
	   }
	}
}

// Example of self made iterator
function selfIterator(){
	let it = createIterator(['yo', 'ya']);
	console.log(it.next().value); // 'yo'
	console.log(it.next().value); // 'ya'
	console.log(it.next().value); // undefined
	console.log(it.next().done);  // true
}

let fibonacci = {
	[Symbol.iterator]() {
		let pre = 0, cur = 1;
		return {
			next() {
				[pre, cur] = [cur, pre + cur];
				return { done: false, value: cur }
			}
		}
	}
}

function runFibonacci() {
	// Notice that the fibonacci sequence had NO prestored values... could just keep going until we get a out of memory exception
	for (var n of fibonacci) {
	  	// better break this bad boy
	  	if (n > 5000)
			break;
	  	console.log(n);
	}
}

// User defined iterable
function createIterable(){
	var myIterable = {}
	myIterable[Symbol.iterator] = function* () {
	    yield 1;
	    yield 2;
	    yield 3;
	};
	//console.log(myIterable);
	console.log([...myIterable]);
}

// Generators!

// from Mozilla:
// A generator is a special type of function that works as a factory for iterators. 
// A function becomes a generator if it contains one or more yield expressions and if it uses the function* syntax.
// function* numMaker(){
// 	var index = 0;
// 	while(true)
// 		yield index++;
// }

// function makeSomeNums() {
// 	var gen = idMaker();

// 	console.log(gen.next().value); // 0
// 	console.log(gen.next().value); // 1
// 	console.log(gen.next().value); // 2
// }

