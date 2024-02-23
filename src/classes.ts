class Department {
    // private readonly id: string;
    // name: string;
    private employees: string[] = []

    // constructor(n: string) {
    //     this.name = n;
    // }

    constructor (private readonly id: number, public name: string) {} // this helps prevent double initialization, define which arguments the constructor takes, an access modifier and a property of the same name

    describe() {
        console.log(this.name, this.id + " department")
    }

    addEmployee(employee: string) {
        // this.id = "2" // the property id has been made read only thus can not be changed after inialization
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

const accounting = new Department(1, "Accounting")
accounting.addEmployee("Joash");
accounting.addEmployee("Joel");
// accounting.id = 2; you can only access this through the function

// accounting.employees[2] = "Faith";

accounting.printEmployeeInformation()

const it = new Department(2, "IT")
console.log(accounting.describe(), it.describe())