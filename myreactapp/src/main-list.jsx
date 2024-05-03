import ReactDOM from 'react-dom/client';
import './index.css'
import { POSTS } from './mock-data/posts'

//List: array

const Posts = ({ posts }) => {
    return <>
        <ul>
            {
                posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </>
}


const App = () => {
    return <Posts posts={POSTS} />
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
