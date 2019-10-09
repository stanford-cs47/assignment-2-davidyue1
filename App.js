import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView, Platform, } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  
    constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }


  render() {

    var {height, width} = Dimensions.get('window');
    
    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>


          <View style={styles.navigationbar}>
            <Image 
                style={{flex: 1, resizeMode: 'contain', height: '100%', tintColor: '#C5C5C5'}} 
                source={ require('./App/Images/settings.png') }
            />
            <Image 
                style={{flex: 3, resizeMode: 'contain', height: '100%'}} 
                source={ require('./App/Images/tinder-logo.png') }
            />
            <Image 
                style={{flex: 1, resizeMode: 'contain', height: '100%', tintColor: '#C5C5C5'}} 
                source={ require('./App/Images/chatting.png') }
            />

          </View>


          <View style={styles.profilecard}>
            <Image 
              style={{width: '100%',}} 
              source={this.state.profileImage}
            />
            <View style={{justifyContent: 'center', flexDirection: 'column', margin: 10}}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>
                {this.state.name} 
                <Text style={{fontWeight:'normal'}}>, {this.state.age}</Text>
              </Text>
              <Text style={{fontSize:16, color: '#9e9e9e'}}>
                {this.state.occupation}
              </Text>
            </View>
          </View>


          <View style={styles.actionbar}>
            <View style={{backgroundColor: 'white', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', height: '80%', borderRadius: height/2}}>
              <Image
                style={{resizeMode: 'contain', height: '65%'}} 
                source={ require('./App/Images/rewind.png') }
              />
            </View>
            <View style={{backgroundColor: 'white', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', height: '100%', borderRadius: height/2}}>
              <Image
                style={{resizeMode: 'contain', height: '45%'}} 
                source={ require('./App/Images/nope.png') }
              />
            </View>
            <View style={{backgroundColor: 'white', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', height: '80%', borderRadius: height/2}}>
              <Image
                style={{resizeMode: 'contain', height: '75%'}} 
                source={ require('./App/Images/boost.png') }
              />
            </View>
            <View style={{backgroundColor: 'white', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', height: '100%', borderRadius: height/2}}>
              <Image
                style={{resizeMode: 'contain', height: '45%'}} 
                source={ require('./App/Images/like.png') }
              />
            </View>
            <View style={{backgroundColor: 'white', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', height: '80%', borderRadius: height/2}}>
              <Image
                style={{resizeMode: 'contain', height: '65%'}} 
                source={ require('./App/Images/super-like.png') }
              />
            </View>
          </View>


        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: "space-between",
    backgroundColor: '#f5f5f5',
  },
  navigationbar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
  },
  profilecard: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    margin: 50,
    justifyContent: 'flex-start',
    width: '88%',
    height: '60%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  actionbar: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },


});