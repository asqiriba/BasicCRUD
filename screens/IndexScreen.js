import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'

// Import constants.js and database.js.
import * as constant from '../controllers/constants.js'
import firebase from '../database/firebase.js';

class IndexScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  // To prevent memory leak.
  componentWillUnmount(){
    this.unsubscribe();
  }

  // Renders the data from the Firebase database and sets the loader to false when fetched.
  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, email, mobile } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size = "large" color = {constant.activityIndicatorColor}/>
        </View>
      )
    }    
    return (
      <ScrollView style = {styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key = {i}
                  chevron
                  bottomDivider
                  title = {item.name}
                  subtitle = {item.email}
                  onPress = {() => {
                    this.props.navigation.navigate(constant.toDetailsScreen, { userkey: item.key });
                  }}/>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default IndexScreen;