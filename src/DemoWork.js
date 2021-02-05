import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';

export default class DemoWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'Syed Amir',
            lastName : 'Ali',
            title : 'ABOUT'
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            title : this.state.name
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.title !== this.state.name)
        this.setState({
            title: this.state.name
        })
    }
    

    handleNameChange(event){
        console.log(event, 'event')
        this.setState({
            name : event
        });
    }

    render(){
        
        return(
            <View style={{backgroundColor: 'black', flex: 1, padding: 30}}>


                <View style={{ paddingTop: 50}}>
                <Text style={{fontSize: 20, color:'white'}}>
                    LIFE CYCLE
                </Text>
                </View>
                <Text style={{color:'white'}}>
                    {this.state.title}
                </Text>
                    <TextInput
                    style={{color:'white', borderWidth: 2, borderColor: 'blue'}}
                    value = {this.state.name}
                    onChangeText = {this.handleNameChange}
                    placeholder = 'Hello'
                    />
            </View>
        )
    }
}


