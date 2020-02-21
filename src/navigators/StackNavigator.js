import React from 'react';
import {AsyncStorage} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DASHBOARD, LOGIN} from './ScreenTypes';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const isLoggedIn = false;

export default function RootNavigator() {
  console.log('isLoggedIn', isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? StackNavigator() : AuthNavigator()}
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
