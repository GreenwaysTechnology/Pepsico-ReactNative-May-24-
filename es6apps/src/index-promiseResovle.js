//promise factory api : resovle

function blockMe(message) {
    console.log(message)
}
function getMessage() {
    return Promise.resolve('Hello')
}

function main() {
    blockMe('start')
    getMessage().then(msg => console.log(msg))
    blockMe('end')

}
main()