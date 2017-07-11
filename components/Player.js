/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  DeviceEventEmitter,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Icon from 'react-native-vector-icons/FontAwesome';

// Possibles states
const PLAYING = 'PLAYING';
const STREAMING = 'STREAMING';
const PAUSED = 'PAUSED';
const STOPPED = 'STOPPED';
const ERROR = 'ERROR';
const METADATA_UPDATED = 'METADATA_UPDATED';
const BUFFERING = 'BUFFERING';
const START_PREPARING = 'START_PREPARING'; // Android only
const BUFFERING_START = 'BUFFERING_START'; // Android only

export default class PlayerView extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
    this.updatePlayerState = this.updatePlayerState.bind(this)
    this.state = {
            status: STOPPED,
            song: '',
        }
  }

  componentWillMount(){
    const { item } = this.props.navigation.state.params
    ReactNativeAudioStreaming.stop()
    ReactNativeAudioStreaming.play(item.streamLink, {showIniOSMediaCenter: true, showInAndroidNotifications: true})
    this.updatePlayerState()
  }

  updatePlayerState() {
    this.subscription = DeviceEventEmitter.addListener(
        'AudioBridgeEvent', (evt) => {
            // We just want meta update for song name
            if (evt.status === METADATA_UPDATED && evt.key === 'StreamTitle') {
                this.setState({song: evt.value});
            } else if (evt.status != METADATA_UPDATED) {
                this.setState(evt);
            }
        }
    );

    ReactNativeAudioStreaming.getStatus((error, status) => {
        (error) ? console.log(error) : this.setState(status)
    });
  }
  componentDidMount() {
        this.updatePlayerState()
    }

    _onPress() {
      const { item } = this.props.navigation.state.params
        switch (this.state.status) {
            case PLAYING:
            case STREAMING:
                ReactNativeAudioStreaming.pause();
                break;
            case PAUSED:
                ReactNativeAudioStreaming.resume();
                break;
            case STOPPED:
            case ERROR:
                ReactNativeAudioStreaming.play(item.streamLink, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
                break;
            case BUFFERING:
                ReactNativeAudioStreaming.stop();
                break;
        }
    }

  static navigationOptions = {
    title: 'Player',
    headerStyle: {
      backgroundColor: '#1c1c1c',
    },
    headerTitleStyle: {
      color: '#B2CAE4',
    },
  };

  render() {
    const { item } = this.props.navigation.state.params
    let icon = null;
        switch (this.state.status) {
            case PLAYING:
            case STREAMING:
                icon = <Icon name="pause-circle" size={35} color="#ddd" />
                break;
            case PAUSED:
            case STOPPED:
            case ERROR:
                icon = <Icon name="play-circle" size={35} color="#ddd" />
                break;
            case BUFFERING:
            case BUFFERING_START:
            case START_PREPARING:
                icon = <ActivityIndicator
                    animating={true}
                    style={{height: 80}}
                    size="large" />;
                break;
        }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View >
          <Image style={styles.ablumArt}
              source={item.albumArt}/>
        </View>
        <View style={styles.songNameContainer}>
          <Text style={styles.songName}>{this.state.song}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={this._onPress}>
          {icon}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121111",
    padding: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: '#ddd',
    fontSize: 24,

  },
  ablumArt: {
    width: 300,
    height: 300,
  },
  iconContainer: {

  },
  songNameContainer: {
    padding: 5,
  },
  songName: {
    color: '#ddd',
    fontSize: 16,
  },
});
