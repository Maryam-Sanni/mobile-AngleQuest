import React, { useState, useEffect, useRef} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import GrowthPlantype from '../components/growthplantype';
import GrowthPlanreview from '../components/gpexpertreview';
import OpenModal from '../Individual/NewGrowth';
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
      <View style={{backgroundColor: '#3F5B39', flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
                    <View style={{}}>
                    
                        <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ justifyContent: "flex-start", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, borderColor: "#f7fff4", backgroundColor: 'rgba(211,249,216,0.3)', width: 150, alignItems: 'center', marginTop: 20, marginLeft: 50, borderWidth: 1 }}>
                    <Text style={{ fontSize: 13, color: "#f7fff4", alignText: 'center', fontWeight: 'bold' }}>+ New</Text>
                  </View>
     </TouchableOpacity>

     <View style={styles.container}>
      <View style={styles.box}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 14, color: "black", fontWeight: '600'}}>Next growth plan session</Text>
    <Text style={{ fontSize: 13, color: "grey", marginTop: 10}}>27/May/2024</Text>
    <Text style={{ fontSize: 13, color: "grey", marginTop: 5, fontWeight: '500'}}>2:00PM - 3:00PM</Text>
    <TouchableOpacity style={{  backgroundColor: 'none', padding: 8, paddingHorizontal: 10, marginTop: 10, borderRadius: 5, marginLeft: 10, marginRight: 10, borderWidth: 2, borderColor: '#206C00'}}>
          <Text style={{ color: '#206C00', textAlign: 'center', fontSize: 13, fontWeight: '600'}}>Join Now</Text>
          </TouchableOpacity>
          </View>
           </View>

      <View style={styles.box}>
        <Text style = {{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: 10 }}>Personal Development</Text>
        <View style={{flexDirection: 'row'}}>
           <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5, color: '#206C00' }}>1</Text>
           <Text style = {{fontSize: 12, marginTop: 10, marginLeft: 10 }}>Active</Text>
           <Image source={require('../assets/person.png')} style={styles.boximage}  />
     </View>
     <Text style = {{fontSize: 12, fontWeight: '500', marginTop: 10 }}>0 completed in the past</Text>
    
      </View>
     
      <View style={styles.box}> 
      <Text style = {{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: 10 }}>Team Development</Text>
        <View style={{flexDirection: 'row'}}>
           <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5, color: '#206C00' }}>1</Text>
           <Text style = {{fontSize: 12, marginTop: 10, marginLeft: 10 }}>Completed</Text>
           <Image source={require('../assets/teamicon.jpg')} style={styles.boximage}  />
     </View>
      </View>
      
      <View style={styles.box}>
      <Text style = {{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: 10 }}>Organizational Development</Text>
        <View style={{flexDirection: 'row'}}>
           <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5, color: '#206C00' }}>1</Text>
           <Text style = {{fontSize: 12, marginTop: 10, marginLeft: 10 }}>Completed</Text>
           <Image source={require('../assets/organization.png')} style={styles.boximage}  />
     </View>
     <Text style = {{fontSize: 12, fontWeight: '500', marginTop: 10, color: 'coral' }}>1 replan available</Text>
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
                       
                        <GrowthPlantype />
                        <GrowthPlanreview />
                    </View>
                </ScrollView>
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
    header: {
        marginLeft: -60,
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
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 7, 
        color: 'black'
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 5,
        marginLeft: 100
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50
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
        borderWidth: 2, borderColor: 'rgba(225,225,212,0.3)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      boximage: {
        width: 30,
        height: 30,
        marginLeft: 20,
        borderRadius: 25
      },
});

export default MyComponent;
