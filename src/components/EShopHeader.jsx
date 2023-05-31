import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-paper';

export const EShopHeader = () => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'orange',
    flex: 0.1,
  },
});
