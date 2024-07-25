import React, { useState, useRef } from 'react';
import { View, ScrollView, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    name: 'Amelia Harry',
    message: 'Hello John, This Amelia, This is...',
    time: '10:00 AM',
    messagecount: '0',
    avatar: require('../assets/useravatar1.png'),
    hub: 'Hub1'
  },
  {
    id: '2',
    name: 'Bwanbale Akiki',
    message: 'I will send my CV to you sir for proper',
    time: '12:08 PM',
    messagecount: '1',
    avatar: require('../assets/useravatar2.png'),
    hub: 'Hub2'
  },
  {
    id: '3',
    name: 'Mardiyyah Sulaimon',
    message: 'Ready for the meeting?',
    time: '05:23 PM',
    messagecount: '3',
    avatar: require('../assets/useravatar4.png'),
    hub: 'Hub3'
  },
  {
    id: '4',
    name: 'Software Eng. Hub',
    message: 'Lets reconvene same time tomorrow',
    time: 'Yesterday',
    messagecount: '0',
    avatar: require('../assets/useravatar.jpg'),
    hub: 'Hub4'
  },
  {
    id: '5',
    name: 'Nathan Arthur',
    message: 'You are doing great! Dont doubt your potentials...',
    time: 'Yesterday',
    messagecount: '0',
    avatar: require('../assets/useravatar5.jpg'),
    hub: 'Hub5'
  },
  {
    id: '6',
    name: 'Microsoft Hub',
    message: 'Remember youre here to learn',
    time: '29/05/24',
    messagecount: '5',
    avatar: require('../assets/useravatar.jpg'),
    hub: 'Hub2'
  },
  {
    id: '7',
    name: 'SAP Hub',
    message: 'Welcome to the SAP coaching hub',
    time: '27/05/24',
    messagecount: '0',
    avatar: require('../assets/useravatar.jpg'),
    hub: 'Hub1'
  },
  {
    id: '8',
    name: 'Akeju Benson',
    message: 'Good morning John, Lets continue from...',
    time: '13/04/24',
    messagecount: '10',
    avatar: require('../assets/useravatar5.jpg'),
    hub: 'Hub4'
  },
  {
    id: '9',
    name: 'Royale Charles',
    message: 'Hi Charles, it is a great morning...',
    time: '10/04/24',
    messagecount: '0',
    avatar: require('../assets/useravatar2.png'),
    hub: 'Hub5'
  },
  {
    id: '10',
    name: 'Mia Gonzalez',
    message: 'Hi',
    time: '07/02/24',
    messagecount: '0',
    avatar: require('../assets/useravatar4.png'),
    hub: 'Hub3'
  },
];

function CustomHeader({ onPressAllChats, onPressHub1, onPressHub2, onPressHub3, onPressHub4, onPressHub5, selectedHub, scrollViewRef }) {
  const scrollLeft = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const scrollRight = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={{ padding: 16, width: '100%', backgroundColor: '#f7fff4' }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'left', padding: 16,}}>Chats</Text>
      <TouchableOpacity onPress={scrollLeft} style={{ position: 'absolute', left: 10, top: 90 }}>
        <Image source={require('../assets/left-arrow.png')} style={{ width: 10, height: 10 }} />
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }} ref={scrollViewRef}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={onPressAllChats}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, borderColor: selectedHub === null ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === null ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, marginLeft: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === null ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>All Chats</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHub1}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, marginLeft: 10, paddingVertical: 5, borderRadius: 10, borderColor: selectedHub === 'Hub1' ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === 'Hub1' ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === 'Hub1' ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>SAP FI Hub</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHub2}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, marginLeft: 10, paddingVertical: 5, borderRadius: 10, borderColor: selectedHub === 'Hub2' ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === 'Hub2' ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === 'Hub2' ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>Microsoft Azure Hub</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHub3}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, marginLeft: 10, borderRadius: 10, borderColor: selectedHub === 'Hub3' ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === 'Hub3' ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === 'Hub3' ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>Jr. Power Point Hub</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHub4}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginLeft: 5, borderColor: selectedHub === 'Hub4' ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === 'Hub4' ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === 'Hub4' ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>Snr. Power Point Hub</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHub5}>
            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginLeft: 5, borderColor: selectedHub === 'Hub5' ? '#3D5C3A' : '#63EC55', backgroundColor: selectedHub === 'Hub5' ? '#3D5C3A' : null, alignItems: 'center', marginTop: 10, marginLeft: 10, borderWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 13, color: selectedHub === 'Hub5' ? 'white' : '#3D5C3A', textAlign: 'center', fontWeight: '600' }}>Java Programming Hub</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={scrollRight} style={{ position: 'absolute', right: 10, top: 90 }}>
        <Image source={require('../assets/right-arrow.png')} style={{ width: 10, height: 10 }} />
      </TouchableOpacity>
    </View>
  );
}

function ChatListScreen() {
  const [selectedHub, setSelectedHub] = useState(null);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const filteredData = selectedHub ? data.filter(user => user.hub === selectedHub) : data;

  const handlePressAllChats = () => {
    setSelectedHub(null);
  };

  const handlePressHub1 = () => {
    setSelectedHub('Hub1');
  };

  const handlePressHub2 = () => {
    setSelectedHub('Hub2');
  };

  const handlePressHub3 = () => {
    setSelectedHub('Hub3');
  };

  const handlePressHub4 = () => {
    setSelectedHub('Hub4');
  };
  
  const handlePressHub5 = () => {
    setSelectedHub('Hub5');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Chat', { userId: item.id })}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5', width: '100%', backgroundColor: '#f7fff4', }}>
        <Image source={item.avatar} style={{ width: 36, height: 36, borderRadius: 18, marginRight: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '500', fontSize: 15,}}>{item.name}</Text>
          <Text style={{ color: '#777', fontSize: 13,}}>{item.message}</Text>
        </View>
        <View style={{ flexDirection: 'column'}}>
        <Text style={{ color: '#777', fontSize: 13, marginBottom: 5 }}>{item.time}</Text>
        <View>
        {item.messagecount !== '0' && (
          <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 10 }}>{item.messagecount}</Text>
          </View>
        )}
      </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: '#f7fff4' }}>
      <CustomHeader
        onPressAllChats={handlePressAllChats}
        onPressHub1={handlePressHub1}
        onPressHub2={handlePressHub2}
        onPressHub3={handlePressHub3}
        onPressHub4={handlePressHub4}
        onPressHub5={handlePressHub5}
        selectedHub={selectedHub}
        scrollViewRef={scrollViewRef}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ChatListScreen;
