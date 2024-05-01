import ReactDOM from 'react-dom/client';
//User Component
const User = () => {
    //data 
    const id = 1
    const name = 'Subramanian'
    const status = false
    const address = {
        city: 'coimbatore',
        state: 'TN'
    }
    const skills = ['React', 'Javascript', 'Java']
    const imageSrc='https://i.imgur.com/7vQD0fPs.jpg'

    return <div>
        <h1>User information</h1>
        <img src={imageSrc} height={50} width={50} />
        <h2>Id {id}</h2>
        <h2>name {name}</h2>
        <h2>Status {status ? "Available" : "UnAvailable"}</h2>
        <h2>Address {address.city} {address.state}</h2>
        <h3>Skills {skills}</h3>
    </div>
}

const App = () => {
    return <>
        <User />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
