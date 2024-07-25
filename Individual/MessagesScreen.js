import React from 'react';
import { View, ScrollView, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const data = [
  {
    id: '1',
    name: 'Amelia Harry',
    message: 'Hello John, This Amelia, This is...',
    time: '10:00 AM',
    messagecount: '0',
    avatar: require('../assets/useravatar1.png')
  },
  {
    id: '2',
    name: 'Bwanbale Akiki',
    message: 'I will send my CV to you sir for proper',
    time: '12:08 PM',
    messagecount: '1',
    avatar: require('../assets/useravatar2.png')
  },
  {
    id: '3',
    name: 'Mardiyyah Sulaimon',
    message: 'Ready for the meeting?',
    time: '05:23 PM',
    messagecount: '3',
    avatar: require('../assets/useravatar4.png')
  },
  {
    id: '4',
    name: 'Software Eng. Hub',
    message: 'Lets reconvene same time tomorrow',
    time: 'Yesterday',
    messagecount: '0',
    avatar: require('../assets/useravatar.jpg')
  },
  {
    id: '5',
    name: 'Nathan Arthur',
    message: 'You are doing great! Dont doubt your potentials...',
    time: 'Yesterday',
    messagecount: '0',
    avatar: require('../assets/useravatar5.jpg')
  },
  {
    id: '6',
    name: 'Microsoft Hub',
    message: 'Remember youre here to learn',
    time: '29/05/24',
    messagecount: '5',
    avatar: require('../assets/useravatar.jpg')
  },
  {
    id: '7',
    name: 'SAP Hub',
    message: 'Welcome to the SAP coaching hub',
    time: '27/05/24',
    messagecount: '0',
    avatar: require('../assets/useravatar.jpg')
  },
  {
    id: '8',
    name: 'Akeju Benson',
    message: 'Good morning John, Lets continue from...',
    time: '13/04/24',
    messagecount: '10',
    avatar: require('../assets/useravatar5.jpg')
  },
  {
    id: '9',
    name: 'Royale Charles',
    message: 'Hi Charles, it is a great morning...',
    time: '10/04/24',
    messagecount: '0',
    avatar: require('../assets/useravatar2.png')
  },
  {
    id: '10',
    name: 'Mia Gonzalez',
    message: 'Hi',
    time: '07/02/24',
    messagecount: '0',
    avatar: require('../assets/useravatar4.png')
  },
];

function CustomHeader() {
  return (
    <View style={{ padding: 10, backgroundColor: '#f7fff4' }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'flex-start', borderBottomWidth: 1, borderBottomColor: 'grey', padding: 16 }}>Chats</Text>
    </View>
  );
}

function ChatListScreen() {
  const navigation = useNavigation(); // Initialize navigation

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Chat', { userId: item.id })}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5', flex: 1, marginRight: 10}}>
        <Image source={item.avatar} style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />
        <View style={{ backgroundColor: '#f7fff4', flex: 1 }}>
          <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.name}</Text>
          <Text style={{ color: '#777', fontSize: 14 }}>{item.message}</Text>
        </View>
        <View style={{ flexDirection: 'column', position: 'absolute', right: 5 }}>
          <Text style={{ color: '#777', fontSize: 13, marginBottom: 5 }}>{item.time}</Text>
          <View>
            {item.messagecount !== '0' && (
              <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 10, textAlign: 'center' }}>{item.messagecount}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ backgroundColor: '#f7fff4' }}>
      <CustomHeader />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default ChatListScreen;
