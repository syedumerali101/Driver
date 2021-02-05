import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import HomeScreen from './HomeScreen';

class LoginScreen extends React.Component {
  renderHeader = () => {
    return (
      <View style={{padding: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, paddingLeft: 20}}>
          lmba.
        </Text>
      </View>
    );
  };

  renderSignIn = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
        }}>
        <TouchableOpacity style={{padding: 20}}>
          <Text>SIGN IN</Text>
          <View
            style={{
              paddingTop: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 5,
              width: 50,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 20, paddingLeft: 70}}>
          <Text style={{color: 'lightgray'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderFields = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./images/username.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <TextInput placeholder="Username" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            bottom: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./images/password.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <TextInput placeholder="Password" />
          </View>
        </View>
      </>
    );
  };

  renderSignInButton = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('HomeScreen')}
        style={{paddingHorizontal: 40}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            paddingVertical: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>SIGN IN</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderFacebookButton = () => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 80,
          paddingVertical: 20,
          paddingHorizontal: 40,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4267B2',
            paddingVertical: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>
            Login in with Facebook
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderForgotPassword = () => {
    return (
      <View style={{paddingLeft: 40}}>
        <Text style={{color: 'darkgray'}}>Forgot Password?</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{}}>
        {this.renderHeader()}
        {this.renderSignIn()}
        {this.renderFields()}
        {this.renderSignInButton()}
        {this.renderFacebookButton()}
        {this.renderForgotPassword()}
      </View>
    );
  }
}

export default LoginScreen;
