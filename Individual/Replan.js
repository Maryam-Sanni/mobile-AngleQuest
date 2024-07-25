import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Picker} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyComponent({ onClose }) {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('Personal');

  const goToPlans = () => {
    // Navigate to ExpertsProfile screen when the button is clicked
    navigation.navigate('My Growth Plans');
    onClose(); // Close the modal
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center', marginTop: 40}}>
         <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
<View style={styles.greenBox}>
<View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
            style={styles.logo}
          />
          <Text style={styles.headerText}>Replan Growth Plan</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View> 
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginTop: 20, marginLeft: 50 }}>{selectedType} Development Objectives Replan</Text>
<View style={styles.container}>
<View style={styles.row}>
        <View style={styles.cell}>
          <Text>Type</Text>
        </View>
        <View style={styles.cell}>
        <Picker
                  selectedValue={selectedType}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedType(itemValue)}
                >
                  <Picker.Item label="Personal" value="Personal" />
                  <Picker.Item label="Team" value="Team" />
                  <Picker.Item label="Organization" value="Organization" />
                  </Picker>
        </View>
      </View>
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
          <Text>Result description</Text>
        </View>
        <View style={styles.cell}>
        <TextInput
            placeholder="Example: To be able to find my way around SAP fi..."
            placeholderTextColor="grey"
            multiline
            style={[styles.input, { height: 50 }]}
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
            style={[styles.input, { height: 50 }]}
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
            style={[styles.input, { height: 50 }]}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>How often do you want to review with your coach?</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker} 
>
  <Picker.Item label="Weekly" value="Weekly" />
  <Picker.Item label="Monthly" value="Monthly" />
  <Picker.Item label="Quarterly" value="Quarterly" />
  <Picker.Item label="Biannually" value="Biannually" />
  <Picker.Item label="Annually" value="Annually" />
</Picker>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Starting Level</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker} 
>
  <Picker.Item label="Beginner" value="" />
  <Picker.Item label="Junior" value="Junior" />
  <Picker.Item label="Medior" value="Medior" />
  <Picker.Item label="Senior" value="Senior" />
  <Picker.Item label="Professional" value="Professional" />
</Picker>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Target Level</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker} 
>
  <Picker.Item label="Beginner" value="" />
  <Picker.Item label="Junior" value="Junior" />
  <Picker.Item label="Medior" value="Medior" />
  <Picker.Item label="Senior" value="Senior" />
  <Picker.Item label="Professional" value="Professional" />
</Picker>
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
           <Picker
  style={styles.picker} 
>
  <Picker.Item label="Active" value="" />
  <Picker.Item label="Review" value="Review" />
  <Picker.Item label="Replan" value="Replan" />
  <Picker.Item label="Completed" value="Completed" />
</Picker>
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
    <TouchableOpacity onPress={goToPlans} style={styles.buttonplus} >
      <Text style={styles.buttonTextplus}>Save Changes</Text>
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
  picker: {
    height: 20,
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderColor: 'black',
    borderWidth: 1, 
    color:'grey',
    fontSize: 14
  },
  buttonplus: {
    backgroundColor: 'coral',
    padding: 5,
    marginLeft: 700, 
    width: 150,
    paddingHorizontal: 20,
    marginTop: 10
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    outline: 'black',
    borderColor: 'black',
    borderWidth: 1
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

export default MyComponent;