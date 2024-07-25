import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import OpenSchedule from '../Individual/ViewInterviewbook';
import { BlurView } from 'expo-blur';

const ScheduledMeetingsTable = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  

  return (
    <View style={styles.greenBox}>
      <BlurView intensity={100} style={styles.blurBackground}>
      
      <Text style={styles.title}>Interview Feedback</Text>
 
      <View style={styles.table}>
      <View style={styles.row}>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Role</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Level</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Score</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
            <Text style={styles.cellText}> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Data Analyst</Text>
          </View>
          <View style={styles.cell2}> 
            <Text style={styles.cellText}>Junior</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Excellent</Text>
          </View>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={styles.open}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Data Analyst</Text>
          </View>
          <View style={styles.cell}> 
            <Text style={styles.cellText}>Medior</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Good</Text>
          </View>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={styles.open}>View</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
          <View style={styles.modalContent}>
          <OpenSchedule onClose={() => handleCloseModal()} />
          </View>
      </Modal>
    
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    marginTop: 20,
    marginLeft: 50,
    color: "black",
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'flex-start',
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 10, marginRight: 10
  },
 open: {
    color: "black",
     fontSize: 14,
      borderColor: "#63EC55", 
      borderWidth: 2, 
      padding: 5, 
      paddingHorizontal: 15, 
      borderRadius: 5
},
replan: {
    color: "coral",
     fontSize: 14,
      borderColor: "coral", 
      borderWidth: 2, 
      padding: 5, 
      paddingHorizontal: 15, 
      borderRadius: 5
},
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225,225,212,0.3)',
  },
  cell: {
    flex: 1,
   backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-start',
  },
  cell2: {
    flex: 1,
   backgroundColor: 'none',
    padding: 10, 
    alignItems: 'flex-start',
  },
  cellText: {
    textAlign: 'flex-start',
  },
  greenBox: {
    width: "100%",
    height: 300,
     marginTop: 50,
     backgroundColor: 'rgba(225,225,212,0.3)',
     borderColor: 'rgba(255,255,255,0.5)',
     borderWidth: 1,
   },
  blurBackground: {
    flex: 1, 
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: -5,
    borderRadius: 25
  },
});

export default ScheduledMeetingsTable;
