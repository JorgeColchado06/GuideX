import { View, Text, SafeAreaView, Image, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Login } from '../api.js'

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    "username": "",
    "pass": ""
  })

  const handleChange = (name, value) => {
    setUser({... user, [name]: value})
    console.log(user)
  }

  const handleLogin = async () => {
    console.log(user);
    try {
        const log = await Login(user);
        if (log) {
            navigation.navigate('Map');
        } else {
            console.log('Tas mal vato');
            Alert.alert(
                "Datos incorrectos",
                "El usuario o la contraseña no son correctos.",
                [{ text: "OK" }]
            );
        }
    } catch (e) {
        console.log(e);
    }
};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/Icono.png")}
          />
          <Text style={styles.title}>Guide X</Text>
          <Text style={styles.welcome}>Welcome!</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>USERNAME</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
              onChangeText={(text) => handleChange('username', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>PASSWORD</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                secureTextEntry={!passwordVisible}
                onChangeText={(text) => handleChange('pass', text)}
              />
              <TouchableHighlight
                style={styles.eyeIconContainer}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#ffffff"
                />
              </TouchableHighlight>
            </View>
          </View>

          <TouchableHighlight
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableHighlight>
        </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 135,
    height: 130,
    marginTop: 93,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginTop: 32,
  },
  welcome: {
    color: 'white',
    fontSize: 40,
    marginTop: 64,
  },
  inputContainer: {
    width: '100%',
    marginTop: 24,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: '#4d4d4d',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 15,
    right: 16,
  },
  forgotPassword: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#b3b3b3',
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    height: 65,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: '#ffffff96',
    borderWidth: 1,
    marginTop: 56,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
