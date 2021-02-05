import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import WalletComponent from './Components/Wallet/WalletComponent'
import Header from './Components/Header/Header'

export default class Wallet extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                
                <Header label = "Wallet" csswork ={{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                labelstyle = {{fontSize: 20, fontWeight: 'bold', color:'black'}} />


                <View style={{padding: 15}}>
                    <View>
                        <Text style={{fontSize: 15}}>
                            Current Balance
                        </Text>

                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>
                            $ 34,650.25
                        </Text>

                    </View>

                </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                        <TouchableOpacity style={{backgroundColor: '#276df0', height: 60, width: 330, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                                Withdraw
                            </Text>

                        </TouchableOpacity>
                    </View>


                    <View style={{paddingTop: 15, paddingLeft: 10}}>
                        <Text style={{color: 'darkgray'}}>
                            Recent Widhdraw
                        </Text>
                    </View>



                    <WalletComponent label1 = "Withdrawl" timelabel = "9 Sep, 8:05 PM"
                    amount = "$ 200 USD"/>

                    <WalletComponent label1 = "Withdrawl" timelabel = "9 Sep, 8:05 PM"
                    amount = "$ 200 USD"/>

                    <WalletComponent label1 = "Withdrawl" timelabel = "9 Sep, 8:05 PM"
                    amount = "$ 95 USD"/>

                    <WalletComponent label1 = "Withdrawl" timelabel = "9 Sep, 8:05 PM"
                    amount = "$ 85 USD"/>


                    

            </View>
        )
    }
}
