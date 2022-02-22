import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { Routes } from './Routes';

type Props = {}



const Navigator = (props: Props) => {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
            </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator