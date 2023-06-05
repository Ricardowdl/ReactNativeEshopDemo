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

export default function CategoryList({navigation, categoryData, type}) {
  const renderItem = ({item}) => {
    const {url, category} = item;

    const marginRight250 = {marginLeft: 20};

    const ViewStyle = {
      width: 350,
      height: 150,
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
      marginRight: 16,
      backgroundColor: 'rgb(165,105,205)',
    };

    const imageStyle = {
      width: 150,
      resizeMode: 'contain',
    };
    const TextStyle = {color: '#fff', fontSize: 30, width: 175, marginLeft: 20};

    const AntDesignIconStyle = {
      position: 'absolute',
      zIndex: 100,
      right: 40,
      top: 30,
    };

    const TopViewStyle = {
      heigh: 20,
      width: '100%',
      flexDirection: 'row',
    };

    const TopTextStyle = {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 25,
      width: 300,
    };
    return (
      <View
        style={{
          height: 200,
          marginLeft: 20,
        }}>
        <View style={TopViewStyle}>
          <Text style={TopTextStyle}>{category}</Text>
          <TouchableOpacity
            style={marginRight250}
            onPress={() => {
              navigation.navigate('CategoryThird', {category: category});
            }}>
            <AntDesignIcon name="ellipsis1" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log('click', category);
            navigation.navigate('CategoryThird', {category: category});
          }}>
          <View style={ViewStyle}>
            <TouchableOpacity
              onPress={() => {
                //   setIsHeart(!isHeart);
              }}>
              <AntDesignIcon
                style={AntDesignIconStyle}
                name={'hearto'}
                color={'white'}
                size={20}
              />
            </TouchableOpacity>

            <Image source={url} style={imageStyle} />
            <Text style={TextStyle}>{category}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Text style={{...styles.text, ...styles.textMargin}}>
        {type} CATEGORY
      </Text>
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
