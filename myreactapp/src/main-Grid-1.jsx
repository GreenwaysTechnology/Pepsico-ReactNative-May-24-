import ReactDOM from 'react-dom/client';
import './index.css'
import { POSTS } from './mock-data/posts'

//List: array

const Grid = () => <div>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
</div>



const App = () => {
    return <Grid />
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
