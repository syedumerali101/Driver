import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from './Components/Header/Header';



export default class SampleNotification extends React.Component{

    state = {
        Data : [
            {
                id: 1,
                notification: "Your Order #RH123 is completed.        Please make the payment",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: true,
            },

            {
                id: 2,
                notification: "Your Driver is on his way to pick up your order #RH123",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: false,
            },

            {
                id: 3,
                notification: "Your Order #RH123 is completed. Please make the payment",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: false,
            },

            {
                id: 4,
                notification: "Your Order #RH123 is completed. Please make the payment",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: false,
            },
            {
                id: 5,
                notification: "Your Order #RH123 is completed. Please make the payment",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: false,
                
              },
              {
                id: 6,
                notification: "Your Order #RH123 is completed. Please make the payment",
                time: "Monday, 2 Aug 2018",
                minute: "1 minute ago",
                unread: false,
                
              } 
        ]
    };
    _renderItem = ({item} ) => {
        return (
           
            
            <View style={{backgroundColor: 'white', padding: 15, marginHorizontal: 5, marginVertical: 6}}>
                <TouchableOpacity>
                {item.unread ? <View style={styles.marker} /> : null}
                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 25, marginLeft: 5}}>{item.notification}</Text>
                </TouchableOpacity>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10}}>
                    <View style={{}}>
                    <Text style={{color:'lightgray'}}>{item.time}   
                    </Text>
                    </View>

                    <View style={{marginLeft: 80}}>
                    <Text style={{color:'lightgray'}}>{item.minute}   
                    </Text>
                    </View>
                </View>
            </View>
            


            

            
        );
    };
 
    
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>

                <Header csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                label = "Notification" labelstyle = {{fontSize: 20, fontWeight: 'bold'}}/>
                
                <View style={{padding: 5, paddingBottom: 60}}>
                
                
                <FlatList
                data = {this.state.Data}
                renderItem = {this._renderItem}
                />
                
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    marker : {
        backgroundColor: '#276df0',
        height: 9,
        width: 9,
        borderRadius: 5,
        top: 18,
        right: 10
        
    }
})