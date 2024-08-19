
import { View, Text, SafeAreaView, Image, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-black">
        <View className="flex-1 items-center px-6">
          <Image
            className="w-[135px] h-[130px] mt-[93px]"
            source={require("../assets/Icono.png")}
          />
          <Text className="text-white text-[24px] mt-[32px]">Guide X</Text>
          <Text className="text-white text-[40px] mt-16">Welcome!</Text>

          <View className="w-full mt-16">
            <Text className="text-white text-sm mb-2">USERNAME</Text>
            <TextInput
              className="w-full h-[50px] bg-gray-800 text-white text-base px-4 rounded-lg border border-gray-700"
              placeholder="Enter your username"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
            />
          </View>

          <View className="w-full mt-6">
            <Text className="text-white text-sm mb-2">PASSWORD</Text>
            <View className="relative">
              <TextInput
                className="w-full h-[50px] bg-gray-800 text-white text-base px-4 rounded-lg border border-gray-700"
                placeholder="Enter your password"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                secureTextEntry={!passwordVisible}
              />
              <TouchableHighlight
                className="absolute top-4 right-4 left-[335px]"
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#ffffff"
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight className="mt-2 self-end">
              <Text className="text-gray-400 text-sm">Forgot Password?</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight
          className="w-full h-[65px] bg-gray-800 text-white text-base justify-center items-center rounded-2xl border border-[#ffffff96] mt-14"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-white text-2xl">Login</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
