import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationBar from '../components/navigationBar.js';
import { getUser } from '../api.js'
import { userContext } from '../App.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UserScreen() {
  const [ user, setUser ] = useState([])
  const { userID } = useContext(userContext)
  const navigation = useNavigation();

  const handleUser = async (userId) => {
    const data = await getUser(userId);
    setUser(data);
  }

  useEffect(() => {
    handleUser(userID);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121111' }}>
      <View style={{ width: 430, height: 932, alignSelf: 'center', overflow: 'hidden' }}>
        <View style={{ marginTop: 46, marginLeft: 31 }}>
          <Text style={{ color: '#ffffff', fontSize: 41, lineHeight: 52, fontFamily: 'Allerta' }}>
            {user.username}
          </Text>
          <Image
            style={{ width: 110, height: 111, position: 'absolute', top: 0, left: 236 }}
            resizeMode="cover"
          />
        </View>

        {/* Botones de opciones */}
        {[
          { icon: 'map-marker', text: 'Travel', subText: 'Select Destination: Central Camionera 2 km', onPress: () => navigation.navigate('Map') },
          { icon: 'history', text: 'History', subText: 'Last Trip: Central Camionera', onPress: () => navigation.navigate('History') },
          { icon: 'logout', text: 'Log Out', onPress: () => navigation.navigate('Login') },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
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
          </TouchableOpacity>
        ))}
      </View>
      <NavigationBar/>
    </SafeAreaView>
  );
}
