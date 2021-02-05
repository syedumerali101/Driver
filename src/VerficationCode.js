import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import Header from './Components/Header/Header';

export default class VerficationCode extends Component {

      _onFinishCheckingCode1(isValid){
          if(isValid == "1234"){
              Alert.alert(
                  'Successfully Confirmed'
              );
              this.refs.codeInputRef2.clear();
          }
          else{
              Alert.alert(
                  'Not a right code'
              );
              this.refs.codeInputRef2.clear();
          }
      }

      AlertMe = () => {
          alert('Code will be sent to you in few minutes')
      }

    
    render() {
        return (
            <View style = {{backgroundColor: 'white', flex: 1}}>

                <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}} label = "Verification" labelstyle = {{fontSize: 20, fontWeight: 'bold', color:'black'}}/>


                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                    <Text style={{fontSize: 16}}>
                        We have sent you an access code
                    </Text>
                    <Text style={{fontSize: 16}}>
                        via SMS for Mobile number verification
                    </Text>
                </View>

                <View style={{padding: 50}}>
                <CodeInput
                    ref="codeInputRef2"
                    
                    activeColor='black'
                    inactiveColor='white'
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    size={70}
                    onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{ borderWidth: 1.5 }}
                    
                    secureTextEntry = {false}
                    keyboardType = "numeric"
                    backgroundColor = "#f2f2f2"
                    codeLength = {4}
                    space = {1}
                    fontSize = {25}
                    />

                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 40}}>
                    <Text onPress = {this.AlertMe}
                     style={{color:'blue'}}>
                        Resend Code

                    </Text>
                </View>
            </View>
        )
    }
}
