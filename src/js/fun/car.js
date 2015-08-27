"use strict";

class Car {
  constructor(options = {franchise: 'Ford', model: 'Mustang'}){
    this.franchise = options.franchise;
    this.model = options.model;
    this.speed = 0;
    this.status = 'idle';
    this.stage = document.body;
    this.rendered = false;
    this.container = '<div class="car"></div>';
  }
  
  go(speed){
    this.speed = speed;
    this.status = this.speed > 0 ? 'moving' : 'idle';
  }
  
  stop(){
    this.speed = 0;
    this.status = 'idle';
  }

  renderCar(){
    if(!this.rendered){
      this.stage.appendChild(this.container);
    }
  }
}

let options = {franchise: 'Ferrari', model: 'F430'}
let ferarri = new Car(options);