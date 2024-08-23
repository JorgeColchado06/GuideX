import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapViewDirections from 'react-native-maps-directions';
import LoginScreen from './views/login.js';
import UserScreen from './views/usuario.js';
import HistoryScreen from './views/historial.js';
import HomeScreen from './views/home.js';
import NavigationBar from './components/navigationBar.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MapScreen() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    })();
  }, []);

  const handlePlaceSelect = (data, details) => {
    const { lat, lng } = details.geometry.location;
    setDestination({
      latitude: lat,
      longitude: lng,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <MapView
          style={{ flex: 1 }}
          region={location}
          showsUserLocation={true}
        >
          {location && destination && (
            <>
              <Marker coordinate={destination} title="Destination" />
              <MapViewDirections
                origin={location}
                destination={destination}
                apikey="AIzaSyDddURt1vWEhQN0cfCe2wUf9LPaaHJNdIU"
                strokeWidth={5}
                strokeColor="blue"
              />
            </>
          )}
        </MapView>

        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={handlePlaceSelect}
          query={{
            key: "AIzaSyDddURt1vWEhQN0cfCe2wUf9LPaaHJNdIU",
            language: "en",
          }}
          styles={{
            textInputContainer: {
              paddingHorizontal: 0,
              marginTop: 2,
            },
            textInput: {
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: 8,
              paddingVertical: 12,
              paddingHorizontal: 10,
              padding: 4,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
        />

        <View style={{ backgroundColor: "#121111", padding: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#333",
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => {
              if (destination) {
                Alert.alert("Ruta Iniciada", "Se ha iniciado la ruta hacia tu destino.");
              } else {
                Alert.alert("Sin destino", "Selecciona un destino para iniciar la ruta.");
              }
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Empezar Ruta</Text>
          </TouchableOpacity>
        </View>

        <NavigationBar />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}