import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, Modal } from 'react-native';
import OpenModal from './AddManager';

function MyComponent({ onClose }) {
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [ModalVisible, setModalVisible] = useState(false);

  const handleOpenPress = () => {
    setMainModalVisible(false);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={mainModalVisible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: 40, alignItems: 'center' }}>
          <View style={styles.greenBox}>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                style={styles.logo}
              />
              <Text style={styles.headerText}>Add Manager</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            
              <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10, marginBottom: 30 }}>
                 Invite a new Manager
                </Text>
               
              </View>
             
                <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 10, marginTop: 20, marginBottom: 5 }}>
                  Full Name
                </Text> 
                <TextInput
                  placeholder=" "
                  style={styles.input}
                />

                <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 10, marginTop: 20, marginBottom: 5 }}>
                  Email Address
                </Text>
                <TextInput
                  placeholder=" "
                  style={styles.input}
                />

                

                <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 10, marginTop: 20, marginBottom: 5 }}>
                  Team
                </Text>
                <Picker
                  style={styles.picker}
                >
                  <Picker.Item label=" " value=" " />
                  <Picker.Item label="CEPPA" value="CEPPA" />
                  <Picker.Item label="SAP" value="SAP" />
                  <Picker.Item label="JPP" value="JPP" />
                  <Picker.Item label="MORR" value="MORR" />
                  <Picker.Item label="PRO" value="PRO" />
                </Picker>


                <TouchableOpacity onPress={handleOpenPress} style={styles.buttonplus}>
                  <Text style={styles.buttonTextplus}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
         
       
      </Modal>

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
    </>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#CCC',
    marginRight: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  greenBox: {
    width: 400,
    height: "100%",
    backgroundColor: '#F8F8F8',
  },
  picker: {
    height: 40,
    width: "90%",
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonplus: {
    backgroundColor: 'coral',
    padding: 5,
    marginTop: 30,
    marginLeft: 50,
    width: 100,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: "90%",
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F5637',
  },
  image: {
    width: 400,
    height: 400,
    marginRight: 30,
  },
});

export default MyComponent;
