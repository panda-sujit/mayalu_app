import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Mayalu Store',
    headerLeft: <ProfileBtn />,
  };

  state = {};

  render() {
    return (
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box h={130} bg="white" w={1}>
          <DealCaroussel />
        </Box>

        <Box p={10}>
          <Text center color="green" size="xl">Mayalu Store Contact detail</Text>
          <Text size="l">We do all kind of removals including office, home, unit, apartment within a reasonable price and we also sells household goods</Text>
        </Box>
      </Box>
    );
  }
}

export default HomeScreen;
