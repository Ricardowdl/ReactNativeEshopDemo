import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Category({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Category!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
