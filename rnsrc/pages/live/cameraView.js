/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,Dimensions,
    TouchableOpacity,FlatList,Animated,Image,Easing,Keyboard} from 'react-native';
import {  NodePlayerView,NodeCameraView } from 'react-native-nodemediaclient';
import Heart from './heart';
import io from "socket.io-client";
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class CameraView extends Component {
    constructor(){
        super();
        this.paiHangAnimate = this.paiHangAnimate.bind(this);
        this.state={
            isPublish:false,
            publishBtnTitle:"Start Publish",
            data:[],
            list:[],
            ptop:new Animated.Value(Dimensions.get('window').height+100),
            ptopState:0,
            paiHangHeight:350

        }
        for(let i=0;i<20;i++){
            let item ={
                name:'ing',
                data: i+'你好----'+i
            }
            item.key=""+i;
            this.state.data.push(item);
        }


    }
    render() {
        console.log("---------")
        return (
            <View style={styles.container}>


                <NodePlayerView
                    style={{  height: Dimensions.get('window').height,width:Dimensions.get('window').width }}
                    ref={(vp) => { this.vp = vp }}
                    inputUrl={"rtmp://192.168.1.6/live/ss"}
                    scaleMode={"ScaleAspectFit"}
                    bufferTime={300}
                    maxBufferTime={1000}
                    autoplay={true}
                />
                {/*
          <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#444',
            height:Dimensions.get('window').height,width:Dimensions.get('window').width,}} >
          </View>
          */}


                <View style={{position:'absolute',top:0,left:0,justifyContent: 'center', alignItems: 'center',
                    height:Dimensions.get('window').height,width:Dimensions.get('window').width,}} >

                    <TouchableOpacity   onPress={ () =>  this.vb.switchCamera()}
                                        style={{position:'absolute',left:0,top:150,borderColor:'#e8e9ea', borderWidth:0,backgroundColor:"#35b082",flexDirection:'row',
                                            width:125,height:43,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color:'#fff',fontSize:16,}}>切换摄像头</Text>
                    </TouchableOpacity>

                    <View style={{position:'absolute',left:0,top:0,backgroundColor:'rgba(255,255,255,0)',justifyContent: 'flex-start', alignItems: 'flex-start',
                        height:60,width:Dimensions.get('window').width,}} >

                        <View style={{flexDirection:'row',position:'absolute',right:0,bottom:0,backgroundColor:'rgba(255,255,255,0)',
                            justifyContent: 'space-between', alignItems: 'center',
                            height:40,width:Dimensions.get('window').width,}} >

                            <View style={{flexDirection:'row',height:40,width:200,backgroundColor:'rgba(255,255,255,0)'}}>

                                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:40,width:50,backgroundColor:'rgba(0,0,0,0)'}}>

                                    <Image source={{uri:'touv'}}
                                           style={{height:40,width:40,borderRadius:20}} resizeMode="contain"></Image>

                                </TouchableOpacity>
                                <View style={{height:40,width:80,backgroundColor:'rgba(255,255,255,0)'}}>

                                    <View style={{flexDirection:'row',height:20,width:'100%',backgroundColor:'rgba(255,255,255,0)'}}>

                                        <Text  numberOfLines={1}  style={{color:'#fff',fontSize:14,lineHeight:20,width:'100%'}}>
                                            哈哈,小可爱
                                        </Text>

                                    </View>


                                    <View style={{flexDirection:'row',height:20,width:'100%',backgroundColor:'rgba(255,255,255,0)'}}>

                                        <Text  style={{color:'#ccc',fontSize:12,lineHeight:20,width:'100%'}}>
                                            13.4万 粉丝
                                        </Text>

                                    </View>
                                </View>

                            </View>
                            <View style={{flexDirection:'row',height:40,width:150,backgroundColor:'rgba(255,255,255,0)'}}>

                                <TouchableOpacity onPress={()=>this.paiHangAnimate()} style={{flexDirection:'row',height:40,width:'70%',backgroundColor:'rgba(0,0,0,0)',overflow:'hidden'}}>
                                    <Image source={{uri:'tou2'}}
                                           style={{height:40,width:40,borderRadius:20,zIndex:10}} resizeMode="contain"></Image>

                                    <Image source={{uri:'tou3'}}
                                           style={{height:40,width:40,borderRadius:20,marginLeft:-12,zIndex:9}} resizeMode="contain"></Image>

                                    <Image source={{uri:'tou4'}}
                                           style={{height:40,width:40,borderRadius:20,marginLeft:-12,zIndex:8}} resizeMode="contain"></Image>

                                </TouchableOpacity>
                                <View style={{flexDirection:'row',height:40,width:'30%',backgroundColor:'rgba(255,255,255,0)'}}>
                                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:40,width:'100%',backgroundColor:'rgba(0,0,0,0)'}}>


                                        <Image source={{uri:'close'}}
                                               style={{height:18,width:18,}} resizeMode="contain"></Image>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{position:'absolute',bottom:0,right:0,backgroundColor:'rgba(255,255,255,0)',justifyContent: 'flex-start', alignItems: 'flex-start',
                        height:200,width:Dimensions.get('window').width,}} >


                        <FlatList   ref={(flist) => { this.flist = flist }}
                                    style={{height:160,width:'100%'}}
                                    data={this.state.data}
                                    renderItem={({item,index}) =>
                                        <View   style={{backgroundColor:'rgba(255,255,255,0)',width:'70%',paddingLeft:5}}>
                                            <Animated.Text onLongPress={()=>alert(9)}  style={{color:'yellow',fontSize:18,lineHeight:28}}>{item.name}:
                                                <Animated.Text style={{color:'#fff',fontSize:18}}> {item.data}</Animated.Text>
                                            </Animated.Text>
                                        </View>

                                    }
                        />
                        <View style={{height:45,width:'100%',flexDirection:'row'}}>
                            <View style={{height:40,width:'70%',justifyContent: 'center', alignItems: 'flex-start'}}>

                                <View style={{height:40,width:'90%',justifyContent: 'center', alignItems: 'center',
                                    color:'#fff',Left: 5,marginLeft:10, borderRadius:20,backgroundColor:'rgba(0,0,0,0.4)'}}>
                                    <TextInput underlineColorAndroid='transparent' placeholderTextColor="#fff"
                                               style={{height:40,width:'85%',color:'#fff',fontSize:16}}
                                               placeholder='说点什么...'
                                               onChangeText={(text) => this.setState({userName:text})}
                                    />
                                </View>

                            </View>
                            <View style={{height:40,width:'30%',justifyContent: 'flex-start', alignItems: 'center',flexDirection:'row'}}>

                                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',borderRadius:20,height:40,width:40,backgroundColor:'rgba(0,0,0,0.4)'}}>
                                    <Image source={{uri:'sharebtn'}}
                                           style={{height:22,width:22}} resizeMode="contain"></Image>

                                </TouchableOpacity>

                                <Heart/>

                            </View>
                        </View>
                    </View>
                </View>


                <Animated.View style={{position:'absolute',top:this.state.ptop,left:0,justifyContent: 'center', alignItems: 'center',
                    height:this.state.paiHangHeight,width:Dimensions.get('window').width,backgroundColor:'#fff',zIndex:200}} >

                    <View style={{height:40,width:'100%',justifyContent: 'center', alignItems: 'center',borderBottomColor:'#eee',borderBottomWidth:1}}>
                        <Text  style={{color:'#000',fontSize:15,lineHeight:20,}}>
                            在线观众
                        </Text>
                    </View>
                    <FlatList   ref={(plist) => { this.plist = plist }}
                                style={{height:350,width:'100%'}}
                                data={this.state.data}
                                ListFooterComponent={() =>
                                    <View   style={{width:'100%',height:60,justifyContent: 'center', alignItems: 'center'}}>

                                        <Text style={{color:'#999',fontSize:12}}> 最多支持查看100人</Text>
                                    </View>}
                                renderItem={({item,index}) =>
                                    <View   style={{flexDirection:'row',backgroundColor:'rgba(255,255,255,0)',width:'100%',height:50}}>
                                        <View   style={{width:'15%',height:"100%",justifyContent: 'center', alignItems: 'center'}}>

                                            <Image source={{uri:'tou'+(index%3+2)}}
                                                   style={{height:40,width:40,borderRadius:20,zIndex:10}} resizeMode="contain"></Image>

                                        </View>
                                        <View   style={{flexDirection:'row',backgroundColor:'rgba(255,255,255,0)',borderBottomColor:'#eee',borderBottomWidth:1,width:'85%',height:"100%",
                                            justifyContent: 'space-between', alignItems: 'center',}}>

                                            <View   style={{  height:"100%",justifyContent: 'center', alignItems: 'center'}}>
                                                <Text style={{color:'#000',fontSize:15}}> {item.name+index}</Text>
                                            </View>
                                            <View   style={{  height:"100%",justifyContent: 'center', alignItems: 'center',paddingRight:10}}>

                                                <Text style={{color:'#999',fontSize:12}}> 粉丝 2 | 作品 5</Text>
                                            </View>

                                        </View>

                                    </View>

                                }
                    />
                </Animated.View>

            </View>
        );
    }


    paiHangAnimate(){
        let that = this;
        let ptopState =  that.state.ptopState ;
        if(that.state.ptopState == 1){
            return;
        }
        that.state.ptopState = 1;
        if(ptopState == 0){
            Animated.timing(
                that.state.ptop,
                {
                    toValue: Dimensions.get('window').height-this.state.paiHangHeight,
                    easing: Easing.linear,
                    duration: 200,
                }
            ).start(()=>{
                that.state.ptopState = 2;
            });
        }

        if(ptopState == 2){
            Animated.sequence([

                Animated.timing(
                    that.state.ptop,
                    {
                        toValue: Dimensions.get('window').height+100,
                        easing: Easing.linear,
                        duration: 200,
                    }
                )
            ]).start(()=>{
                that.state.ptopState = 0;
            });
        }

    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.flist.scrollToEnd()
        },1000);
        let socket = io('http://192.168.1.6:8080/socket.io');
        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });

        socket.on('connect', function(){
            //alert(3)
        });
        socket.on('event', function(data){
        });
        socket.on('disconnect', function(){
        });


        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e)=>{
            console.log('------'+e.startCoordinates.height);
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e)=>{
        });
    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.vp.stop();
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
