//Test cases for the Crud operations of Employee Repo

import EmployeeRepo from "../Jsfiles/Repocrud.mjs";



describe('Employee Repo Test Suite', () => {
    let repo; //create an object

    beforeEach(()=> repo = new EmployeeRepo)

    describe('create Test Specs', () => {
        it("should add employee and return it", ()=>{
            //arrange
            const emp = { name : "Phaniraj", address : "Bangalore", salary : 40000}
            //act
            const result = repo.create(emp)
            //assert
            expect(result).toEqual(jasmine.objectContaining({ name : "Phaniraj", address : "Bangalore", salary : 40000, id : 1}));
            expect(repo.employees.length).toBe(1)
        })

        it("should throw exception if data is invalid", ()=>{
            //arrange
            const emp = { name : "Phaniraj", empaddress : "Bangalore", salary : 40000}
            //act
            
            //assert
            expect(() => repo.create(emp)).toThrowError("Invalid Employee data")
        })
    })

    describe('getAll Test Suite', () => { 
        it("should return all emp objects", ()=>{
            //arrange
            const emplist = [
                { name : "Phaniraj", address : "Bangalore", salary : 40000},
                { name : "Phaniraj", address : "Bangalore", salary : 40000},
                { name : "Phaniraj", address : "Bangalore", salary : 40000}
            ]
            for(const rec of emplist)
                repo.create(rec)
            //act
            const actuals = repo.getAll();
            //assert
            expect(actuals.length).toBe(emplist.length)
            expect(actuals).toEqual(jasmine.arrayContaining(
                [
                    jasmine.objectContaining({name : "Phaniraj"}),
                    jasmine.objectContaining({name : "Phaniraj"}),
                    jasmine.objectContaining({name : "Phaniraj"})
                ]
            ))
        }) 
    })

    describe('delete Test specs', () => {
        it("should remove the emp and return it", ()=>{
            //arrange
            const emp = repo.create({ name : "Phaniraj", address : "Bangalore", salary : 40000});
            //act
            const result = repo.delete(emp.id);
            //assert
            expect(result).toEqual(emp);
            expect(repo.employees.length).toBe(0)
        })
        it("Should throw error if no emp is found", ()=>{
            expect(()=>repo.delete(123)).toThrowError("Employee not found to delete")
        })
    });
})