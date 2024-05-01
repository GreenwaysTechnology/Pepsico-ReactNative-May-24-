import ReactDOM from 'react-dom/client';

// todo:Place all components into separate folder and files
export const Avatar = ({ imageSrc, height, width }) => <img src={imageSrc} height={height} width={width} />
const Status = ({ status }) => <h2>Status {status ? "Available" : "UnAvailable"}</h2>
const Address = ({ city, state }) => <h2>Address {city} {state}</h2>
const Skills = ({ skills }) => <h3>Skills {skills}</h3>

Avatar.defaultProps = {
    imageSrc: 'https://i.imgur.com/7vQD0fPs.jpg',
    height: 50,
    hight: 50
}


const User = ({ id, name, status, address: { city, state }, imageSrc, skills }) => <div>
    <h1>User information</h1>
    <Avatar imageSrc={imageSrc} height={100} width={100} />
    <h2>Id {id}</h2>
    <h2>name {name}</h2>
    <Status status={status} />
    <Address city={city} state={state} />
    <Skills skills={skills} />
</div>

//default Props
User.defaultProps = {
    id: 0,
    name: 'Your Name',
    status: false,
    address: {
        city: 'Your City',
        state: 'Your State'
    },
    skills: ['skill1', 'skill2', 'skill3'],
    imageSrc: 'https://i.imgur.com/7vQD0fPs.jpg'

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
        <User />

    </>

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
