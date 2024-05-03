import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";

class Review extends React.Component {

    state = {
        like: 0,
        dislike: 0
    }

    render() {
        console.log(this.state)
        return <View>
            <Text style={styles.label}>Review</Text>
            <Text style={styles.label}>Like : {this.state.like} Dislike : {this.state.dislike}</Text>
            <Button title="Like" onPress={() => {
                this.setState((state) => {
                    return { ...state, like: state.like + 1 }
                })
            }} />
            <Button title="Dislike" onPress={() => {
                this.setState((state) => {
                    return { ...state, dislike: state.dislike + 1 }
                })
            }} />
        </View>
    }
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