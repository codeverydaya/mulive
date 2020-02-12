/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc
 */

import React, {Component} from 'react';
import {Platform, DeviceInfo,StyleSheet, View, DeviceEventEmitter,} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NavigatorUtil from './navigatorUtil';
import MyList from '../pages/mylist'
import Find from '../pages/find'



import Util from "../utils/util";


const routeConfigs =
    {
      MyList: {
            screen: Find,
            navigationOptions: {
                tabBarLabel: '关注',
                tabBarIcon: ({tintColor, focused}) => (
                    <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
                ),
            }
        },
        Teacher: {
            screen: MyList,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({tintColor, focused}) => (
                    <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
                ),
            }
        },

        Expect: {
            screen: MyList,
            navigationOptions: {
                tabBarLabel: '同城',
                tabBarIcon: ({tintColor, focused}) => (
                    <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
                ),
            }
        },

    }

//tabNavigatorConfig
const tabNavigatorConfig =
    {
      initialRouteName: 'MyList',//初始页面
      swipeEnabled: true,
      lazy:true,
      tabBarOptions: {
        scrollEnabled: true,//是否支持 选项卡滚动，默认false
        activeTintColor: '#000',
        inactiveTintColor: '#ccc',
        tabStyle: {
          width:80,

        },
        indicatorStyle: {
          backgroundColor: '#fff',
        },
        labelStyle: {
          fontSize: 16,
          justifyContent: 'flex-end',
        },
        style: {
          height:50+(Util.isPlatform("ios")?15:0)+(DeviceInfo.isIPhoneX_deprecated?10:0),

          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingTop:(Util.isPlatform("ios")?20:0)+(DeviceInfo.isIPhoneX_deprecated?10:0),
          backgroundColor:'#fff'
        },
      },

    }


const MaterialTopTabNavigator = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);


export default MaterialTopTabNavigator


