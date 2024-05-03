import { Button, StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { produce } from "immer";

const Posts = props => {
    const [post, setPost] = useState({
        posts: [], //data
        error: null,
        isLoading: false
    })
    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            console.log(posts)
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = previousState.error
                })
            })
        }
        catch (err) {
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.error = err
                })
            })
        }
    }
    //componentDidMount
    useEffect(() => {
        fetchPosts()
    }, [])

    if (post.error) {
        return <View style={{ marginLeft: 50 }}>
            <Text>Error : {post.error.message}</Text>
        </View>
    } else if (!post.isLoading) {
        return <Text style={{ textAlign: 'center' }}>Loading...</Text>
    } else {
        return <View style={{ marginLeft: 50 }}>
            <FlatList
                data={post.posts}
                renderItem={({ item: { title } }) => {
                    return <Text>{title}</Text>
                }}
            />
        </View>
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