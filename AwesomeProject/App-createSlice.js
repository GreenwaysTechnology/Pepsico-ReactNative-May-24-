import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";


const reviewSlice = createSlice({
    initialState: {
        value: 10,
    },
    name: 'review',
    reducers: {
        //apis
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    }
})
//extract reducer, extract  action
//extract reducers,actions from the slice
const ReviewReducer = reviewSlice.reducer
const { increment, decrement, incrementBy } = reviewSlice.actions

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
        dispatch(increment())
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