import { View, Text, SafeAreaView, Image, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 24 }}>
          <Image
            style={{ width: 135, height: 130, marginTop: 93 }}
            source={require("../assets/Icono.png")}
          />
          <Text style={{ color: 'white', fontSize: 24, marginTop: 32 }}>Guide X</Text>
          <Text style={{ color: 'white', fontSize: 40, marginTop: 64 }}>Welcome!</Text>

          <View style={{ width: '100%', marginTop: 64 }}>
            <Text style={{ color: 'white', fontSize: 14, marginBottom: 8 }}>USERNAME</Text>
            <TextInput
              style={{
                width: '100%',
                height: 50,
                backgroundColor: '#2d2d2d',
                color: 'white',
                fontSize: 16,
                paddingHorizontal: 16,
                borderRadius: 8,
                borderColor: '#474747',
                borderWidth: 1,
              }}
              placeholder="Enter your username"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
            />
          </View>

          <View style={{ width: '100%', marginTop: 24 }}>
            <Text style={{ color: 'white', fontSize: 14, marginBottom: 8 }}>PASSWORD</Text>
            <View style={{ position: 'relative' }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: '#2d2d2d',
                  color: 'white',
                  fontSize: 16,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  borderColor: '#474747',
                  borderWidth: 1,
                }}
                placeholder="Enter your password"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                secureTextEntry={!passwordVisible}
              />
              <TouchableHighlight
                style={{ position: 'absolute', top: 12, right: 16 }}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#ffffff"
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight style={{ marginTop: 8, alignSelf: 'flex-end' }}>
              <Text style={{ color: '#A3A3A3', fontSize: 14 }}>Forgot Password?</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight
            style={{
              width: '100%',
              height: 65,
              backgroundColor: '#2d2d2d',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              borderColor: 'rgba(255, 255, 255, 0.59)',
              borderWidth: 1,
              marginTop: 56,
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
