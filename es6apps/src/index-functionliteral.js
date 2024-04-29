
//way 1
function sayHello() {
    return 'Hello'
}
console.log(sayHello())

//fp : function can be assigned to a variable
let hello = sayHello

console.log(hello())

//way 2
 //anonymous function: function without name
let hai = function () {
  return 'Hai'
}
console.log(hai())


