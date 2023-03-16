import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007fb8',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
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
    backgroundColor: '#f5d49b',
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: width - 40,
    marginTop: 20,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007fb8',
    borderRadius: 10,
    padding: 10,
    height: 100,
    width: '30%',
    margin: 5,
  },
  buttonIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#222222',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: height / 2 / 2,
  },
 
  socialIcon: {
    marginRight: 10,
  },
  facebookButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3b5998',
    
  },
  gmailButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#db4a39',
  },
});

export { globalStyles };