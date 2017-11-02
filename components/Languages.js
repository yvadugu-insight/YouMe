/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

function Language(props){
  
  return(
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.language}>
        <Image style={styles.ablumArt}
            source={props.item.albumArtArray[Math.floor(Math.random() * 11)]}/>
        <View style={styles.title}>
          <Text style={styles.titleText}>{props.item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default class Languages extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
          { this.props.languages.map((item, index)=>{
            return(
              <Language
                key={index}
                item={item}
                onSelect={()=>this.props.handleOnLanguageSelect(item)}
                />
            )
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 15,
  },
  language: {
    flexWrap: 'wrap',
    margin: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    backgroundColor: '#1c1c1c',
  },
  ablumArt: {
    width: 140,
    height: 140,
  },
  title: {
    flexDirection: "row",
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  titleText: {
    color: '#ddd',
    fontWeight: 'bold',
  }
});
