"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.name, this.id + " department");
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(1, "Accounting");
accounting.addEmployee("Joash");
accounting.addEmployee("Joel");
accounting.printEmployeeInformation();
const it = new Department(2, "IT");
console.log(accounting.describe(), it.describe());
