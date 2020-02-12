/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 编辑头像
 */


import React, {Component} from 'react';
import {
  Platform, Image, ImageBackground,PanResponder, StyleSheet, Button,
  Text, View, TouchableOpacity, NativeModules,
} from 'react-native';
import Util from '../utils/util';
import NavigatorUtil from '../navigation/navigatorUtil';
import Head from '../components/common/head';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
export default class HeadPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headImage:null
    }
  }

  componentDidMount() {
  }
  selectPic = ()=>{
    let  options =  {
      //底部弹出框选项
      title:'请选择',
      cancelButtonTitle:'取消',
      takePhotoButtonTitle:'拍照',
      chooseFromLibraryButtonTitle:'选择相册',
      quality:1,
      storageOptions: {
        skipBackup: true,
      }}

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let that = this;
        alert(response.uri)
      }
    });
  }

  async pickSingle(cropit, circular=false, mediaType) {
    let image = await ImageCropPicker.openPicker({
      width: Util.getWidth(),
      height: Util.getWidth(),
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });
    this.setState({
      headImage: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
    });
    let formData = new FormData();
    formData.append("name","2");

    //拼接图片地址
    let file = {uri:image.path , type: 'multipart/form-data', name: 'image.png'};
    formData.append("file",file);
    let url = Util.getDomain()+"/file/uploadApi";

    Util.post(url,formData,function(response){
      if(response.ret===1) {
        alert(1)
      }else{
        alert(0)
      }
    },(error) =>{
     alert(error)
    });

  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
        <Head title="个人头像"></Head>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>

        <ImageBackground style={{height:Util.getWidth(),width:Util.getWidth(),justifyContent: 'center', alignItems: 'center'}}
               source={{uri:this.state.headImage?this.state.headImage.uri:Util.getDomain()+"/public/header/2.jpg"}} resizeMode="contain"  >
        </ImageBackground>

          <TouchableOpacity  onPress={()=>{
            this.pickSingle(true, true)
            }}
                             style={{height:38,width:140,marginTop:25,borderRadius:20,backgroundColor:'#333',justifyContent: 'center',alignItems: 'center'}}  >
            <Text  style={{fontSize:13*Util.getRate(),color:'#fff'}}>更换头像</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
};
