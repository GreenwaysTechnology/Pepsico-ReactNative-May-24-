import ReactDOM from 'react-dom/client';

//Hai compoent
const Hello = () => <h1>Hello</h1>

const Hai = () => <h1>Hai</h1>

const Greet = () => <h1>Greet</h1>

const Welcome = () => {
    return <>
        <Hello />
        <Hai />
        <Greet />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Welcome />)
