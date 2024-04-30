//promise factory api : resovle

function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('something went wrong')
    }
}

function main() {
    blockMe('start')
    login('xx', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')

}
main()