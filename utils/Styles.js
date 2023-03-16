import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2331', // Color de fondo azul marino
    padding: 20,
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Sombreado
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Color de texto blanco
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#fff', // Color de fondo blanco para campos de entrada
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#f01d71',
    padding: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  linkText: {
    color: '#fff', // Cambiar color de texto de enlaces a blanco
    textDecorationLine: 'underline',
  },
});

export { globalStyles };
