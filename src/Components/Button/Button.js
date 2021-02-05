import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import Styles from './Styles';

export default class Button extends Component {
    static propTypes = {
        label : PropTypes.string,
        customStyle: PropTypes.object,
        labelStyle: PropTypes.object,
        buttonPress: PropTypes.func
      };

      static defaultProps = {
        
        label:'',
        customStyle: {},
        labelStyle: {},
        buttonPress: undefined
      };

    render() {
        return (
            <TouchableOpacity 
            onPress = {
                this.props.buttonPress
            }
            style={[this.props.customStyle]}>
                        <Text style={this.props.labelStyle}>
                            {this.props.label}
                        </Text>
            </TouchableOpacity>



           



        )
    }
}
