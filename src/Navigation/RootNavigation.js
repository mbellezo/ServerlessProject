import React from 'react';
import MainScreen from '../Components/MainScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

  
const RootNavigator = createStackNavigator({
    Main:{
      screen: MainScreen
    }
})


export default createAppContainer(RootNavigator);