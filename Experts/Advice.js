import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Modal, ImageBackground, Animated } from 'react-native';
import OpenModal from '../Experts/AdviceProfile';
import { FaStar } from 'react-icons/fa';

const data = [
  { date: 'M', score: 40 },
  { date: 'T', score: 15 },
  { date: 'W', score: 24 },
  { date: 'T', score: 18 },
  { date: 'F', score: 4 },
  { date: 'S', score: 6 },
  { date: 'S', score: 5 },
];

const colors = ['#FF4040', '#CD5B45', '#FF7F50', '#F08080', '#F88379', '#FFE4E1', '#FFE4E1'];

function MyComponent() {
  const [isInterviewHovered, setIsInterviewHovered] = useState(false);
  const [isGrowthHovered, setIsGrowthHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        {timeLeft[interval]} {interval}{' '}
      </Text>
    );
  });

  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableHighlight
            underlayColor="transparent"
            onMouseEnter={() => setIsInterviewHovered(true)}
            onMouseLeave={() => setIsInterviewHovered(false)}
          >
            <View style={styles.item}>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d82dc6c35b436a4ac93edec3cb47de416b168131f8e3deb5c4898437d416d25f?apiKey=7b9918e68d9b487793009b3aea5b1a32&',
                }}
                style={styles.image}
              />
              <Text style={[styles.headertext, isInterviewHovered && { color: 'coral' }]}>
                Junior Power Platform Developer
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            onMouseEnter={() => setIsGrowthHovered(true)}
            onMouseLeave={() => setIsGrowthHovered(false)}
          >
            <View style={styles.item}>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d82dc6c35b436a4ac93edec3cb47de416b168131f8e3deb5c4898437d416d25f?apiKey=7b9918e68d9b487793009b3aea5b1a32&',
                }}
                style={styles.image}
              />
              <Text style={[styles.headertext, isGrowthHovered && { color: 'coral' }]}>
                Junior SAP FI
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity>
            <Image
              source={require('../assets/ellipsis-down.png')}
              style={styles.ellipsisImage}
            />
          </TouchableOpacity>
        </View>
  
       
        <TouchableOpacity onPress={handleOpenPress} style={styles.editProfileButton}>
          <Text style={styles.buttonText}>Create Profile</Text>
        </TouchableOpacity>
        

        <View style={styles.container}>
        <View style={styles.box}>
      <Text style={{ fontSize: 16, color: "black", fontWeight: '600'}}>Next Meeting Schedule</Text>
    <Text style={{ fontSize: 13, color: "grey", marginTop: 10}}>27/May/2024</Text>
    <Text style={{ fontSize: 14, color: "grey", marginTop: 10, fontWeight: '500'}}>2:00PM - 3:00PM</Text>
    <TouchableOpacity style={{  backgroundColor: 'none', padding: 8, paddingHorizontal: 10, marginTop: 15, borderRadius: 5, marginLeft: 10, marginRight: 10, borderWidth: 2, borderColor: '#206C00'}}>
          <Text style={{ color: '#206C00', textAlign: 'center', fontSize: 13, fontWeight: '600'}}>Start Session</Text>
          </TouchableOpacity>
      </View>
          <View style={styles.box}>
            <View style={styles.barGraphContainer}>
              {data.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                  <Animated.View
                    style={[
                      styles.graphBar,
                      { height: item.score * 2, backgroundColor: colors[index] },
                    ]}
                  />
                  <View style={styles.scoreDateContainer}>
                    <Text style={styles.graphScore}>{item.score}</Text>
                    <Text style={styles.graphDate}>{item.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.box}>
          <Text style={{ fontSize: 20, fontWeight: 'bold',}}>Rating</Text>
            <Text style={{ fontSize: 12, marginTop: 5, marginBottom: 15 }}>40 candidates reviews</Text>
    <View style={{ paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, backgroundColor: 'rgba(225,225,212,0.3)', width: 200, alignItems: 'center', marginTop: 10 }}>
    <View style={{ flexDirection: 'row'}}>
                    <Text style={{ fontSize: 18, color: "black", alignText: 'center', fontWeight: '600' }}><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></Text> <Text style={{ fontSize: 12, marginTop: 3, marginLeft: 5, color: "black"}}> 4.7 out of 5 </Text>
                    </View>
                  </View>
      <TouchableOpacity>
     <Text style={{ fontSize: 12, color: 'darkgrey', marginTop: 30 }}>How do we calculate ratings?</Text>
     </TouchableOpacity>
    </View>
      
      <View style={styles.box}>
        <Text style = {{fontSize: 14, color: 'black', fontWeight: '600' }}>You have a new session in:</Text>
         <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'coral', marginTop: 5  }}>{timerComponents}</Text>
        <Text style = {{fontSize: 12, marginTop: 20, color: 'grey'  }}>By recording upcoming sessions in your calendar, you hold yourself accountable for candidate's progress. Seeing these sessions scheduled prompts you to prepare accordingly and actively participate. </Text>
     </View>
          
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <OpenModal onClose={handleCloseModal} />
          </View>
        </Modal>

       
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '150%',
    width: '100%',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    maxHeight: 500,
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
    color: '#666',
  },
  image: {
    width: 21,
    height: 21,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 20,
  },
  ellipsisImage: {
    width: 15,
    height: 15,
    marginLeft: 60,
    marginTop: 10,
  },
  createProfileButton: {
    position: 'absolute',
    right: 20,
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
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
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  box: {
    backgroundColor: '#f7fff4',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 180,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(225,225,212,0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  barGraphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 200,
    height: 80,
    marginTop: 60,
    marginRight: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#f7fff4',
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 10,
  },
  barContainer: {
    alignItems: 'center',
  },
  scoreDateContainer: {
    position: 'absolute',
    bottom: -30,
    left: '50%',
    transform: [{ translateX: -5 }],
    alignItems: 'center',
    marginBottom: 10,
  },
  graphBar: {
    width: 20,
    borderRadius: 2,
    marginBottom: 10,
  },
  graphScore: {
    fontSize: 10,
    color: 'lightgrey',
    fontWeight: '600',
    marginTop: 10,
  },
  graphDate: {
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: -10,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default MyComponent;
