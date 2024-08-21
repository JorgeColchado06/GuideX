import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationBar from '../components/navigationBar.js';

export default function UserScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121111' }}>
      <View style={{ width: 430, height: 932, alignSelf: 'center', overflow: 'hidden' }}>
        <View style={{ marginTop: 46, marginLeft: 31 }}>
          <Text style={{ color: '#ffffff', fontSize: 41, lineHeight: 52, fontFamily: 'Allerta' }}>
            Marcus{'\n'}Gordon
          </Text>
          <Image
            style={{ width: 110, height: 111, position: 'absolute', top: 0, left: 236 }}
            resizeMode="cover"
          />
        </View>

        {/* Botones de opciones */}
        {[
          { icon: 'map-marker', text: 'Travel', subText: 'Select Destination: Central Camionera 2 km' },
          { icon: 'history', text: 'History', subText: 'Last Trip: Central Camionera' },
          { icon: 'cog', text: 'Settings' },
          { icon: 'logout', text: 'Log Out' },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              width: 378,
              height: 71,
              backgroundColor: '#232323',
              borderRadius: 10,
              marginTop: index === 0 ? 54 : 29,
              marginLeft: 26,
            }}
          >
            <Icon
              name={item.icon}
              size={20}
              color="#ffffff"
              style={{ position: 'absolute', top: 16, left: 30 }}
            />
            <Text style={{ color: '#ffffff', fontSize: 18, lineHeight: 23, fontFamily: 'Allerta', position: 'absolute', top: 11, left: 66 }}>
              {item.text}
            </Text>
            {item.subText && (
              <Text style={{ color: '#b2b1b1', fontSize: 13, lineHeight: 17, fontFamily: 'Allerta', position: 'absolute', top: 35, left: 66 }}>
                {item.subText}
              </Text>
            )}
          </View>
        ))}

        {/* Barra de navegación */}
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}
