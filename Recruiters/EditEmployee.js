import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, Modal, ScrollView } from 'react-native';
import OpenModal from './AttachExpert';

function MyComponent({ onClose }) {
  const [ModalVisible, setModalVisible] = useState(false);

  const handleOpenPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    onClose();
  };


  return (
        <View style={{ flex: 1, backgroundColor: "#F8F8F8", marginTop: 40, alignItems: 'center' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1,  }}>
          <View style={styles.greenBox}>
          
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                style={styles.logo}
              />
              <Text style={styles.headerText}>Edit Employee's Details</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                  Full Name
                </Text> 
                <TextInput
                  placeholder="Larrisa Omreh"
                  style={styles.input}
                />

<Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                  Email Address
                </Text>
                <TextInput
                  placeholder="larrisa051@gmail.com"
                  style={styles.input}
                />

                <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                  Specialization
                </Text>
                <Picker
                  style={styles.picker}
                >
                  <Picker.Item label="Microsoft Azure" value="Microsoft Azure" />
                  <Picker.Item label="Java Engineering" value="Java Engineering" />
                  <Picker.Item label="SAP FI" value="SAP FI" />
                  <Picker.Item label="Microsoft Azure" value="Microsoft Azure" />
                  <Picker.Item label="Dev Ops" value="Dev Ops" />
                  <Picker.Item label="Frontend Development" value="Frontend Development" />
                  <Picker.Item label="Backend Development" value="Backend Development" />
                  <Picker.Item label="Fullstack Development" value="Fullstack Development" />
                  <Picker.Item label="Data Analysis" value="Data Analysis" />
                  <Picker.Item label="UI/UX Design" value="UI/UX Design" />
                </Picker>

                <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                  Current role
                </Text>
                <Picker
                  style={styles.picker}
                >
                     <Picker.Item label="Beginner" value="Beginner" />
                  <Picker.Item label="Beginner" value="Beginner" />
                  <Picker.Item label="Junior" value="Junior" />
                  <Picker.Item label="Medior" value="Medior" />
                  <Picker.Item label="Senior" value="Senior" />
                  <Picker.Item label="Professional" value="Professional" />
                </Picker>

                <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 30, marginBottom: 5 }}>
                  Target role
                </Text>
                <Picker
                  style={styles.picker}
                >
                     <Picker.Item label="Professional" value="Professional" />
                  <Picker.Item label="Junior" value="Junior" />
                  <Picker.Item label="Beginner" value="Beginner" />
                  <Picker.Item label="Medior" value="Medior" />
                  <Picker.Item label="Senior" value="Senior" />
                  <Picker.Item label="Professional" value="Professional" />
                </Picker>

                <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                                         Change Manager
                                        </Text>
<Picker
  style={styles.picker} 
>
<Picker.Item label="Joop Melcher" value="Joop Melcher" />
<Picker.Item label="Monica Jerry" value="Monica Jerry" />
          <Picker.Item label="Will Cooper" value="Will Cooper" />
          <Picker.Item label="John Othega" value="John Othega" />
          <Picker.Item label="Joop Melcher" value="Joop Melcher" />
        </Picker>

        <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                                         Change Coach
                                        </Text>
<Picker
  style={styles.picker} 
>
<Picker.Item label="Will Cooper" value="Will Cooper" />
<Picker.Item label="Monica Jerry" value="Monica Jerry" />
          <Picker.Item label="Will Cooper" value="Will Cooper" />
          <Picker.Item label="John Othega" value="John Othega" />
          <Picker.Item label="Joop Melcher" value="Joop Melcher" />
        </Picker>

        <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={onClose} style={styles.buttonplus}>
                  <Text style={styles.buttonTextplus}>Save Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenPress} style={styles.buttonnext}>
                  <Text style={styles.buttonTextplus}>Next</Text>
                </TouchableOpacity>
                </View>
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
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flexDirection: 'column',
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
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    marginLeft: 50,
    borderRadius: 5,
  },
  buttonplus: {
    backgroundColor: 'coral',
    padding: 10,
    marginTop: 30,
    marginLeft: 50,
    width: 150,
    paddingHorizontal: 20,
    borderRadius: 5,
marginBottom: 50
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonnext: {
    backgroundColor: 'coral',
    padding: 10,
    marginTop: 30,
    marginLeft: 420,
    width: 150,
    paddingHorizontal: 20,
    borderRadius: 5,
marginBottom: 50
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    marginLeft: 50,
    borderRadius: 5,
    padding: 10,
  },
  uneditable: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1,
    marginLeft: 50,
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
