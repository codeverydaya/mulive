/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Easing,Animated} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './bottomTabNavigator';
import MukeVideo from "../pages/mukeVideo";
import HomePage from "../pages/homepage";
import MyQrcode from "../pages/myqrcode";
import Scan from "../pages/scan";
import EditProfile from "../pages/editProfile";
import HeadPicture from "../pages/headPicture";

import MuCamera from "../pages/camera/muCamera";

import App from '../pages/live/App';
import DrawerNavigator from "./drawerNavigator";

const  routeConfigs = {
    DrawerNavigator:{
        screen: DrawerNavigator,
        navigationOptions:{
            header:null
        }
    },
    MukeVideo:{
        screen: MukeVideo,
        navigationOptions: ({ navigation }) => ({
            header:null
        }),
    },

    App:{
        screen: App,
        navigationOptions:{
            header:null
        }
    },
    MuCamera:{
        screen: MuCamera,
        navigationOptions:{
            header:null
        }
    },
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            header:null
        }
    },
    MyQrcode:{
        screen: MyQrcode,
        navigationOptions:{
            header:null
        }
    },
    Scan:{
        screen: Scan,
        navigationOptions:{
            header:null
        }
    },
    EditProfile:{
        screen: EditProfile,
        navigationOptions:{
            header:null
        }
    },
    HeadPicture:{
        screen: HeadPicture,
        navigationOptions:{
            header:null
        }
    },

}


const  stackNavigatorConfig={
    initialRouteName: 'DrawerNavigator',//初始页面
    //initialRouteName: 'HomePage',//初始页面

    //initialRouteName: 'DrawerNavigator',//初始页面
    navigationOptions: {
        gesturesEnabled: false,
    },

    transitionConfig: () => ({
        transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene,navigation} = sceneProps;
            const { route } = scene;
            const params = route.params || {};
            //专场效果，根据modeStyle设置
            const modeStyle = params.modeStyle;
            const {index} = scene;
            const Width = layout.initWidth;
            const height = layout.initHeight;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width - 10)],
            });
            //沿Y轴平移
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            if(modeStyle=="up"){
                return { opacity, transform: [{ translateY }] };
            }else if(modeStyle=="opacity"){
                return {opacity};
            }else{
                return {opacity, transform: [{translateX}]};
            }
        }
    }),

}

const StackNavigator =createStackNavigator(routeConfigs,stackNavigatorConfig);
export  default StackNavigator;

