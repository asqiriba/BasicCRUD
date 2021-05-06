// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormScreen from './screens/FormScreen';
import IndexScreen from './screens/IndexScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="IndexScreen" 
        component={IndexScreen} 
        options={{ title: 'This is the Index Screen' }}
      />
      <Stack.Screen 
        name="FormScreen" 
        component={FormScreen} 
        options={{ title: 'This is the Form Screen' }}
      />
      <Stack.Screen 
       name="DetailsScreen" 
       component={DetailsScreen} 
       options={{ title: 'This is the Details Screen' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}