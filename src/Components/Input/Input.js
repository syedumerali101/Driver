import React from 'react';
import {Text,View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

export default class Input extends React.Component{
    static propTypes = {
        label : PropTypes.string,
        placeholder: PropTypes.string
      };
    
      static defaultProps = {
        
        label:'',
        placeholder:''
      };

    render(){
        return(
                               
                <View style={{backgroundColor:'white', paddingRight: 80, borderWidth: 1, borderColor: 'lightgrey', height: 60}}>
                    <Text style={{paddingLeft: 10, paddingTop: 6}}>
                        {this.props.label}
                    </Text>
                    <TextInput style={{paddingTop: 2, paddingLeft: 10}} secureTextEntry ={this.props.secureTextEntry} keyboardType={this.props.keyboardType} placeholder={this.props.placeholder}/>
                </View>
                
                
                
        )
    }
}