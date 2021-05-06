import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class IndexScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Index Screen"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
          color="#19AC52"
        />
    </View>
    );
  }
}

export default IndexScreen;