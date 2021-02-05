import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';

const minDisplayTime = 10;

export default class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }
    render(){
        return(
            <View style={{backgroundColor: '#276df0', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground style={{justifyContent: 'center', alignItems: 'center', height: 150, width: 150}} source={require('./images/car_copy.png')}>

                </ImageBackground>
            </View>
            );
    }

    prepareData() {
        // noinspection Eslint
        const { user, netInfo, navigation } = this.props;
        if (netInfo.isConnected) {
          // Task that only work in online mode go here...
        } else {
          // Task that only work in offline mode go here...
        }

    const resetData = {
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })]
      };
      navigation.dispatch(NavigationActions.reset(resetData));
    }
  }

Splash.navigationOptions = {
    header: null
  };
