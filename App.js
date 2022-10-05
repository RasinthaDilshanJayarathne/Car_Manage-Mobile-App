import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Splash from './screens/Splash'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailScreen';

//import { AuthContext } from './components/context';

//const Stack = createStackNavigator();

const RootStack = createStackNavigator();

// const HomeStack = createDrawerNavigator();
// const DetailStack = createDrawerNavigator();
// const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Home" component={Splash} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="SignUp" component={SignUp} />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}