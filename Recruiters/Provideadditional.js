import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, Modal } from 'react-native';
import OpenModal from './AllSet';

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
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", marginTop: 40, alignItems: 'center' }}>
          <View style={styles.greenBox}>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                style={styles.logo}
              />
              <Text style={styles.headerText}>Note on Employee to the expert</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 5, marginLeft: 20, fontStyle: 'italic', fontWeight: '500', marginRight: 100 }}>
              Share important details about " Employee Name" that will enable the expert to know the employee better to tailor his guidance
            </Text>

            <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 20, marginTop: 20, marginBottom: 5 }}>
              What area in the role would you like the expert to focus on with "Employee Name"
            </Text>
            <TextInput
              placeholder=" "
              style={styles.input}
            />

            <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 20, marginTop: 20, marginBottom: 5 }}>
              Additional details to assist expert
            </Text>
            <TextInput
              placeholder=" "
              style={[styles.input, styles.multilineInput]}
              multiline
            />

            <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 20, marginTop: 20, marginBottom: 5 }}>
              Expert country: (select the preferred country you would like the expert to be from)
            </Text>
            <Picker
              style={styles.picker}
            >
              <Picker.Item label=" " value=" " />
              <Picker.Item label="Nigeria" value="Nigeria" />
              <Picker.Item label="United States" value="United States" />
              <Picker.Item label="United Kingdom" value="United Kingdom" />
              <Picker.Item label="Canada" value="Canada" />
              <Picker.Item label="Australia" value="Australia" />
              <Picker.Item label="Netherlands" value="Netherlands" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="Germany" value="Germany" />
              <Picker.Item label="France" value="France" />
              <Picker.Item label="China" value="China" />
              <Picker.Item label="Japan" value="Japan" />
              <Picker.Item label="Brazil" value="Brazil" />
              <Picker.Item label="South Africa" value="South Africa" />
            </Picker>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleOpenPress} style={styles.buttonplus}>
                <Text style={styles.buttonTextplus}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenPress} style={styles.buttonskip}>
                <Text style={styles.buttonTextskip}>Skip</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    right: 30,
    marginBottom: 50,
    bottom: -30,
  },
  buttonplus: {
    backgroundColor: 'coral',
    borderRadius: 5,
    padding: 5,
    marginLeft: 50,
    width: 100,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  buttonskip: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'coral',
    padding: 5,
    marginLeft: 20,
    width: 100,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonTextskip: {
    color: 'coral',
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
  multilineInput: {
    height: 80,
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
