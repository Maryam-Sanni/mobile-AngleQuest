import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

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
          <Text style={styles.headerText}>Growth Plans in Review</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: 'grey', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View>
                        <Text style={{marginLeft: 270, marginTop: 20, marginBottom: -15, width: 200, fontWeight: '600'}}>Uneditable Section</Text>
 <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Full Name</Text>
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
         <Text style = {{fontWeight: 'bold'}}>Profile</Text>
        </View>
        <View style={styles.cell}>
        <TouchableOpacity>
         <Text style={{color: 'green', textDecoration: 'underline'}}> MaryamBakahaliCV.pdf</Text>
         </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
         <Text style = {{fontWeight: 'bold'}}>Growth Plan Type</Text>
        </View>
        <View style={styles.cell}>
           <Text style={{color: 'grey'}}>Corporate</Text>
        </View>

      </View>
      
 </View>
 <Text style={{marginLeft: 270, marginTop: 20, marginBottom: -30, width: 200, fontWeight: '600'}}>Uneditable Section</Text>s
       <View style={styles.container}>
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
          <Text style={{color: 'grey'}}>I want to be able to lead a a project</Text>
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
<Text style={{ marginTop: 20, fontWeight: 'bold', color: 'black', marginLeft: 10 }}> Your Feedback/Remark</Text>
              <View style={{ marginTop: 3.5, padding: 6, paddingTop: 8, paddingBottom: 100, backgroundColor: 'none', borderWidth: 2, borderColor: '#CCC', marginLeft: 10, marginRight: 10 }}>
                <TextInput
                  style={{ padding: 6, marginTop: 2.5, fontSize: 14, fontWeight: 'normal', color: '#6B7280', }}
                  placeholder="e.g: Your goals and its description are clear and concise. Well done for that. I am satisfied with this set goals and I am more than happy to work with you to the finish line.  See you in our one-one session where I'll share further tips on how to achieve this feat and above all meet you."
                />
                </View>
<View style={{ flexDirection: "row", marginBottom: 10}}>
    <TouchableOpacity style={styles.buttonAcc} >
      <Text style={styles.buttonTextAcc}>Satisfied, Proceed</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAcc2} >
      <Text style={styles.buttonTextAcc2}>Not satisfied, replan</Text>
    </TouchableOpacity>
</View>
 
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
  greenBox: {
    width: 400,
    backgroundColor: '#F8F8F8',
  },
  buttonAcc: {
    borderWidth: 2,
    borderColor: '#CCC',
    padding: 10,
    marginTop: 30,
    marginLeft: 10, 
    paddingHorizontal: 20,
  },
  buttonTextAcc: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonAcc2: {
    borderWidth: 2,
    borderColor: '#CCC',
    padding: 10,
    marginTop: 30,
    marginLeft: 60, 
    paddingHorizontal: 20,
  },
  buttonTextAcc2: {
    color: 'black',
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
    marginBottom: 20
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F5637'
  }
});

export default MyComponent;