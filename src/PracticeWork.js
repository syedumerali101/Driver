import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

var {width, height} = Dimensions.get('window');

export default class PracticeWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0),
            xValue : new Animated.Value(0),
            switchValue : true
        }
    }
        _moveanimation = () => {
            Animated.timing (this.state.xValue, {
                 
                toValue: 70,
                duration: 1000,
                easing : Easing.linear,
            }).start();
        }
    render(){
        return(
        

            <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress = {this._moveanimation} style={{paddingHorizontal: 1, backgroundColor: '#276df0', width: 100, height: 30, borderRadius: 20, flexDirection: 'row', alignItems: 'center'}}>
                <Animated.Image style={[{left:this.state.xValue}]} source={require('./images/car_online.png')}>
                </Animated.Image>
                
            </TouchableOpacity>    
            </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    moveleft : {
        paddingLeft : 20
    },

    moveRight : {
        paddingRight: 30
    },
    



});