import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types';

export default class WalletComponent extends Component {
    render() {
        return (
                    <View style={{padding: 10, paddingBottom: 1}}>
                    <View style={{flexDirection: 'row', backgroundColor: '#ffffff', justifyContent: 'space-between', paddingVertical: 18}}>
                    <View style={{paddingLeft: 20}}>
                        <Text style ={{fontWeight: 'bold'}}>
                            {/* Withdrawl */}
                            {this.props.label1}
                        </Text>
                        <Text>
                            {/* 9 Sep, 8:05 PM */}
                            {this.props.timelabel}
                        </Text>
                    </View>

                    <View style={{paddingTop: 5, paddingRight: 20}}>
                        <Text style={{fontWeight:'bold', fontSize: 20 }}>
                            {/* $ 20 USD */}
                            {this.props.amount}
                        </Text>
                    </View>
                    </View>
                    </View>
        )
    }
}
