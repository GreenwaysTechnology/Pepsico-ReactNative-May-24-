import { Video } from 'expo-av';
import { useRef, useState, useEffect } from 'react'
import { Button, View ,StyleSheet } from 'react-native';

function App() {
    const video = useRef(null)
    
    const [status, setStatus] = useState({})

    return <View style={styles.container}>
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View>
            <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={()=>{
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }}/>
        </View>
    </View>

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200
    }
});
export default App;