import React from 'react';
import Platform from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeTab from "../Components/AppTabNavigator/HomeTab"
import ProfileTab from "../Components/AppTabNavigator/ProfileTab";
import SearchTab from "../Components/AppTabNavigator/SearchTab";

  
const BottomTabNavigator = createBottomTabNavigator({
  HomeTab:{
      screen: HomeTab
  },
  SearchTab:{
      screen: SearchTab
  },
  ProfileTab:{
      screen: ProfileTab
  }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {

        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})

export default createAppContainer(BottomTabNavigator);