// screens/AddUserScreen.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class FormScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Index Screen"
          onPress={() => this.props.navigation.navigate('IndexScreen')}
          color="#19AC52"
        />
      </View>
    );
  }
}

export default FormScreen;