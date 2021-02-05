import React from 'react';
import {Text,View,TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import Input from './Components/Input/Input';
import Header from './Components/Header/Header'

export default class Myprofile extends React.Component{

    static navigationOptions = {
        header : null,
    };
    

    render(){
        return(
            
            <ScrollView style={{backgroundColor:'#f4f4f4', flex:1}}>
                <View style={{backgroundColor: '#276df0', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}>
                    <View style={{paddingLeft: 15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Image style={{height: 15, width:20 }} source={require('./images/backwhite.png')}/>

                    </TouchableOpacity>
                    </View>
                    <View style={{paddingLeft: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color:'white'}}>
                           My Profile
                        </Text>
                    </View>
                </View>

                


                <View style={{backgroundColor:'#276df0', width: 370, height: 60, paddingRight: 10 }}>

                    <View style={{paddingTop: 10, alignItems: 'center'}}>
                        <Image style={{height:100, width: 100, borderRadius: 150}} source = {require('./images/avatar_circle.png')}/>
                        <Text style={{bottom: 0, position: 'absolute'}}>
                            Edit
                        </Text>
                    </View>

                </View>

                {/* <View style={{paddingLeft: 160, paddingTop: 20}}>
                    <TouchableOpacity style={{backgroundColor:'blue', width: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View> */}


                <View style={{paddingTop: 60, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5}}>
                <Input label = 'First Name' placeholder = "Andrew"/>
                <Input label = 'Last Name' placeholder = "Cramer"/>
                </View>

                <View style={{paddingHorizontal:12, paddingBottom: 5}}>
                <Input label = "Phone" keyboardType="numeric" placeholder = "120 545 -(5654)"/>
                </View>

                <View style={{paddingHorizontal:12, paddingBottom: 5}}>
                <Input label = "Email" keyboardType="email-address" placeholder = "Andrewcramer@domain.com"/>
                </View>

                <View style={{paddingHorizontal:12, paddingBottom: 5}}>
                <Input label = "Change Password" secureTextEntry = {true} placeholder = "********"/>
                </View>

                <View style={{paddingHorizontal: 10}}>
                <View style={{backgroundColor: 'white', height:100, borderWidth: 1, borderColor: 'lightgray'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 6}}>
                        Edit Your Bio
                    </Text>
                    <TextInput/>
                    
                </View>
                </View>


                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Notification')}
                     style={{backgroundColor: '#276df0', height: 68, width: 359, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>
                        Done
                        </Text>

                    </TouchableOpacity>
                </View>
                




                {/* <View style={{flexDirection: 'row', paddingTop: 70, justifyContent: 'space-evenly'}}>
                    <View style={{backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgrey'}}>
                        <Text style={{paddingHorizontal: 20, paddingTop: 10, textAlign: 'left'}}>
                            First Name
                        </Text>
                        <TextInput style={{paddingLeft: 10}} placeholder="Cramer"/>

                    </View>
                    <View style={{ borderColor: 'lightgrey', backgroundColor: 'red'}}>
                        <Text style={{paddingHorizontal: 10, paddingTop: 10}}>
                            Last Name
                        </Text>

                    </View>
                    <TextInput style={{backgroundColor: 'red', margin:0, padding: 0, borderWidth: 0}} placeholder="Andrew"/>
                </View> */}

                {/* <View style={{flexDirection: 'row', paddingVertical: 50, justifyContent: 'center'}}>


                <Input label ='Phone' placeholder ="Hello"/>

                <Input label ='Email' placeholder = "Helloworld"/>

                
                </View> */}
                </ScrollView>   
        )
    }
}

