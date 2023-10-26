import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Fonts from '../../components/Fonts'
import { useRoute } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo_2.png';

const HomeScreen = ({ route, navigation }) => {
  return (
    
    <View >
    <Image
      source={Logo}
      style={{
      width: 200,     // Set the desired width
      height: 200,    // Set the desired height
      marginTop: 20,  // Adjust top margin
      marginLeft: 90, // Adjust left margin
          // You can also use marginRight and marginBottom for other margins
      }}
      resizeMode="contain"
      />
       <Text style={[styles.welcomeText, {fontFamily:'Futura'}, {lineHeight: 50, marginTop: 70}]}>
        Welcome to LANGURU  </Text>

        <Text style={[styles.welcomeText, {fontFamily:'Futura', fontSize:45, color:'blue'}]}>
        {'\n'} {route.params.name}{'\n'} 
        </Text>

        <Text style={[styles.welcomeText, {fontFamily:'Futura'}]}>
        Let's help you improve your English pronunciation.
        </Text>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9D9EB', 
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontFamily:'Futura',
    fontSize: 20,
    textAlign: 'center',
    color: '#dd6e42',
    
  },
  customButton: {
    backgroundColor: '#d6c6e1',
    color: '#4765A9',
    // Add more styles for your CustomButton here
  },
});

export default HomeScreen;
