import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

// Import constants.js
import * as constant from '../controllers/constants.js'

class IndexScreen extends Component {
  render() {
    return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title = "Go to Details Screen"
          onPress = {() => this.props.navigation.navigate(constant.toDetailsScreen)}
          color = {constant.buttonColor}
        />
    </View>
    );
  }
}

export default IndexScreen;