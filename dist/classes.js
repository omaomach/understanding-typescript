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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class financeDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting1 = new financeDepartment(3, ["daily"]);
accounting1.addReport("Spiderman is back fighting crime");
accounting1.addEmployee("Gloria");
accounting1.addEmployee("Maxwell");
console.log(accounting1.printEmployeeInformation());
