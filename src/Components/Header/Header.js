import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';


export default class Header extends Component {
    static propTypes = {
        label : PropTypes.string

    };

    static defaultProps = {
        label : ''
    }
    render() {
        return (
            <View style={this.props.csswork}>
                    <View style={{paddingLeft: 15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Image style={{height: 15, width:20}} source={require('../../images/back.png')}/>

                    </TouchableOpacity>
                    </View>
                    <View style={{paddingLeft: 30}}>
                        <Text style={this.props.labelstyle}>
                           {this.props.label}
                        </Text>
                    </View>
                </View>
        )
    }
}
