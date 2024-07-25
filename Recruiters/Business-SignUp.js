import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native';


// SignUpButton component
const SignUpButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.buttonContainer}>
    <Image source={{ uri: icon }} style={styles.buttonIcon} />
    <Text>{text}</Text>
  </TouchableOpacity>
);

// FormInput component
const FormInput = ({ placeholder, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#999"
      onChangeText={onChangeText} // Pass onChangeText prop to handle text changes
    />
  </View>
);


const MyComponent = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  const handleSignUp = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate('Verify Business');
  };

  const navigateToTerms = () => {
    navigation.navigate('Terms of Service');
  };

  return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create a new account</Text>
            <SignUpButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5261e33bdee74cda06397e01a2033a956e661a701aab68af14e75f301b54a5?apiKey=7b9918e68d9b487793009b3aea5b1a32&"
              text="Sign up with Google"
            />
            <SignUpButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44c39c6507947c98c1b395fecfccacfdba1edd07847eab25a4f629858fa22afa?apiKey=7b9918e68d9b487793009b3aea5b1a32&"
              text="Sign up with LinkedIn"
            />
            <View style={styles.divider}>
              <Text>or</Text>
            </View>
            <FormInput placeholder="First name" onChangeText={setFirstName} />
            <FormInput placeholder="Last name" onChangeText={setLastName} />
            <FormInput placeholder="Email" onChangeText={setEmail} />
            <FormInput placeholder="Password" onChangeText={setPassword} />
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isChecked}
                onValueChange={toggleCheckbox}
                style={styles.checkbox}
                tintColors={{ true: 'coral', false: '#ccc' }}
              />
              <TouchableOpacity >
                <Text style={{ color: 'black', fontSize: 14, }}>I agree to the Terms of Service & Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
              <Text style={styles.submitButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#fffff',
    height: '100%',
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  divider: {
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
