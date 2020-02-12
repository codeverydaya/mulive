'use strict';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, ImageBackground} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Util from "../../utils/util";
import NavigatorUtil from '../../navigation/navigatorUtil';

export default class MuCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlashOn: false,        //闪光灯
      isRecording: false,      //是否在录像
    };
  }

  //切换闪光灯
  toggleFlash() {
    this.setState({isFlashOn: !this.state.isFlashOn});
  }

  isFlashOn() {
    if (this.state.isFlashOn === false) {
      return (
        <TouchableOpacity onPress={() => {
          this.toggleFlash();
        }}>
          <Text style={{fontSize: 30, color: 'black'}}>&#xe633;</Text>
        </TouchableOpacity>

      );
    } else {
      return (
        <TouchableOpacity onPress={() => {
          this.toggleFlash();
        }}>
          <Text style={{fontSize: 30, color: 'white'}}>&#xe633;</Text>
        </TouchableOpacity>

      );
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.isFlashOn === true ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
        </RNCamera>

        <View  style={{justifyContent: 'center', alignItems: 'center',position:'absolute',top:0,left:0,backgroundColor:'rgba(0,0,0,0)',width:'100%',height:'100%'}}>

            <View  style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center',position:'absolute',top:0,left:0,backgroundColor:'rgba(0,0,0,0)',width:'100%',height:80}}>

              <TouchableOpacity onPress={()=>{NavigatorUtil.goBack()}}
                                style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                <Image style={{height: 20*Util.getRate(),width: 20*Util.getRate() }}  source={{uri:'close'}}resizeMode="stretch"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}}
                                style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                <Image style={{height: 30*Util.getRate(),width: 30*Util.getRate() }}  source={{uri:'flash'}}resizeMode="stretch"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}}
                                style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                <Image style={{height: 30*Util.getRate(),width:30*Util.getRate() }}  source={{uri:'camera'}}resizeMode="stretch"/>
              </TouchableOpacity>
            </View>
          <View  style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center',position:'absolute',bottom:60,left:0,backgroundColor:'rgba(0,0,0,0)',width:'100%',height:80}}>

            <TouchableOpacity onPress={()=>{}}
                              style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>

              <View style={{width:70,height:70,borderRadius:35,backgroundColor:'#fff',justifyContent: 'center',alignItems: 'center'}}>
                <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#555',justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width:56,height:56,borderRadius:28,backgroundColor:'red',justifyContent: 'center',alignItems: 'center'}}>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          </View>
          <View  style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center',position:'absolute',bottom:0,left:0,backgroundColor:'rgba(0,0,0,0)',width:'100%',height:60}}>
            <TouchableOpacity onPress={()=>{}}
                              style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>

              <Image style={{height: 30*Util.getRate(),width:30*Util.getRate() }}  source={{uri:'camera'}}resizeMode="stretch"/>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }

  recordBtn(camera) {
    if (this.state.isRecording === false) {
      return (
        <TouchableOpacity onPress={() => this.takeRecord(camera)} style={styles.capture}>
          <Text style={{fontSize: 14}}> 摄像 </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.stopRecord(camera)} style={styles.capture}>
          <Text style={{fontSize: 14}}> 停止 </Text>
        </TouchableOpacity>
      );
    }
  }

  //开始录像
  takeRecord = async function(camera) {
    this.setState({isRecording: true});
    const options = {quality: RNCamera.Constants.VideoQuality['480p'], maxFileSize: (100 * 1024 * 1024)};
    const data = await camera.recordAsync(options);
    //alert(data.uri);
    NavigatorUtil.navigate('MukeVideo', {videoData: {title:"录像",addr:data.uri}});
  };

  //停止录像
  stopRecord(camera) {
    this.setState({isRecording: false});
    camera.stopRecording();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
