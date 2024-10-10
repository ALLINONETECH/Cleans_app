import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const navigate = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* EMC Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/BMC.png')} // Replace with your logo path
            style={styles.logo}
          />
        </View>
        {/* <MaterialCommunityIcons name="phone" size={24} color="white" /> */}

        {/* Garbage Truck Image */}
        <Image
          source={require('../assets/images/car.png')} // Replace with your image path
          style={styles.truckImage}
        />

        <Text style={styles.title}>CLEAN-S</Text>
        <Text style={styles.subtitle}>
          City Level Excellence in Advanced Networked - Sanitation
        </Text>

        {/* Phone Input */}
        <TextInput
          mode="outlined"
          // label="Phone"
          left={<TextInput.Icon icon="phone" color='white' />} // Use specific icon pack
          style={styles.input}
          keyboardType="phone-pad"
          textColor='white'
          placeholder='Phone'
          placeholderTextColor='white'
          theme={{
            colors: {
              outline: 'white',
              text: 'white',
              primary: 'white',
              // placeholder: 'white',
              font: 'white'
            },
            roundness: 25,
          }}
        />

        {/* OTP Input */}
        <TextInput
          mode="outlined"
          // label="OTP"
          left={<TextInput.Icon icon="lock" color="white" />} // Use specific icon pack
          secureTextEntry
          style={styles.input}
          keyboardType='phone-pad'
          textColor='white'
          placeholder='OTP'
          placeholderTextColor='white'
          theme={{
            colors: {
              text: 'white',
              // placeholder: 'white',
              primary: 'white',
              underlineColor: 'transparent',
              outline: 'white',
              background: 'white'
            },
            roundness: 25,
          }}
        />

        {/* Login Button */}
        <View style={styles.ButtonContainer}>
          <Button
            mode="contained"
            style={styles.loginButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.loginButtonLabel}
          >
            Login
          </Button>

          {/* Divider */}
          <Text style={styles.orText}>or</Text>

          {/* Create Account Button */}
          <Button
            mode="outlined"
            style={styles.createAccountButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.createButtonLabel}
            onPress={() => navigate.navigate('Register')}
          >
            Create an account
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b5f56',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5,
  },
  logo: {
    width: 90,
    height: 90,
    backgroundColor: '#2b5f56',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#ff9900',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  truckImage: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
  },
  input: {
    width: '75%',
    marginBottom: 15,
    backgroundColor: 'transparent',
    borderColor: 'white',
    color: 'white'
  },
  loginButton: {
    width: '85%',
    backgroundColor: '#2b5f56',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonContent: {
    paddingVertical: 5,
  },
  loginButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  createButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2b5f56',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  createAccountButton: {
    width: '85%',
    borderColor: '#8ac7c7',
    borderRadius: 25,
    color: '#2b5f56',
  },
  ButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 40,
    paddingBottom:40,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: '100%',
  },
});

export default LoginScreen;
