import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Picker } from 'react-native';


function MyComponent({ onClose }) {
  return (
   
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center'  }}>
    
    <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
<View style={styles.greenBox}>
<View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
            style={styles.logo}
          />
          <Text style={styles.headerText}>Completed Growth Plans</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View>
                        <Text style={{marginLeft: 270, marginTop: 20, marginBottom: -15, width: 200, fontWeight: '600'}}>Uneditable Section</Text>
 <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Protegee</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{color: 'grey'}}> Maryam Bakahali</Text>
           
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Level</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{color: 'grey'}}>Junior</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Result Description</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>To be able to find my way around SAP FI</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>How to achieve</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>To be taught to troubleshoot, find 'codes, navigate the system</Text>
        </View>
        </View>
    <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Anticipated Progress (Target)</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>I want to be bale to lead a a project</Text>
        </View>
        </View>
    <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>What do you need to achieve this objective?</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>Continuous training, practice and support</Text>
        </View>
        </View>
 <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Progress/Level</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>Goal Setting Stage</Text>
        </View>
        </View>
 <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Goal Timeline</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>Start Date-End Date</Text>
        </View>
        </View>
     
      
 </View>
<Text style={{ marginTop: 20, marginBottom: -10, fontWeight: 'bold', fontSize: 16, color: 'black', marginLeft: 10 }}>Growth Plan Scoring</Text>
       <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Strongest Competency</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="PV01-Passion" value="" />
  <Picker.Item label="PV02-Passion" value="PV02-Passion" />
  <Picker.Item label="PV03-Passion" value="PV03-Passion" />
  <Picker.Item label="PV01-Passion" value="PV01-Passion" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Strongest Competency</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="PV07-Customer Orientation" value="" />
  <Picker.Item label="PV06-Customer Orientation" value="PV06-Customer Orientation" />
  <Picker.Item label="PV05-Customer Orientation" value="PV05-Customer Orientation" />
  <Picker.Item label="PV07-Customer Orientation" value="PV07-Customer Orientation" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
    <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Strongest Competency</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="SV01-Creativity and Innovation" value="" />
  <Picker.Item label="SV02-Creativity and Innovation" value="SV02-Creativity and Innovation" />
  <Picker.Item label="SV03-Creativity and Innovation" value="SV03-Creativity and Innovation" />
  <Picker.Item label="SV04-Creativity and Innovation" value="SV04-Creativity and Innovation" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
    <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Competency to develop</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="FxT01-Knowledge of product " value="" />
  <Picker.Item label="FxT02-Knowledge of product " value="FxT02-Knowledge of product " />
  <Picker.Item label="FxT01-Knowledge of product " value="FxT01-Knowledge of product " />
  <Picker.Item label="FxT03-Knowledge of product " value="FxT03-Knowledge of product " />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
<View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Competency to develop</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="PV09-Pro-activity " value="" />
  <Picker.Item label="PV09-Pro-activity" value="PV09-Pro-activity" />
  <Picker.Item label="PV08-Pro-activity " value="PV08-Pro-activity" />
  <Picker.Item label="PV07-Pro-activity " value="PV07-Pro-activity" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
 <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Competency to develop</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker} 
>
  <Picker.Item label="LO05-Planning and Organization" value="" />
  <Picker.Item label="LO05-Planning and Organization" value="LO05-Planning and Organization" />
  <Picker.Item label="LO04-Planning and Organization" value="LO04-Planning and Organization" />
  <Picker.Item label="LO03-Planning and Organization" value="LO03-Planning and Organization" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
        </View>
<Text style={{ marginTop: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, fontSize: 16, marginBottom: 10 }}> Overall Feedback/Remark</Text>
              <View style={{ marginTop: 3.5, padding: 6, paddingTop: 8, paddingBottom: 100, backgroundColor: 'none', borderWidth: 2, borderColor: '#CCC', marginLeft: 10, marginRight: 10 }}>
                <TextInput
                  style={{ padding: 6, marginTop: 2.5, fontSize: 14, fontWeight: 'normal', color: '#6B7280', borderWidth: 1, outline: 'black', borderColor: 'black',  }}
                  placeholder="e.g: Your goals and its description are clear and concise. Well done for that. I am satisfied with this set goals and I am more than happy to work with you to the finish line.  See you in our one-one session where I'll share further tips on how to achieve this feat and above all meet you."
                />
                </View>

<View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Performance Rating</Text>
        </View>
        <View style={styles.cell}>
        <Picker
  style={styles.picker}
>
  <Picker.Item label="RT01-Brilliant" value="" />
  <Picker.Item label="RT02-Good" value="RT02-Good" />
  <Picker.Item label="RT03-Perfect" value="RT03-Perfect" />
  <Picker.Item label="RT01-Brilliant" value="RT01-Brilliant" />
  {/* Add more Picker.Item components for additional options */}
</Picker>
        </View>
        </View>
        </View>

    <TouchableOpacity style={styles.buttonAcc} >
      <Text style={styles.buttonTextAcc}>Update</Text>
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
  greenBox: {
    width: 400,
    backgroundColor: '#F8F8F8',
  },
  buttonAcc: {
    borderWidth: 3,
    borderColor: 'grey',
    padding: 10,
    marginTop: 30,
    marginLeft: 200, 
    paddingHorizontal: 5,
    marginBottom: 20
  },
  buttonTextAcc: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    outline: 'black',
    borderWidth: 1,
    borderColor: 'black'
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