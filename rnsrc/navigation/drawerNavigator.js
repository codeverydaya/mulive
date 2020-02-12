/**
 * @author lmy
 * @date 2019/03/05 下午12:37
 * @desc
 */
import React, {Component} from 'react';
import {Text, View,TouchableOpacity,ScrollView,Image,ImageBackground,SafeAreaView} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import NavigatorUtil from './navigatorUtil'

import  BottomTabNavigator from './bottomTabNavigator'
import  MaterialTopTabNavigator from './materialTopTabNavigator'
import {NavigationActions,StackActions} from 'react-navigation';
import Util from '../utils/util';

const RouteConfigs = {
    BottomTabNavigator: {
        screen: MaterialTopTabNavigator,
    },

}

const DrawerNavigatorConfig ={
    initialRouteName: 'BottomTabNavigator',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    drawerType:"slide",//front,slide,back
    tabBarPosition:'bottom',
    drawerWidth:Util.getWidth()*0.8,
    //drawerWidth:300,
    contentComponent:(props)=>(
        <SafeAreaView style={{flex:1,backgroundColor: '#fff'}}>
            <View style={{flex:1,backgroundColor: '#fff',justifyContent: 'flex-start',alignItems: 'center'}}>

                {/*头像*/}
                <TouchableOpacity  onPress={()=>{
                  NavigatorUtil.pushPage("HomePage");
                  NavigatorUtil.toggleDrawer();
                }}
                                   style={{height:160*Util.getRate(),width:'100%',justifyContent: 'center',alignItems: 'center'}}  >
                  <View style={{overflow:'hidden',backgroundColor:"red",borderRadius:40*Util.getRate(),height:80*Util.getRate(),width:80*Util.getRate(),justifyContent: 'center', alignItems: 'center'}}   >
                    <Image style={{height:150*Util.getRate(),width:150*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
                    </Image>
                  </View>
                  <Text  style={{marginTop:15*Util.getRate(),fontSize:14*Util.getRate(),}}>天天敲代码</Text>
                </TouchableOpacity>
              {/*动态*/}
              <View style={{flexDirection:'row',width:'80%',height:80,justifyContent: 'center',alignItems: 'center' }}>

                <TouchableOpacity onPress={()=>{}}
                                  style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                    <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                    <Text  style={{fontSize:14*Util.getRate(),marginTop:10}}>动态</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                                  style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{fontSize:14*Util.getRate(),marginTop:10}}>消息</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                                  style={{flex:1,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{fontSize:14*Util.getRate(),marginTop:10}}>私信</Text>
                </TouchableOpacity>
              </View>
              {/*菜单*/}
              <View style={{width:'80%',justifyContent: 'center',alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>{}}
                                  style={{width:'100%',flexDirection:'row' ,height:40*Util.getRate(),justifyContent: 'flex-start',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{marginLeft:10,fontSize:14*Util.getRate()}}>查找</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                                  style={{width:'100%',flexDirection:'row' ,height:40*Util.getRate(),justifyContent: 'flex-start',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{marginLeft:10,fontSize:14*Util.getRate()}}>设置</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}
                                  style={{width:'100%',flexDirection:'row' ,height:40*Util.getRate(),justifyContent: 'flex-start',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{marginLeft:10,fontSize:14*Util.getRate()}}>扫一扫</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                                  style={{width:'100%',flexDirection:'row' ,height:40*Util.getRate(),justifyContent: 'flex-start',alignItems: 'center' }}>
                  <Image style={{height: 22*Util.getRate(),width: 22*Util.getRate() }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
                  <Text  style={{marginLeft:10,fontSize:14*Util.getRate()}}>关于目直播</Text>
                </TouchableOpacity>
              </View>

            </View>

        </SafeAreaView>
    )
}

const DrawerNavigator = createDrawerNavigator(RouteConfigs,DrawerNavigatorConfig);
export default DrawerNavigator;
