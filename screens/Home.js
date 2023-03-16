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

                <TouchableOpacity style={[globalStyles.button, { flex: 1, marginRight: 10 }]} onPress={() => alert('Ingresar con huella')}>
                    <View style={[globalStyles.circleButton, { backgroundColor: '#808080' }]}>
                        <Ionicons name="finger-print-outline" size={30} color="white" />
                    </View>
                    <Text style={[globalStyles.buttonText, { marginTop: 5 }]}>Huella</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[globalStyles.button, { flex: 1, marginRight: 10 }]} onPress={() => alert('Ingresar con contraseña')}>
                    <View style={[globalStyles.circleButton, { backgroundColor: '#808080' }]}>
                        <MaterialIcons name="vpn-key" size={30} color="white" />
                    </View>
                    <Text style={[globalStyles.buttonText, { marginTop: 5 }]}>Contraseña</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[globalStyles.button, { flex: 1 }]} onPress={() => alert('Ingresar con PIN')}>
                    <View style={[globalStyles.circleButton, { backgroundColor: '#808080' }]}>
                        <FontAwesome name="key" size={30} color="white" />
                    </View>
                    <Text style={[globalStyles.buttonText, { marginTop: 5 }]}>PIN</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center', flex: 2 }}>
  <View style={{ width: '70%' }}>
    <TouchableOpacity style={[globalStyles.globalButton, globalStyles.facebookButton]} onPress={() => alert('Ingresar con Facebook')}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Entypo name="facebook-with-circle" size={30} color="#4267B2" style={globalStyles.socialIcon} />
        <Text style={[globalStyles.buttonText, { color: '#000' }]}>Facebook</Text>
      </View>
    </TouchableOpacity>
  </View>
  <View style={{ width: '70%' }}>
    <TouchableOpacity style={[globalStyles.globalButton, globalStyles.gmailButton]} onPress={() => alert('Ingresar con Gmail')}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="mail" size={30} color="#DB4437" style={globalStyles.socialIcon} />
        <Text style={[globalStyles.buttonText, { color: '#000' }]}>Gmail</Text>
      </View>
    </TouchableOpacity>
  </View>
</View>








            <View style={{ backgroundColor: '#fff', width: '100%', height: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 10, marginBottom: 20 }}>
                <TouchableOpacity style={globalStyles.rectangularButton} onPress={() => alert('Ingresar con Libreta')}>
                    <FontAwesome name="book" size={30} color="#007fb8" style={globalStyles.buttonIcon} />
                    <Text style={globalStyles.buttonText}>Libreta</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}
