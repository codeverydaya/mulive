/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc
 */


import React, {Component} from 'react';
import {
  Platform, Image,ImageBackground, PanResponder, StyleSheet, Button,
  Text, View, TouchableOpacity, NativeModules,
} from 'react-native';
import Util from '../utils/util';
import NavigatorUtil from '../navigation/navigatorUtil';
import Head from '../components/common/head';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', backgroundColor: '#f5f5f5'}}>
        <Head title="Template"></Head>

        <Text>Template</Text>
      </View>
    );
  }
};
