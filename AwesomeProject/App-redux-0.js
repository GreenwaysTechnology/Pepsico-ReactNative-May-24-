import { configureStore } from "@reduxjs/toolkit";
import { produce } from "immer";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";


//step 1: write reducer.
const ReviewReducer = (initalState = { value: 0 }, action) => {
    //write biz logic
    switch (action.type) {
        case 'review/like':
            //immutable logic
            return produce(initalState, draft => {
                draft.value=+ 1
            })
            // return { ...initalState, value: initalState.value + 1 }
        default:
            //it returns inital State
            return initalState
    }

}

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