import ReactDOM from 'react-dom/client';
import './index.css'
import { POSTS } from './mock-data/posts'

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]
const Grid = (props) => {

    const getKeys = () => {
        return Object.keys(props.data[0]);
    }
    const getHeader = () => {
        let keys = getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    const getRowsData = () => {
        const items = props.data;
        const keys = getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }
    const RenderRow = (props) => {
        return props.keys.map((key, index) => {
            return <td key={props.data[key]}>{props.data[key]}</td>
        })
    }
    return <div>
        <table>
            <thead>
                <tr>{getHeader()}</tr>
            </thead>
            <tbody>
                {getRowsData()}
            </tbody>
        </table>
    </div>
}



const App = () => {
    return <Grid data={POSTS} />
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
