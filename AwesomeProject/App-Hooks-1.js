import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { produce } from "immer";

const Review = props => {
    //state : useState
    const [like, setLike] = useState({ value: 10 })

    const onLike = () => {
        setLike(state => {
            return produce(state, (draft) => {
                draft.value += 1
            })
        })
    }
    return <>
        <Text style={styles.label}>Like {like.value}</Text>
        <Button title="Like" onPress={onLike} />
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
        backgroundColor: 'pink'
    },
    label: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20
    }
})