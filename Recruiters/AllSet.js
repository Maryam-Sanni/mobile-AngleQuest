import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyComponent({ onClose }) {
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [isAnnualPressed, setIsAnnualPressed] = useState(false);
  const [isMonthlyPressed, setIsMonthlyPressed] = useState(false);
  const navigation = useNavigation();

  const goToSubscription = () => {
    navigation.navigate('Subscription');
    onClose();
  };

  const handlePress = () => {
    setIsAnnualPressed(prevState => !prevState);
    if (isMonthlyPressed) {
        setIsMonthlyPressed(false);
    }
  };

  const handlePress2 = () => {
    setIsMonthlyPressed(prevState => !prevState);
    if (isAnnualPressed) {
        setIsAnnualPressed(false);
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={mainModalVisible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: 40, alignItems: 'center' }}>
          <View style={styles.greenBox}>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
                style={styles.logo}
              />
              <Text style={styles.headerText}>Search to match expert</Text>

              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 10, marginTop: 20, marginBottom: 10 }}>
              All set, give the next instruction
            </Text>

            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
              <TouchableOpacity
                style={[
                  styles.touchableOpacity,
                  { backgroundColor: isAnnualPressed ? '#4A5568' : 'white' }
                ]}
                activeOpacity={1}
                onPress={handlePress}
              />
              <Text style={{ fontSize: 13 }}>Start finding a matching expert for "Employee Name"</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
              <TouchableOpacity
                style={[
                  styles.touchableOpacity,
                  { backgroundColor: isMonthlyPressed ? '#4A5568' : 'white' }
                ]}
                activeOpacity={1}
                onPress={handlePress2}
              />
              <Text style={{ fontSize: 13 }}>Wait till you receive note on "Employee Name" from the manager or coach</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={goToSubscription} style={styles.buttonplus}>
                <Text style={styles.buttonTextplus}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#CCC',
    marginRight: 10,
    marginTop: 20,
    marginLeft: 10
  },
  greenBox: {
    width: 400,
    height: "100%",
    backgroundColor: '#F8F8F8',
  },
  touchableOpacity: {
    height: 18,
    width: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4A5568",
    marginRight: 5,
    marginLeft: 10,
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    right: 30,
    marginBottom: 50,
    bottom: -30
  },
  buttonplus: {
    backgroundColor: 'coral',
    borderRadius: 5,
    padding: 5,
    marginLeft: 50,
    width: 100,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F5637'
  },
});

export default MyComponent;
