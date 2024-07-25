import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import BidsinReview from '../components/BidsinReview';
import WonBids from '../components/wonbids';
import LostBids from '../components/lostbids';
import { useNavigation } from '@react-navigation/native';

 
function MyComponent() {
    const navigation = useNavigation();
    const [isBidHovered, setIsBidHovered] = useState(false);
    const [isOfferHovered, setIsOfferHovered] = useState(false);

    const goToOffers= () => {
        navigation.navigate('Offers');
      };

      const goToBids = () => {
        navigation.navigate('Bids');
      };

  return (
    <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToOffers} 
            underlayColor={isOfferHovered ? 'transparent' : 'transparent'}
            onMouseEnter={() => setIsOfferHovered(true)}
            onMouseLeave={() => setIsOfferHovered(false)}> 
              <View style={styles.item}>
              <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55120fdad0942a072dd9c4983820860f2be5dfe081dd7a9dc2fbf948476d5ae7?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={[styles.headertext, isOfferHovered && { color: 'coral' }]}>Offers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToBids}
            underlayColor={isBidHovered ? 'transparent' : 'transparent'}
            onMouseEnter={() => setIsBidHovered(true)}
            onMouseLeave={() => setIsBidHovered(false)} >
              <View style={styles.item}>
              <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55120fdad0942a072dd9c4983820860f2be5dfe081dd7a9dc2fbf948476d5ae7?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={[styles.headertext, isBidHovered && { color: 'coral' }]}>Bids</Text>
              </View>
            </TouchableOpacity>
            
          </View>


 
<BidsinReview />
<WonBids />
<LostBids />
          
          
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: -60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingVertical: 10,
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
    marginTop: 3, 
    fontWeight: '500',
    color: '#666'
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginLeft: 100
  },
});

export default MyComponent;
