import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import vehicleManage from './vehicleManage';
import MenuSettings from './MenuSettings';
import MenuHome from './MenuHome';

const Tab = createMaterialBottomTabNavigator();


const MenuTab = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{
        backgroundColor: '#379cc6',
        position: 'absolute',
        bottom:15,
        left:20,
        right:20,
        elevation:0,
        borderRadius:50,
        height:50,
          ...style.shadow
      }}
    >
      <Tab.Screen
        name="Home"
        component={MenuHome}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen
        name="vehicleManage"
        component={vehicleManage}
        options={{
          tabBarLabel: 'Vehicle',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
          // tabBarIcon: ({ focused }) => (
          //   <View style={{alignItems:'center',justifyContent:'center',top:10}}>
          //     <Image 
          //       source ={require('../assets/a.png')}
          //       style={{
          //         width:25,
          //         height:25,
          //         tinColor: focused ? '#e32f45' : '#748c94'
          //       }}
          //     />
          //     {/* <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Profile</Text> */}
          //   </View>
          // ),
        }}
      />
      {/* <Tab.Screen
        name="Notification"
        component={MenuNotification}
        options={{
          tabBarLabel: 'Notification',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
      /> */}
      <Tab.Screen
         name="Profile"
         component={MenuSettings}
        options={{
          tabBarLabel: 'Add',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuTab;


const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: 8
  }
})
