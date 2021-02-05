import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'


export default class NotifyComponent extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
                <View style={{backgroundColor: '#ffffff', paddingVertical: 20, justifyContent: 'center'}}>
                    <View style={{paddingBottom: 10, paddingLeft: 30}}>
                        <TouchableOpacity>
                        
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                           {this.props.label1}
                            
                        </Text>
                        <Text style={{fontWeight: 'bold',  fontSize: 16}}>
                            {this.props.label2}
                            
                        </Text>
                        </TouchableOpacity>
                        

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View>
                        <Text style={{color:'lightgray'}}>
                            {this.props.label3}
                        </Text>

                    </View>
                    <View>
                    <Text style={{color:'lightgray'}}>
                        {this.props.label4}
                        </Text>

                    </View>
                    </View>
                </View>
                </View>
        )
    }
}
