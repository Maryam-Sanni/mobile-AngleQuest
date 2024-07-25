import React, { useState,  useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import SuggestionModal from '../components/Suggestionmodal';
import OpenModal2 from '../Individual/GetStart';
import { useDrawerContext } from '../views/DrawerContext';

const HomePage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { setIsExpertDrawer } = useDrawerContext();

  useEffect(() => {
    setIsExpertDrawer(true);
    return () => setIsExpertDrawer(false);
  }, [setIsExpertDrawer]);

  const handleOpenPress2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const goToGrowth = () => {
    navigation.navigate('Growth Plan');
  };

  const goToHubs = () => {
    navigation.navigate('Hubs');
  };

  const goToAdvice = () => {
    navigation.navigate('Advice');
  };

  const goToInterview = () => {
    navigation.navigate('Interview');
  };

const goToMessages = () => {
    navigation.navigate('Messages');
  };



  return (
     <View style={{backgroundColor: '#3F5B39', flex: 1}}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
          <Image
       source={require('../assets/33.png')}
        style={{ width: 40, height: 40, marginTop: 30}}
      />
      <Text style={styles.greeting}>Good Day, Joop Melcher</Text>
      <View style={styles.circle}>
        <Text style={styles.circleText}>12</Text>
        </View>
      </View>

          <View style={styles.contentContainer}>
            <View style={styles.blurBox}>
              <BlurView intensity={70} style={styles.blurBackground}>
              <View style={{flexDirection: 'row', }}>
          <View style={{flexDirection: 'column', marginTop: 10, width: 200, }}>
          <Text style={{fontSize: 22, color: '#63EC55', fontWeight: 'bold', marginTop: 5, }}>Are you passionate about lifting others in your field to their next level?</Text>
          
           <TouchableOpacity style={styles.touchablebegin}>
          <Text style={styles.touchableTextbegin}>Get Started</Text>
          </TouchableOpacity>
          </View>
           <Image
                  source={require('../assets/passion.png')}
                  style={styles.imageback}
                />
                </View>
          </BlurView>
          </View>
          
          <View style={styles.blurBox}>
              <BlurView intensity={70} style={styles.blurBackground}>
          
          

           <View style={{flexDirection: 'row' }}>
          <View style={{flexDirection: 'column' }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
         <View style={{flexDirection: 'row',  }}>
          <Image
       source={require('../assets/Upcom2.png')}
        style={{ width: 25, height: 25, marginLeft: 5, marginTop: 15,}}
      />
          <Text style={{fontSize: 18, color: '#63EC55', marginTop: 15, marginLeft: 5,  fontWeight: 'bold' }}>Upcoming Sessions</Text>
          </View>
         
           </View>
          </View>
          </View>
         
      
              <View style={{flexDirection: 'row' }}>
<View style={styles.greenwhitebox}>
<Text style={{fontSize: 20, color: '#63EC55', marginTop: 15, marginLeft: 30, fontWeight: 'bold' }}>New Offer</Text>

<View style={{flexDirection: 'row' }}>
              <Text style={{fontSize: 14, color: 'white', marginTop: 20, marginLeft: 30, width: 200, textDecoration: 'underline' }}>ASML wanta to enroll 5 SAP FI as your protegees</Text>
<TouchableOpacity style={styles.touchablestart}>
          <Text style={styles.touchableTextjoinreview}>Send a bid</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
          <View style={{flexDirection: 'row' }}>
<View style={styles.greenwhitebox}>
<Text style={{fontSize: 20, color: '#63EC55', marginTop: 15, marginLeft: 30, fontWeight: 'bold' }}>Growth Plan Review </Text>
<Text style={{fontSize: 14, color: 'white', marginTop: 5, marginLeft: 30, fontWeight: '600' }}>9:30 AM to 10:30 AM | Jun 25</Text>
<View style={{flexDirection: 'row', }}>
<Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={{ width: 30, height: 30,  marginLeft: 30, marginTop: 15,}}
            />
              <Text style={{fontSize: 14, color: 'white', marginTop: 20, marginLeft: 10, fontWeight: '600' }}>Maryam Bakahali</Text>
<TouchableOpacity style={styles.touchablestart}>
          <Text style={styles.touchableTextjoinreview}>Start</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
<View style={{flexDirection: 'row' }}>
<View style={styles.greenwhitebox}>
<Text style={{fontSize: 20, color: '#63EC55', marginTop: 15, marginLeft: 30, fontWeight: 'bold' }}>Advice Session</Text>
<Text style={{fontSize: 12, color: 'white', marginTop: 5, marginLeft: 30, fontWeight: '600' }}>9:30 AM to 10:30 AM | Jun 25</Text>
<View style={{flexDirection: 'row' }}>
<Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={{ width: 30, height: 30,  marginLeft: 30, marginTop: 15,}}
            />
              <Text style={{fontSize: 14, color: 'white', marginTop: 20, marginLeft: 10, fontWeight: '600' }}>Maryam Bakahali</Text>
<TouchableOpacity style={styles.touchablestart}>
          <Text style={styles.touchableTextjoinreview}>Start</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
 <View style={{flexDirection: 'row' }}>
          <View style={styles.greenwhitebox}>
<Text style={{fontSize: 20, color: '#63EC55', marginTop: 15, marginLeft: 30, fontWeight: 'bold' }}>Interview Session </Text>
<Text style={{fontSize: 14, color: 'white', marginTop: 5, marginLeft: 30, fontWeight: '600' }}>9:30 AM to 10:30 AM | Jun 25</Text>
<View style={{flexDirection: 'row', marginBottom: 10 }}>
<Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={{ width: 30, height: 30,  marginLeft: 30, marginTop: 15,}}
            />
              <Text style={{fontSize: 14, color: 'white', marginTop: 20, marginLeft: 10, fontWeight: '600' }}>Maryam Bakahali</Text>
<TouchableOpacity style={styles.touchablestart}>
          <Text style={styles.touchableTextjoinreview}>Start</Text>
          </TouchableOpacity>
          </View>
          </View>
          
          </View>
</BlurView>
</View>



          <View style={styles.blurBox}>
          <BlurView intensity={50} style={styles.blurBackground}>
          <View style={{flexDirection: 'row' }}>
          <Image
       source={require('../assets/money (2).png')}
        style={styles.boxicon}
      />
          <Text style={{fontSize: 18, color: '#63EC55', marginTop: 25, marginLeft: 10,  fontWeight: 'bold' }}>Income Overview</Text>
          </View>
          <Text style={{fontSize: 14, color: 'white', marginTop: 10, marginLeft: 35,marginRight: 20  }}>You earned $ (XYZ) from session with Joop Melcher. Your available balance is...</Text>
          <TouchableOpacity style={styles.touchablecoach}>
          <Text style={styles.touchableTextjoinreview}>Withdraw Earnings</Text>
          </TouchableOpacity>
          </BlurView>
          </View>


          
          


        <SuggestionModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={handleCloseModal2}
      >
        <View style={styles.modalContent}>
          <OpenModal2 onClose={() => handleCloseModal2()} />
        </View>
      </Modal>

      </View>
        </ScrollView>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
   modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'white',
    marginLeft: 3
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 30,
    marginTop: 10
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
  },
  blurBox: {
    backgroundColor: 'rgba(225,255,212,0.1)',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  blurBackground: {
    padding: 20,
    borderRadius: 10,
  },
 boxicon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    marginTop: 25,
  },
  greenwhitebox: {
    flex: 1,
    width: 310,
    height: 140,
    backgroundColor: 'rgba(10,0,0,0.3)',
    marginTop: 10, 
    borderRadius: 10, 
    padding: 5
    },
    greenwhitebox2: {
        flex: 1,
        width: 310,
        height: 100,
        backgroundColor: 'rgba(10,0,0,0.3)',
        marginTop: 10, 
        borderRadius: 10, 
        padding: 5
        },
  touchableText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  touchablecoach: {
    backgroundColor: 'rgba(200,200,125,0.3)',
    padding: 8,
    paddingHorizontal: 5, 
    marginTop: 25,
    marginLeft: 30,
    marginRight: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
    touchablestart: {
      backgroundColor: 'rgba(200,200,125,0.3)',
      padding: 8,
      paddingHorizontal: 20, 
      marginTop: 15,
      position: 'absolute',
      right: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
  touchableTextjoinreview: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13
  },
imageback: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginTop: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  touchableTextbegin: {
    color: 'darkgreen',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  touchablebegin: {
    padding: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    backgroundColor: '#63EC55',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageCount: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5
  },
  messageCountText: {
    color: 'coral',
    fontWeight: '500',
    fontSize: 14
  },
  messagecontainer: {
    height: 50,
     marginRight: 15,
    marginBottom: 100,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: "100%",
    backgroundColor: 'white',
    borderColor: '#63EC55',
    borderRadius: 20,
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    fontSize: 16,
    borderWidth: 0,
    color: 'black'
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
   profile: {
    width: 80,
    height: 80,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 40,
  },
   touchablechat: {
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    marginRight: 10,
    backgroundColor: 'rgba(200,200,125,0.3)',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  touchableTextchat: {
    color: 'white',
    textAlign: 'flex-start',
    fontSize: 16
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginLeft: 15,
    borderRadius: 25
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
   backgroundColor: '#63EC55',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  circleText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16
  },
  touchablerate: {
    backgroundColor: 'rgba(200,200,125,0.3)',
    padding: 8,
    paddingHorizontal: 10, 
    marginTop: 10,
    marginRight: 5,
    marginStart: 10,
    width: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  touchableTextrate: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13
  },
  touchablesession: {
    backgroundColor: 'rgba(200,200,125,0.3)',
    padding: 8,
    paddingHorizontal: 20, 
    marginTop: 10,
    marginRight: 10,
    marginLeft: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  touchablejoinsession: {
    backgroundColor: 'rgba(200,200,125,0.3)',
    padding: 8,
    paddingHorizontal: 20, 
    marginTop: 10,
    marginRight: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  touchablejoinrate: {
    backgroundColor: 'rgba(200,200,125,0.3)',
    padding: 8,
    paddingHorizontal: 20, 
    marginTop: 10,
   marginLeft: 70,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  whiteBox: {
    width: 430,
    height: 200,
    backgroundColor: 'rgba(125,125,125,0.3)',
    borderRadius: 10,
    marginBottom: 15,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    overflow: 'hidden'
  },
});

export default HomePage;
