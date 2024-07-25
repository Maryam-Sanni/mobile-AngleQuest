import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

const ScheduledMeetingsTable = () => {
  
  return (
    <View style={styles.greenBox}>
    <View style={{flexDirection: 'row'}}>
    <Text style={styles.title}>Interview Earnings</Text>
    <Text style={{fontSize: 14, fontWeight: '500', marginTop: 30, position: 'absolute', right: 10 }}>Summed earnings:$ 150</Text>
</View>
    <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Name</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Date and Time</Text>
          </View>
          <View style={styles.cell}>
           <Text style={{fontSize: 14, fontWeight: '600'}}>Type</Text>
          </View>
          <View style={styles.cell}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Amount ($)</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Maryam Bakahli</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>5/15/2024 3:00 PM - 4:00 PM</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Individual</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>40</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Adam Shane</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>5/15/2024 3:00 PM - 4:00 PM</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Corporate</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>50</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Patrick King</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>5/15/2024 3:00 PM - 3:30 PM</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>Individual</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>40</Text>
          </View>
          </View>
        </View>

      </View>
    
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginLeft: 10,
    color: "black",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'flex-start',
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 10, marginRight: 10
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  cell: { 
    flex: 1,
   backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-start',
  },
  cell2: {
    flex: 1,
   backgroundColor: 'none',
    padding: 10, 
    alignItems: 'flex-start',
  },
  cellText: {
    textAlign: 'flex-start',
  },
  
  greenBox: {
    flex: 1,
   width: "100%",
    height: 350,
    paddingBottom: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 50, 
  },
});

export default ScheduledMeetingsTable;
