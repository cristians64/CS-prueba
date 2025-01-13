import React, { useState } from 'react'
import { Button, Divider, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper'
import { styles } from '../../../theme/styles';
import { View } from 'react-native';
import { dbRealTime } from '../../../config/firebaseConfig';
import { push, ref, set } from 'firebase/database';


//interface paso de prop

interface Props{
    modalMessage:boolean;
    setModalMessage:Function;
}

//fromulario
interface FormMessage {
    to:string;
    subject:string;
    message:string;
}


export const NewMessageComponent = ({modalMessage, setModalMessage}:Props) => {
  
    const [formMessage, setFormMessage] = useState<FormMessage>({
        to:'',
        subject:'',
        message:''
    })

    const handleSetValues =(key:string,value:string) =>{
        setFormMessage({...formMessage,[key]:value})
    }

    //funcion que agrega nuevos mensajes
    const handlesaveMessage = async()=>{

        if(!formMessage.to||!formMessage.message||!formMessage.subject){
            return;
        }

        const dbRef = ref(dbRealTime, 'messages');

        const saveMessage = push(dbRef);

        try{
            await set(saveMessage,formMessage);
            setFormMessage({
                message:'',
                subject:'',
                to:''
            });
        
        }catch(ex){
            console.log(ex)
        }

        setModalMessage(false)
    }


    return (
        <View style={styles.rootHome}>
        <View style={styles.headerHome}>
            <Text variant='headlineMedium'>Operaciones</Text>
                <View style={styles.IconProfile}>
                   
                </View>
        </View>
        <Divider/>
        <TextInput
        label='iD Operacion'
        mode='outlined'
        onChangeText={(value)=>handleSetValues('to',value)}
        />
        <TextInput
        label='Monto'
        mode='outlined'
        onChangeText={(value)=>handleSetValues('subject',value)}
        />
        <TextInput
        label='Tipo de Operacion'
        mode='outlined'
        onChangeText={(value)=>handleSetValues('message',value)}
        multiline={true}
        numberOfLines={5}
        />
        <TextInput
        label='Comentario'
        mode='outlined'
        onChangeText={(value)=>handleSetValues('message',value)}
        multiline={true}
        numberOfLines={5}
        />
        <Button mode='contained' onPress={handlesaveMessage}>EJECUTAR</Button>
        </View>
  )
}
