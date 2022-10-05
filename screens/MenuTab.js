import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuHome from './MenuHome';
import vehicleManage from './vehicleManage';
import MenuSettings from './MenuSettings';

const Tab = createMaterialBottomTabNavigator();


const MenuTab = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: '#379cc6' }}
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
        name="Profile"
        component={MenuSettings}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={26} />
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
        name="vehicleManage"
        component={vehicleManage}
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
