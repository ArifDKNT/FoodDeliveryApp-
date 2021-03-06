import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "react-navigation/native";
import {useFonts} from 'expo-font';

import {Home,Restaurant , OrderDelivery } from './screens'

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown : false
          }
        }
      >
        initialRouteName = {"Home"}
        <Stack.Screen name= 'Home' component={Home}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;