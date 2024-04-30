import ReactDOM from 'react-dom/client';

//functional pattern
// function Heading() {
//     return <h1>Hello!!</h1>
// }
// const Heading = () => {
//     return <h1>Hello!!</h1>
// }
const Heading = () => <h1>Hello!!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

//imperative way
//root.render(Heading())

//declarative way
root.render(<Heading></Heading>)
