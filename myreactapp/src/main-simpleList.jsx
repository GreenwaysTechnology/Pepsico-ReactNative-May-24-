import ReactDOM from 'react-dom/client';
import './index.css'

//List: array

const List = ({ data }) => {
    return <>
        <ul>
            {
                data.map(item => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
}


const App = () => {
    const list = ['Subramnaian', 'Ram', 'Karthik', 'Kavitha']
    return <List data={list} />
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
