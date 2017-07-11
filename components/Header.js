/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Logo Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 30,
    justifyContent: 'center',
    ...Platform.select({
      ios: { paddingTop: 15 }
    })
  },
  logo: {

  },
});
