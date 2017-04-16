

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Weatherc from './component/views/weather.js';

export default class Weather extends Component {
  constructor(){

  }

  componentDidMount() {

   }
  render() {

    return (
      <Weatherc />
    );
  }


}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Weather', () => Weather);
