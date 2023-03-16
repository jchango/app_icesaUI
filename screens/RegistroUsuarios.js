import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '/utils/styles';

export default function RegistroUsuarios({ navigation }) {
  return (
    <View style={globalStyles.container}>
    <Image style={globalStyles.logoImage} source={require('../assets/images/logo.png')} />
    <Text style={globalStyles.titleText}>Registro</Text>
    <TextInput style={globalStyles.input} placeholder="Nombre completo" />
    <TextInput style={globalStyles.input} placeholder="Correo electrónico" />
    <TextInput style={globalStyles.input} placeholder="Contraseña" secureTextEntry />
    <TextInput style={globalStyles.input} placeholder="Confirmar contraseña" secureTextEntry />
    <TouchableOpacity style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>REGISTRARSE</Text>
    </TouchableOpacity>
    </View>
  );
}
