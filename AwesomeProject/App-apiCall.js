import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { produce } from "immer";

class Posts extends React.Component {
    state = {
        posts: [], //data
        error: null,
        isLoading: false
    }
    async componentDidMount() {
        console.log('posts is called')
        //api call 
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const data = await response.json()
            //   console.log('data',data)
            this.setState(previousState => {
                return produce(previousState, draft => {
                    draft.posts = data
                    draft.isLoading = true
                    draft.error = previousState.error
                })
            })
        }
        catch (err) {
            console.log(err)
            this.setState(previousState => {
                return produce(previousState, draft => {
                    draft.error = err
                })
            })
        }
    }
    render() {
        //how to display different ui based on condition: if data available,show data screen,
        //if error is available show error screen, if data is loading(taking time),show progress bar
        //conditional Rendering
        const { posts, isLoading, error } = this.state;

        if (error) {
            return <View style={{ marginLeft: 50 }}>
                <Text>Error : {post.error.message}</Text>
            </View>
        } else if (!isLoading) {
            return <Text style={{ textAlign: 'center' }}>🛴</Text>
        } else {
            return <View style={{ marginLeft: 50, marginTop: 50 }}>
                <View>
                    {posts.map(post => {
                        console.log(post)
                        return <Text key={post.id}>{post.title}</Text>
                    })}
                </View>
            </View>
        }
    }
}



export default function App() {
    return <>
        <View style={styles.container}>
            <Posts />
        </View>
    </>
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