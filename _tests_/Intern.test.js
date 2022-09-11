const Intern = require("../lib/Intern");

describe("Intern", () => {

    const newIntern = new Intern("Bruce", 123, "belkbh@gmail.com", "UNCC");
    describe("retrieve name", () =>{
        it('check for Intern name', () =>{
            expect(newIntern.getName()).toBe("Bruce");
        });
    });

    describe("retrieve ID", () =>{
        it('check for Intern ID', () => {
            expect(newIntern.getId()).toEqual(123);
        })
    });

    describe("retrieve email", () =>{
        it('check for Intern email', () => {
            expect(newIntern.getEmail()).toBe("belkbh@gmail.com");
        })
    });

    describe("retrieve school", () =>{
        it('check for Intern school', () =>{
            expect(newIntern.getSchool()).toBe("UNCC");
        });
    });

    describe("retrieve role", () =>{
        it('check for Intern role', () =>{
            expect(newIntern.getRole()).toBe("Intern");
        });
    });

});
