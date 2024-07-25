import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function MyComponent({ onClose }) {
  const navigation = useNavigation();

  const goToPlans = () => {
    // Navigate to ExpertsProfile screen when the button is clicked
    navigation.navigate('Subscription');
    onClose(); // Close the modal
  };

  return (
    <View style={{  flex: 1, backgroundColor: "white", marginTop: 40, alignItems: 'center' }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
        <View style={styles.greenBox}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} 
            style={styles.logo}
          />
          <Text style={styles.headerText}>Add Card Details</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View> 
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
             <View style={styles.inputField}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="titiana@stripe.com" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Card Number</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="1111 2222 3333 4444" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Expiration Month</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="MM" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Expiration Year</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="YY" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Security Code</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="123" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Name on card</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Country or region</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="United States" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Zip Code</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="00000" />
            </View>
            </View>
          </View>
          <TouchableOpacity onPress={goToPlans} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
  
    </View>
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  greenBox: {
    width: 400,
    height: 700,
    backgroundColor: '#F8F8F8',
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
    marginBottom: 20
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F5637'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginLeft: 50,
    marginRight: 50
  },
  content: {
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  inputField: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginLeft: 0,
    color: 'black', 
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 5,

  },
  saveButton: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;