/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 编辑个人资料
 */


import React, {Component} from 'react';
import {
  Platform, Image, PanResponder, StyleSheet, Button,
  Text, View, TouchableOpacity, NativeModules,
} from 'react-native';
import Util from '../utils/util';
import NavigatorUtil from '../navigation/navigatorUtil';
import Head from '../components/common/head';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', backgroundColor: '#f5f5f5'}}>
        <Head title="编辑个人资料"></Head>

        <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("HeadPicture")}}
                           style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',width:'96%',height:50,borderBottomWidth:0.5,borderBottomColor:'#ccc',paddingRight:10}}>
          <View style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'flex-start' }}>
            <Text  style={{fontSize:16*Util.getRate()}}>头像</Text>
          </View>
          <View style={{flexDirection:'row',width:100,height:'100%',justifyContent: 'flex-end',alignItems: 'center' }}>

            <View style={{overflow:'hidden',backgroundColor:"red",borderRadius:50*Util.getRate(),borderColor:'#fff',borderWidth:2,height:35*Util.getRate(),width:35*Util.getRate(),justifyContent: 'center', alignItems: 'center'}}   >
              <Image style={{height:50*Util.getRate(),width:50*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
              </Image>
            </View>
            <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'right'}} resizeMode="stretch"/>

          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
