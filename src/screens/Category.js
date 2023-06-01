import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TopComponent from '../components/TopComponent';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const categoryMobileData = [
  {
    category: 'APPLE PHONE',
    url: require('../assets/iphone.png'),
  },
  {
    category: 'SAMSUNG PHONE',
    url: require('../assets/samsung.png'),
  },
  {
    category: 'XIAOMI PHONE',
    url: require('../assets/xiaomi.png'),
  },
  {
    category: 'HUAWEI PHONE',
    url: require('../assets/xiaomi.png'),
  },
];

const categoryTvData = [
  {
    category: 'SAMSUNG TV',
    url: require('../assets/sanTv.webp'),
  },
  {
    category: 'LG TV',
    url: require('../assets/lgTv.webp'),
  },
  {
    category: 'HUAWEI TV',
    url: require('../assets/huaweiTV.webp'),
  },
];

const categoryRouterData = [
  {
    category: 'ASUS ROUTER',
    url: require('../assets/asusRouter.webp'),
  },
  {
    category: 'HUAWEI ROUTER',
    url: require('../assets/huaweiRouter.webp'),
  },
];

const categoryComputerData = [
  {
    category: 'APPLE COMPUTER',
    url: require('../assets/MacBook.png'),
  },
  {
    category: 'HUAWEI COMPUTER',
    url: require('../assets/huaweiComputer.webp'),
  },
  {
    category: 'MI COMPUTER',
    url: require('../assets/miComputer.webp'),
  },
];

const DATA = [
  {
    title: 'MOBILE',
    categoryData: categoryMobileData,
  },
  {
    title: 'TV',
    categoryData: categoryTvData,
  },
  {
    title: 'ROUTER',
    categoryData: categoryRouterData,
  },
  {
    title: 'COMPUTER',
    categoryData: categoryComputerData,
  },
];

const RenderCategoryItem = ({item, index}) => {
  const {url, category} = item;
  const ViewStyle = {
    width: 325,
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
  const TextStyle = {color: '#fff', fontSize: 30, width: 175, marginLeft: 10};

  const AntDesignIconStyle = {
    position: 'absolute',
    zIndex: 100,
    right: 40,
    top: 30,
  };

  return (
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
  );
};

const renderItem = ({item}) => {
  const {title, categoryData} = item;
  const marginRight250 = {marginLeft: 120};

  const ViewStyle = {
    heigh: 20,
    width: '100%',
    flexDirection: 'row',
  };

  return (
    <View
      style={{
        height: 200,
        margin: 20,
      }}>
      <View style={ViewStyle}>
        <Text
          style={{fontWeight: 'bold', color: '#000', fontSize: 25, width: 200}}>
          {title}
        </Text>
        <TouchableOpacity style={marginRight250}>
          <AntDesignIcon name="ellipsis1" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        // extraData={isHeartArr}
        data={categoryData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={RenderCategoryItem}
        keyExtractor={_item => _item.category}
      />
    </View>
  );
};

export default function Category({navigation}) {
  return (
    <>
      <TopComponent navigation={navigation} />

      <Text style={{...styles.text, ...styles.textMargin}}>CATEGORY</Text>
      <Image
        style={styles.image}
        source={require('../assets/category_top.png')}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.marginTop20}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
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
    marginLeft: 30,
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
