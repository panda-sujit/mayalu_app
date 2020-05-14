import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';
import { StatusBar, FlatList } from 'react-native';

import { theme } from '../constants/theme';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Chairs',
    image: require('../../assets/img/cart.png'),
  },
  {
    id: 2,
    title: 'Bedroom',
    image: require('../../assets/img/drugs.png'),
  },
  {
    id: 3,
    title: 'Living room',
    image: require('../../assets/img/pets.png'),
  },
  {
    id: 4,
    title: 'Tables',
  },
];

const NUM_COLUMNS = 3;

class StoresScreen extends Component {
  static navigationOptions = {
    title: 'On Sale',
  };

  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Box f={1} p={10}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    );
  }
}

export default StoresScreen;
