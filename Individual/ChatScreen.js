import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function ChatScreen({ route }) {
  const { userId } = route.params;
  const navigation = useNavigation();
  
  const userData = {
    1: { name: 'Amelia Harry', avatar: require('../assets/useravatar1.png'), expertise: 'Expert' },
    2: { name: 'Bwanbale Akiki', avatar: require('../assets/useravatar2.png'), expertise: 'Expert' },
    3: { name: 'Mardiyyah Sulaimon', avatar: require('../assets/useravatar4.png'), expertise: 'Expert' },
    4: { name: 'Software Eng. Hub', avatar: require('../assets/useravatar.jpg'), expertise: 'Group' },
    5: { name: 'Nathan Arthur', avatar: require('../assets/useravatar5.jpg'), expertise: 'Expert' },
    6: { name: 'Microsoft Hub', avatar: require('../assets/useravatar.jpg'), expertise: 'Group' },
    7: { name: 'SAP Hub', avatar: require('../assets/useravatar.jpg'), expertise: 'Group' },
    8: { name: 'Akeju Benson', avatar: require('../assets/useravatar5.jpg'), expertise: 'SAP FI - Hub Moderator' },
  };

  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  const renderSend = (props) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginBottom: 10}}>
      <TouchableOpacity onPress={handleFilePick}>
      <View style={{ marginBottom: 5 }}>
      <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9afdd28554ea94baa9f576588ffd7e85d2ea305e799b46b23fc2336715ed2398?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
            style={{ width: 25, height: 25, marginRight: 15 }}
          />
        </View>
      </TouchableOpacity>
      {isRecording ? (
        <TouchableOpacity onPress={stopRecording}>
        <View style={{ marginBottom: 5 }}>
        <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b6ee6e3efc0882450b47e4387504c352faa72f342dc8adc7741cf3ed2a19f02?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startRecording}>
        <View style={{ marginBottom: 5 }}>
        <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7faa777c54d32d03bd2952b24dd7b363b4e5cd731ca521b853a6b213ebf2f277?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
              style={{ width: 25, height:25, marginRight: 10 }}
            />
          </View>
        </TouchableOpacity>
      )}
      <Send {...props}>
        <View style={{ marginRight: 10, marginLeft: 5, marginBottom: 15}}>
          <Text style={{ color: '#206C00', fontWeight: 'bold', fontSize: 16 }}>Send</Text>
        </View>
      </Send>
    </View>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: { backgroundColor: 'grey' },
        right: { backgroundColor: '#669966' },
      }}
    />
  );

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      if (result.type === 'success') {
        const { uri: fileUri, name: fileName, type: fileType } = result;
        const message = {
          _id: Math.random().toString(36).substring(7),
          text: '',
          createdAt: new Date(),
          user: { _id: 1 },
          file: { uri: fileUri, name: fileName, type: fileType },
        };
        onSend([message]);
      }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const startRecording = async () => {
    try {
      const { sound, status } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(sound);
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      setIsRecording(false);
      const { uri } = recording.getURI();
      const message = {
        _id: Math.random().toString(36).substring(7),
        text: '',
        createdAt: new Date(),
        user: { _id: 1 },
        audio: uri,
      };
      onSend([message]);
    } catch (error) {
      console.error('Failed to stop recording:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
  <Image source={require('../assets/left-arrow.png')} style={{ width: 15, height: 15, marginRight: 10 }} />
</TouchableOpacity>
        <Image source={userData[userId].avatar} style={{ width: 40, height: 40, borderRadius: 20 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{userData[userId].name}</Text>
          <Text style={{ fontStyle: 'normal', fontSize: 14 }}>{userData[userId].expertise}</Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#F5FFFA' }}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{ _id: 1 }}
          placeholder="Type a message..."
          renderSend={renderSend}
          renderBubble={renderBubble}
          textInputStyle={{ marginBottom: 10 }}
        />
      </View>

      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}

export default ChatScreen;
