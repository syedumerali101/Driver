import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import NotifyComponent from './Components/Notification/NotifyComponent'
import Header from './Components/Header/Header'

export default class Notification extends Component {
    static navigationOptions = {
        header :  null,
    };


    render() {
        return (

            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
               
                <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                label = "Notification" labelstyle = {{fontSize: 20, fontWeight: 'bold'}}/>

                <NotifyComponent label1 = "Your Order #RH123 is completed."
                label2= "Please make the payment." label3 = "Monday, 2 Aug 2018" label4 = "1 minute ago" />

                <NotifyComponent label1 = "Your Driver is on his way to pick up"
                label2= "your order #RH123." label3 = "Monday, 2 Aug 2018" label4 = "1 minute ago" />

                <NotifyComponent label1 = "Your Order #RH123 is completed."
                label2= "Please make the payment." label3 = "Monday, 2 Aug 2018" label4 = "1 minute ago" />

                <NotifyComponent label1 = "Your Order #RH123 is completed."
                label2= "Please make the payment." label3 = "Monday, 2 Aug 2018" label4 = "1 minute ago" />

            </View>
        )
    }
}
