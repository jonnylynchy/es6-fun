'use strict';

// Let ======================================

// Old school
function varTest(){
	var thisThing = 'foo';
	if(true){
		var thisThing = 'bar';
		console.log(thisThing);
	}
	console.log(thisThing);
}

// Let
function letTest(){
	let thisThing = 'foo';
	if(true){
		let thisThing = 'bar';
		console.log(thisThing);
	}
	// BLOCK SCOPE!!!
	console.log(thisThing);
}

// Old school
function varLoopTest(){
	// Normal use of var creates a global/local scope variable
	for (var i = 0; i<10; i++) {
		console.log(i);
	}

	console.log(i); 
}

// Let
function letLoopTest(){
	// Normal use of var creates a global/local scope variable
	for (let i = 0; i<10; i++) {
		console.log(i);
	}

	console.log(i); // i is not defined
}

// Constants==============================

// const
const PIE = Math.PI;

// constants are great for importing libraries on node/io as well - ensures this doesn't get overwritten later
// const express = require('express');

function constTest(){
	//PIE = 123;
}