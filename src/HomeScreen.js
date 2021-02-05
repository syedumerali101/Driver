import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';

import styles from '../src/styles';

class HomeScreen extends React.Component {
  state = {
    Data: [
      {
        id: 1,
        producteName: 'Product 1',
        price: '$ 10.00',
        image: require('../src/images/download.jpg'),
      },

      {
        id: 2,
        producteName: 'Product 2',
        price: '$ 8.00',

        image: require('../src/images/download.jpg'),
      },

      {
        id: 3,
        producteName: 'Product 3',
        price: '$ 8.00',

        image: require('../src/images/download.jpg'),
      },

      {
        id: 4,
        producteName: 'Product 4',
        price: '$ 8.00',

        image: require('../src/images/download.jpg'),
      },
    ],

    FeaturedData: [
      {
        id: 1,
        categoryName: 'For Woman',
        numberOfItems: '80 Items',
        Featuredimage: require('../src/images/shirts.jpg'),
      },
    ],

    SecondFeaturedData: [
      {
        id: 1,
        categoryName: 'For Man',
        numberOfItems: '70 Items',
        Featuredimage: require('../src/images/shirts.jpg'),
      },

      {
        id: 2,
        categoryName: 'For Kid',
        numberOfItems: '90 Items',
        Featuredimage: require('../src/images/shirts.jpg'),
      },
    ],

    LatestData: [
      {
        id: 1,
        FeaturedproductName: 'Product 1',
        numberOfItems: '70 Items',
        LatestImage: require('../src/images/shirts.jpg'),
      },

      {
        id: 2,
        FeaturedproductName: 'Product 2',
        numberOfItems: '70 Items',
        LatestImage: require('../src/images/shirts.jpg'),
      },
    ],
  };

  _renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={{paddingLeft: 10}}>
          <Image style={{height: 200, width: 130}} source={item.image} />
          <View>
            <Text>{item.producteName}</Text>

            <Text style={{fontWeight: 'bold'}}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderFeaturedItem = ({item}) => {
    return (
      <View style={styles.mainRenderItemView}>
        <TouchableOpacity style={styles.mainTouchableFrame}>
          <Image
            style={styles.sizeOfImageExercise}
            source={item.Featuredimage}
          />
          <View style={styles.exerciseTextView}>
            <Text style={styles.exerciseName}>{item.categoryName}</Text>

            <View style={styles.locationSetsTime}>
              <Text style={styles.numberOfSets}>{item.numberOfItems}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderManFeaturedItem = ({item}) => {
    return (
      <View style={{height: 130}}>
        <TouchableOpacity style={styles.mainTouchableFrame}>
          <Image
            style={styles.sizeOfImageExercise}
            source={item.Featuredimage}
          />
          <View style={styles.exerciseTextView}>
            <Text style={styles.exerciseName}>{item.categoryName}</Text>

            <View style={styles.locationSetsTime}>
              <Text style={styles.numberOfSets}>{item.numberOfItems}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderManFeaturedData = () => {
    return (
      <FlatList
        data={this.state.SecondFeaturedData}
        renderItem={this._renderManFeaturedItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  _renderFeaturedData = () => {
    return (
      <FlatList
        data={this.state.FeaturedData}
        renderItem={this._renderFeaturedItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  renderFlatList = () => {
    return (
      <FlatList
        data={this.state.Data}
        renderItem={this._renderItem}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}
          style={{paddingLeft: 10}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/menu.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{paddingRight: 10}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/search.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderBanner = () => {
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('./images/shoe.jpg')}
        style={{width: 340, height: 120}}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>Your Latest</Text>

          <Text style={{fontSize: 20, fontWeight: 'bold'}}>SUMMER 2018</Text>

          <Text style={{color: 'gray'}}>Lorem Lipsum</Text>
        </View>
      </ImageBackground>
    );
  };

  renderShippingButton = () => {
    return (
      <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <View style={{backgroundColor: 'black', paddingVertical: 10}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Free Shipping WorldWide
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderOption = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{paddingLeft: 10}}>
          <Text>Most Latest</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Text style={{color: 'lightgray'}}>See All</Text>
        </View>
      </View>
    );
  };

  renderLatestProduct = ({item}) => {
    return (
      <View style={{paddingBottom: 5}}>
        <TouchableOpacity style={{paddingLeft: 10}}>
          <Image style={{height: 250, width: 165}} source={item.LatestImage} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{item.FeaturedproductName}</Text>

            <Text style={{color: 'lightgray'}}>{item.numberOfItems}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderLatestList = () => {
    return (
      <FlatList
        data={this.state.LatestData}
        renderItem={this.renderLatestProduct}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  _renderNewLatestList = () => {
    return (
      <FlatList
        data={this.state.LatestData}
        renderItem={this.renderLatestProduct}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  renderButtonImage = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 150, width: 330}}
          source={require('./images/cover1.jpg')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            bottom: 20,
            paddingHorizontal: 40,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>LOCATE STORE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderGalleryHeading = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontWeight: 'bold'}}>COLLECTION ON INSTAGRAM</Text>
      </View>
    );
  };

  renderGallery = () => {
    return (
      <View style={{flexDirection: 'row', padding: 10, right: 5}}>
        <View style={{paddingLeft: 5}}>
          <Image
            style={{height: 150, width: 110}}
            source={require('./images/download.jpg')}
          />
        </View>

        <View style={{paddingLeft: 5}}>
          <Image
            style={{height: 150, width: 110}}
            source={require('./images/download.jpg')}
          />
        </View>

        <View style={{paddingLeft: 5}}>
          <Image
            style={{height: 150, width: 110}}
            source={require('./images/download.jpg')}
          />
        </View>
      </View>
    );
  };

  renderMenu = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/MyHome.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/profile.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/MyHome.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/profile.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <>
        <ScrollView>
          {this.renderHeader()}
          {this.renderBanner()}
          {this.renderShippingButton()}
          {this.renderOption()}
          {this.renderFlatList()}
          {this._renderFeaturedData()}
          {this._renderManFeaturedData()}
          {this._renderLatestList()}
          {this._renderNewLatestList()}
          {this.renderButtonImage()}
          {this.renderGalleryHeading()}
          {this.renderGallery()}
          {this.renderGallery()}
        </ScrollView>
        {this.renderMenu()}
      </>
    );
  }
}

export default HomeScreen;
