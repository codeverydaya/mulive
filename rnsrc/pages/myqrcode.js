/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 我的二维码
 */


import React, {Component} from 'react';
import {Platform, Image, PanResponder, StyleSheet, Button,
  Text, View,TouchableOpacity, NativeModules} from 'react-native';
import Util from '../utils/util';
import Head from '../components/common/head';
import NavigatorUtil from '../navigation/navigatorUtil'
import QRCode from 'react-native-qrcode-svg';
export  default class MyQrcode extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }

  render() {
    return (
      <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'#f5f5f5'}}>
        <Head title="我的二维码"></Head>



        <View style={{justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'#fff',width:'90%',height:400,marginTop:60}}>

          <View style={{marginTop:-50,height:100,width:120,justifyContent: 'center',alignItems: 'center'}}  >
            <View style={{overflow:'hidden',backgroundColor:"red",borderRadius:50*Util.getRate(),borderColor:'#fff',borderWidth:2,height:70*Util.getRate(),width:70*Util.getRate(),justifyContent: 'center', alignItems: 'center'}}   >
              <Image style={{height:140*Util.getRate(),width:140*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
              </Image>
            </View>
          </View>
          <Text  style={{fontSize:14*Util.getRate(),marginTop:0,color:'#000'}}>天天敲代码</Text>

          <Text  style={{fontSize:12*Util.getRate(),marginTop:5,color:'#888',marginBottom:20}}>平台id:000000001</Text>

          <QRCode
            logo={{uri: 'logo'}}
            logoSize={30}
            value="12321"
            size={Util.getWidth()*0.5}
          />
          <Text  style={{fontSize:12*Util.getRate(),marginTop:15,color:'#888'}}>使用扫一扫，关注我把</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',width:'90%',height:100,marginTop:30}}>
          <TouchableOpacity onPress={()=>{NavigatorUtil.pushPage("Scan")}}
                            style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
            <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'scan'}} resizeMode="stretch"/>

            <Text  style={{fontSize:12*Util.getRate(),marginTop:10}}>扫一扫</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}
                            style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
            <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'download'}} resizeMode="stretch"/>

            <Text  style={{fontSize:12*Util.getRate(),marginTop:10}}>保存到相册</Text>
          </TouchableOpacity>
        </View>

        </View>
    );
  }
};
