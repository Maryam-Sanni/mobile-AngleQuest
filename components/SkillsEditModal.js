// SkillsEditModal.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SkillsEditModal = ({ visible, skills, onClose, onSave }) => {
  const [editableSkills, setEditableSkills] = useState([...skills]);

  const handleSaveSkills = () => {
    onSave(editableSkills);
    onClose();
  };

  const handleSkillChange = (text, index) => {
    const updatedSkills = [...editableSkills];
    updatedSkills[index] = text;
    setEditableSkills(updatedSkills);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
       <View style={{ flex: 1,  backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center'}}>
      <View style={styles.modalView}>
      <View style={styles.header}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d38e99b0016f2bd167d2cfd38ff0d43c9f94a93c84b4e04a02d32658fb401?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} 
            style={styles.logo}
          />
          <Text style={styles.headerText}>Edit Skills</Text>
       
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 18, color: '#3F5637', fontWeight: 'bold'}}>
            ✕
          </Text>
        </TouchableOpacity>
        </View>
        {editableSkills.map((skill, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleSkillChange(text, index)}
            value={skill}
          />
        ))}
        <View style={{ width: 200, marginTop: 20}}>
        <Button title="Save" onPress={handleSaveSkills} color="coral"/>
      </View>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
   backgroundColor: '#F8F8F8',
    width: 400
  },
  input: {
    height: 40,
    borderColor: 'none',
    borderRadius: 20,
    marginBottom: 10,
    width: '50%',
    paddingHorizontal: 10,
    backgroundColor: '#d3f9d8',
    color: '#206C00'
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  header: {
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 50,
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

export default SkillsEditModal;
