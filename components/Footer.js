/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="bookmark" size={30} color="#ddd" />
        <Text style={styles.infoText}>
          Live radio coming soon...
        </Text>
      </View>
    );
  }
}

const styles={
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    infoText: {
      color: '#ddd'
    },
}
