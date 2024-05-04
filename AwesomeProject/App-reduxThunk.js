import { configureStore, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Alert, Button, StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import { useEffect } from 'react';


//middleware + api call.
//initalState
const initialState = {
    enities: [],
    loading: false
}
//posts/getPosts/pending or /posts/getPosts/fullfiled

const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.enities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
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
    if (loading) return <View style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
    return <FlatList
        data={enities}
        renderItem={({ item }) => {
            return <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 25 }}>
                {item.title}
            </Text >
        }}
    />

}
export default function App() {
    return <Provider store={store}>
        <View style={styles.container}>
            <Posts />
        </View>
    </Provider>
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
