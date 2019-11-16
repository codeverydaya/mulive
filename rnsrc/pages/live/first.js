/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {  NodePlayerView,NodeCameraView } from 'react-native-nodemediaclient';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(){
        super();
        this.state={
            isPublish:false,
            publishBtnTitle:"Start Publish"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NodeCameraView
                    style={{ height: 400,width:500 }}
                    ref={(vb) => { this.vb = vb }}
                    outputUrl = {"rtmp://192.168.2.102/live/ss"}
                    camera={{ cameraId: 1, cameraFrontMirror: true }}
                    audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
                    video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
                    autopreview={true}
                />

                <Button
                    onPress={() => {
                        if (this.state.isPublish) {
                            this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
                            this.vb.stop();
                        } else {
                            this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
                            this.vb.start();
                        }
                    }}
                    title={this.state.publishBtnTitle}
                    color="#841584"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
