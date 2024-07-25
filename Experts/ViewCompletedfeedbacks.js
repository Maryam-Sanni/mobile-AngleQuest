import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

function MyComponent({ onClose }) {
  return (
     
    <View style={{ flex: 1, backgroundColor: "#F8F8F8", alignItems: 'center' }}>
<View style={styles.greenBox}>
<View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} // replace with your logo URL
            style={styles.logo}
          />
          <Text style={styles.headerText}>Completed Interview Meetings</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View>
                        <Text style={{marginLeft: 730, marginTop: 20, marginBottom: -20, width: 200, fontWeight: '600'}}>Uneditable Section</Text>
 <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Role</Text>
        </View>
        <View style={styles.cell}>
        <Text style = {{color: 'grey'}}>Junior Platform Developer</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style = {{fontWeight: 'bold'}}>Level</Text>
        </View>
        <View style={styles.cell}>
        <Text style = {{color: 'grey'}}>Junior</Text>
        </View>
      </View>
      
         
      
      
    </View>
     
    <Text style={{marginLeft: 10, marginTop: 20, marginBottom: -20, width: 200, fontWeight: '600'}}>Uneditable Section</Text>
   


     <View style={styles.container}>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
          <Text style = {{fontWeight: 'bold'}}>Question 1</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize a model driven app to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>70%</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
          <Text style = {{fontWeight: 'bold'}}>Question 2</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize custom pages to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>50%</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
         <Text style = {{fontWeight: 'bold'}}>Question 3</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize a canvas app to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>40%</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
         <Text style = {{fontWeight: 'bold'}}>Question 4</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize a power automate to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>50%</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
          <Text style = {{fontWeight: 'bold'}}>Question 5</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize AI builder bot to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>80%</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
          <Text style = {{fontWeight: 'bold'}}>Question 6</Text>
        </View>
        <View style={[styles.cell, { flex: 5 }]}>
        <Text style = {{color: 'grey'}}>3 Ways to Optimize a canvas app to optimize its performance</Text>
        </View>
        <View style={[styles.cell, { flex: 2 }]}>
        <Text style = {{color: 'grey'}}>70%</Text> 
        </View>
      </View>
      </View>




    </View>
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
   buttonplus: {
    backgroundColor: 'coral',
    padding: 5,
    marginLeft: 200, 
    width: 100,
    paddingHorizontal: 20,
    marginTop: 10
  },
  buttonTextplus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  greenBox: {
    width: 400,
    backgroundColor: '#F8F8F8',
  },
  input: {
    outline: 'none',
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