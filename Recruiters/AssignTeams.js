import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import OpenModal from './EditTeams';

const ScheduledMeetingsTable = () => {
  const [ModalVisible, setModalVisible] = useState(false);

  const handleOpenPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <View style={styles.greenBox}>
      <BlurView intensity={100} style={styles.blurBackground}>
      
      <Text style={styles.title}>Manage Your Teams</Text>
      <View style={styles.table}>
      <View style={styles.row}>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Team Name</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Specialization</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Target Level</Text>
          </View>
          <View style={styles.cell}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Team Lead</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
          <TouchableOpacity onPress={handleOpenPress} >
            <Text style={{textDecoration: 'underline'}}>MORR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell2}> 
            <Text style={styles.cellText}>Microsoft Azure</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Senior</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Will Cooper</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
          <TouchableOpacity onPress={handleOpenPress} >
            <Text style={{textDecoration: 'underline'}}>FEPPA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell}> 
            <Text style={styles.cellText}>Frontend Development</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Professional</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Joop Melcher</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
          <TouchableOpacity onPress={handleOpenPress} >
            <Text style={{textDecoration: 'underline'}}>SAP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell2}> 
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Medior</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Joan Othega</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
          <TouchableOpacity onPress={handleOpenPress} >
            <Text style={{textDecoration: 'underline'}}>JPP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell}> 
            <Text style={styles.cellText}>Java Engineering</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Professional</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Monica Jerry</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
          <TouchableOpacity onPress={handleOpenPress} >
            <Text style={{textDecoration: 'underline'}}>DAO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell2}> 
            <Text style={styles.cellText}>Data Analysis</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Medior</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Yesuf Gabar</Text>
          </View>
        </View>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={ModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContent}>
          <OpenModal onClose={handleCloseModal} />
        </View>
      </Modal>



      </View>
      
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
    marginLeft: 20,
    color: "#63EC55",
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'flex-start',
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 50, marginRight: 50
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
  picker: {
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2, 
    color:'black',
    borderRadius: 5,
    fontSize: 14
  },
  picker2: {
    height: 30,
    width: '100%',
    backgroundColor: 'rgba(225,225,212,0.05)',
    borderColor: 'grey',
    borderWidth: 2, 
    color:'black',
    borderRadius: 5,
    fontSize: 14
  },
  greenBox: {
    flex: 1,
    width: '100%',
    height: 550, 
    marginTop: 30,
    backgroundColor: 'rgba(125,125,125,0.3)',
    borderRadius: 20,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
  },
  blurBackground: {
    flex: 1, 
    borderRadius: 20, 
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
});

export default ScheduledMeetingsTable;
