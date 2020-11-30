import React from 'react';
import { StyleSheet, View} from 'react-native';
import DrProfile from './screens/DrProfile';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DrChat from './screens/DrChat';
import { TextInput } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Welcome'>
        <Stack.Screen name = 'Welcome' component = {Welcome} options = {{headerShown: false}} />
        <Stack.Screen name = 'Login' component = {Login} options = {{headerShown: false}} />
        <Stack.Screen 
          name = 'DrProfile' 
          component = {DrProfile} 
          options = {{
            title: 'Dr.Tuan', 
            headerStyle: {
              backgroundColor: '#56CCF2',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18, 
            },
            }} /> 
        <Stack.Screen 
          name = 'DrChat'
          component = {DrChat}
          options = {{
            title: 'Chat with Dr.Tuan',
            headerStyle: {
              backgroundColor: '#56CCF2',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -20,
              fontSize: 18, 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

const styles = StyleSheet.create( {  
  container: {
    flex: 1,
  },
  }
) 

