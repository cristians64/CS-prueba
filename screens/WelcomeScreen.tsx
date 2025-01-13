import React from 'react'
import { Button, Text, View } from 'react-native'
import {  useNavigation } from '@react-navigation/native';
import { RegisterScreen } from '../screens/RegisterScreen';
import { styles } from '../theme/styles';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  
    return (
    <View style={styles.rootHome} >
        <Text>Hola</Text>
    </View>
  )
}
