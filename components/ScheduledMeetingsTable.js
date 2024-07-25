import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';
import OpenSchedule from '../Experts/OpenScheduled';
import OpenUser from '../Experts/OpenUserprofile';
import { BlurView } from 'expo-blur';

const ScheduledMeetingsTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const handleOpenPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenPress2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  return (
    
    <View style={styles.greenBox}>
     <BlurView intensity={100} style={styles.blurBackground}>
      <Text style={styles.title}>Scheduled Interview Meetings</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
      <View style={styles.table}>
      <View style={styles.row}>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Name</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Role</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Account Type</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Date</Text>
          </View>
          <TouchableOpacity style={styles.cell} >
            <Text style={{color: "#206C00", fontSize: 14}}> </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell}>
            <Text style={styles.cellText}> </Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.row}>
        <View style={styles.cell2}>
        <TouchableOpacity onPress={handleOpenPress2} >
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/useravatar1.png')} style={styles.image} />
            <Text style={styles.cellText}>Maryam Bakahli</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP Finance Junior</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Individual Account</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>31/Mar, 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2}>
          <Text style={{color: "#206C00", fontSize: 14}}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}> 
          <TouchableOpacity onPress={handleOpenPress2} >
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/useravatar2.png')} style={styles.image} />
            <Text style={styles.cellText}>Patrick Oche</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform Dev</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Corporate Account</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>29/Mar, 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell}>
          <Text style={{color: "#206C00", fontSize: 14}}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Modal */}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={handleCloseModal2}
      >
          <View style={styles.modalContent}>
            <OpenUser onClose={() => handleCloseModal2()} />
          </View>
      </Modal>
      </ScrollView>
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
    marginTop: 30,
    marginLeft: 50,
    color: "black",
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'flex-start',
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
  table: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 20, marginRight: 20
  },
  tableheaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

