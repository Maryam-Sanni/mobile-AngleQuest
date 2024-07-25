import React, { useState, useEffect, useRef} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import InterviewSchedule from '../components/InterviewSchJob';
import InterviewFeedback from '../components/InterviewFdbackRct';
import OpenModal from '../Recruiters/PickInterviewCoach';
import { useNavigation } from '@react-navigation/native';


function MyComponent() { 
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

  
   

    const handleOpenPress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };


    return (
      <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
                <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
                    <View style={{ }}>
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
                        <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ justifyContent: "flex-start", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, borderColor: "#f7fff4", backgroundColor: 'rgba(211,249,216,0.3)', width: 150, alignItems: 'center', marginTop: 20, marginLeft: 50, borderWidth: 1 }}>
                    <Text style={{ fontSize: 13, color: "#f7fff4", alignText: 'center', fontWeight: 'bold' }}>+ New</Text>
                  </View>
     </TouchableOpacity>

     <View style={styles.container}>
      <View style={styles.box}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: '600'}}>Next Interview session</Text>
    <Text style={{ fontSize: 14, color: "grey", marginTop: 10}}>27/May/2024</Text>
    <Text style={{ fontSize: 14, color: "grey", marginTop: 5, fontWeight: '500'}}>2:00PM - 3:00PM</Text>
    <TouchableOpacity style={{  backgroundColor: 'coral', padding: 8, paddingHorizontal: 10, marginTop: 10, borderRadius: 5, marginLeft: 10, marginRight: 10, borderWidth: 2, borderColor: 'coral'}}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: '600'}}>Join Now</Text>
          </TouchableOpacity>
          </View>
           </View>

      <View style={styles.box}>
        <Text style = {{fontSize: 20, color: 'black', fontWeight: 'bold', }}>Expert</Text>
        <View style={{flexDirection: 'row', marginTop: 10 }}>
          <Text style={{fontSize: 16, color: 'grey', fontWeight: '500', marginTop: 10 }}>Joop Melcher</Text>
          <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={{ width: 40, aspectRatio: 1, marginLeft: 10 }}
            />
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
                       
                        <InterviewSchedule />
                        <InterviewFeedback />
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
        borderRadius: 10
      },
    header: {
        marginLeft: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(225,225,212,0.3)',
        backgroundColor: '#f7fff4',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 10, 
    }, 
    headertext: {
      marginLeft: 5,
      fontSize: 15,
      fontWeight: '500',
      marginTop: 5,
      color: '#666'
    },
    image: {
      width: 21,
      height: 21,
      marginRight: 5,
      marginTop: 5,
      marginLeft: 50
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 40, marginRight: 50, marginTop: 50
      },
      box: {
        backgroundColor: '#f7fff4',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        marginBottom: 20,
        borderWidth: 2, borderColor: 'rgba(255,255,255,0.5)',
      },
      boximage: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 130,
        borderRadius: 25
      },
      blurBackground: {
        flex: 1, 
        borderRadius: 20, 
      },
});

export default MyComponent;
