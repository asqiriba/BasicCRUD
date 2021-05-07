import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';

// Import constants.js and database.js.
import * as constant from '../controllers/constants.js'
import firebase from '../database/firebase.js';

class FormScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('users');
    this.state = {
      name: '',
      email: '',
      mobile: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.name === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
      }).then((res) => {
        this.setState({
          name: '',
          email: '',
          mobile: '',
          isLoading: false,
        });
        this.props.navigation.navigate(constant.toIndexScreen)
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style = {styles.preloader}>
          <ActivityIndicator size = "large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style = {styles.container}>
        <View style = {styles.inputGroup}>
          <TextInput
              placeholder = {'Name'}
              value = {this.state.name}
              onChangeText = {(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style = {styles.inputGroup}>
          <TextInput
              multiline = {true}
              numberOfLines = {4}
              placeholder = {'Email'}
              value = {this.state.email}
              onChangeText = {(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style = {styles.inputGroup}>
          <TextInput
              placeholder = {'Mobile'}
              value = {this.state.mobile}
              onChangeText = {(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style = {styles.button}>
          <Button
            title = 'Add User'
            onPress = {() => this.storeUser()} 
            color = {constant.buttonColor}
          />
        </View>
      </ScrollView>
    );
  }

  // render() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Button
  //         title = "Go to Index Screen"
  //         onPress = {() => this.props.navigation.navigate(constant.toIndexScreen)}
  //         color = {constant.buttonColor}
  //       />
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
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

export default FormScreen;