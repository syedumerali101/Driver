import React from 'react';
import {View,Text,TextInput, Image,TouchableOpacity, Alert} from 'react-native';



export default class Newpassword extends React.Component{
    static navigationOptions = {
             header: null,
        };

        
    render(){
        return(
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>

                <View style={{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}>
                    <View style={{paddingLeft: 8}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Image style={{height: 15, width:20 }} source={require('./images/back.png')}/>

                    </TouchableOpacity>
                    </View>
                    <View style={{paddingLeft: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                           Set New Password
                        </Text>
                    </View>

                </View>

                

                <View style={{alignItems: 'center', paddingTop: 12}}>
                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        New Password
                    </Text>
                    <TextInput style={{paddingLeft: 10}} secureTextEntry={true} placeholder="**********"/>
                </View>

                <View style={{padding: 5}}>
                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Confirm Password
                    </Text>
                    <TextInput style={{paddingLeft: 10}} secureTextEntry={true} placeholder="**********"/>
                </View>
                </View>

                

                <View style={{paddingTop: 10}}>
                    <TouchableOpacity style={{backgroundColor:'#276df0', height: 65, width: 330, justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => this.props.navigation.navigate("VerificationCode")}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>

            </View>

        )
    }
}