const Employee = require("../lib/Employee");

describe("Employee", () => {

    const newEmployee = new Employee("Bruce", 123, "belkbh@gmail.com");
    describe("retrieve name", () =>{
        it('check for employee name', () =>{
            expect(newEmployee.getName()).toBe("Bruce");
        });
    });

    describe("retrieve ID", () =>{
        it('check for employee ID', () => {
            expect(newEmployee.getId()).toEqual(123);
        })
    });

    describe("retrieve email", () =>{
        it('check for employee email', () => {
            expect(newEmployee.getEmail()).toBe("belkbh@gmail.com");
        })
    });

    describe("retrieve role", () =>{
        it('check for employee role', () => {
            expect(newEmployee.getRole()).toBe("Employee");
        })
    });
});
