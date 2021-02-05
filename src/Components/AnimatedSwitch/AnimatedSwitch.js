import React from 'react';
import {Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AnimatedSwitch extends React.Component{
    state = {
        active : false
    }

    handleSwitchToggle = () => {
        this.setState({
            active : !this.state.active
        });
        
    }
    render(){
        return(
            
            <View style={{backgroundColor: '#276df0', height: 30, width: 100, flexDirection: 'row', borderRadius: 20}}>
                <View style={{backgroundColor: '#276df0', height: 30, width: 50, justifyContent: 'center', alignItems: 'center',borderRadius: 20, paddingLeft: this.state.active ? 0 : 10, left: this.state.active ? 50 : 0}}>
                        <Text style={{color: 'white', fontSize: 13}}>
                            
                        {this.state.active ? 'Online' : 'Offline'}
                        </Text>
                    
                </View>
                <View style={{backgroundColor: '#276df0', height: 30, width: 50, justifyContent: 'center', alignItems: 'center', right: this.state.active ? 50 : 0, borderRadius: 20}}>
                    <TouchableOpacity 
                    onPress = {this.handleSwitchToggle}
                    style={{paddingLeft: this.state.active ? 0 : 8}}>
                    <Image style={{height: 30, width: 30}} source = {require('../../images/toggleCar.png')}/>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}