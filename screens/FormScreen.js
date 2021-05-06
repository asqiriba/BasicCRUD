import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

// Import constants.js
import * as constant from '../controllers/constants.js'

class FormScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title = "Go to Index Screen"
          onPress = {() => this.props.navigation.navigate(constant.toIndexScreen)}
          color = {constant.buttonColor}
        />
      </View>
    );
  }
}

export default FormScreen;