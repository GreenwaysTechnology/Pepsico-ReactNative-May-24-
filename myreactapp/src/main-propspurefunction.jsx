import ReactDOM from 'react-dom/client';

const User = (props) => {
    props.name = 'hello'
    return <div>
        <h1>User information</h1>
        <img src={props.imageSrc} height={50} width={50} />
        <h2>Id {props.id}</h2>
        <h2>name {props.name}</h2>
        <h2>Status {props.status ? "Available" : "UnAvailable"}</h2>
        <h2>Address {props.address.city} {props.address.state}</h2>
        <h3>Skills {props.skills}</h3>
    </div>
}


const App = () => {

    const id = 1
    const name = 'Subramanian'
    const status = false
    const address = {
        city: 'coimbatore',
        state: 'TN'
    }
    const skills = ['React', 'Javascript', 'Java']
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'

    return <>
        {/* {User(id, name, status, address, skills, imageSrc)} */}
        <User id={id} name={name} status={status} address={address} skills={skills} imageSrc={imageSrc} />
        <User id={10} name='Ram' status={true} address={{ city: 'Hyd', state: 'TS' }} skills={skills} imageSrc={imageSrc} />
        <User id={34} name={'karthik'} status={false} address={{ city: 'BNG', state: 'KA' }} skills={skills} imageSrc={imageSrc} />

    </>

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
