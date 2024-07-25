import React, { useState, useEffect, useRef} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, ImageBackground, Picker } from 'react-native';
import EmployeeStats from './PerformaceStats';
import { useNavigation } from '@react-navigation/native';
import CustomPercentageChart from '../components/PercentageChart';

import {useFonts} from "expo-font"


function MyComponent() { 
    const navigation = useNavigation();

  
    return (
      <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
                <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
                    <View style={{}}>
                    <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.item}>
              <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa3093fa6656295c8b39535a911908d6555a356fccce78af145fec472c4bd154?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={styles.headertext}>Employee Performance</Text>
              </View>
            </TouchableOpacity>
            </View>
            
                  <View style={{ flexDirection: 'row', marginLeft: 20,}}>
                  <Picker
  style={styles.picker} 
>
<Picker.Item label="All" value="All" />
<Picker.Item label="Employee" value="Employee" />
          <Picker.Item label="Manager" value="Manager" />
          <Picker.Item label="Coach" value="Coach" />
          <Picker.Item label="Team" value="Team" />
        </Picker>

        <Picker
  style={styles.picker} 
>
<Picker.Item label="Employee" value="Employee" />
          <Picker.Item label="Manager" value="Manager" />
          <Picker.Item label="Coach" value="Coach" />
          <Picker.Item label="Team" value="Team" />
        </Picker>

        <Picker
  style={styles.picker} 
>
<Picker.Item label="From" value=" " />
<Picker.Item label="Jan" value="Jan" />
          <Picker.Item label="Feb" value="Feb" />
          <Picker.Item label="Mar" value="Mar" />
          <Picker.Item label="Apr" value="Apr" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="Jun" value="Jun" />
          <Picker.Item label="Jul" value="Jul" />
          <Picker.Item label="Aug" value="Aug" />
          <Picker.Item label="Sep" value="Sep" />
          <Picker.Item label="Oct" value="Oct" />
          <Picker.Item label="Nov" value="Nov" />
          <Picker.Item label="Dec" value="Dec" />
        </Picker>

        <Picker
  style={styles.picker} 
>
<Picker.Item label="To" value=" " />
<Picker.Item label="Jan" value="Jan" />
          <Picker.Item label="Feb" value="Feb" />
          <Picker.Item label="Mar" value="Mar" />
          <Picker.Item label="Apr" value="Apr" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="Jun" value="Jun" />
          <Picker.Item label="Jul" value="Jul" />
          <Picker.Item label="Aug" value="Aug" />
          <Picker.Item label="Sep" value="Sep" />
          <Picker.Item label="Oct" value="Oct" />
          <Picker.Item label="Nov" value="Nov" />
          <Picker.Item label="Dec" value="Dec" />
        </Picker>
        <TouchableOpacity style={styles.PDF} >
<Text style = {{fontSize: 15, color: 'white',}}>PDF</Text>
        </TouchableOpacity>
        </View>

     <View style={styles.container}>
     <View style={styles.box}>
        <Text style = {{fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10,fontFamily:"Varta-Light" }}>Angle Badge</Text>
        <View style={{flexDirection: 'row' }}>
          <Text style={{fontSize: 14, color: 'black',fontFamily:"Varta-Light" }}>This is the combined progress of your team</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
      <CustomPercentageChart percentage={51.3} />
      </View>
    </View>
      </View>

      <View style={styles.box}>
        <Text style = {{fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10,fontFamily:"Varta-Light" }}>Hub Attendance</Text>
        <View style={{flexDirection: 'row' }}>
          <Text style={{fontSize: 14, color: 'black', width: 100,fontFamily:"Varta-Light"}}>This is the combined hubs attendane of your team</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
      <CustomPercentageChart percentage={45} />
      </View>
    </View>
      </View>
     
      <View style={styles.box}>
        <Text style = {{fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10,fontFamily:"Varta-Light" }}>Growth Plan</Text>
        <View style={{flexDirection: 'row' }}>
          <Text style={{fontSize: 14, color: 'black',fontFamily:"Varta-Light" }}>This is the combined growth plan completed</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
      <CustomPercentageChart percentage={60} />
      </View>
    </View>
      </View>
      
      <View style={styles.box}>
        <Text style = {{fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 10,fontFamily:"Varta-Light" }}>Advice</Text>
        <View style={{flexDirection: 'row' }}>
          <Text style={{fontSize: 14, color: 'black', width: 100,fontFamily:"Varta-Light" }}>This is the combined advice sessions your team had</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
      <CustomPercentageChart percentage={49} />
      </View>
    </View>
      </View>
</View>

                       
                        <EmployeeStats />
                    </View>
                </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10
      },
    header: {
        marginLeft: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(225,225,212,0.3)',
        backgroundColor: '#f7fff4',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 10, 
    }, 
    headertext: {
      marginLeft: 5,
      fontSize: 14,
      fontWeight: '500',
      marginTop: 5,
      color: '#666',
      fontFamily:"Varta-Light"
    },
    image: {
      width: 21,
      height: 21,
      marginRight: 5,
      marginTop: 5,
      marginLeft: 10
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 40, marginRight: 50, marginTop: 20
      },
      box: {
        backgroundColor: '#f7fff4',
        padding: 20,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
        height: 150,
        borderWidth: 2, borderColor: 'rgba(225,225,212,0.3)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      boximage: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 30,
        borderRadius: 25
      },
      picker: {
        height: 40,
        width: 100,
        backgroundColor: 'lightgreen',
        borderColor: '#206C00',
        borderWidth: 1, 
        color:'black',
        fontSize: 14,
        borderRadius: 5, marginRight: 10, marginTop: 50
      },
      PDF: {
        height: 40,
        width: 100,
        backgroundColor: 'coral',
        borderColor: 'coral',
        borderWidth: 1, 
        color:'black',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5, marginRight: 10, marginTop: 50
      },
});

export default MyComponent;
