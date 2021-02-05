import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class PaymentMethodComponent extends Component {
    render() {
        return (
            <View style={{padding: 15, paddingBottom: 0}}>
                <View style={{flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', padding: 25}}>
                    <View>
                        <Image source = {this.props.MethodImage}/>
                    </View>
                    <View style = {this.props.paymentNameStyle}>
                        <Text style={{color: 'black'}}>
                            {this.props.PaymentMethodName}
                        </Text>

                    </View>
                </View>
                </View>
        )
    }
}
