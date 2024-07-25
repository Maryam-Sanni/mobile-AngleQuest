import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, ImageBackground, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import OpenModal from '../Individual/PickInterviewCoach';
import OpenModal2 from '../Individual/NewInterview';

function MyComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const handleOpenPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleOpenPress2 = () => {
        setModalVisible2(true);
    };

    const handleCloseModal2 = () => {
        setModalVisible2(false);
    };

    return (
        <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
            <BlurView intensity={70} style={styles.blurBackground}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.glassBox}>
                        <View style={styles.innerContainer}>
                            <View style={styles.header}>
                                <TouchableOpacity>
                                    <View style={styles.item}>
                                        <Image source={require('../assets/list.png')} style={styles.image} />
                                        <Text style={styles.headerText}>Interview</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleOpenPress2}>
                                    <View style={styles.addButton}>
                                        <Text style={styles.addButtonText}>+ New</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.boxTitle}>About Interview</Text>
                                <Text style={styles.boxText}>Its often not the most qualified candidate on paper that gets the job, its who performs best at the interview. Let our expert to conduct a preparatory interview to help you prepare for your upcoming interview.</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={handleOpenPress}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>Get Interviewed</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Image source={require('../assets/22.png')} style={styles.boxImage} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={handleCloseModal2}
      >
          <View style={styles.modalContent}>
            <OpenModal2 onClose={() => handleCloseModal2()} />
          </View>
      </Modal>

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
      },
    background: {
    height: '110%',
    width: '100%',
  },
    container: {
        flex: 1,
    },
    blurBackground: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
   glassBox: {
      height: 450,
    backgroundColor: 'rgba(225,255,212,0.3)',
    marginBottom: 30,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
    innerContainer: {
      height: 390,
    borderRadius: 10,
    backgroundColor: '#f7fff4',
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'coral',
        paddingBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        padding: 10
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 5,
        marginLeft: 10
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 7,
    },
    addButton: {
        backgroundColor: 'coral',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    addButtonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
    },
    boxTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },
    boxText: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: 180
    },
    button: {
        backgroundColor: 'coral',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginRight: 10,
        marginTop: 75
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
    boxImage: {
        width: 150,
        height: 150,
        marginLeft: 20
    },
});

export default MyComponent;
