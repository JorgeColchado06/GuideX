import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationBar from '../components/navigationBar.js'
import { userContext } from '../App.js';
import { getUser } from '../api.js';


export default function HistoryScreen() {
  const [user, setUser] = useState([])
  const { userID } = useContext(userContext);

  const handleUser = async (userId) => {
    const data = await getUser(userId);
    setUser(data);
  }

  useEffect(() => {
    handleUser(userID);
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121111' }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ width: 430, height: 932, alignSelf: 'center' }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 46, marginLeft: 31 }}>
            <View>
              <Text style={{ color: 'white', fontSize: 41, lineHeight: 52, fontFamily: 'Allerta' }}>
                {user.username}
              </Text>
            </View>
            <Image
              style={{ width: 110, height: 111, marginLeft: 'auto' }}
              resizeMode="cover"
            />
          </View>

          {/* Title Section */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 46 }}>
            <Icon name="book-open-outline" size={40} color="white" />
            <Text style={{ color: 'white', fontSize: 38, lineHeight: 43, marginLeft: 10, fontFamily: 'Allerta' }}>
              History
            </Text>
          </View>

          {/* History Cards */}
          <View style={{ paddingHorizontal: 26 }}>
            {/* Card 1 */}
            <View style={{ backgroundColor: '#232323', borderRadius: 10, padding: 15, marginTop: 45 }}>
              <Text style={{ color: '#b2b1b1', fontSize: 18, fontFamily: 'Allerta' }}>12/08/24</Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 14 }}>
                8:42 pm: <Text style={{ color: 'white' }}>Paseo Durango</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                6:20 pm: <Text style={{ color: 'white' }}>El Red</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                3:40 pm: <Text style={{ color: 'white' }}>EL Blue</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                10:24 am: <Text style={{ color: 'white' }}>Catedral 20 Nov...</Text>
              </Text>
            </View>

            {/* Card 2 */}
            <View style={{ backgroundColor: '#232323', borderRadius: 10, padding: 15, marginTop: 10 }}>
              <Text style={{ color: '#b2b1b1', fontSize: 18, fontFamily: 'Allerta' }}>10/08/24</Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 14 }}>
                6:54 pm: <Text style={{ color: 'white' }}>Kiromi sushi</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                5:20 pm: <Text style={{ color: 'white' }}>Mamitas Puebla</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                1:28 pm: <Text style={{ color: 'white' }}>Calle Adolfo lop...</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                11:56 am: <Text style={{ color: 'white' }}>Cbtis #110</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                9:36 am: <Text style={{ color: 'white' }}>Ley Juventud</Text>
              </Text>
              <Text style={{ color: '#b2b1b1', fontSize: 20, fontFamily: 'Allerta', marginTop: 10 }}>
                8:10 am: <Text style={{ color: 'white' }}>Paseo Durango</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavigationBar/>
    </SafeAreaView>
  );
}

