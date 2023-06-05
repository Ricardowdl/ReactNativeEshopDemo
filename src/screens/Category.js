import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import TopComponent from '../components/TopComponent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {CategorySecond, CategoryThird} from './index';

// DATA 类的数据以后需要改为从api中load，存于redux中
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
    url: require('../assets/mate50.webp'),
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

const CategoryStack = createNativeStackNavigator();

const RenderCategoryItem = ({item, index}) => {
  const {url, category, navigation} = item;
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
  );
};

const CategoryHome = ({navigation}) => {
  const renderItem = ({item}) => {
    const {title, categoryData} = item;
    categoryData.map(i => {
      i.navigation = navigation;
    });
    const marginRight250 = {marginLeft: 120};

    const ViewStyle = {
      heigh: 20,
      width: '100%',
      flexDirection: 'row',
    };

    const TextStyle = {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 25,
      width: 200,
    };
    return (
      <View
        style={{
          height: 200,
          margin: 20,
        }}>
        <View style={ViewStyle}>
          <Text style={TextStyle}>{title}</Text>
          <TouchableOpacity
            style={marginRight250}
            onPress={() => {
              navigation.navigate('CategorySecond', {
                type: title,
              });
            }}>
            <AntDesignIcon name="ellipsis1" size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={categoryData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={RenderCategoryItem}
          keyExtractor={_item => _item.category}
        />
      </View>
    );
  };

  return (
    <>
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
};

export default function Category({navigation}) {
  return (
    <>
      <TopComponent navigation={navigation} />

      {/* 核心逻辑应该是一个页面，通过传递参数的形式复用组件，比如只有一个二级分类页，里面是展示手机、TV是通过param参数来决定 */}

      <CategoryStack.Navigator
        initialRouteName="CategoryHome"
        screenOptions={{
          headerShown: false,
        }}>
        <CategoryStack.Screen name="CategoryHome" component={CategoryHome} />
        <CategoryStack.Screen
          name="CategorySecond"
          component={CategorySecond}
        />
        <CategoryStack.Screen name="CategoryThird" component={CategoryThird} />
      </CategoryStack.Navigator>
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
