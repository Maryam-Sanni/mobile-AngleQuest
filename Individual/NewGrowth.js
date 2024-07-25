import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

function MyComponent({ onClose }) {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('Personal');
  const [selectedFrequency, setSelectedFrequency] = useState('Weekly');
  const [selectedStartingLevel, setSelectedStartingLevel] = useState('Beginner');
  const [selectedTargetLevel, setSelectedTargetLevel] = useState('Medior');
  const [selectedStatus, setSelectedStatus] = useState('Active');

  const [openType, setOpenType] = useState(false);
  const [openFrequency, setOpenFrequency] = useState(false);
  const [openStartingLevel, setOpenStartingLevel] = useState(false);
  const [openTargetLevel, setOpenTargetLevel] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const goToPlans = () => {
    navigation.navigate('Growth Plan Offer');
    onClose();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center', marginTop: 40 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1,}}>
        <View style={styles.greenBox}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
              style={styles.logo}
            />
            <Text style={styles.headerText}>Create New Growth Plan Objective</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold' }}>
                ✕
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginTop: 20, marginLeft: 50 }}>{selectedType} Development Objectives</Text>
          <View style={styles.container}>
            
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Title</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="Become SAP FI Medior expert in 6 months"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Role</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="SAP FI"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Type</Text>
              </View>
              <View style={styles.cell}>
                <DropDownPicker
                  open={openType}
                  value={selectedType}
                  items={[
                    { label: 'Personal', value: 'Personal' },
                    { label: 'Team', value: 'Team' },
                    { label: 'Organization', value: 'Organization' },
                  ]}
                  setOpen={setOpenType}
                  setValue={setSelectedType}
                  style={pickerStyles}
                  dropDownContainerStyle={dropDownStyles}
                  containerStyle={pickerContainerStyle}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Result description</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="Example: To be able to find my way around SAP fi..."
                  placeholderTextColor="grey"
                  multiline
                  style={[styles.input, { height: 100 }]}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>How to achieve</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="Example: To be taught how to troubleshoot, find T'codes..."
                  placeholderTextColor="grey"
                  multiline
                  style={[styles.input, { height: 100 }]}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>What do you need to achieve the objective?</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="Continous training, practice and support"
                  placeholderTextColor="grey"
                  multiline
                  style={[styles.input, { height: 100 }]}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>How often do you want to review with your coach?</Text>
              </View>
              <View style={styles.cell}>
                <DropDownPicker
                  open={openFrequency}
                  value={selectedFrequency}
                  items={[
                    { label: 'Weekly', value: 'Weekly' },
                    { label: 'Monthly', value: 'Monthly' },
                    { label: 'Quarterly', value: 'Quarterly' },
                    { label: 'Biannually', value: 'Biannually' },
                    { label: 'Annually', value: 'Annually' },
                  ]}
                  setOpen={setOpenFrequency}
                  setValue={setSelectedFrequency}
                  style={pickerStyles}
                  dropDownContainerStyle={dropDownStyles}
                  containerStyle={pickerContainerStyle}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Starting Level</Text>
              </View>
              <View style={styles.cell}>
                <DropDownPicker
                  open={openStartingLevel}
                  value={selectedStartingLevel}
                  items={[
                    { label: 'Beginner', value: 'Beginner' },
                    { label: 'Junior', value: 'Junior' },
                    { label: 'Medior', value: 'Medior' },
                    { label: 'Senior', value: 'Senior' },
                    { label: 'Professional', value: 'Professional' },
                  ]}
                  setOpen={setOpenStartingLevel}
                  setValue={setSelectedStartingLevel}
                  style={pickerStyles}
                  dropDownContainerStyle={dropDownStyles}
                  containerStyle={pickerContainerStyle}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Target Level</Text>
              </View>
              <View style={styles.cell}>
                <DropDownPicker
                  open={openTargetLevel}
                  value={selectedTargetLevel}
                  items={[
                    { label: 'Beginner', value: 'Beginner' },
                    { label: 'Junior', value: 'Junior' },
                    { label: 'Medior', value: 'Medior' },
                    { label: 'Senior', value: 'Senior' },
                    { label: 'Professional', value: 'Professional' },
                  ]}
                  setOpen={setOpenTargetLevel}
                  setValue={setSelectedTargetLevel}
                  style={pickerStyles}
                  dropDownContainerStyle={dropDownStyles}
                  containerStyle={pickerContainerStyle}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Start Date</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="1/April/2024"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>End Date</Text>
              </View>
              <View style={styles.cell}>
                <TextInput
                  placeholder="20/Jul/2024"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Status</Text>
              </View>
              <View style={styles.cell}>
                <DropDownPicker
                  open={openStatus}
                  value={selectedStatus}
                  items={[
                    { label: 'Active', value: 'Active' },
                    { label: 'Review', value: 'Review' },
                    { label: 'Replan', value: 'Replan' },
                    { label: 'Completed', value: 'Completed' },
                  ]}
                  setOpen={setOpenStatus}
                  setValue={setSelectedStatus}
                  style={pickerStyles}
                  dropDownContainerStyle={dropDownStyles}
                  containerStyle={pickerContainerStyle}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Coach</Text>
              </View>
              <View style={styles.cell}>
                <Text style={{ color: 'grey' }}>Joop Melcher</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text>Feedbacks/remarks (from Coach)</Text>
              </View>
              <View style={styles.cell}><Text style={{ color: 'grey' }}>Read only field Jobseeker</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={goToPlans} style={styles.buttonplus}>
            <Text style={styles.buttonTextplus}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#CCC',
    marginRight: 10,
    marginTop: 20,
    marginLeft: 10
  },
  greenBox: {
    width: 400,
    backgroundColor: '#F8F8F8',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 5,
  },
  buttonplus: {
    backgroundColor: 'coral',
    borderRadius: 5,
    padding: 5,
    marginLeft: 290,
    width: 100,
    paddingHorizontal: 20,
    marginTop: 30
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    outline: 'black',
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    padding: 5
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
  }
});

const pickerStyles = {
  backgroundColor: '#F8F8F8',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 0, 
  height: 30,
};

const dropDownStyles = {
  backgroundColor: '#D3D3D3',
  borderColor: 'black',
  borderWidth: 1,
    borderRadius: 0, 
};

const pickerContainerStyle = {
  height: 50, // Adjust the height
  width: '100%', // Adjust the width if necessary
};

export default MyComponent;
