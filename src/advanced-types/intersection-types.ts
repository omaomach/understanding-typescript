// Intersection types allow us to combine other types

type Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: String;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Joash",
    priviledges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric

// function sum(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {  // This is a type guard
//         return a.toString() + b.toString();
//     }
//     return a + b
// }

type UnknownEmployee = Employee | Admin  // we have a union type using our custom object types i.e UnknownEmployee is either of the 2

function printEmployeeInformations(emp: UnknownEmployee) {
    console.log("Name: " + emp.name)
    if ('priviledges' in emp) {
        console.log("Priviledges: " + emp.priviledges)
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate)
    }
}

printEmployeeInformations(e1);
printEmployeeInformations({name: "Joel", priviledges: ["Super Admin"]})

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a big truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(13)
    }
}

useVehicle(v2)


// DISCRIMINATED UNIONS - This is pattern that you can use when working with union types that makes implementing type guards easier
// it is available when working with object types, interfaces

interface Bird {
    type: 'bird'
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed
            break
    }
    console.log("The animal is moving at a speed of: " + speed)
}

moveAnimal({type: 'horse', runningSpeed: 300})


// TYPE CASTING

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// userInputElement.value = "Hello";

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Username"
}



// INDEX PROPERTIES
interface ErrorContainer {  // { email: 'Not a valid email', username: 'Must start with a character' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username:"Must start with a capital character"
}



// FUNCTION OVERLOADS - They can help you in stituations where typescript would not be able to correctly infer the return type on its own
function sum(a: number, b: number): number;
function sum(a: string, b: string): number;
function sum(a: string, b: number): number;
function sum(a: number, b: string): number;
function sum(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {  // This is a type guard
        return a.toString() + b.toString();
    }
    return a + b
}

const summ = sum(4, 5);



// OPTIONAL CHAINING // used in cases where you may want to confirm that certain fetched data exists in the db
const fetchedUserData = {
    id: 'u1',
    name: 'Faith',
    job: { title: 'CEO', description: "My own company" }
};

// console.log(fetchedUserData.job && fetchedUserData.job.description);
// console.log(fetchedUserData?.job?.title)

// NULLISH COALESCING
// const userrInput = ''; // an empty string is evaluates to false, thus DEFAULT will be printed
// const storedData = userrInput || 'DEFAULT';

const userrInput = ''; // in this case, the empty space is not taken to be false, null or undefined
const storedData = userrInput ?? 'DEFAULT';

console.log(storedData)






// interface Admin {
//     name: string;
//     priviledges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}
