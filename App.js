import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import ExercicioUm from './src/pages/ExercicioUm';
import ExercicioDois from './src/pages/ExercicioDois';
import ExercicioTres from './src/pages/ExercicioTres';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Início" component={Home}/>
        <Stack.Screen name="ExercicioUm" options={{ title: 'Exercício 1' }} component={ExercicioUm}/>
        <Stack.Screen name="ExercicioDois" options={{ title: 'Exercício 2' }} component={ExercicioDois}/>
        <Stack.Screen name="ExercicioTres" options={{ title: 'Exercício 3' }} component={ExercicioTres}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
