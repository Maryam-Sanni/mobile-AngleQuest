import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

function MyComponent({ onClose }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", marginTop: 40, alignItems: 'center'  }}>
     <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
<View style={styles.greenBox}>
<View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
            style={styles.logo}
          />
          <Text style={styles.headerText}>Won Bids</Text>
       
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
          <Text style = {{fontWeight: 'bold'}}>Company Name</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{color: 'grey'}}>ASML</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Role</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{color: 'grey'}}>Power Point Platform</Text>
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
          <Text style = {{fontWeight: 'bold'}}>Number of Candidates</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>5</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Status</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>Open</Text>
        </View>
        </View>
        </View>

<Text style={{ marginTop: 20, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Bid Details</Text>
<View style={{flexDirection: 'row', marginBottom: 10,}}>
<Text style={{ marginTop: 5, fontWeight: '500', color: 'black', marginLeft: 10 }}>Write a concise message to the company stating why they should pick your bid</Text>
<Text style={{marginLeft: 15, marginTop: 5, width: 200, fontWeight: '600'}}>Uneditable Section</Text>
              </View>
              <View style={{ marginTop: 3.5, padding: 6, paddingTop: 8, paddingBottom: 100, backgroundColor: 'none', borderWidth: 2, borderColor: '#CCC', marginLeft: 10, marginRight: 10 }}>
                <Text style={{ color: 'grey', marginTop: 2.5,}}>Sent Content</Text>
                </View>

                <View style={styles.container}>
                <View style={styles.row}>
        <TouchableOpacity>
        <View style={styles.cell}>
          <Text style={{color: 'grey'}}>Attached file(s)</Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>

 <Text style={{ marginTop: 20, fontWeight: '500', color: 'black', marginLeft: 10 }}>Feedback from the company</Text>
              <View style={{ marginTop: 3.5, padding: 6, paddingTop: 8, paddingBottom: 100, backgroundColor: 'none', borderWidth: 2, borderColor: '#CCC', marginLeft: 10, marginRight: 10 }}>
                <Text style={{ color: 'grey', marginTop: 2.5,}}>Hi XYZ, {'\n'} {'\n'}After some careful review of your bid and profile in comparison to others, we believe you are the best experienced for our team. {'\n'}{'\n'}Congratulations and Thank you for wanting to work with us on this journey. {'\n'}{'\n'}Thank you, TESLA Management.</Text>
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