import { View, Text, StyleSheet } from "react-native"

// const Tab = (props) => {
//     return <>
//         {props.children}
//     </>
// }

const Panel = ({ children, title }) => {
    return <>
        <Text>{title}</Text>
        {children}
    </>
}

const Header = () => <><Text>Header</Text></>


export default function App() {
    return <View style={styles.container}>
        {/* <Tab /> */}
        <Panel title="MyPanel">
            <Text style={{ textAlign: 'center' }}>New Tab</Text>
            <Header />
        </Panel>
    </View>
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