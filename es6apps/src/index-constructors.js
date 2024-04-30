//create object using constructors
//using es5 function 

// function Employee(id = 0, name = 'foo') {
//     //instance variables
//     this.id = id 
//     this.name = name
// }
class Employee {
    id
    name
    constructor(id = 1, name = 'foo') {
        this.id = id
        this.name = name
    }
    //instance methods
    calculate() {
        return 10
    }
    calculateSalary = () => {
        return 10
    }
}
//emp is reference variable which points the address of object
//let is keyword
//new is memory allocation operator
//Employee() - constructor call
let emp = new Employee()
console.log(emp.id, emp.name)

emp = new Employee(10, 'Subramanian')
console.log(emp.id, emp.name, emp.calculate(),emp.calculateSalary())