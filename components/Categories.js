/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Separator from './../helpers/Separator'

function Category(props) {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.category}>
        <Text style={styles.title}>{props.item.category}</Text>
        <Separator/>
      </View>
    </TouchableOpacity>
  )
}

export default class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };
  constructor(props){
    super(props)
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this)
  }
  handleOnCategoryChange(item) {
    const { navigate } = this.props.navigation
    navigate('PlayerView', { item })
  }
  render() {
    const { item } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <ScrollView>
          {item.categories.map((category, index)=>{
            return (
              <Category
                key={index}
                item={category}
                onSelect={()=>this.handleOnCategoryChange(category)}
                />
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  category: {
  },
  title: {
    fontSize: 24,
    color: "#4d4d4d",
    margin: 10,
  },
});
