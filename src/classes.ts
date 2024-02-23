class Department {
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [] // unlike private, protected allows private properties of the base class to be accessed by the child classes

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

// accounting.printEmployeeInformation()

// const it = new Department(2, "IT")
// console.log(accounting.describe(), it.describe())


class ITDepartment extends Department {
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, "IT");
        this.admins = admins
    }   
}

// const developers = new ITDepartment(1, ["Joash"]);
// developers.addEmployee("Faith")
// console.log(developers.printEmployeeInformation())

class financeDepartment extends Department {
    constructor(id: number, private reports: string[]) {
        super(id, "Accounting");
    }
    
    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports);
    }

}

const accounting1 = new financeDepartment(3, ["daily"]);
accounting1.addReport("Spiderman is back fighting crime");
accounting1.addEmployee("Gloria")
accounting1.addEmployee("Maxwell")
console.log(accounting1.printEmployeeInformation())