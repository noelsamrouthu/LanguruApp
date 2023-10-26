import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import CustomButton from '../CustomButton';
import Google from '../../../assets/Social/google.png'


const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        
               
      />
      <CustomButton
        //imageSource={Google}
        //imageStyle={[styles.fwicon]}
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        //type="CENTER"
  
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      
    </>
    
  );
};
const styles = StyleSheet.create({
  fwicon:{
    width:'10%',
    height:'20%',
    alignItems:'center',
    resizeMode:'contain',
    flexDirection:'row'

  }

});


export default SocialSignInButtons;
