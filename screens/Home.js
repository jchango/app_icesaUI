import React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { globalStyles } from '/utils/styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Image style={globalStyles.logoImage} source={require('../assets/images/logo.png')} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>

                <TouchableOpacity style={globalStyles.button} onPress={() => alert('Ingresar con huella')}>
                    <View style={globalStyles.buttonIcon}>
                        <Ionicons name="finger-print-outline" size={30} color="white" />
                    </View>
                    <Text style={globalStyles.buttonText}>Huella</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[globalStyles.button, { flex: 1, marginRight: 10 }]} onPress={() => alert('Ingresar con contraseña')}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialIcons name="vpn-key" size={40} color="white" />
                        <Text style={[globalStyles.buttonText, { marginTop: 5 }]}>Contraseña</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[globalStyles.button, { flex: 1 }]} onPress={() => alert('Ingresar con PIN')}>
                    <View style={{ alignItems: 'center' }}>
                        <FontAwesome name="key" size={40} color="white" />
                        <Text style={[globalStyles.buttonText, { marginTop: 5 }]}>PIN</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity style={[globalStyles.button, { flex: 1, marginRight: 10 }]} onPress={() => alert('Ingresar con Facebook')}>
                    <Entypo name="facebook" size={30} color="white" />
                    <Text style={globalStyles.buttonText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.button, { flex: 1 }]} onPress={() => alert('Ingresar con Gmail')}>
                    <MaterialIcons name="mail" size={30} color="white" />
                    <Text style={globalStyles.buttonText}>Gmail</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <TouchableOpacity style={[globalStyles.button, { width: windowWidth * 0.45 }]}>
                    <Text style={globalStyles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.button, { width: windowWidth * 0.45 }]}>
                    <Text style={globalStyles.buttonText}>Solicitar crédito</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#fff', width: '100%', height: 200, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                <TouchableOpacity>
                    <FontAwesome name="user-circle-o" size={30} color="#007fb8" style={{ marginRight: 0 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="user-circle-o" size={30} color="#007fb8" style={{ marginRight: 0 }} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
