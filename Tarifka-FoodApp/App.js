import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/home/home';
import Meals from './src/pages/meals/meals';
import Details from './src/pages/Details/Details';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {

  return (
    <NavigationContainer >
     <Stack.Navigator>
        <Stack.Screen name='Home Screen' component={Home} options={{title:'Categories'}} />
        <Stack.Screen name='Meals Screen' component={Meals}  options={{title:'Meals'}}/>
        <Stack.Screen name='Details Screen' component={Details} options={{title:'Recipe'}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;