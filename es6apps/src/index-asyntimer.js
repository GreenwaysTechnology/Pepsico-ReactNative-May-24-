
function blockMe(message) {
    console.log(message)
}
function delay(callback) {
    //setTimeout(callback, 1000,"Subramanian")
    setTimeout(() => {
        callback('Subramanian')
    }, 1000)
}

blockMe('start')
delay(function (name) {
    console.log('hello', name)
})
blockMe('end')