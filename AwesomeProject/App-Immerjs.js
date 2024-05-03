import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { produce } from "immer";

class Customer extends React.Component {
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }

    }

    render() {
        return <View>
            <Text style={styles.label}>Customer Info</Text>
            <Text style={styles.label}>Name: {this.state.customer.name} Phone No : {this.state.customer.contact.communcation.mobileNo}</Text>
            <Button title="UpdateMobileNo" onPress={() => {
                this.setState((state) => {
                    return produce(state, (draft) => {
                        draft.customer.contact.communcation.mobileNo = '1234567890'
                    })
                })
            }} />

        </View>
    }
}

export default function App() {

    return <>
        <View style={styles.container}>
            <Customer />
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