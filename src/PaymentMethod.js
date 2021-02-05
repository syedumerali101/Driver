import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Header from './Components/Header/Header';
import PaymentComponent from './Components/PaymentMethodComponent/PaymentMethodComponent';

export default class PaymentMethod extends Component {
    state = {
        IsCod : true,
        IsPaypal: false
    };

    cashOnDeliver = () => {
        this.setState({IsPaypal : false, IsCod: true});
    };

    Paypal = () => {
        this.setState({IsPaypal : true, IsCod: false});

    };

    renderCashonDelivery(){
        const {IsCod} = this.state;
        return (
            <TouchableOpacity onPress = {this.cashOnDeliver}
            style={{backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 21, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center'}}>
                <View style={{alignItems: "center", flexDirection: 'row'}}>
                    <Image source = {require('./images/cash-on-delivery.png')}
                    style={{marginRight: 13, justifyContent: 'center'}}/>
                    <Text style={{}}>
                        Cash on Delivery
                    </Text>
                </View>
                {
                    IsCod && (
                        <Image source = {require('./images/check.png')} style={{height:11, width:11}}/>
                    )
                }
            </TouchableOpacity>
        );

    }

    renderPaypal(){
        const {IsPaypal} = this.state
        return (
            <TouchableOpacity onPress = {this.Paypal}
            style={{backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 21, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center'}}>
                <View style={{alignItems: "center", flexDirection: 'row'}}>
                    <Image source = {require('./images/paypal.png')}
                    style={{marginRight: 13, justifyContent: 'center'}}/>
                    <Text style={{}}>
                        PayPal
                    </Text>
                </View>
                {
                    IsPaypal && (
                        <Image source = {require('./images/check.png')} style={{height:11, width:11}}/>
                    )
                }
            </TouchableOpacity>
        );
    }

    render() {
        return (
            // <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
            //     <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
            //     label = "Payment Method" labelstyle = {{fontSize: 20, fontWeight: 'bold'}}/>

            //     <PaymentComponent PaymentMethodName = "Cash on Delivery" MethodImage = {require('./images/cash-on-delivery.png')}
            //     paymentNameStyle={{paddingLeft: 15}}/>

            //     <PaymentComponent PaymentMethodName = "PayPal" MethodImage = {require('./images/paypal.png')}
            //     paymentNameStyle={{paddingLeft: 12}}/>
            // </View>

            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                label = "Payment Method" labelstyle = {{fontSize: 20, fontWeight: 'bold'}}/>
                <View style={{padding: 15, paddingTop: 5}}>
                {this.renderCashonDelivery()}
                {this.renderPaypal()}
                </View>
            </View>
        )
    }
}
