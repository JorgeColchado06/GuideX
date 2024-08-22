import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationBar from '../components/navigationBar';

export default function HomeScreen({ navigation }) {
  // Función que maneja la navegación al presionar la imagen o el nombre
  const handleProfilePress = () => {
    // Aquí puedes navegar a la pantalla deseada
    navigation.navigate('ProfileScreen'); // Cambia 'ProfileScreen' por la pantalla a la que quieres navegar
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Perfil */}
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require('../assets/perfil.png')}
          />
          <Text style={styles.profileName}>Marcus</Text>
        </TouchableOpacity>

        {/* Imagen del coche */}
        <Image
          style={styles.carImage}
          source={require('../assets/carroperro.png')}
          resizeMode="contain"
        />
        <Text style={styles.carText}>Volkswagen ID.3, 2023</Text>

        {/* Opciones del menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuOption}>
            <Icon name="car" size={24} color="white" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Travel</Text>
              <Text style={styles.menuSubText}>Select Destination: Central Camionera 2 km</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <Icon name="car" size={24} color="white" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Our Vehicles</Text>
              <Text style={styles.menuSubText}>Choose your preferred vehicle</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <Icon name="map-marker" size={24} color="white" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Favorite Spots</Text>
              <Text style={styles.menuSubText}>Paseo Durango 4km</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <Icon name="headset" size={24} color="white" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Support</Text>
              <Text style={styles.menuSubText}>Need Help?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menú de navegación */}
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 19.175,
    color: '#ffffff',
  },
  carImage: {
    width: '100%',
    height: 160,
    marginTop: 16,
  },
  carText: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
  menuContainer: {
    width: '100%',
    marginTop: 24,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  menuTextContainer: {
    marginLeft: 16,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
  menuSubText: {
    color: '#ccc',
    fontSize: 14,
  },
  navigationMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1c1c1e',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 14,
  },
  navSubText: {
    color: 'gray',
    fontSize: 14,
  },
});
