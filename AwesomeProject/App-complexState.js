import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";

class HouseRating extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        },
    
    }

    render() {
        return <View>
            <Text style={styles.label}>House Rating</Text>
            <Text style={styles.label}>Name: {this.state.house.name} Points : {this.state.house.points}</Text>
            <Button title="Rate" onPress={() => {
                this.setState((state) => {
                    return {
                        ...state,  //level -0 copy
                        house: {
                            ...state.house, // level-1 copy : copy all properties within house 
                            points: state.house.points + 2
                        }
                    }
                })
            }} />

        </View>
    }
}

export default function App() {

    return <>
        <View style={styles.container}>
            <HouseRating />
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