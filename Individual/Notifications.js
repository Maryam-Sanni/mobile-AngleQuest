import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const NotificationItem = ({ title, time, message, isNew }) => (
  <View style={{ marginTop: 20 }}>
  <TouchableOpacity>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: '#206C00' }}>{title}</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <View style={{ width: 8, height: 8, backgroundColor: isNew ? 'pink' : 'lightgreen', borderRadius: 5 }} />
        <Text style={{ fontSize: 14, marginLeft: 10, marginTop: -5 }}>{time}</Text>
      </View>
    </View>
    <Text style={{ flex: 1, fontSize: 16, marginTop: 5 }}>{message}</Text>
    </TouchableOpacity>
  </View>
);

export default function MyComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f7fff4", padding: 20 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Notifications</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1185e61deafb3a111149fd6729b0779a7b7fdc599bfe5f2c70c672d29671efa3?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
              style={{ width: 24, height: 24, marginRight: 5 }}
              resizeMode='contain'
            />
            <Text style={{ fontSize: 14, color: 'green' }}>Mark all as read</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'green' }}>View all</Text>
          <Text style={{ fontSize: 16, marginLeft: 10, color: 'grey' }}>Unread</Text>
          <Text style={{ fontSize: 16, color: 'grey', marginLeft: 10 }}>Saved</Text>
        </View>

        <NotificationItem
          title="Interview Booked"
          time="5 min ago"
          message="You successfully booked an interview session with John Smith for the following date and time Mon, 12th April 2024 from 09:30pm - 10:30pm. See details here..."
          isNew={true}
        />
        <NotificationItem
          title="Feedback"
          time="3 hrs ago"
          message="John Smith has given you feedback on the interview session that happened on the following date and time Mon, 12th April 2024 from 09:30pm - 10:30pm."
          isNew={true}
        />
        <NotificationItem
          title="Reminder on upcoming session!"
          time="1 day ago"
          message="Your interview session with Mr John Smith scheduled for Mon, 12th April 2024 from 09:30pm to 10:30pm is about to start. You have 15 minutes left before the session begins."
          isNew={true}
        />
        <NotificationItem
          title="Feedback shared!"
          time="3 days ago"
          message="Your interview feedback with Mr John Smith has been shared with a Recruiter."
          isNew={false}
        />
        <NotificationItem
          title="Congratulations! You’ve been hired"
          time="4 days ago"
          message="Congratulations Adebayo! You have been selected for the role of an Architectural Engineer at Zulinsky Engineering Agency, Switzerland. Details of your employment have been sent to your mail."
          isNew={false}
        />
        <NotificationItem
          title="Session started"
          time="4 days ago"
          message="Your booked session with Mr John Smith just commenced at 09:30pm and it ends exactly 10:30pm (1hr)."
          isNew={false}
        />
        <NotificationItem
          title="Session ended"
          time="Tue Nov 13"
          message="Your booked session with Mr John Smith just ended at 10:30pm (1hr). Click here to leave a feedback."
          isNew={false}
        />
        <NotificationItem
          title="New Job Alert!"
          time="Tue Nov 13"
          message="Exciting opportunity: Architectural Engineer position available at New York Engineering Department in New York, USA. Check out this role now."
          isNew={false}
        />
      </ScrollView>
    </View>
  );
}
