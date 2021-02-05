import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';

export default function DemoWork2(props){
    const [name, setName] = useState('Amir');
    const [title, setTitle] = useState('ABOUT');

    useEffect(()=>{
        setTitle(name)
    })
    function handleNameChange(event){
        setName(event)
    }
    
    return(
        <View style={{backgroundColor: 'black', flex: 1, padding: 30}}>
            <View style={{ paddingTop: 50}}>
                <Text style={{fontSize: 20, color:'white'}}>
                    REACT HOOKS
                </Text>
                </View>
            <Text style={{color:'white'}}>
                {title}
            </Text>
            <TextInput
            style={{color:'white', borderWidth: 2, borderColor: 'orange'}}
            value={name}
            onChangeText = {handleNameChange}
            />
        </View>    
    )
}


