
async function getValue() {
    return 10 // Promise.resolve(10)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('something went wrong')
    }
}

async function main() {
    let value = await getValue()
    console.log(value)
    //  getValue().then(value => console.log(value))

    try {
        const result = await login('xx', 'admin')
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
main()