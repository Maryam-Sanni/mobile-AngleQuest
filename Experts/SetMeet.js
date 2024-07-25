import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, TextInput } from 'react-native';


function MyComponent({ onClose }) {


  return (
        <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center' }}>
          <View style={styles.greenBox}>
            <View style={styles.header}>
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                style={styles.logo}
              />
              <Text style={styles.headerText}>New Hub Meeting</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
            

              <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
              Meeting Topic
            </Text>
            <TextInput
              placeholder=" "
              style={styles.input}
            />

<Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
              Meeting Description (Optional)
            </Text>
            <TextInput
              placeholder=" "
              style={[styles.input, styles.multilineInput]}
              multiline
            />

              <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 20, marginBottom: 5 }}>
                Date
              </Text>
              <TouchableOpacity >
                <Text style={styles.input}><Text style={{fontWeight: '500'}}>Date: </Text>selectedDateTime</Text>
              </TouchableOpacity>
              <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 50, marginTop: 10, marginBottom: 10 }}>
                Time
              </Text>
              <Text style={styles.input}><Text style={{fontWeight: '500'}}>Time: </Text> selectedDateTime</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.buttonplus}>
              <Text style={styles.buttonTextplus}>Create Meeting</Text>
            </TouchableOpacity>
          </View>
       
  

      
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
    marginLeft: 100,
  },
  greenBox: {
    width: 400,
    backgroundColor: '#F8F8F8',
  },
  buttonplus: {
    backgroundColor: 'coral',
    padding: 5,
    bottom: 10,
    width: 150,
    position: 'absolute',
    right: 10,
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
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  multilineInput: {
    height: 80,
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F5637',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default MyComponent;
