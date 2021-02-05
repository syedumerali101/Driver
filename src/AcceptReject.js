import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import {AirbnbRating } from 'react-native-ratings';
import AnimatedSwitch from './Components/AnimatedSwitch/AnimatedSwitch';

export default class AcceptReject extends Component {
    state = {
        active : false,
        Data : [
            {
                id : 1,
                name : 'Esther Berry',
                price : '$25.00',
                distance : '2.2 km',
                pickupLocation : '7958 Swift Village',
                dropoffLocation : '9869 Broad Lane'
            },
            {
                id : 2,
                name : 'Esther Berry',
                price : '$25.00',
                distance : '2.2 km',
                pickupLocation : '7958 Swift Village',
                dropoffLocation : '9869 Broad Lane'
            },
            {
                id : 3,
                name : 'Esther Berry',
                price : '$25.00',
                distance : '2.2 km',
                pickupLocation : '7958 Swift Village',
                dropoffLocation : '9869 Broad Lane'
            }
        ]
    };

    _renderItem = ({item}) => {
        return(
            <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center', borderWidth: 1, borderColor: 'lightgray'}}>
                <View style={{paddingLeft: 20}}>
                    <Image source = {require('./images/orders_avatar.png')}/>
                </View>

                <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                        {item.name}
                    </Text>
                    <View style={{paddingRight: 50}}>
                    <AirbnbRating
                    type = 'custom'
                    count = {5}
                    defaultRating = {0}
                    size = {8}
                    selectedColor = {'blue'}
                    showRating = {false}
                    />
                    </View>

                </View>

                <View style={{paddingLeft: 60}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                        {item.price}
                    </Text>
                    <View style={{paddingLeft: 8}}>
                    <Text style={{fontSize: 10}}>
                        {item.distance}
                    </Text>
                    </View>
                </View>
            </View>

            
            
            <View style={{borderColor: 'lightgray', backgroundColor: 'white', borderWidth: 1, padding: 20, borderTopWidth: 0}}>
                <View style={{paddingBottom:5}}>
                <Text style={{fontSize: 12}}>
                    Pickup
                </Text>
                </View>

                <View>
                <Text style={{fontSize: 18}}>
                    {item.pickupLocation}
                </Text>
                </View>

                <View style={{borderBottomWidth: 1, borderBottomColor: 'lightgray', paddingBottom: 10}}/>

                <View style={{paddingBottom: 5, paddingTop: 10}}>
                <Text style={{fontSize: 12}}>
                    Dropoff
                </Text>
                </View>

                <View>
                <Text style={{fontSize: 18}}>
                    {item.dropoffLocation}
                </Text>
                </View>


                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10}}>
                        <Text style={{color: 'lightgray'}}>
                            Ignore
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor: '#276df0', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10}} >
                        <Text style={{color: 'white'}}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>

                <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <TouchableOpacity style={{padding: 20}}
                onPress={() => this.props.navigation.openDrawer()}>
                <Image source = {require('./images/hamburger.png')}/>
                </TouchableOpacity>

                <View style={{justifyContent: 'center', paddingLeft: 60}}>
                    <AnimatedSwitch/>
                </View>
                </View>

                
                <FlatList
                data = {this.state.Data}
                renderItem = {this._renderItem}
                
                />




            </View>
        )
    }
}
