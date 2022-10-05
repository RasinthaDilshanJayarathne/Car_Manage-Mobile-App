import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './Login';
import SignUp from './SignUp';
import Splash from './Splash';
import MenuHome from './MenuHome';
import MenuProfile from './MenuProfile';
import MenuSettings from './MenuSettings';
import MenuNotification from './MenuNotification';

const Tab = createMaterialBottomTabNavigator();


const MenuTab = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
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
        component={MenuProfile}
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
        name="Settings"
        component={MenuSettings}
        options={{
          tabBarLabel: 'Settings',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuTab;
