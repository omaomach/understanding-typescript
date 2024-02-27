abstract class Department {  
    static fiscalYear = 2024;
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [] // unlike private, protected allows private properties of the base class to be accessed by the child classes

    // constructor(n: string) {
    //     this.name = n;
    // }

    constructor (protected readonly id: number, public name: string) {} // this helps prevent double initialization, define which arguments the constructor takes, an access modifier and a property of the same name

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this : Department) : void;

    addEmployee(employee: string) {
        // this.id = "2" // the property id has been made read only thus can not be changed after inialization
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

const employee1 = Department.createEmployee("Onkwoko");
console.log(employee1, Department.fiscalYear)

// const accounting = new Department(1, "Accounting")  // you cant create instances of an abstract class
// accounting.addEmployee("Joash");
// accounting.addEmployee("Joel");
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

    describe() {
        console.log("IT Department - ID: " + this.id)
    }

}

const developers = new ITDepartment(1, ["Joash"]);
developers.addEmployee("Faith")
developers.describe()
// console.log(developers.printEmployeeInformation())

class FinanceDepartment extends Department {
    private lastReport: string;
    private static instance: FinanceDepartment; 

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    private constructor(id: number, private reports: string[]) {  // Singleton pattern and private constructors
        super(id, "Finance");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance
        }
        this.instance = new FinanceDepartment(5, ["Harry Porter Reports"])
        return this.instance
    }

    describe() {
        console.log("Finance Department - ID: " + this.id);
    }
    
    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

}

const finance = FinanceDepartment.getInstance();
const finance2 = FinanceDepartment.getInstance()
console.log(finance, finance2) // this 2 instances of the class "FinanceDepartment are exactly the same, because you can only create one instance of this class from within the class itself"

// const accounting1 = new financeDepartment(3, ["daily"]); you can only create one instance of this class from within the class itself
// accounting1.mostRecentReport = "GOT Report"
// console.log(accounting1.mostRecentReport)
// accounting1.addReport("Spiderman is back fighting crime");
// accounting1.addEmployee("Gloria")
// accounting1.addEmployee("Maxwell")
// accounting1.describe()
// console.log(accounting1.printEmployeeInformation())