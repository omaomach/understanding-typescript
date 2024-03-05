"use strict";
const e1 = {
    name: "Joash",
    priviledges: ['create-server'],
    startDate: new Date()
};
function printEmployeeInformations(emp) {
    console.log("Name: " + emp.name);
    if ('priviledges' in emp) {
        console.log("Priviledges: " + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
printEmployeeInformations(e1);
printEmployeeInformations({ name: "Joel", priviledges: ["Super Admin"] });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a big truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(13);
    }
}
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("The animal is moving at a speed of: " + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 300 });
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = "Username";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character"
};
function sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const summ = sum(4, 5);
const fetchedUserData = {
    id: 'u1',
    name: 'Faith',
    job: { title: 'CEO', description: "My own company" }
};
const userrInput = '';
const storedData = userrInput !== null && userrInput !== void 0 ? userrInput : 'DEFAULT';
console.log(storedData);
