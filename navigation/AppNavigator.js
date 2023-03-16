import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login'; // importar el componente Login
import RegistroUsuarios from '../screens/RegistroUsuarios';
import { globalStyles } from '../utils/styles'; // importar los estilos globales

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={RegistroUsuarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
