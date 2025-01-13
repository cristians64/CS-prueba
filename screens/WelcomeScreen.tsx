import React from 'react'
import { Button, Text, View } from 'react-native'
import {  CommonActions, useNavigation } from '@react-navigation/native';
import { RegisterScreen } from '../screens/RegisterScreen';
import { styles } from '../theme/styles';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  
    return (
    <View style={styles.rootHome} >
        <Text >Welcome</Text>
        <Text style={styles.textlink2} onPress={()=>navigation.dispatch(CommonActions.navigate({name:"RegisterScreen"}))}>Para ir al registro da clic aqui</Text>
        <Text style={styles.textlink2} onPress={()=>navigation.dispatch(CommonActions.navigate({name:"InicioScreen"}))}>Para iniciar sesion da clic aqui</Text>
    </View>
  )
}
