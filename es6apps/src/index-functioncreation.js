//create object using constructors

//using es5 function 

function Employee(id = 0, name = 'foo') {
    //instance variables
    this.id = id 
    this.name = name
}
//emp is reference variable which points the address of object
//let is keyword
//new is memory allocation operator
//Employee() - constructor call
let emp = new Employee()
console.log(emp.id, emp.name)

emp = new Employee(10, 'Subramanian')
console.log(emp.id, emp.name)