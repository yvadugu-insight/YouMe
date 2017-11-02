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
const IMAGES = {
  telugu:[
    require('./images/telugu/telugu-01.jpg'),
    require('./images/telugu/telugu-02.jpg'),
    require('./images/telugu/telugu-03.jpg'),
    require('./images/telugu/telugu-04.jpg'),
    require('./images/telugu/telugu-05.jpg'),
    require('./images/telugu/telugu-06.jpg'),
    require('./images/telugu/telugu-07.jpg'),
    require('./images/telugu/telugu-08.jpg'),
    require('./images/telugu/telugu-09.jpg'),
    require('./images/telugu/telugu-10.jpg'),
  ],
  tamil:[
    require('./images/tamil/tamil-01.jpg'),
    require('./images/tamil/tamil-02.jpg'),
    require('./images/tamil/tamil-03.jpg'),
    require('./images/tamil/tamil-04.jpg'),
    require('./images/tamil/tamil-05.jpg'),
    require('./images/tamil/tamil-06.jpg'),
    require('./images/tamil/tamil-07.jpg'),
    require('./images/tamil/tamil-08.jpg'),
    require('./images/tamil/tamil-09.jpg'),
    require('./images/tamil/tamil-10.jpg'),
  ],
  hindi:[
    require('./images/hindi/hindi-01.jpg'),
    require('./images/hindi/hindi-02.jpg'),
    require('./images/hindi/hindi-03.jpg'),
    require('./images/hindi/hindi-04.jpg'),
    require('./images/hindi/hindi-05.jpg'),
    require('./images/hindi/hindi-06.jpg'),
    require('./images/hindi/hindi-07.jpg'),
    require('./images/hindi/hindi-08.jpg'),
    require('./images/hindi/hindi-09.jpg'),
    require('./images/hindi/hindi-10.jpg'),
  ],
  kannada:[
    require('./images/kannada/kannada-01.jpg'),
    require('./images/kannada/kannada-02.jpg'),
    require('./images/kannada/kannada-03.jpg'),
    require('./images/kannada/kannada-04.jpg'),
    require('./images/kannada/kannada-05.jpg'),
    require('./images/kannada/kannada-06.jpg'),
    require('./images/kannada/kannada-07.jpg'),
    require('./images/kannada/kannada-08.jpg'),
    require('./images/kannada/kannada-09.jpg'),
    require('./images/kannada/kannada-10.jpg'),
  ]

}

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      languages: [
        {
          title: 'Telugu',
          key: 'telugu',
          albumArtArray: IMAGES.telugu,
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
          albumArtArray: IMAGES.hindi,
          albumArt: require('./images/Hindi.jpg'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM04AAC252_SC',
        },
        {
          title: 'Tamil',
          key: 'tamil',
          albumArtArray: IMAGES.tamil,
          albumArt: require('./images/tamil.png'),
          streamLink: 'http://14123.live.streamtheworld.com:80/SAM05AAC095_SC',
        },
        {
          title: 'Kannada',
          key: 'kannada',
          albumArtArray: IMAGES.kannada,
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
