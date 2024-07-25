import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import OpenSchedule from '../components/Skipadvicesub';
import OpenSchedule2 from '../components/Monthlyadvicesub';
import OpenSchedule3 from '../components/AnnualadviceSub';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [isAnnualPressed, setIsAnnualPressed] = useState(false);
  const [isMonthlyPressed, setIsMonthlyPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false); // State for the annual modal

  const handleOpenPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenPress2 = () => {
    if (isMonthlyPressed) {
      setModalVisible2(true);
    } else if (isAnnualPressed) {
      setModalVisible3(true);
    }
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const handleCloseModal3 = () => {
    setModalVisible3(false);
  };

  const handlePress = () => {
    setIsAnnualPressed(prevState => !prevState);
    if (isMonthlyPressed) {
      setIsMonthlyPressed(false);
    }
  };

  const goToPlans = () => {
    // Navigate to ExpertsProfile screen when the button is clicked
    navigation.navigate('Advice Plan Offer');
    onClose(); // Close the modal
  };

  const handlePress2 = () => {
    setIsMonthlyPressed(prevState => !prevState);
    if (isAnnualPressed) {
      setIsAnnualPressed(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Background.png')}
      style={{ height: '110%', width: '100%', flex: 1 }}
    >
      <BlurView intensity={70} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.glassBox}>
            <View style={styles.pageContainer}>
              
              <Text style={{ color: '#206C00', fontSize: 16, marginTop: 30, fontWeight: '500', marginLeft: 30, marginBottom: 20 }}>Curious about how much it costs? Just a token: </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            style={[
                                                styles.touchableOpacity,
                                                { backgroundColor: isAnnualPressed ? '#4A5568' : 'white' }
                                            ]}
                                            activeOpacity={1}
                                            onPress={handlePress}
                                        />
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Annually $840  </Text>
                                    </View>
                                    <Text style={{ fontSize: 12, color: '#206C00', marginTop: 7, marginLeft: 40 }}> Saves you 15% ($120)  </Text>

                                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                        <TouchableOpacity
                                            style={[
                                                styles.touchableOpacity,
                                                { backgroundColor: isMonthlyPressed ? '#4A5568' : 'white' }
                                            ]}
                                            activeOpacity={1}
                                            onPress={handlePress2}
                                        />
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Monthly $80  </Text>
                                    </View>
                                    <Text style={{ fontSize: 12, color: '#206C00', marginTop: 25, marginLeft: 30, fontWeight: '600' }}>Its a question of how much you believe in yourself...</Text>
                                 
                                        <Text style={{ fontSize: 12, color: '#206C00', marginTop: 5, marginLeft: 30, fontWeight: '600' }}>Imagine how this could transform your career in 6 months!</Text>
                                        
                                        <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={handleOpenPress2} style={styles.buttonplus}>
                                            <Text style={styles.buttonTextplus}>Next</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleOpenPress} style={styles.buttonskip}>
                                            <Text style={styles.buttonTextskip}>Skip</Text>
                                        </TouchableOpacity>
                                        </View>
                                        </View>
       
          </View>

          {/* Modals */}
          <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <OpenSchedule onClose={handleCloseModal} />
          </Modal>
          <Modal visible={modalVisible2} animationType="slide" transparent={true}>
            <OpenSchedule2 onClose={handleCloseModal2} />
          </Modal>
          <Modal visible={modalVisible3} animationType="slide" transparent={true}>
            <OpenSchedule3 onClose={handleCloseModal3} />
          </Modal>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
backgroundColor: '#f7fff4',
borderRadius: 20,
padding: 10,
marginTop: 20,
marginLeft: 20,
marginRight: 20,
marginBottom: 20,
borderWidth: 2,
borderColor: 'rgba(225,225,212,0.3)',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
  glassBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#206C00'
  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
borderWidth: 2,
borderColor: '#63EC55',
  padding: 10,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  boxContent: {
    flexDirection: 'column',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonplus: {
backgroundColor: 'coral',
borderRadius: 5,
padding: 5,

width: 100,
paddingHorizontal: 20,
marginBottom: 30
},
buttonskip: {
backgroundColor: 'white',
borderRadius: 5,
borderWidth: 1,
borderColor: 'coral',
padding: 5,
marginLeft: 20,
width: 100,
paddingHorizontal: 20,
marginBottom: 30
},
buttonTextplus: {
color: 'white',
fontSize: 14,
textAlign: 'center',
},
buttonTextskip: {
color: 'coral',
fontSize: 14,
textAlign: 'center',
},
touchableOpacity: {
height: 18,
width: 18,
borderRadius: 15,
borderWidth: 1,
borderColor: "#4A5568",
marginRight: 5,
marginLeft: 30,
},
arrowContainer: {

left: '40%',
transform: [{ translateY: -20 }],
},
arrowContainer2: {
position: 'absolute',
bottom: -10,
left: '80%',
transform: [{ translateX: -10 }],
},
arrow: {
width: 0,
height: 0,
backgroundColor: 'transparent',
borderStyle: 'solid',
borderTopWidth: 10,
borderBottomWidth: 10,
borderLeftWidth: 15,
borderTopColor: 'transparent',
borderBottomColor: 'transparent',
borderLeftColor: '#63EC55',
},
arrowLeft: {
width: 0,
height: 0,
backgroundColor: 'transparent',
borderStyle: 'solid',
borderTopWidth: 10,
borderBottomWidth: 10,
borderRightWidth: 15,
borderTopColor: 'transparent',
borderBottomColor: 'transparent',
borderRightColor: '#63EC55',
},
});

export default App;
