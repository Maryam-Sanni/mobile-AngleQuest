import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

function BusinessDrawerContent({ navigation }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const menuItems = [
    { label: "Home", icon: require('../assets/icons8-home-50.png') },
    { label: "Employees", icon: require('../assets/icons8-briefcase-48.png') },
    { label: "Managers", icon: require('../assets/icons8-briefcase-64.png') },
    { label: "Coach", icon: require('../assets/icons8-briefcase-49.png') },
    { label: "Teams", icon: require('../assets/icons8-teams-50.png') },
    { label: "Performance", icon: require('../assets/icons8-performance-48.png') },
    { label: "Analytics", icon: require('../assets/icons8-analytics-64.png') },
    { label: "Schedules", icon: require('../assets/icons8-calendar-50.png') },
    { label: "Interviews", icon: require('../assets/icons8-people-48.png') },
    { label: "Subscription", icon: require('../assets/icons8-card-50.png') },
    { label: "Notifications", icon: require('../assets/icons8-notification-50.png') },
    {
      label: "Settings",
      icon: require('../assets/icons8-settings-50.png'),
      submenu: [
        { label: "Account Settings" },
        { label: "Notification Settings" },
        { label: "Password" },
        { label: "Billings and Payment" },
        { label: "Language"}
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (item.submenu) {
      setExpandedItem(expandedItem === item.label ? null : item.label);
    } else {
      navigation.navigate(item.label);
    }
  };

  const handleProfileClick = () => {
    navigation.navigate(' ');
  };

  const handleLogout = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
       source={require('../assets/33.png')}
        style={{ width: 40, height: 40}}
      />
        <Text style={styles.logoText}>AngleQuest</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {menuItems.map((menuItem, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleItemClick(menuItem)}
            >
              {menuItem.icon && (
                <Image source={menuItem.icon} style={{ width: 20, height: 20, marginRight: 10 }} />
              )}
              <Text style={styles.text}>{menuItem.label}</Text>
            </TouchableOpacity>
            {menuItem.submenu && expandedItem === menuItem.label && (
              <View style={styles.submenuContainer}>
                {menuItem.submenu.map((submenuItem, subIndex) => (
                  <TouchableOpacity
                    key={subIndex}
                    style={styles.submenuItem}
                    onPress={() => navigation.navigate(submenuItem.label)}
                  >
                    <Text style={styles.submenuText}>{submenuItem.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
        <TouchableOpacity onPress={handleProfileClick}>
          <View style={styles.divider} />
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={{ width: 40, aspectRatio: 1 }}
            />
            <View style={{ marginLeft: 5 }}>
              <Text style={{ fontSize: 17, color: 'black' }}>Pretzel Ent.</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={[styles.menuItem, { marginTop: 10 }]}
          onPress={handleLogout}
        >
          <Image source={require('../assets/icons8-logout-50.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fff4",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 60,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
    color: '#206C00'
  },
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  searchInput: {
    height: 40,
    borderColor: '#206C00',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#F0FFF0",
    borderRadius: 20 ,
    color: '#206C00'
  },
  contentContainer: {
    padding: 10,
    flexGrow: 1,
  },
  menuItem: {
    marginLeft: 0,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f7fff4",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: "black",
    fontWeight: '500'
  },
  submenuContainer: {
    marginLeft: 20,
  },
  submenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  submenuText: {
    fontSize: 17,
    color: "black",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    width: 170,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default BusinessDrawerContent;
