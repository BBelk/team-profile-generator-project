const Manager = require("../lib/Manager");

describe("Manager", () => {

    const newManager = new Manager("Bruce", 123, "belkbh@gmail.com", 789);
    describe("retrieve name", () =>{
        it('check for Manager name', () =>{
            expect(newManager.getName()).toBe("Bruce");
        });
    });

    describe("retrieve ID", () =>{
        it('check for Manager ID', () => {
            expect(newManager.getId()).toEqual(123);
        })
    });

    describe("retrieve email", () =>{
        it('check for Manager email', () => {
            expect(newManager.getEmail()).toBe("belkbh@gmail.com");
        })
    });

    describe("retrieve office number", () =>{
        it('check for Manager officeNumber', () =>{
            expect(newManager.getOfficeNumber()).toEqual(789);
        });
    });

    describe("retrieve role", () =>{
        it('check for Manager role', () =>{
            expect(newManager.getRole()).toBe("Manager");
        });
    });

});

