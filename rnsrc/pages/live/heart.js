import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,
    TouchableOpacity,FlatList,Animated,Image,Easing,DeviceEventEmitter} from 'react-native';

export default class Heart extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.staticHeartList = [];
        this.animateHeartList = [];
        this.animates = [];

        this.animateHeart = this.animateHeart.bind(this);
        this.createHeart = this.createHeart.bind(this);

        this.initPrefab();
        //待发的爱心数量
        this.heartNum=1000;
    }

    //动画生成器
    animateHeart(newItem){

        let initParam = this.initParam;

        let hx = initParam.hx;
        let hy =initParam.hy;


        let firstX = Math.floor(Math.random() * 30);
            firstX = firstX-10;
        //hx 曲取值范围 -20----50;
        //hx 曲取值范围 20---200;


        return Animated.sequence([

            Animated.parallel([
                Animated.timing(
                    newItem.hw,
                    {
                        toValue: 30,
                        easing: Easing.linear,
                        duration: 150,
                    }
                ),
                Animated.timing(
                    newItem.hx,
                    {
                        toValue: firstX,
                        easing: Easing.linear,
                        duration: 150,
                    }
                ),
            ]),
            Animated.parallel([

                Animated.timing(
                    newItem.hy,
                    {
                        toValue: 200,
                        easing: Easing.linear,
                        duration: 2000,
                    }
                ),
                Animated.timing(
                    newItem.hop,
                    {
                        toValue: 0,
                        easing: Easing.linear,
                        duration: 1000,
                        delay:1000
                    }
                )
            ]),
            //参数重置到初始化
            Animated.parallel([

                Animated.timing(
                    newItem.hx,
                    {
                        toValue: initParam.hx,
                        easing: Easing.linear,
                        duration: 1,
                    }
                ),
                Animated.timing(
                    newItem.hy,
                    {
                        toValue: initParam.hy,
                        easing: Easing.linear,
                        duration: 1,
                    }
                ),
                Animated.timing(
                    newItem.hw,
                    {
                        toValue: initParam.hw,
                        easing: Easing.linear,
                        duration: 1,
                    }
                ),
                Animated.timing(
                    newItem.hop,
                    {
                        toValue: initParam.hop,
                        easing: Easing.linear,
                        duration: 1,
                    }
                )
            ]),

        ])
    }
    //初始化预制
    initPrefab(){
        this.initParam = {
            hy:20,
            hx:8,
            hw:-10,
            hop:1

        }
        let initParam = this.initParam;
        for(let i=0;i<300;i++){
            let heartNum = i%7;
            let newItem = {
                key:""+i,
                image:'heart'+heartNum,
                hy:new Animated.Value(initParam.hy),
                hx:new Animated.Value(initParam.hx),
                hw:new Animated.Value(initParam.hw),
                hop:new Animated.Value(initParam.hop)
            }
            this.staticHeartList.push(newItem);
        }
    }

    render() {
        this.list = this.staticHeartList.concat(this.animateHeartList);
        return (
            <View style={{marginLeft:15,justifyContent: 'center',
                alignItems: 'center',height:40,width:40,backgroundColor:'rgba(0,0,0,0)'}}>

                <TouchableOpacity style={{justifyContent: 'center',
                    alignItems: 'center',borderRadius:20,height:40,width:40,backgroundColor:'rgba(0,0,0,0.4)'}}>

                    <Image source={{uri:'liwubtn'}}
                           style={{height:22,width:22,zIndex:100}} resizeMode="contain"></Image>
                </TouchableOpacity>

                {this.list.map((item, i) => {
                    return (
                        <Animated.Image key={item.key} source={{uri:item.image}}
                                        style={{opacity:item.hop,position:'absolute',left:item.hx,bottom:item.hy,
                                            width:item.hw,height:item.hw,zIndex:10}} resizeMode="contain">

                        </Animated.Image>

                    );
                })
                }
            </View>
        )
            ;
    }


    createHeart(){
        let staticHeartList = this.staticHeartList;
        let animateHeartList = this.animateHeartList;

        this.createHeartInterval = setInterval(()=>{
            let staticHeartLength = staticHeartList.length;

            if(staticHeartLength<1 || this.heartNum < 1){
                return;
            }
            this.heartNum = this.heartNum-1;
            //在现有的数组中 随机选择一个
            let randomHeartLocation = Math.floor(Math.random() * staticHeartLength);
            let randomHeart = staticHeartList.splice(randomHeartLocation, 1)[0];

            animateHeartList.push(randomHeart);

            //开始执行动画
            this.animateHeart(randomHeart).start(()=>{
                //动画执行完之后，把元素从动画列表放回 静态列表，以便重新使用
                //staticHeartList.push(animateHeartList.shift());
                for(let ni=0;ni < animateHeartList.length;ni++){
                    if(animateHeartList[ni] == randomHeart){
                        let removeHeart =  animateHeartList.splice(ni, 1)[0];
                        staticHeartList.push(removeHeart);
                        break;
                    }
                }
            });

        },200);
    }

    heartEventMethod(params){
        if(params.heartNum > 0){
            this.heartNum = this.heartNum+params.heartNum;
        }

    }
    componentDidMount(){
        //创建动画
        this.createHeart();



        this.heartEvent = DeviceEventEmitter.addListener('heartEvent', this.heartEventMethod.bind(this));
    }

    componentWillUnmount(){
        this.createHeartInterval && clearInterval(this.createHeartInterval);
        this.heartEvent && this.heartEvent.remove();
    }
}
