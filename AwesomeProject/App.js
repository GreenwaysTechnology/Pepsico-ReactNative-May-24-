import { configureStore, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Alert, Button, StyleSheet, Text, View } from "react-native";


//middleware + api call.

const initialState = {
    enities: [],
    loading: false,
    error: null
}
//posts/getPosts/pending or /posts/getPosts/fullfiled
//thunk middleware function where all api calls will go
const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}, //custom biz logic will go inside reducers
    extraReducers(builder) { // will have api calls/middleware action types
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.enities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
            state.error = "something went wrong"
        })
    }
})

const postReducer = postSlice.reducer


const store = configureStore({
    reducer: {
        posts: postReducer
    },
})

const Posts = (props) => {
    const dispatch = useDispatch()
    const { enities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return <>

    </>

}
export default function App() {
    return <>
        <View style={styles.container}>
            <Posts />
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#61dafb'
    },
    label: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20
    }
})
