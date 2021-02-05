import React from 'react';
import {Text, View, Image} from 'react-native';
import Header from './Components/Header/Header';
import PolicyComponent from './Components/PolicyComponent/PolicyComponent'

export default class PrivacyPolicy extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>

                <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                label = "Privacy Policy" labelstyle = {{fontSize: 20, fontWeight: 'bold', color:'black'}}/>


                <View style={{alignItems: 'center', padding: 20}}>
                    <Text style={{color: 'black', fontSize: 16}}>
                        Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123.  
                    </Text>
                </View>

                <View style={{alignItems: 'center', padding: 20, paddingTop: 5}}>
                    <Text style={{color: 'black', fontSize: 16}}>
                        Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123. Your Driver is on his way to pick up your order #RH123.  
                    </Text>
                </View>

                <PolicyComponent label="Your Payments and recipts"/>
                <PolicyComponent label="what are movers rates"/>
                <PolicyComponent label="Your guide to movers"/>
            </View>
        )
    }
}