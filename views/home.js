import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 items-center px-4">
        {/* Perfil */}
        <View className="w-full flex-row justify-between items-center mt-4">
          <Image
            className="w-10 h-10 rounded-full"
            source={{ uri: 'https://your-profile-image-url.com' }}
          />
          <Text className="text-white text-lg">Marcus</Text>
        </View>

        {/* Imagen del coche */}
        <Image
          className="w-full h-40 mt-4"
          source={{ uri: 'https://your-car-image-url.com' }}
          resizeMode="contain"
        />
        <Text className="text-white text-base mt-2">Volkswagen ID.3, 2023</Text>

        {/* Opciones del menú */}
        <View className="w-full mt-6 space-y-4">
          <TouchableOpacity className="flex-row items-center bg-gray-800 p-4 rounded-lg">
            <Icon name="car" size={24} color="white" />
            <View className="ml-4">
              <Text className="text-white text-lg">Travel</Text>
              <Text className="text-gray-400 text-sm">Select Destination: Central Camionera 2 km</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-gray-800 p-4 rounded-lg">
            <Icon name="car" size={24} color="white" />
            <View className="ml-4">
              <Text className="text-white text-lg">Our Vehicles</Text>
              <Text className="text-gray-400 text-sm">Choose your preferred vehicle</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-gray-800 p-4 rounded-lg">
            <Icon name="map-marker" size={24} color="white" />
            <View className="ml-4">
              <Text className="text-white text-lg">Favorite Spots</Text>
              <Text className="text-gray-400 text-sm">Paseo Durango 4km</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-gray-800 p-4 rounded-lg">
            <Icon name="headset" size={24} color="white" />
            <View className="ml-4">
              <Text className="text-white text-lg">Support</Text>
              <Text className="text-gray-400 text-sm">Need Help?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menú de navegación */}
      <View className="flex-row justify-between items-center p-4 bg-gray-900">
        <TouchableOpacity className="items-center">
          <Icon name="home" size={24} color="white" />
          <Text className="text-white text-sm">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Icon name="map" size={24} color="gray" />
          <Text className="text-gray-400 text-sm">Map</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Icon name="account" size={24} color="gray" />
          <Text className="text-gray-400 text-sm">User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}