import { configureStore, createReducer } from "@reduxjs/toolkit";
import { produce } from "immer";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";


const initialState = {
    value: 10,
    dislikevalue: 10
}
const like = 'review/like'
const dislike = 'review/dislike'
//step 1: write reducer.
const ReviewReducer = createReducer(initialState, (builder) => {
    builder.addCase('review/like', (state, action) => {
        //immer js code
        state.value++
    }).addCase('review/dislike', (state, action) => {
        state.dislikevalue++
    }).addDefaultCase((state, action) => { })
})

//step 2: configure/create Store
const store = configureStore({
    reducer: {
        review: ReviewReducer
    }
})

const Review = props => {

    //getState 
    const like = useSelector(state => {
        //appState.reducerName
        return state.review
    })
    const dispatch = useDispatch()

    const onLike = () => {
        console.log('click')
        //action 
        let likeAction = {
            type: 'review/like'
        }
        dispatch(likeAction)
    }
    return <>
        <Text style={styles.label}>Like {like.value}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}

export default function App() {

    //step 4: Bind React with Redux: It must be always root component
    return <Provider store={store}>
        <View style={styles.container}>
            <Review />
        </View>
    </Provider>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#61dafb'
    },
    label: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20
    }
})