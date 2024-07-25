import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import ScheduledGrowthPlan from '../components/ScheduledGrowthPlan';
import GrowthPlansReview from '../components/GrowthPlansReview';
import CompletedGrowthPlan from '../components/CompletedGrowthPlan';
import { useNavigation } from '@react-navigation/native';
import OpenModal from '../Experts/GrowthPlanProfile';


function MyComponent() {
    const navigation = useNavigation();
    const [isInterviewHovered, setIsInterviewHovered] = useState(false);
    const [isGrowthHovered, setIsGrowthHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const targetDate = '2024-06-29T00:00:00';

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    

    const handleOpenPress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };
  
    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            <Text key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </Text>
        );
    });

  return (
    <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
          <View style={styles.header}>
          <TouchableHighlight
                                
                                underlayColor={isInterviewHovered ? 'transparent' : 'transparent'}
                                onMouseEnter={() => setIsInterviewHovered(true)}
                                onMouseLeave={() => setIsInterviewHovered(false)}>
                                <View style={styles.item}>
                                <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dea8538a41a4085f905f7513c46d36613c28b4ada84630149918f4444ac5ecde?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                                    <Text style={[styles.headertext, isInterviewHovered && { color: 'coral' }]}>Junior Power Platform Developer</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                               
                                underlayColor={isGrowthHovered ? 'transparent' : 'transparent'}
                                onMouseEnter={() => setIsGrowthHovered(true)}
                                onMouseLeave={() => setIsGrowthHovered(false)}>
                                <View style={styles.item}>
                                <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dea8538a41a4085f905f7513c46d36613c28b4ada84630149918f4444ac5ecde?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                                    <Text style={[styles.headertext, isGrowthHovered && { color: 'coral' }]}>Junior SAP FI</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableOpacity >
                <Image source={require('../assets/ellipsis-down.png')} style={{width: 15, height: 15, marginLeft: 60, marginTop: 10}} />
            </TouchableOpacity>
                            
                        </View>
                   
        <TouchableOpacity onPress={handleOpenPress} style={styles.editProfileButton}>
          <Text style={styles.buttonText}>Create Profile</Text>
        </TouchableOpacity>
       

     <View style={styles.container}>
     <View style={styles.box2}>
      <Text style={{ fontSize: 16, color: "black", fontWeight: '600'}}>Next Meeting Schedule</Text>
    <Text style={{ fontSize: 13, color: "grey", marginTop: 10}}>27/May/2024</Text>
    <Text style={{ fontSize: 14, color: "grey", marginTop: 10, fontWeight: '500'}}>2:00PM - 3:00PM</Text>
    <TouchableOpacity style={{  backgroundColor: 'none', padding: 8, paddingHorizontal: 10, marginTop: 15, borderRadius: 5, marginLeft: 10, marginRight: 10, borderWidth: 2, borderColor: '#206C00'}}>
          <Text style={{ color: '#206C00', textAlign: 'center', fontSize: 13, fontWeight: '600'}}>Start Session</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.box}>
         <Text style = {{fontSize: 12, color: 'grey' }}>Pending Growth Plan Reviews</Text>
         <View style={{flexDirection: 'row'}}>
         <Image source={require('../assets/icons8-choice.gif')} style={styles.boximage}  />
           <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'brown', marginTop: 5 }}>5</Text>
           </View>
           <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10 }}>Candidates are waiting for your review</Text>
      </View>
      <View style={styles.box}>
        <Text style = {{fontSize: 12, color: 'grey' }}>Plans Reveiwed</Text>
        <View style={{flexDirection: 'row'}}>
         <Image source={require('../assets/icons8-done.gif')} style={styles.boximage}  />
           <Text style = {{fontSize: 24, fontWeight: 'bold', marginTop: 5, color: '#4CAF50' }}>30</Text>
      </View>
      <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10 }}>You have reveiwed 6 plan(s) this week</Text>
      </View>
      <View style={styles.box2}>
        <Text style = {{fontSize: 12, color: 'grey' }}>Next growth Plan Session in</Text>
        <View style={{flexDirection: 'row'}}>
        
           <Text style = {{fontSize: 24, fontWeight: 'bold', marginTop: 5, color: 'darkgreen' }}>{timerComponents}</Text>
           </View>
           <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10 }}>You have a new session in {timerComponents}! </Text>
      </View>
    </View>

 <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
          <View style={styles.modalContent}>
          <OpenModal onClose={() => handleCloseModal()} />
          </View>
      </Modal>



          
          
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
  },
  header: {
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7fff4',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headertext: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    color: '#666'
  },
  image: {
    width: 21,
    height: 21,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 20
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 20, marginRight: 20, marginTop: 20
  },
  box: {
    backgroundColor: '#f7fff4',
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: 150,
    marginBottom: 20,
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
  box2: {
    backgroundColor: '#f7fff4',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 170,
    marginBottom: 20,
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
    left: 250,
    borderRadius: 25
  },
  createProfileButton: {
    position: 'absolute',
    right: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'coral',
    width: 150,
    alignItems: 'center',
  },
  editProfileButton: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#f7fff4',
    backgroundColor: 'coral',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '600',
  },
});

export default MyComponent;
