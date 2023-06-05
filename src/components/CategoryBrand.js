import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function CategoryBrand({
  navigation,
  categoryData,
  categoryType,
}) {
  const renderItem = ({item}) => {
    const {url, category} = item;

    const marginRight250 = {marginLeft: 20};

    const ViewStyle = {
      width: 350,
      height: 120,
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
      marginRight: 16,
      backgroundColor: '#fff',
    };

    const imageStyle = {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      backgroundColor: 'rgb(165,105,205)',
      borderRadius: 20,
    };
    const TextStyle = {color: '#000', fontSize: 15, width: 175};

    const AntDesignIconStyle = {
      position: 'absolute',
      zIndex: 100,
      right: -10,
      bottom: 40,
    };
    return (
      <View
        style={{
          height: 150,
          marginLeft: 20,
        }}>
        <View style={ViewStyle}>
          <Image source={url} style={imageStyle} />
          <View style={{height: 100, marginLeft: 20}}>
            <Text style={TextStyle}>{category}</Text>
            <Text style={{...TextStyle, fontSize: 12}}>HK$9399.00</Text>
            <Image source={require('../assets/changeColor.png')} />

            <TouchableOpacity
              onPress={() => {
                //   setIsHeart(!isHeart);
              }}>
              <AntDesignIcon
                style={AntDesignIconStyle}
                name={'hearto'}
                color={'purple'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Text style={{...styles.text, ...styles.textMargin}}>{categoryType}</Text>
      <View
        style={{
          backgroundColor: 'rgb(238,236,240)',
          borderRadius: 20,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.marginTop20}
          data={categoryData}
          renderItem={renderItem}
          keyExtractor={item => item.category}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 26,
    fontWeight: '400',
  },
  textMargin: {
    marginTop: 40,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#000',
    resizeMode: 'contain',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
});
