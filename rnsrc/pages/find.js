/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc
 */


import React, {Component} from 'react';
import {Platform, Image, PanResponder, StyleSheet, Button,Text, View,TouchableOpacity, NativeModules} from 'react-native';
import Util from '../utils/util';
//import DataBase from '../database/realm';
import ViewShot, { captureScreen, captureRef } from "react-native-view-shot";

export  default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: null,
      uri:null
    };
  }

  componentWillMount() {
    // DataBase.writeCar();
    // let count = DataBase.countCar();
    // this.setState({
    //   realm:count
    // })
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm
      : 'Loading...';

    return (
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center',}}>
        <Text >
          {info}
        </Text>
        <View ref='location' style={{width:'100%',height:150,borderRadius:35,backgroundColor:'#fff',justifyContent: 'center',alignItems: 'center'}}>

          <Image style={{height:'100%',width:'100%' }}
                 source={{uri:'http://www.xiaoyoucai.com/source/images/jfapp/images/bd_list_an_n.png' }}resizeMode="stretch"/>

        </View>
        <Button
          onPress={() => {
            captureRef(this.refs.location, {
                format: "jpg",
                 quality: 0.8,
                 result: "tmpfile",
                snapshotContentContainer: false
             })
            .then(
              uri => this.setState({
                uri:uri
              }),
                error => console.error("Oops, snapshot failed", error)
             );
          }}
          title={"click"}
          color="#841584"
        />

        {
          this.state.uri?
            <Image style={{height: 70*Util.getRate(),width:70*Util.getRate() }}  source={{uri: this.state.uri}}resizeMode="stretch"/>
      :null
        }

      </View>
    );
  }
};
