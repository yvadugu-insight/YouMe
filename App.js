import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Languages from './components/Languages'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import PlayerView from './components/Player'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      languages: [
        {
          title: 'Telugu',
          key: 'telugu',
          albumArt: require('./images/telugu.jpg'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM04AAC238_SC',
          categories: [
            {
              category: 'Devotional',
              streamLink: 'http://streaming.shoutcast.com/mastitime?lang=en-US%2cen%3bq%3d0.8',
            },
            {
              category: 'Melody',
              streamLink: 'http://14123.live.streamtheworld.com:80/SAM04AAC238_SC',
            },
            {
              category: 'Rock',
              streamLink: 'http://streaming.shoutcast.com/mastitime?lang=en-US%2cen%3bq%3d0.8',
            },
            {
              category: 'Romantic',
              streamLink: 'http://14123.live.streamtheworld.com:80/SAM04AAC238_SC',
            }
          ]
        },
        {
          title: 'Hindi',
          key: 'hindi',
          albumArt: require('./images/Hindi.jpg'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM04AAC252_SC',
        },
        {
          title: 'Tamil',
          key: 'tamil',
          albumArt: require('./images/tamil.png'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM05AAC095_SC',
        },
        {
          title: 'Kannada',
          key: 'kannada',
          albumArt: require('./images/kannada.jpg'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM02AAC169_SC',
        }
      ]
    }
    this.handleOnLanguageSelect = this.handleOnLanguageSelect.bind(this)

  }

  static navigationOptions = {
    title: 'Home',

    headerStyle: {
      backgroundColor: '#1c1c1c',
    },
    headerTitleStyle: {
      color: '#ddd',
    },
  };
  handleOnLanguageSelect(item) {
    const { navigate } = this.props.navigation
    navigate('PlayerView', { item })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <ScrollView>
            <Languages
              languages={this.state.languages}
              navigation={this.props.navigation}
              handleOnLanguageSelect={this.handleOnLanguageSelect}
              />
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121111',
  },
})

const YouMe = StackNavigator({
  Home: { screen: App },
  Categories: { screen: Categories },
  PlayerView: { screen: PlayerView },
});

AppRegistry.registerComponent('YouMe', () => YouMe);
