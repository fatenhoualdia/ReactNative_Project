import * as React from 'react';
import { Button,View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
import DetailsScreen2 from './src/components/DetailsScreen2';
import CardDetails from './src/components/CardDetails';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
        <Stack.Screen name="CardDetails" component={CardDetails} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
