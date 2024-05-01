import ReactDOM from 'react-dom/client';
// import './App.css'
import './index.css'

const User = (props) => {
    // const { id, name, status, address, skills, imageSrc } = props
    return <div>
        {/* <UserDetails id={id} name={name} status={status} address={address} skills={skills} imageSrc={imageSrc} /> */}
        {/* Using spread Operator(...) ES6 operator to merge object keys into one */}
        {/* {id:,name:,title:''} */}
        <UserDetails {...props} title="User Details" />
    </div>
}
const UserDetails = props => {
    return <>
        <h1 className="center">{props.title}</h1>
        <img src={props.imageSrc} height={50} width={50} />
        <h2 style={styles.lable}>Id {props.id}</h2>
        <h2>name {props.name}</h2>
        <h2 style={{ color: 'brown' }}>Status {props.status ? "Available" : "UnAvailable"}</h2>
        <h2>Address {props.address.city} {props.address.state}</h2>
        <h3>Skills {props.skills}</h3>
    </>
}
//style 
const styles = {
    lable: {
        color: 'blue',
        fontFamily: 'Charcoal'
    }
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
        <User id={id} name={name} status={status} address={address} skills={skills} imageSrc={imageSrc} />

    </>

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
