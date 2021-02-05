import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from './Components/Header/Header'
import TripComponent from './Components/Trips/TripComponent'
// import {AirbnbRating } from 'react-native-ratings';


export default class Trips extends Component {
    render() {
        
        return (
            <ScrollView style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <Header label="Trips" csswork = {{backgroundColor: 'white', width: 400, height: 60, alignItems:'center', flexDirection: 'row'}}
                labelstyle = {{fontSize: 20, fontWeight: 'bold'}} />

                <TripComponent daytime = "Yesterday, 10:00 PM" address ="123 6th St, Melbourne, FL 32904"
                amount = "RH124 | $200 | COD" dispute = "Dispute"/>

                <TripComponent daytime = "Yesterday, 10:00 PM" address ="123 6th St, Melbourne, FL 32904"
                amount = "RH124 | $200 | COD" dispute = "Dispute"/>

                <TripComponent daytime = "Yesterday, 10:00 PM" address ="123 6th St, Melbourne, FL 32904"
                amount = "RH124 | $200 | COD" dispute = "Dispute"/>

                <TripComponent daytime = "Yesterday, 10:00 PM" address ="123 6th St, Melbourne, FL 32904"
                amount = "RH124 | $200 | COD" dispute = "Dispute"/>


                {/* <View>
                <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        animation = {'bounce'}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'blue'}
        starSize = {50}
        
      />
                </View> */}

              
 
{/* <AirbnbRating
  count={5}
//   reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={0}
  size={20}
  showRating = {false}
  selectedColor = {'black'}
/> */}

                

                

                





            </ScrollView>
        )
    }
}
