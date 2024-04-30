import ReactDOM from 'react-dom/client';
// import React, { Fragment } from 'react';

const Heading = () => {

    // return <React.Fragment>
    //     <h1>Google</h1>
    //     <h2>Welcome</h2>
    // </React.Fragment>
    // return <Fragment>
    //     <h1>Google</h1>
    //     <h2>Welcome</h2>
    // </Fragment>
    return <>
        <h1>Google</h1>
        <h2>Welcome</h2>
    </>

}

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Heading></Heading>)
root.render(<Heading />)
