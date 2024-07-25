import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import OpenSchedule from '../components/Skiphubsub';
import OpenSchedule2 from '../components/Monthlyhubsub';
import OpenSchedule3 from '../components/AnnualhubSub';
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
    navigation.navigate('Choose Hub Payment');
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
              <Text style={styles.title}>
                Emily Ray will work with you on the journey, and do the following with you:
              </Text>
               
              
              
    <View style={styles.boxContainer}>
    <View style={styles.arrowContainer}>
        <View style={styles.arrow} />
    </View>
                {/* Basic Section */}
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxContent}>
                    <Text style={styles.boxTitle}>1. Growth Plan</Text>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Create the next stage plan with you</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Periodically reviews your progress</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Continuously rates your progress</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Standard Section */}
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxContent}>
                    <Text style={styles.boxTitle}>2. Hubs</Text>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Monthly hands-on training</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Shares knowledge gained with you</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Shares tips to apply at work</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Pro Section */}
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxContent}>
                    <Text style={styles.boxTitle}>3. Advice</Text>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>One-on-One Career advice</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>One-on-One Growth advice</Text>
                    </View>
                  </View>
                </TouchableOpacity>


                {/* Mentorship Section */}
                <TouchableOpacity style={styles.box}>
                  <View style={styles.boxContent}>
                    <Text style={styles.boxTitle}>4. Mentorship & Guidance</Text>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Becomes your buddy</Text>
                    </View>
                    <View style={styles.boxRow}>
                      <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4e9d11761a733c7f0b31358f0adde0677991513c5c76300ef8731486bdcd9?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                      <Text>Available to answer questions</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.arrowContainer2}>
        <View style={styles.arrowLeft} />
    </View>
              </View>


            
                                        <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={goToPlans} style={styles.buttonplus}>
                                            <Text style={styles.buttonTextplus}>Next</Text>
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
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
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
    justifyContent: 'flex-end',
    marginTop: 20
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
