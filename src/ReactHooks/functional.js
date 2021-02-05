import React , {useState, useEffect} from "react"
import {View, Text, TextInput} from "react-native"

const hooksExample = () => {
const [name, setName] = useState("Amir");
const [title, setTitle] = useState("About");

useEffect(() => setTitle(name));

    return (
        <View>
            <Text>Counter</Text>
        <Text>{title}</Text>
         <TextInput value={name} onChangeText={onChangeName}  />
        </View>
    )
}
export default hooksExample;

