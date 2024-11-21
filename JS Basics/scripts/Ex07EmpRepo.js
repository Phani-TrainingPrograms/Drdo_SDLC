//Enitity Class
class Employee {
    constructor(id, name, address, salary) {
        this.empId = id
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary
    }
}


class EmpRepo{
    empList = [] //Its a array of size 0

    constructor() {
        this.empList = []
        if(window.localStorage.getItem("values") != undefined){
            let records = window.localStorage.getItem("values");
            this.empList = JSON.parse(records);
        }
        //window.localStorage.setItem("values", JSON.stringify(this.empList))
    }
    //addEmployee = (emp) => this.empList.push(emp)
    addEmployee = (emp) => this.empList = [...this.empList, emp]
    
    getAll = () => [...this.empList];

    /*getById(id){
        for(emp of this.empList){
            if(emp.empId == id)
                return emp;
        }
    }*/

    getById = (id) => this.empList.find((emp) => emp.empId == id);

    updateEmp = (emp) =>{
        //use splice method...
        const index = this.empList.findIndex((e) => e.empId == emp.empId);
        if(index < 0){
            alert("No record found to update");
            return;
        }
        this.empList.splice(index, 1, emp);
    }

    deleteEmp = (id) =>{
        const index = this.empList.findIndex(e => e.empId == id);
        this.empList.splice(index, 1);
    }
}