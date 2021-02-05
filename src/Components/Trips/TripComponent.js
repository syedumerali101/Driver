import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import {AirbnbRating } from 'react-native-ratings';

export default class TripComponent extends Component {
    render() {
        return (
            <View style={{padding: 15, paddingBottom: 0}}>
            <View style ={{paddingHorizontal: 15, paddingVertical: 15, backgroundColor: 'white'}}>
                <View style={{}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {/* Yesterday, 10:00 PM */}
                        {this.props.daytime}
                    </Text>
                </View>

                <View style={{paddingTop: 8}}>
                    <Text style={{color: 'darkgray'}}>
                        {/* 123 6th St, Melbourne, FL 32904 */}
                        {this.props.address}
                    </Text>
                </View>

                <View style={{paddingTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {/* RH124 | $200 | COD */}
                        {this.props.amount}
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={{paddingTop: 8}}>
                    <Text style={{color: 'blue'}}>
                        {/* Dispute */}
                        {this.props.dispute}
                    </Text>
                </View>

                <View style={{paddingTop : 10, paddingLeft: 15}}>
                <AirbnbRating
                    count={5}
                    defaultRating={0}
                    size={10}
                    showRating = {false}
                    selectedColor = {'blue'}
                />

                </View>
                </View>
                


            </View>
            </View>
        )
    }
}
