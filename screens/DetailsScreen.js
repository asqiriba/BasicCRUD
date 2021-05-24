import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

// Import constants.js
import * as constant from '../controllers/constants.js'

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title = "Go to Form Screen"
          onPress = {() => this.props.navigation.navigate(constant.toFormScreen)}
          color = {constant.buttonColor}
        />
    </View>
    );
  }
}

export default DetailsScreen;