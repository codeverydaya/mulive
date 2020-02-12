/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 个人主页
 */


import React, {Component} from 'react';
import {Platform, UIManager,FlatList,RefreshControl,Image,ImageBackground, PanResponder, StyleSheet, Button,Text, View,
  TouchableOpacity, NativeModules,DeviceInfo} from 'react-native';
import Util from '../utils/util';
import NavigatorUtil from '../navigation/navigatorUtil';
import VideoData from "../mockdata/videodata";
export  default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      scrollY:0,
      data:[],
    }
  }
  componentDidMount(){
  }

  mKeyExtractor = (item, index) => index;
  renderItem= ({item})=>{
    const {navigator} = this.props;
    if(item==1)
    return (
      <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'#f8f8f8'}}>

        <View style={{backgroundColor:'rgba(0,0,0,0)',height:150*Util.getRate(),width:'100%'}}>
          <ImageBackground style={{height:180*Util.getRate(),width:'100%',justifyContent: 'flex-start', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/app/homeheader.jpg"}} resizeMode="stretch"  >
            <View style={{backgroundColor:'rgba(0,0,0,0)',width:'100%',paddingTop:(Util.stateHeight("ios",20,0)+(DeviceInfo.isIPhoneX_deprecated?15:0))}}>
              <View style={[{height:40*Util.getRate(),backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent: 'center',alignItems: 'center'}]} >
                <TouchableOpacity style={{position:'absolute',left:10,backgroundColor:'rgba(0,0,0,0.5)',flexDirection:'row',borderRadius:16*Util.getRate(),height:32*Util.getRate(),width:32*Util.getRate(),justifyContent: 'center',alignItems: 'center'}}
                                  onPress={()=>{NavigatorUtil.goBack()}}>
                  <Image style={{height:18*Util.getRate(),width:18*Util.getRate()}} source={{uri:'leftwhite'}} resizeMode="stretch">
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{flexDirection:'row',justifyContent: 'flex-start', alignItems: 'flex-end',backgroundColor:'rgba(0,0,0,0)',height:120*Util.getRate(),width:'94%'}}>
          <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("EditProfile");}}
                             style={{height:'100%',width:120,justifyContent: 'center',alignItems: 'center'}}  >
            <View style={{overflow:'hidden',backgroundColor:"red",borderRadius:50*Util.getRate(),borderColor:'#fff',borderWidth:2,height:90*Util.getRate(),width:90*Util.getRate(),justifyContent: 'center', alignItems: 'center'}}   >
              <Image style={{height:140*Util.getRate(),width:140*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
              </Image>
            </View>
          </TouchableOpacity>

          <View style={{justifyContent: 'flex-end', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:120*Util.getRate(),flex:1}}>

            <View style={{flexDirection:'row',justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:30*Util.getRate(),width:'100%'}}>
              <Text  style={{fontSize:18*Util.getRate()}}>30
                <Text  style={{fontSize:12*Util.getRate()}}>&nbsp;粉丝</Text>
              </Text>
              <Text  style={{fontSize:18*Util.getRate(),marginLeft:10}}>64
                <Text  style={{fontSize:12*Util.getRate(),color:'#888'}}>&nbsp;关注</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:30*Util.getRate(),width:'100%'}}>

              <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("HomePage");}}
                                 style={{flexDirection:'row',height:25,width:120,justifyContent: 'center',alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}  >
                <Image style={{height:16*Util.getRate(),width:16*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:'edit'}} resizeMode="contain"  >
                </Image>
                <Text  style={{fontSize:12*Util.getRate(),marginLeft:5}}>编辑资料</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("MyQrcode");}}
                                 style={{height:25,width:25,justifyContent: 'center',alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}  >

                <Image style={{height:20*Util.getRate(),width:20*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:'erweima'}} resizeMode="contain"  >
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    )

    if(item==2){
      return (
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:'#f8f8f8'}}>
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:'f8f8f8',height:100*Util.getRate(),width:'94%'}}>
            <Text  style={{fontSize:18*Util.getRate(),lineHeight:22}}>天天敲代码</Text>
            <Text  style={{fontSize:12*Util.getRate(),lineHeight:20}}>全栈工程师</Text>
            <Text  style={{fontSize:12*Util.getRate(),lineHeight:20}}>热爱技术，分享技术</Text>
            <Text  style={{fontSize:12*Util.getRate(),lineHeight:20}}>男  29岁 摩羯座 北京 朝阳区</Text>
          </View>
        </View>
      )
    }
    if(item==3){
      return (
        <View onLayout={({nativeEvent:e})=>{
          UIManager.measure(e.target, (x, y, width, height, left, top) => {
            this.setState({
              ...this.state,
              layoutTop:top
            })
          })
        }}
          style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:'#f8f8f8'}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'#fff',height:55*Util.getRate(),width:'94%'}}>
          <TouchableOpacity onPress={()=>{NavigatorUtil.pushPage("Scan")}}
                            style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
            <Text  style={{fontSize:12*Util.getRate()}}>9</Text>
            <Text  style={{fontSize:12*Util.getRate(),marginTop:6}}>作品</Text>
          </TouchableOpacity>

            <TouchableOpacity onPress={()=>{NavigatorUtil.pushPage("Scan")}}
                              style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
              <Text  style={{fontSize:12*Util.getRate()}}>99</Text>
              <Text  style={{fontSize:12*Util.getRate(),marginTop:6}}>评论</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{NavigatorUtil.pushPage("Scan")}}
                              style={{width:100,height:'100%',justifyContent: 'center',alignItems: 'center' }}>
              <Text  style={{fontSize:12*Util.getRate()}}>968888</Text>
              <Text  style={{fontSize:12*Util.getRate(),marginTop:6}}>赞</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }else{
      return (

        <View style={{paddingBottom:1,flexDirection:'row',flex:1,justifyContent: 'center', width:"100%",height:((Util.getWidth()-2)/3)+3,alignItems: 'center',backgroundColor:'#f8f8f8'}}>

          {item.map((me, i) => {
           // alert(Util.getDomain()+"/public/app/p"+VideoData[me.picNum].pic+".jpg")
            return (
              <View style={{backgroundColor: '#fff',width: me.width,height:me.height ,marginRight:i==1?1:0,marginLeft:i==1?1:0, justifyContent: 'flex-start', alignItems: 'center',overflow:'hidden'}}>
              <Image
                style={{width:me.imageWidth,height:me.imageHeight,}} source={{uri:Util.getDomain()+"/public/app/"+VideoData[me.picNum].pic+".jpg"}} resizeMode="contain"  ></Image>
              </View>
            );
          })
          }
        </View>
      )
    }
  }
  layout = (e,name)=>{
      UIManager.measure(e.target, (x, y, width, height, left, top) => {
       alert(JSON.stringify({top:top,left:left}));
      })
  }
  render() {
    let list=[1,2,3];

    let width = (Util.getWidth()-2)/3;
    let height = width;
    for(let i=0;i<10;i++){
      let lie=[]
      for(let j=0;j<3;j++){
        let picNum=Math.floor(Math.random()*10);
        if(picNum==0||picNum==10){
          picNum=1;
        }
        let imageHeight = width;
        let imageWidth = height;
        let whRate = VideoData[picNum].width/VideoData[picNum].height;
        if(whRate>1){
          imageWidth = imageWidth*whRate;
        }else{
          imageHeight = imageWidth/whRate;
        }
        let item ={
          name:'ing',
          data: i+'你好----'+i,
          picNum,
          imageWidth,
          imageHeight,
          width,
          height

        }

        lie.push(item);
      }
      //alert(JSON.stringify(lie))
      list.push(lie);
    }
    if(1==1){
      return (
        <View style={{  backgroundColor: '#ddd', flex:1,}}>
          <FlatList
            data={list}
            onScroll={this.onScroll}
            initialNumToRender={10}
            // legacyImplementation={true} //为true时使用旧的listview实现
            renderItem={this.renderItem}
            keyExtractor={this.mKeyExtractor}
            ListFooterComponent={() => null}
            onEndReachedThreshold={1}
            onEndReached={() => {}}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {}}
              />
            }
          />
        </View>
      )
    }


    return (
      <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'#f8f8f8'}}>

        <View style={{backgroundColor:'rgba(0,0,0,0)',height:150*Util.getRate(),width:'100%'}}>
          <ImageBackground style={{height:180*Util.getRate(),width:'100%',justifyContent: 'flex-start', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/app/homeheader.jpg"}} resizeMode="stretch"  >
              <View style={{backgroundColor:'rgba(0,0,0,0)',width:'100%',paddingTop:(Util.stateHeight("ios",20,0)+(DeviceInfo.isIPhoneX_deprecated?15:0))}}>
                <View style={[{height:40*Util.getRate(),backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent: 'center',alignItems: 'center'}]} >
                  <TouchableOpacity style={{position:'absolute',left:10,backgroundColor:'rgba(0,0,0,0.5)',flexDirection:'row',borderRadius:16*Util.getRate(),height:32*Util.getRate(),width:32*Util.getRate(),justifyContent: 'center',alignItems: 'center'}}
                                    onPress={()=>{NavigatorUtil.goBack()}}>
                    <Image style={{height:18*Util.getRate(),width:18*Util.getRate()}} source={{uri:'leftwhite'}} resizeMode="stretch">
                    </Image>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
        </View>

        <View style={{flexDirection:'row',justifyContent: 'flex-start', alignItems: 'flex-end',backgroundColor:'rgba(0,0,0,0)',height:120*Util.getRate(),width:'94%'}}>
          <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("EditProfile");}}
                             style={{height:'100%',width:120,justifyContent: 'center',alignItems: 'center'}}  >
            <View style={{overflow:'hidden',backgroundColor:"red",borderRadius:50*Util.getRate(),borderColor:'#fff',borderWidth:2,height:90*Util.getRate(),width:90*Util.getRate(),justifyContent: 'center', alignItems: 'center'}}   >
              <Image style={{height:140*Util.getRate(),width:140*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
              </Image>
            </View>
          </TouchableOpacity>

          <View style={{justifyContent: 'flex-end', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:120*Util.getRate(),flex:1}}>

            <View style={{flexDirection:'row',justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:30*Util.getRate(),width:'100%'}}>
              <Text  style={{fontSize:18*Util.getRate()}}>30
                <Text  style={{fontSize:12*Util.getRate()}}>&nbsp;粉丝</Text>
              </Text>
              <Text  style={{fontSize:18*Util.getRate(),marginLeft:10}}>64
                <Text  style={{fontSize:12*Util.getRate(),color:'#888'}}>&nbsp;关注</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',backgroundColor:'rgba(0,0,0,0)',height:30*Util.getRate(),width:'100%'}}>

              <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("HomePage");}}
                                 style={{flexDirection:'row',height:25,width:120,justifyContent: 'center',alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}  >
                <Image style={{height:16*Util.getRate(),width:16*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:'edit'}} resizeMode="contain"  >
                </Image>
                <Text  style={{fontSize:12*Util.getRate(),marginLeft:5}}>编辑资料</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{NavigatorUtil.pushPage("MyQrcode");}}
                                 style={{height:25,width:25,justifyContent: 'center',alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}  >

                <Image style={{height:20*Util.getRate(),width:20*Util.getRate(),justifyContent: 'center', alignItems: 'center'}} source={{uri:'erweima'}} resizeMode="contain"  >
                </Image>
              </TouchableOpacity>
            </View>
          </View>
          </View>

      </View>
    );
  }
  onScroll=(event)=>{
    let y = event.nativeEvent.contentOffset.y;
    if(y>this.state.layoutTop){
      console.log(event.nativeEvent.contentOffset.y);
    }
  }

};
