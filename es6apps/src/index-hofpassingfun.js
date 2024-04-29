//passing values to hof

function connect(cb) {
    cb('database')
}
let dbConnect = function (type) {
    console.log(type)
}
connect(dbConnect)
connect(function (type) {
    console.log(type)
})
////
// function login(userName, password, success, failure) {
//     if (userName === 'admin' && password === 'admin') {
//         success('login success')
//     } else {
//         failure('login failed')
//     }

// }
const login = function (userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }

}
login('admin', 'admin', function (status) { console.log(status) }, function (err) { console.log(err) })

login('foo', 'bar', function (status) { console.log(status) }, function (err) { console.log(err) })