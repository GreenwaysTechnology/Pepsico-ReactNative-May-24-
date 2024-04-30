
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }
// console.log(getStock())

// function getStock(id = 1, symbol = 'google', qty = 1, price = 1000) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock())
// console.log(getStock(2,'Microsoft',33,900))

// function getStock(id = 1, symbol = 'google', qty = 1, price = 1000) {
//     //objectKey:localvariable : if key and localvariable are same, we can remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(2, 'Microsoft', 33, 900))

// const getStock=(id = 1, symbol = 'google', qty = 1, price = 1000) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(2, 'Microsoft', 33, 900))

const getStock = (id = 1, symbol = 'google', qty = 1, price = 1000) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock())
console.log(getStock(2, 'Microsoft', 33, 900))