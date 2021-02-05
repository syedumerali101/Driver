import React from 'react';
import {Text,View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Button from './Components/Button/Button';
import Style from './Style';

export default class Signup extends React.Component{
    static navigationOptions = {
        header: null,
   };

    state = {
        on : false
    }

    onPressConsumer = () => {
        this.setState({
            on : !this.state.on
        })
    }

    onPressDriver = () => {
        this.setState({
            on: !this.state.on
        })
    }


 

    btnConsumer () {
        const {on} = this.state
        let backgroundColorBlue =  '#276df0';
        let backgroundColorWhite =  '#fff';
        let labelWhite = '#fff';
        let labelblack = 'black';
        let label = on ? labelWhite : labelblack;

        let background = on ? backgroundColorBlue : backgroundColorWhite;
        console.log("Testing COlor", background);
        return(
            <Button buttonPress = {this.onPressConsumer}
            label = 'Consumer' customStyle={Style.signupStyle(background)} labelStyle ={Style.consumerLabel(label)} />
        )
        }

     btnDriver(){
         const {on} = this.state
         let backgroundColorWhite = '#ffffff';
         let backgroundColorBlue = '#276df0';
         let labelWhite = '#fff';
         let labelblack = 'black';
         let label = on ? labelblack : labelWhite
        // let { type } = this.state;
        // let unSelectedBtn = { backgroundColor: "#276df0" };
        // let unSelectedLabel = { color: "#ffffff" };
         let background = on ? backgroundColorWhite : backgroundColorBlue;
         return(
             <Button buttonPress = {this.onPressDriver}
            // <Button onPress={() => this.onChangeType("consumer")} 
            label = 'Driver' customStyle={Style.driverStyle(background)} labelStyle ={Style.driverLabel(label)}/>
            
         );
     }   

    render(){
        // console.log("Testing", this.state.on);
        return(
            <ScrollView style={{flex:1, backgroundColor: '#ffffff'}}>

                <View style={{paddingTop: 12, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 10}}>
                <View style={{backgroundColor:'white', width: 160, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        First Name
                    </Text>
                    <TextInput style={{paddingLeft: 10}} placeholder="Cramer"/>
                </View>

                <View style={{backgroundColor:'white', width: 160, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Last Name
                    </Text>
                    <TextInput style={{paddingLeft: 10}} placeholder="Andrew"/>
                </View>
                </View>


                <View style={{alignItems: 'center', paddingTop: 5}}>
                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Email Address
                    </Text>
                    <TextInput style={{paddingLeft: 10}} placeholder="Cramer@abc.com"/>
                </View>

                <View style={{padding: 5}}>
                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Phone
                    </Text>
                    <TextInput style={{paddingLeft: 10}} keyboardType={'numeric'} placeholder="+1 232 232 555"/>
                </View>
                </View>

                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Password
                    </Text>
                    <TextInput style={{paddingLeft: 10}} secureTextEntry={true} placeholder="********"/>
                </View>

                </View>



                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20}}>
                    {this.btnConsumer()}
                    {this.btnDriver()}
                   


                    {/* <TouchableOpacity onPress = {() => this.status()}
                    style = {{}}>
                        {
                            on === !true ? 
                        }
                    </TouchableOpacity> */}
                    </View>


                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                        <TouchableOpacity style={{backgroundColor: '#276df0', height: 70, width: 330, alignItems: 'center', justifyContent: 'center'}}
                        onPress = {() => this.props.navigation.navigate("VerificationCode")}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>
                                Sign Up
                            </Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                        <Text style={{color:'darkgray'}}>By Signing up, you confirm that you accept our</Text>
                        <Text style={{fontWeight:'bold'}}>Terms of Use <Text style={{fontWeight:'normal'}}>and </Text>Privacy Policy</Text>
                    </View>


                    <View style={{justifyContent:'center', alignItems:'center', paddingTop: 10}}>
                        <Text>
                            Already have an account? <Text style={{color:'blue'}} onPress = {() => this.props.navigation.navigate('Login')}>Sign in</Text>
                        </Text>
                    </View>

                



                </ScrollView>

            
        )
    }
} 