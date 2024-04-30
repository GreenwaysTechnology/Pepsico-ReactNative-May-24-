// function printEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`Name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }
// function printEmployee(employee) {
//     const { id, name, address } = employee
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// function printEmployee(employee) {
//     const { id, name, address: { city } } = employee
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
// function printEmployee({ id, name, address: city }) {
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
const printEmployee = ({ id, name, address: city }) => {
    console.log(`id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`City : ${city}`)
}


printEmployee({ id: 1, name: 'subramnaian', address: { city: 'coimbatore' } })