import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, ImageBackground, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import OpenModal from '../Recruiters/PickInterviewCoach';
import { useNavigation } from '@react-navigation/native';

import {useFonts} from "expo-font"

function MyComponent() {
  const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const handleOpenPress = () => {
        setModalVisible(true);
      };
    
      const handleCloseModal = () => {
        setModalVisible(false);
      };

      const goToSchedules = () => {
        // Navigate to ExpertsProfile screen when the button is clicked
        navigation.navigate('Booked Interviews');
      };
 
    
  return (
    <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '110%', width: '100%',flex: 1}}
>
<BlurView intensity={70} style={{flex:1}}>
         <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
         <View style={styles.glassBox}>
         <View style={styles.pagecontainer}>
          <View style={{ flex: 1, }}>
          <View style={styles.header}>
            <TouchableOpacity>
            <View style={styles.item}>
            <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d10a8ee7c8c9726e17c1a541282a434772d42408c95ac5f784d03e9befeb6519?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={styles.headertext}>Interview</Text>
              </View>
            </TouchableOpacity>
           
            </View>
            <View style={styles.box}>
     <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 30, marginLeft: 10,fontFamily:"Varta-Light"}}>About Interview</Text>
     <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 10, marginRight: 50, fontFamily:"Varta-Light" }}>Are you hiring and you need a domain specialist to vet a candidate for you?</Text>
     <View style={{flexDirection: 'row'}}>
     <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ justifyContent: "center", paddingHorizontal: 10, paddingVertical: 10, marginTop: 40, marginLeft: 10, backgroundColor: 'coral', borderRadius: 5, width: 150, alignItems: 'center', alignContent: 'center',}}>
                    <Text style={{ fontSize: 13, color: "white", alignText: 'center', fontWeight: '600',fontFamily:"Varta-Light" }}>Hire an Interviewer</Text>
                  </View>
     </TouchableOpacity>
    
      </View>
      </View>
     </View>
            </View>
            </View>
        </ScrollView>
      
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

    

      </BlurView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    height: 1000,
    backgroundColor: '#f7fff4',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20, 
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
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
    height: 1000,
  backgroundColor: 'rgba(225,255,212,0.3)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
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
    backgroundColor: 'none',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'coral',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'space-between',
    marginTop: 5
  },
  headertext: {
    marginLeft: 5,
    fontSize: 15,
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
  greenBox: {
   width: "100%",
    height:"100%",
    backgroundColor: 'rgba(225,225,212,0.3)',
  },
  blurBackground: {
    flex: 1, 
  },
  box: {
    borderRadius: 10,
    paddingHorizontal: 10,
     backgroundColor: 'white', 
     marginTop: 50,
     marginLeft: 10,
     marginRight: 10, 
     height: 250, 
     shadowColor: '#000',
      shadowOffset: { width: 0, height: 2, }, 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
       elevation: 5, 
        borderColor: '#63EC55',
         borderWidth: 1 
  },
  boximage: {
    width: 150,
    height: 150,
   position: 'absolute',
   right: 5,
   marginTop: -80
  },
});
export default MyComponent;
