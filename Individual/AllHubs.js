import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Picker, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import OpenSchedule from '../components/JProfile';

function MyComponent() {
  const navigation = useNavigation(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  
  const toggleMode = () => {
    setIsDropdown(!isDropdown);
    setSelectedValue('');
    setSearch('');
  };

const handleOpenPress2 = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Sample data for the cards
  const cardData = [
    {
      date: "Mon-Fri",
      time: "09:30AM - 12:30PM",
      
      expert: "Emily Ray",
      job: "Data Analyst",
       country: "Switzerland",
      interviewfee: "$50",
      growthfee: "NIL",
      advicefee: "$70",
    },
    {
    date: "Mon, Tue, Wed, Thur",
      time: "02:00PM - 03:00PM",
      
      expert: "Monica Jerry",
      job: "UI/UX Designer",
       country: "Canada",
      interviewfee: "NIL",
      growthfee: "$18",
      advicefee: "$20",
    },
     {
    date: "Sat & Sun",
      time: "09:00PM - 10:30PM",
      
      expert: "Fisayo Fosudo",
      job: "Java Engineer",
      country: "Nigeria",
      interviewfee: "$25",
      growthfee: "$25",
      advicefee: "$25",
    },
    {
    date: "Wed - Fri",
    time: "02:00PM - 04:00PM",
    
    expert: "John Smith",
    job: "Dev Ops",
     country: "Canada",
    interviewfee: "$50",
      growthfee: "$40",
      advicefee: "$50",
  },
   {
    date: "Mon, Tue, Wed",
    time: "02:00PM - 04:00PM",
    
    expert: "Vee Venice",
    job: "SAP FI",
     country: "India",
    interviewfee: "$20",
      growthfee: "NIL",
      advicefee: "NIL",
  },
    {
    date: "Mon-Fri",
      time: "09:00AM - 12:00PM",
      
      expert: "Will Cooper",
      job: "Backend Dev.",
       country: "United Kingdom",
      interviewfee: "$30",
      growthfee: "$12",
      advicefee: "NIL",
    },
    {
    date: "Mon-Fri",
    time: "02:00PM - 04:00PM",
    
    expert: "John Smith",
    job: "Frontend Dev.",
     country: "Netherlands",
    interviewfee: "$50",
      growthfee: "NIL",
      advicefee: "$42",
  },
   {
    date: "Mon-Fri",
    time: "02:00PM - 04:00PM",
    
    expert: "John Smith",
    job: "Dev Ops",
     country: "United States",
    interviewfee: "$30",
      growthfee: "$25",
      advicefee: "$30",
  },
   {
    date: "Mon-Fri",
    time: "02:00PM - 04:00PM",
    
    expert: "Vee Venice",
    job: "SAP FI",
    country: "United Kingdom",
    interviewfee: "$50",
      growthfee: "$50",
      advicefee: "$50",
  },
  {
    date: "Mon-Fri",
    time: "09:00AM - 05:00PM",
    
    expert: "Michelle Raymond",
    job: "Microsoft Azure",
    country: "Netherlands",
    interviewfee: "NIL",
      growthfee: "NIL",
      advicefee: "$50",
  },
  ];

  const renderInput = () => {
    if (isDropdown) {
      return (
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Pick an area of specialization" value="" />
          <Picker.Item label="Java Engineering" value="Java Engineering" />
          <Picker.Item label="SAP FI" value="SAP FI" />
          <Picker.Item label="Microsoft Azure" value="Microsoft Azure" />
          <Picker.Item label="Dev Ops" value="Dev Ops" />
          <Picker.Item label="Frontend Development" value="Frontend Development" />
          <Picker.Item label="Backend Development" value="Backend Development" />
          <Picker.Item label="Fullstack Development" value="Fullstack Development" />
          <Picker.Item label="Data Analysis" value="Data Analysis" />
          <Picker.Item label="UI/UX Design" value="UI/UX Design" />
        </Picker>
      );
    } else {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for experts..."
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity onPress={toggleMode} style={styles.iconContainer}>
            <Image source={require('../assets/arrow-down.png')} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        </View>
      );
    }
  };

  const goToBookInterview = () => {
    navigation.navigate('Interview');
  };

  const goToBookGrowth = () => {
    navigation.navigate('Growth Plan');
  };

  const goToBookAdvice = () => {
    navigation.navigate('Advice');
  };

  const renderCards = () => {
    return cardData.map((data, index) => (
      <View key={index} style={styles.card}>
        <View style={styles.cardContent}>
        <TouchableOpacity onPress={handleOpenPress2}> 
        <View style={{ justifyContent: "center", width: '95%', height: 100, borderRadius: 5, backgroundColor: "#F0FFF9", padding: 20, alignItems: 'center', borderWidth: 1, borderColor: '#206C00', marginRight: 10, marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
          <View style={styles.expertInfo}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96214782d7fee94659d7d6b5a7efe737b14e6f05a42e18dc902e7cdc60b0a37b' }}
              style={styles.expertImage}
            />
            <Text style={styles.expertName}>{data.expert}</Text>
            <Text style={styles.expertJob}>{data.job}</Text>
          </View>
          </View>
          </TouchableOpacity>
          <View style={styles.availability}>
            <View style={styles.availabilityHeader}>
              <Text style={styles.availabilityText}>Available Days</Text>
              <View style={{position: 'absolute', right: 10, flexDirection: 'row'}}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6bba7edcb3f010b92084265108234b625f6a1e57053bb656b44878ce3a0ec09a' }}
                style={styles.countryIcon}
              />
              <Text style={styles.countryText}>{data.country}</Text>
              </View>
            </View>
            <Text style={styles.dateText}>{data.date}</Text>
            <Text style={styles.timeText}>Time: {data.time}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={goToBookInterview}>
                <Text style={styles.buttonText}>Interview</Text>
              </TouchableOpacity>
              <Text style={styles.feeText}>{data.interviewfee}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={goToBookGrowth}>
                <Text style={styles.buttonText}>Growth Plan</Text>
              </TouchableOpacity>
              <Text style={styles.feeText}>{data.growthfee}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={goToBookAdvice}>
                <Text style={styles.buttonText}>Advice</Text>
              </TouchableOpacity>
              <Text style={styles.feeText}>{data.advicefee}</Text>
            </View>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
      <BlurView intensity={70} style={styles.blurView}>
       <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.glassBox}>
                <View style={styles.innerContainer}>
                  <View style={styles.header}>
                    <TouchableOpacity>
                      <View style={styles.session}>
                        <Text style={styles.sessionText}>All Experts</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.session2}>
                        <Text style={styles.sessionText}>Booked Experts</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.session2}>
                        <Text style={styles.sessionText}>Saved</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.filterContainer}>
                    <Text style={styles.filterText}>Use the search or the dropdown to filter</Text>
                    <View style={styles.dropcontainer}>
                      {renderInput()}
                    </View>
                  </View>
                  <View style={styles.cardsContainer}>
                    {renderCards()}
                  </View>
                </View>
              </View>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
          <View style={styles.modalContent}>
          <OpenSchedule onClose={() => handleCloseModal()} />
          </View>
      </Modal>
            </ScrollView>
            </View>
      </BlurView>
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
  background: {
    height: '110%',
    width: '100%',
  },
    container: {
    flex: 1,
  },
  blurView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  glassBox: {
    backgroundColor: 'rgba(225,255,212,0.3)',
    marginBottom: 30,
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  innerContainer: {
    borderRadius: 10,
    backgroundColor: '#f7fff4',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  session: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#206C00',
    borderRadius: 5,
    backgroundColor: '#d3f9d8',
    marginRight: 10,
  },
  session2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#206C00',
    borderRadius: 5,
    backgroundColor: 'none',
    marginRight: 10,
  },
  sessionText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#206C00',
  },
  filterContainer: {
    marginTop: 25,
    marginLeft: 10,
    marginBottom: 10,
  },
  filterText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  dropcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: 400,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  input: {
    width: '70%',
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: 'white',
  },
  picker: {
    width: '100%',
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'none',
  },
  iconContainer: {
    padding: 8,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  card: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cardContent: {
    width: '100%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#d3f9d8',
    padding: 20,
  },
  expertInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  expertImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  expertName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  expertJob: {
    fontSize: 14,
    color: '#206C00',
  },
  availability: {
    marginTop: 15,
  },
  availabilityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5
  },
  countryIcon: {
    width: 15,
    height: 15,
    marginLeft: 15,
    marginTop: 2
  },
  countryText: {
    fontSize: 14,
    color: '#206C00',
    marginLeft: 5,
  },
  dateText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
    marginTop: 5,
  },
  timeText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginRight: 10
  },
  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
      justifyContent: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: '#206C00',
    borderRadius: 5,
    backgroundColor: '#F0FFF9',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#206C00',
    fontSize: 12,
  },
  feeText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    justifyContent: 'center',
    marginLeft: 10
  },
});

export default MyComponent;
