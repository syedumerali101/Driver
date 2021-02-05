import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class PolicyComponent extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:20, paddingBottom: 0 }}>
                    <View style={{paddingTop:2}}>
                        <Text style={{color: 'darkgray', fontSize: 15}}>
                            {this.props.label}
                        </Text>
                    </View>
                    <View>
                        <Image style={{height: 30, width: 30}} source = {require('../../images/front.png')}/>
                    </View>
                </View>
        )
    }
}
