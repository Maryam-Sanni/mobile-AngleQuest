import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyComponent({ onClose }) {
  const navigation = useNavigation();

  const [specialization, setSpecialization] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [nextTarget, setNextTarget] = useState("");

  const goToPlans = () => {
    navigation.navigate('All Experts');
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center', marginTop: 40, justifyContent: 'center', borderRadius: 10,}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
        <View style={styles.greenBox}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} 
              style={styles.logo}
            />
            <Text style={styles.headerText}>Get Started</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
          </View>

          <Text style={styles.labelText}>
            What is your specialization?
          </Text>
          <Picker
            selectedValue={specialization}
            onValueChange={(itemValue) => setSpecialization(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Pick an area of specialization" value="" />
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

          <Text style={styles.labelText}>
            What is your current role?
          </Text>
          <Picker
            selectedValue={currentRole}
            onValueChange={(itemValue) => setCurrentRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Beginner" value="Beginner" />
            <Picker.Item label="Junior" value="Junior" />
            <Picker.Item label="Medior" value="Medior" />
            <Picker.Item label="Senior" value="Senior" />
            <Picker.Item label="Professional" value="Professional" />
          </Picker>

          <Text style={styles.labelText}>
            What is your next target?
          </Text>
          <Picker
            selectedValue={nextTarget}
            onValueChange={(itemValue) => setNextTarget(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Junior" value="Junior" />
            <Picker.Item label="Beginner" value="Beginner" />
            <Picker.Item label="Medior" value="Medior" />
            <Picker.Item label="Senior" value="Senior" />
            <Picker.Item label="Professional" value="Professional" />
          </Picker>

          <TouchableOpacity style={styles.button} onPress={goToPlans}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  greenBox: {
    width: 400,
      borderRadius: 10,
    height: '80%',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    marginRight: 10,
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#206C00',
    borderWidth: 1, 
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    borderRadius: 5
  },
  button: {
    bottom: -50,
    backgroundColor: 'coral',
    padding: 10,
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    position: 'absolute',
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
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
  labelText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  }
});

export default MyComponent;
