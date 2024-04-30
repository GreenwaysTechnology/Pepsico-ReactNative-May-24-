import ReactDOM from 'react-dom/client';
import React from 'react';

const Heading = () => {

    return <div>
        <h1>Google</h1>
        <h2>Welcome</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Heading></Heading>)
root.render(<Heading />)
