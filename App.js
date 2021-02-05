import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
      }
      style={{backgroundColor: 'black', width: 45}}>
      <Image
        style={{height: 40, width: 40, borderRadius: 150}}
        source={require('./src/images/reverseArrow1.png')}
      />
    </TouchableOpacity>
    <View style={{flexDirection: 'row', paddingTop: 20, paddingHorizontal: 20}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 60, width: 60, borderRadius: 150}}
          source={require('./src/images/profile.jpeg')}
        />
      </View>

      <View style={{justifyContent: 'center', paddingLeft: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Andrew Cramer</Text>
        <Text>andrewcramer@domain.com</Text>
      </View>
    </View>
    <ScrollView style={{paddingTop: 30, paddingLeft: 20}}>
      <TextInput style={{paddingLeft: 20}} placeholder="Search" />
      <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>BEST SELLER</Text>

      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        FOR MEN
      </Text>

      <Text style={{color: 'lightgray', paddingLeft: 40}}>Shoes</Text>

      <Text style={{color: 'lightgray', paddingLeft: 40}}>Shirts</Text>

      <Text style={{color: 'lightgray', paddingLeft: 40}}>Watches</Text>

      <Text style={{color: 'lightgray', paddingLeft: 40}}>Suit</Text>

      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        FOR WOMEN
      </Text>

      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        COLLECTIONS
      </Text>
      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        LATEST
      </Text>
      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        FOOD
      </Text>

      <Text style={{paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>
        MAGAZINE
      </Text>
    </ScrollView>
    {/* <ScrollView>
      <DrawerItems {...props} />
    </ScrollView> */}
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
  },
  {
    contentComponent: CustomDrawerComponent,
  },
);

const AppStackNavigaor = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

const AppContainer = createAppContainer(MyDrawerNavigator);
