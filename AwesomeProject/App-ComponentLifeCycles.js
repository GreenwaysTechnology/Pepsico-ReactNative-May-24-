import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { produce } from "immer";

class Review extends React.Component {

    state = {
        like: 10
    }
    constructor() {
        super()
        console.log('constructor is called')
    }
    onLike = () => {
        this.setState(previousState => {
            return produce(previousState, (draft) => {
                draft.like += 1
            })
        })
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')

    }
    render() {
        console.log('render is called')
        return <View>
            {/* <ReviewDisplay like={this.state.like} /> */}
            <ReviewDisplay {...this.state} onLike={this.onLike} />
        </View>
    }
}

const ReviewDisplay = props => {
    return <>
        <Text style={styles.label}>Like : {props.like}</Text>
        <Button title="Like" onPress={props.onLike} />
    </>
}

export default function App() {
    return <>
        <View style={styles.container}>
            <Review />
        </View>
    </>
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