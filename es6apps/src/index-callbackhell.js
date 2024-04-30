
// call getUser=user,login = dashboard
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    // user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'UserNotFound' })
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to My page')
    } else {
        setTimeout(reject, 1000, 'Sorry you are not allowed')
    }
}

function main() {
    getUser(user => {
        console.log(user)
        login(user, status => {
            console.log(status)
            showDashboard(status, page => {
                console.log(page)
            }, err => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()