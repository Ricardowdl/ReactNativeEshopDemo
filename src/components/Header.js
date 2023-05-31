import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-paper';
import {theme} from '../core/theme';

// export function Header(props) {
//   return <Text style={styles.header} {...props} />;
// }

export function EShopHeader(props) {
  return <View style={styles.eHeader} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  eHeader: {
    width: '100%',
    backgroundColor: 'orange',
    flex: 0.1,
  },
});
