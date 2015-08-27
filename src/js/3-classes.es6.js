"use strict";

// Class
class Person {
	constructor(name) {
		// lexical this
		this.name = name;
		this.friends = [];
		this.type = 'normal';
		this.strength = 'average';

		// old school
		// var self = this;
	}

	printFriends(){
		this.friends.forEach(f => console.log(this.name + " knows " + f));
		return true;
	}

	addFriend(friend){
		this.friends.push(friend);
		return true;
	}

	deFriendify(friend){
		let friendIdx = this.friends.findIndex(x => x == friend);
		let removedFriend = "not found, couldn't be ";
		//this._friends.find(x => x == 'George')
		//this._friends.findIndex(x => x == 'George')

		if(friendIdx > -1){
			removedFriend = this.friends.splice(friendIdx, 1);
		}

		return console.log(removedFriend, 'removed.');
	}
}

// Extending Classes
class SuperPerson extends Person {
	constructor(args) {
		// lexical this
		super(args);
		this.type = 'definitely not normal';
		this.strength = 'super human';
		this.useSuperPower = 'I just crushed beer cans with my bare hands!';
	}

	// fat arrows using lexical this
	delayedSuperPower(){
		// setTimeout(function(){
		// 	console.log(this.useSuperPower);
		// }, 1000);
		
		setTimeout(() => {
			console.log(this.useSuperPower);
		}, 1000);

		return true;
	}
}

// Extending Built-ins
class AwesomeArray extends Array {
	constructor(args) { 
		super(...args); 
	}

	getCrapLength(){
		return this.length;
	}

	removeThatCrap(crap){
		let crapIdx = this.findIndex(x => x == crap)
		if(crapIdx > -1)
			return this.splice(crapIdx, 1);

		return false;
	}
}

// Lexical this
// var bob = {
//   _name: "Bob",
//   _friends: ['John','Peter','Sandra','Marsha','Lucy','Bobby'],
//   printFriends() {
//     this._friends.forEach(f => console.log(this._name + " knows " + f));
//   }
// }