import React, { useState } from 'react';
import { View, Text, Image, CheckBox, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();
  const [isNewsChecked, setIsNewsChecked] = useState(false);
  const [isTipsChecked, setIsTipsChecked] = useState(false);
  const [isMessagesChecked, setIsMessagesChecked] = useState(false);
  const [isFeedbacksChecked, setIsFeedbacksChecked] = useState(false);
  const [isRemindersChecked, setIsRemindersChecked] = useState(false);
  const [isPushFeedbacksChecked, setIsPushFeedbacksChecked] = useState(false);
  const [isPushRemindersChecked, setIsPushRemindersChecked] = useState(false);


  return (
    <View style={{backgroundColor: '#f7fff4', flex: 1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500  }}>
        <View style={{ flex: 1, paddingHorizontal: 8, paddingVertical: 20, backgroundColor: '#f7fff4' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <View style={{ flex: 1, maxWidth: '100%' }}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#206C00', marginBottom: 20 }}>Notification Settings</Text>
              </View>
              <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                <View>
                  <Text style={{ fontSize: 16, color: '#206C00', fontWeight: 'bold' }}>Email notifications</Text>
                  <Text style={{ fontSize: 14, color: 'black', marginBottom: 20 }}>Get emails to find out what’s going on when you’re not online. You can turn these off.</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>News and updates</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>Receive the latest news about products and feature updates.</Text>
                    <CheckBox
        style={{ marginRight: 10}}
        value={isNewsChecked}
        onValueChange={setIsNewsChecked}
      />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Tips and tutorials</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>Tips on getting more out of our services.</Text>
                    <CheckBox
        style={{ marginRight: 10}}
        value={isTipsChecked}
        onValueChange={setIsTipsChecked}
      />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Messages</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>Message notifications relating to career advice sent to email.</Text>
                    <CheckBox
        style={{ marginRight: 10}}
        value={isMessagesChecked}
        onValueChange={setIsMessagesChecked}
      />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Feedbacks</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>Feedbacks on interview sessions and career advoces.</Text>
                    <CheckBox
        style={{ marginRight: 10}}
        value={isFeedbacksChecked}
        onValueChange={setIsFeedbacksChecked}
      />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Reminders</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>These are notifications to remind you of updates you might have missed.</Text>
                    <CheckBox
        style={{ marginRight: 10}}
        value={isRemindersChecked}
        onValueChange={setIsRemindersChecked}
      />
                  </View>
                </View>
              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 30, marginLeft: 10, marginRight: 50 }} />

              <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                <View>
                  <Text style={{ fontSize: 16, color: '#206C00', fontWeight: 'bold', marginTop: 30 }}>Push notifications</Text>
                  <Text style={{ fontSize: 14, color: 'black' }}>Get push notifications to find out what’s going on when you’re online. </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Reminders</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 14, color: 'black' }}>These are notifications to remind you of updates you might have missed.</Text>
                  <CheckBox
        style={{ marginRight: 10}}
        value={isPushFeedbacksChecked}
        onValueChange={setIsPushFeedbacksChecked}
      />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', marginTop: 10 }}>Feedbacks</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 14, color: 'black' }}>Feedbacks on interview sessions and career advoces.</Text>
                  <CheckBox
        style={{ marginRight: 10}}
        value={isPushRemindersChecked}
        onValueChange={setIsPushRemindersChecked}
      />
                </View>
              </View>
            </View>

            </View>
            </View>
            </ScrollView>
      </View>
  );
}

export default MyComponent;

const styles = StyleSheet.create({
  cardContainer: {
    width: '16%',
    height: 180,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
    marginBottom: 5,
  },
});
