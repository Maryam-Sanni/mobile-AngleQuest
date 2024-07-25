import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import CustomPercentageChart from '../components/PercentageChart';
import ManageEmployees from './AssignManagers';
import { useNavigation } from '@react-navigation/native';
import OpenModal from '../Recruiters/New Employee';
import { BlurView } from 'expo-blur';

import {useFonts} from "expo-font"

function MyComponent() {
    const navigation = useNavigation();
    const [isInterviewHovered, setIsInterviewHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const handleOpenPress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };
  
    const goToTeams = () => {
      navigation.navigate('Teams');
    };


  return (
    <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
        <View style={{}}>
          <View style={styles.header}>
          <TouchableHighlight>
                                <View style={styles.item}>
                                <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa3093fa6656295c8b39535a911908d6555a356fccce78af145fec472c4bd154?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                                    <Text style={[styles.headertext, isInterviewHovered && { color: 'coral' }]}>Manage Employees</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ position: 'absolute', right: 30, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 5, backgroundColor: 'coral', width: 100, alignItems: 'center',}}>
                    <Text style={{ fontSize: 13, color: "white", alignText: 'center', fontWeight: '600',fontFamily:"Varta-Light" }}>+ New</Text>
                  </View>
     </TouchableOpacity>
                        </View>

     <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
     <View style={styles.container}>
     <View style={styles.BoxesContainer}>
     <View style={styles.blurBox}>
      <BlurView intensity={100} style={styles.blurBackground}>
      <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginLeft: 10, color: '#63EC55',fontFamily:"Varta-Light"}}>Onboard a new employee for a career hyper boost</Text>
     <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 10, marginRight: 150, color: 'white',fontFamily:"Varta-Light" }}>Assign each employee to a manager who will oversee their daily tasks and career development, while Recruitangle will assign subject matter experts to tutor and guide the growth of employees.</Text>
     <View style={{flexDirection: 'row'}}>
     <Image source={require('../assets/23.png')} style={styles.boximage} />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity>
      <Image source={require('../assets/25.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenPress}>
     <Image source={require('../assets/26.png')} style={styles.icon} />
     </TouchableOpacity>
      </View>
      </BlurView>
      </View>

      <View style={styles.blurBox}>
      <BlurView intensity={100} style={styles.blurBackground}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, marginLeft: 10, color: '#63EC55',fontFamily:"Varta-Light"}}>Stats</Text>
      <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'column'}}>
      <Text style={{ marginTop: 10, marginLeft: 10, color: 'white',fontFamily:"Varta-Light"}}>Growth Plan</Text>
      <View style={{ justifyContent: "center", paddingHorizontal: 7, paddingVertical: 7, marginLeft: 10, marginTop: 5, backgroundColor: '#F2F2F2', width: 150, alignItems: 'center', alignContent: 'center',}}>
                    <Text style={{ fontSize: 16, color: "grey", alignText: 'center',}}>5</Text>
                  </View>
</View>
<View style={{flexDirection: 'column', position: 'absolute', right: 10}}>
<Text style={{ marginTop: 10, marginLeft: 10, color: 'white',fontFamily:"Varta-Light"}}>Hub Sessions</Text>
      <View style={{ justifyContent: "center", paddingHorizontal: 7, paddingVertical: 7, marginLeft: 10, marginTop: 5, backgroundColor: '#F2F2F2', width: 150, alignItems: 'center', alignContent: 'center',}}>
                    <Text style={{ fontSize: 16, color: "grey", alignText: 'center',}}>20</Text>
                  </View>
                  </View>
      </View>
     
      <View style={{flexDirection: 'row', marginTop: 10}}>
      <View style={{flexDirection: 'column'}}>
      <Text style={{ marginTop: 10, marginLeft: 10, color: 'white',fontFamily:"Varta-Light"}}>Advice Sessions</Text>
      <View style={{ justifyContent: "center", paddingHorizontal: 7, paddingVertical: 7, marginLeft: 10, marginTop: 5, backgroundColor: '#F2F2F2', width: 150, alignItems: 'center', alignContent: 'center',}}>
                    <Text style={{ fontSize: 16, color: "grey", alignText: 'center',}}>7</Text>
                  </View>
</View>
<View style={{flexDirection: 'column', position: 'absolute', right: 20}}>
<Text style={{ marginTop: 10, color: 'white',fontFamily:"Varta-Light"}}>Reviews</Text>
      <View style={{ justifyContent: "center", paddingHorizontal: 7, paddingVertical: 7, marginTop: 5, backgroundColor: '#F2F2F2', width: 150, alignItems: 'center', alignContent: 'center',}}>
                    <Text style={{ fontSize: 16, color: "grey", alignText: 'center',}}>13</Text>
                  </View>
                  </View>
      </View>
      <View style={{borderWidth: 1, borderColor: '#63EC55', marginTop: 25, marginBottom: 25,}}>
      <Text style={{fontSize: 18, color: '#63EC55', marginTop: 10, marginLeft: 20,  fontWeight: 'bold',fontFamily:"Varta-Light" }}>Angle Badge</Text>
          <View style={{flexDirection: 'row' }}>
          <Text style={{fontSize: 14, marginTop: 10, marginLeft: 20,marginRight: 20, marginBottom: 20, color: 'white',fontFamily:"Varta-Light"  }}>This is the combined progress of your team</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, marginTop: -30 }}>
      <CustomPercentageChart percentage={45} />
      </View>
      </View>
</View>
</BlurView>
      </View>
      
      <ManageEmployees />
    
      </View>
      </View>




    </View>

 <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
          <View style={styles.modalContent}>
          <OpenModal onClose={() => handleCloseModal()} />
          </View>
      </Modal>


</View>
          
          
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    backgroundColor: '#f7fff4',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headertext: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    color: '#666',
    fontFamily:"Varta-Light"
  },
  image: {
    width: 21,
    height: 21,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 10
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 10
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 10, marginRight: 10, marginBottom: 20,
  },
  BoxesContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  box: {
    backgroundColor: 'rgba(125,125,125,0.3)',
    marginLeft: 20,
    padding: 10,
    borderRadius: 20,
    width: 280,
    height: 360,
    borderWidth: 1, borderColor: 'rgba(225,225,212,0.3)',
  },
  box2: {
    backgroundColor: 'rgba(125,125,125,0.3)',
    borderRadius: 20,
    width: 750,
    height: 180,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)',
  },
  box3: {
    backgroundColor: 'rgba(125,125,125,0.3)',
    marginLeft: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    width: 280,
    height: 180,
    marginTop: 30,
    borderWidth: 1, borderColor: 'rgba(225,225,212,0.3)',
  },
  boximage: {
    width: 120,
    height: 120,
   position: 'absolute',
   right: 20,
   marginTop: -100
  },
  boximage2: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 350,
    marginTop:5, 
    borderRadius: 25
  },
  blurBackground: {
    flex: 1, 
    borderRadius: 10, 
    padding: 10,
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
  touchableTextcoach: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily:"Varta-Light"
  },
  touchableOpacityHovered: {
    backgroundColor: 'coral'
  },
  blurBox: {
    backgroundColor: 'rgba(225,255,212,0.1)',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default MyComponent;
