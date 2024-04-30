import ReactDOM from 'react-dom/client';

//create VDOM element
const Heading = <h1>Hello!!</h1>


// const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
//Flush the vDOM into real DOM
root.render(Heading)