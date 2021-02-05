import React from 'react';
import {View,Text,TextInput, Image,TouchableOpacity} from 'react-native';



export default class Forgotpassword extends React.Component{
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
                            Forgot Password
                        </Text>
                    </View>

                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', padding: 50}}>
                    <Text style={{fontSize: 16}}>
                        Enter your email and will send you
                    </Text>
                    <Text style={{fontSize: 16}}>
                        you instruction on how to reset it
                    </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                <View style={{backgroundColor:'white', width: 330, borderWidth: 1, borderColor: 'lightgrey'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 8}}>
                        Email Address/Number
                    </Text>
                    <TextInput style={{paddingLeft: 10}} placeholder="cramer@abc.com"/>
                </View>

                <View style={{paddingTop: 12}}>
                    <TouchableOpacity style={{backgroundColor:'#276df0', height: 65, width: 330, justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => this.props.navigation.navigate("Newpassword")}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>

            </View>

        )
    }
}