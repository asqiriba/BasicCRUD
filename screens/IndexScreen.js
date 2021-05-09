import React, { Component, Fragment } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem, Button } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

// Import constants.js and database.js.
import * as constant from '../controllers/constants.js'
import firebase from '../database/firebase.js';

class IndexScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      contactArray: []
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
    const contactArray = [];
    querySnapshot.forEach((res) => {
      const { name, email, mobile } = res.data();
      contactArray.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
      });
    });
    this.setState({
      contactArray,
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
      <Fragment>
        <ScrollView style = {styles.container}>
            {
              this.state.contactArray.map((item, i) => {
                return (
                  // <ListItem
                  //   key = {i}
                  //   chevron
                  //   bottomDivider
                  //   title = {item.name}
                  //   subtitle = {item.email}
                  //   textStyle={{ color: '#9E9E9E' }}
                  //   onPress = {() => {
                  //     this.props.navigation.navigate(constant.toDetailsScreen, { userkey: item.key });
                  //   }}/>
                  <ListItem 
                  key={i} 
                  bottomDivider
                  onPress = {() => {
                        this.props.navigation.navigate(constant.toDetailsScreen, { userkey: item.key });
                      }}>
                    <Avatar
                    rounded
                    title = 'HA'
                    overlayContainerStyle={{backgroundColor: constant.backgroundColor}}/>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              })
            }
        </ScrollView>
          <Button style = {styles.button}
            title = 'Add Contact'
            onPress = {() => this.props.navigation.navigate(constant.toFormScreen)} 
            color = {constant.buttonColor}
            icon={{
              name: "add",
              size: 15,
              color: "white"
            }}
          />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 20
  },
  preloader: {
    flex: 3,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7,
    elevation: 3
  }
})

export default IndexScreen;