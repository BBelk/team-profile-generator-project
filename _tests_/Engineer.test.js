const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    const newEngineer = new Engineer("Bruce", 123, "belkbh@gmail.com", "bbelk");
    describe("retrieve name", () =>{
        it('check for engineer name', () =>{
            expect(newEngineer.getName()).toBe("Bruce");
        });
    });

    describe("retrieve ID", () =>{
        it('check for engineer ID', () => {
            expect(newEngineer.getId()).toEqual(123);
        })
    });

    describe("retrieve email", () =>{
        it('check for engineer email', () => {
            expect(newEngineer.getEmail()).toBe("belkbh@gmail.com");
        })
    });

    describe("retrieve github", () =>{
        it('check for engineer github', () =>{
            expect(newEngineer.getGithub()).toBe("bbelk");
        });
    });

    describe("retrieve role", () =>{
        it('check for engineer role', () =>{
            expect(newEngineer.getRole()).toBe("Engineer");
        });
    });

});
