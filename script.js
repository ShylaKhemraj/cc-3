class Car {}
    constructor(make, speed);{
        this.make = make;
        this.speed = speed; 
}
//Method for car acceleration
accelerate(amount);{
    this.speed += amount;
    console.log('${this.make} is traveling at ${this.speed} km/h');
}
//Method for car to brake
brake(amount);{
    this.speed -= amount; 
    if (this.speed < 0) this.speed = 0;
    console.log ('${this.make} is now traveling at ${this.speed} km/h');
}
//Accelerate method in Car class
class Car {}
constructor(initialSpeed = 0);{
    this.speed = initialSpeed;
}
accelerate ();{
this.speed +- 10;
console.log('New speed: ${this.speed} km/h');
}
//Brake method in Car class
class Car {}
constructor(speed =0);{
    this.speed = speed;
}
brake();{
    this.speed = Math.max(0, this.speed - 5); 
    console.log('New speed: ${this.speed} km/h');
}
//Define car class
class Car {
    constructor(make) {
        this.make = make;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log ('${this.make} is accelerating. Speed: ${this.speed} km/h');
    }
    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log('${this.make} is braking. Speed: $this.speed} km/h');
    }
}
//Two Car objects
const car1 = new Car('BMW');
const car2 = new Car('Mercedes');

//Testing accelerating and braking methods

//Car1
console.log('Testing car1 (BMW:');
car1.this.speed(120); // Starting at 120 km/h
car1.accelerate(10); //Accelerating by 10 km/h
car1.brake(5); //Braking by 5 km/h

//Car2
console.log('Testing car2 (Mercedes:');
car2.this.speed(95); //Starting at 95 km/h
car2.accelerate(10); //Accelerating by 10 km/h
car2.brake(5); // Braking by 5 km/h