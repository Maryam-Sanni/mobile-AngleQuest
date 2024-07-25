import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import HubsEarnings from '../components/HubSessionsEarnings';
import InterviewEarnings from '../components/InterviewEarnings';
import GrowthPlanEarnings from '../components/GrowthPlanEarnings';
import AdviceEarnings from '../components/AdviceEarnings';
import { useNavigation } from '@react-navigation/native';

 
function MyComponent() {
    const navigation = useNavigation();
    const [isBidHovered, setIsBidHovered] = useState(false);
    const [isOfferHovered, setIsOfferHovered] = useState(false);

    const goToOffers= () => {
        navigation.navigate('Earnings');
      };

      const goToBids = () => {
        navigation.navigate('Withdrawal');
      };

  return (
    <View style={{backgroundColor: '#f7fff4', flex: 1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
        <View style={{ backgroundColor: '#f7fff4'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToOffers} 
            underlayColor={isOfferHovered ? 'transparent' : 'transparent'}
            onMouseEnter={() => setIsOfferHovered(true)}
            onMouseLeave={() => setIsOfferHovered(false)}> 
              <View style={styles.item}>
                <Image source={require('../assets/earnings.png')} style={styles.image} />
                <Text style={[styles.headertext, isOfferHovered && { color: 'coral' }]}>Earnings</Text>
              </View>
            </TouchableOpacity>
           
            
          </View>


          <Text style={{fontSize: 14, fontWeight: '500', marginTop: 10, position: 'absolute', right: 60, color: 'coral' }}>Total Earnings: $450</Text>
<HubsEarnings />
<InterviewEarnings />
<GrowthPlanEarnings />
<AdviceEarnings />
</View>
          
          
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 0,
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
    fontWeight: '500',
    color: '#666'
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginLeft: 20
  },
});

export default MyComponent;
