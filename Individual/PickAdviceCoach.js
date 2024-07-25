import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity, StyleSheet, Modal, Picker } from 'react-native';
import OpenSchedule2 from '../components/JProfile';
import OpenModal from '../Individual/NewAdvice';

function MyComponent({ onClose }) {
  const [scaleAnimations] = useState([...Array(12)].map(() => new Animated.Value(1)));
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleOpenPress = () => {
    setMainModalVisible(false);
    setFormModalVisible(true);
  };

  const handleCloseFormModal = () => {
    setFormModalVisible(false);
    onClose();
  };

  const handleOpenPress2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  // Sample data for the cards
  const cardData = [
    {
      description: "Here is a description of what your coach does, kindly read the description carefully.",
      expert: "Emily Ray",
      job: "Data Analyst",
      country: "Switzerland",
      interviewfee: "$50",
    },
    {
      description: "Here is a description of what your coach does, kindly read the description carefully.",
      expert: "Monica Jerry",
      job: "UI/UX Designer",
      country: "Canada",
      interviewfee: "$30",
    },
    {
      description: "Here is a description of what your coach does, kindly read the description carefully.",
      expert: "Fisayo Fosudo",
      job: "Java Engineer",
      country: "Nigeria",
      interviewfee: "$25",
    },
    {
      description: "Here is a description of what your coach does, kindly read the description carefully.",
      expert: "Will Cooper",
      job: "Backend Dev.",
      country: "United Kingdom",
      interviewfee: "$70",
    },
  ];

  const handleCardAnimation = (index, toValue) => {
    Animated.timing(
      scaleAnimations[index],
      {
        toValue,
        duration: 200,
        useNativeDriver: true,
      }
    ).start();
  };

  const handleTogglePress = () => {
    setIsPressed(!isPressed);
  };

  const handleButtonPressIn = () => {
    setButtonPressed(true);
  };

  const handleButtonPressOut = () => {
    setButtonPressed(false);
  };

  const renderCards = () => {
    return cardData.map((data, index) => (
      <Animated.View
        key={index}
        style={{
          width: '100%',
          marginBottom: 20,
          transform: [{ scale: scaleAnimations[index] }],
        }}
        onMouseEnter={() => handleCardAnimation(index, 1.05)}
        onMouseLeave={() => handleCardAnimation(index, 1)}
      >
        {/* Card content */}
        <View
          style={{
            width: '100%',
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: "#d3f9d8",
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={handleOpenPress2} onPressIn={handleTogglePress} onPressOut={handleTogglePress}>
            <View style={{ justifyContent: "center", width: '90%', height: 100, borderRadius: 5, backgroundColor: isPressed ? "darkgreen" : "#F0FFF9", marginRight: 15, marginLeft: 10, marginTop: 20, alignItems: 'center', borderWidth: 1, borderColor: '#206C00' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
                  style={{ width: 50, height: 50, aspectRatio: 1, marginTop: 10, }}
                />
                <Text style={{ fontSize: 14, color: "black", fontWeight: 'bold', }}>
                  {data.expert}
                </Text>
                <Text style={{ fontSize: 12, color: "#206C00", marginBottom: 10 }}>
                  {data.job}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 18, }}>
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: "center" }}>
                <Image
                  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6bba7edcb3f010b92084265108234b625f6a1e57053bb656b44878ce3a0ec09a?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                  style={{ width: 10, height: 10, aspectRatio: 1, marginTop: 5, }}
                />
                <Text style={{ fontSize: 10, color: '#206C00', marginLeft: 4, marginTop: 2, }}>{data.country}</Text>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 12, color: "#888", marginTop: 10, marginLeft: 10, }}>{data.description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#206C00',
                  borderRadius: 5,
                  backgroundColor: '#F0FFF9',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginLeft: 10,
                  alignSelf: "center",
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: "#206C00", alignText: 'center', fontSize: 12 }}>
                  Advice
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#206C00", marginTop: 5 }}>
                {data.interviewfee}</Text>
            </View>
            <TouchableOpacity
              onPress={handleOpenPress}
              style={{
                height: 18,
                width: 18,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "#206C00",
                marginTop: 10,
                backgroundColor: buttonPressed ? 'coral' : 'none',
                position: 'absolute',
                right: 20
              }}
              onPressIn={handleButtonPressIn}
              onPressOut={handleButtonPressOut}
            />
          </View>
        </View>
      </Animated.View>
    ));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", marginTop: 40, alignItems: 'center' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
        <View style={styles.greenBox}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
              style={styles.logo}
            />
            <Text style={styles.headerText}>Advice Experts</Text>

            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                ✕
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-start', marginLeft: 40, }}>
            <Text style={{ fontSize: 16, color: "black", alignText: 'flex-start', fontWeight: 'bold', marginTop: 5 }}>Use the dropdown to filter</Text>
            <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Pick an area of specialization" value="" />
          <Picker.Item label="Java Engineering" value="Java Engineering" />
          <Picker.Item label="SAP FI" value="SAP FI" />
          <Picker.Item label="Microsoft Azure" value="Microsoft Azure" />
          <Picker.Item label="Dev Ops" value="Dev Ops" />
          <Picker.Item label="Frontend Development" value="Frontend Development" />
          <Picker.Item label="Backend Development" value="Backend Development" />
          <Picker.Item label="Fullstack Development" value="Fullstack Development" />
          <Picker.Item label="Data Analysis" value="Data Analysis" />
          <Picker.Item label="UI/UX Design" value="UI/UX Design" />
        </Picker>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 30, marginLeft: 30, marginRight: 30 }}>
            {renderCards()}
          </View>
        </View>
      </ScrollView>


      <Modal
        animationType="slide"
        transparent={true}
        visible={formModalVisible}
        onRequestClose={handleCloseFormModal}
      >
        <View style={styles.modalContent}>
          <OpenModal onClose={handleCloseFormModal} />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={handleCloseModal2}
      >
        <View style={styles.modalContent}>
          <OpenSchedule2 onClose={() => handleCloseModal2()} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  greenBox: {
    width: 400,
    height: '100%',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  buttonplus: {
    backgroundColor: 'coral',
    padding: 5,
    borderRadius: 5,
    marginLeft: 200,
    marginBottom: 50,
    width: 100,
    paddingHorizontal: 20,
    marginTop: 10,
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
    paddingVertical: 10,
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
  picker: {
    width: '90%',
    marginTop: 10,
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'none',
  },
  iconContainer: {
    padding: 8,
  },
});

export default MyComponent;
