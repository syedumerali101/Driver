import React from 'react';
import {View,Text, Image, TextInput, TouchableOpacity} from 'react-native';



export default class Login extends React.Component{
    static navigationOptions = {
         header: null,
    };
  render(){
    return(
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <View style={{marginTop: 80, paddingLeft: 5}}>
          <Image style={{height: 50, width: 50}} source = {require('./images/logo.png')}/>
        </View>

        <View style={{paddingVertical: 10, paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            Welcome to the App
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 18, paddingLeft: 5}}>
            Sign in to Continue
          </Text>
        </View>
        
        <View style={{padding: 10}}>
        <View style={{width: 330, borderWidth: 1, borderColor: 'grey'}}>
          <TextInput placeholder = "Enter Email Address">
          </TextInput>
        </View>
        </View>

        <View style={{padding: 10}}>
        <View style={{width: 330, borderWidth: 1, borderColor: 'grey', flexDirection: 'row', justifyContent: 'space-between'}}>
          
          <TextInput placeholder = "Enter Password" >
          </TextInput>
          <View style={{padding: 10, justifyContent: 'center'}}>
          <Text style={{color: 'lightgrey'}}
          onPress={() => this.props.navigation.navigate("Forgotpassword")}>
              Forgot?
          </Text>
          </View> 
        </View>
        </View>


        <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <TouchableOpacity style={{backgroundColor: '#276df0', height: 65, width: 330, justifyContent: 'center', alignItems: 'center'}}
          onPress = {() => this.props.navigation.navigate('Myprofile')}>
            <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height: 40, width: 40}} source = {require('./src/images/fb.png')}/>
            <View style={{paddingLeft: 100}}>
              <Text>
                Hello
              </Text>
            </View>
        </View> */}

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#3b5998', height: 65, width: 330, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>
              Sign in with facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <TouchableOpacity style={{backgroundColor: '#276df0', height: 65, width: 330, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>
              Explore as a Consumer
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Don't have an account? <Text style={{color: 'blue'}} onPress = {() => this.props.navigation.navigate('Signup')}>Signup</Text>
          </Text>
        </View>

        



      </View>
    )
  }
}
