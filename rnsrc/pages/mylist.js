import React, { Component, PureComponent } from 'react';
import { StyleSheet,TouchableOpacity, Image,Text, View,ImageBackground } from 'react-native';
import MasonryList from '@appandflow/masonry-list';
import Util from '../utils/util'
import NavigatorUtil from '../navigation/navigatorUtil';

class Cell extends PureComponent {
    componentDidMount() {
        //console.warn('mount cell');
    }

    componentWillUnmount() {
        //console.warn('unmount cell');
    }

    render() {
        const { item } = this.props;
        return (
          <View style={{height:item.hh,justifyContent: 'center', alignItems: 'center'}}>
              <ImageBackground style={{height:item.hh-20,width:'100%',justifyContent: 'center', alignItems: 'center'}} source={{uri:Util.getDomain()+"/public/app/p"+item.id+".jpg"}} resizeMode="stretch"  >
              </ImageBackground>
            <View style={{height:20,justifyContent: 'center', alignItems: 'center',backgroundColor:'#333'}}>
            </View>
          </View>

        );
    }
}

export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = { data:[] };
  }


    _refreshRequest = () => {

      fetch("http://127.0.0.1:7001/appApi/list")
        .then((response) => { return  response.text() ;})
        .then((responseText) => {
          responseText = JSON.parse(responseText);
          if(responseText.code==1){
            this.setState({
              ...this.state,
              data:responseText.data
            })
          }
        })
        .catch(function(err){
          console.log( err);
        });
    };

    _onEndReached=()=>{
      fetch("http://127.0.0.1:7001/appApi/list")
        .then((response) => { return  response.text() ;})
        .then((responseText) => {
          responseText = JSON.parse(responseText);
          if(responseText.code==1){
            this.setState({
              ...this.state,
              data:this.state.data.concat(responseText.data)
            })
          }
        })
        .catch(function(err){
          console.log( err);
        });
    }
  componentDidMount(){
      this._refreshRequest()
  }

  render() {
        return (
          <View style={{flex:1}}>
          <MasonryList
            onRefresh={this._refreshRequest}
            refreshing={this.state.isRefreshing}
            data={this.state.data}
            renderItem={({ item }) => <Cell item={item} />}
            getHeightForItem={({ item }) => {
              item.hh=item.height *(Util.getWidth()/item.width)*0.5+20;
              return item.hh;
            }}
            numColumns={2}
            onEndReachedThreshold={0.5}
            onEndReached={this._onEndReached}
            keyExtractor={item => item.id}
          />

            <TouchableOpacity onPress={()=>{ NavigatorUtil.toggleDrawer();}}
              style={{position:'absolute',left:0,top:0,height: 40,width: 60,justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: 22,width: 30 }}  source={{uri:'openleft'}} resizeMode="stretch"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              NavigatorUtil.pushPage("MuCamera",{modeStyle:"up"})
            }}
                              style={{position:'absolute',right:0,top:0,height: 40,width: 60,justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: 25,width: 30 }}  source={{uri:'zhibo'}}resizeMode="stretch"/>
            </TouchableOpacity>
          </View>
        );
    }
}

