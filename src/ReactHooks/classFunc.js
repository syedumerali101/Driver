import React, { Component } from 'react'
import { Text, View , TextInput } from 'react-native'

export default class classFunc extends Component {
state = {
    name: "",
    title: "About"
}


componentDidMount () {
    this.setState({
        name: "Amir"
    })
}


componentDidUpdate (prevProps , prevState ) {
    const {name} = this.state
 

     if  (prevState.title !== name){
         this.setState ({
             title: name
         })
     }

}

onChangeName = (name) => {
    this.setState(
        {
            name
        }
    )
}


    render() {
        const {name, title} = this.state    
        return (
            <View>
                <Text> {title} </Text>
                <TextInput onChangeText={this.onChangeName} value={name} />
            </View>
        )
    }
}
