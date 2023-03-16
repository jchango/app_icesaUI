import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '/utils/styles';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.logoImage} source={require('../assets/images/logo.png')} />
      <TextInput style={globalStyles.input} placeholder="Usuario..." />
      <TextInput style={globalStyles.input} placeholder="Contraseña..." secureTextEntry />
      <TouchableOpacity style={globalStyles.button} onPress={() => alert('Ingresar')}>
        <Text style={globalStyles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
      <Text style={globalStyles.linkText} onPress={() => navigation.navigate('Registro')}>
        ¿No tienes cuenta? Regístrate aquí
      </Text>
    </View>
  );
}
