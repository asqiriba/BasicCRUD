// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Users List"
          onPress={() => this.props.navigation.navigate('FormScreen')}
          color="#19AC52"
        />
    </View>
    );
  }
}

export default DetailsScreen;