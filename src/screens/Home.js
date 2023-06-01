import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import TopComponent from '../components/TopComponent';
import {Searchbar} from 'react-native-paper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {cloneDeep} from 'lodash';

const DATA = [
  {
    title: 'search',
    styles: {
      margin: 16,
      borderRadius: 30,
    },
  },
  {
    title: 'Promotion',
    styles: {
      margin: 16,
    },
  },
  {
    title: 'CATEGORY',
    styles: {
      height: 160,
    },
  },
  {
    title: 'RECOMMEND',
    styles: {
      height: 180,
    },
  },
  {
    title: "WHAT'S NEW",

    styles: {
      height: 120,
    },
  },
];

const MySearchbar = ({itemStyles}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={itemStyles}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const Promotion = ({title, itemStyles}) => {
  const PromotionData = [
    {
      title: '1',
      url: require('../assets/Promotion_picture.png'),
    },
    {
      title: '2',
      url: require('../assets/Promotion_picture.png'),
    },
    {
      title: '3',
      url: require('../assets/Promotion_picture.png'),
    },
  ];
  const renderItem = ({item}) => {
    const {url} = item;
    const marginRight16 = {marginRight: 16};
    const borderRadius20 = {borderRadius: 20};
    return (
      <View style={marginRight16}>
        <Image source={url} style={borderRadius20} />
      </View>
    );
  };

  return (
    <FlatList
      style={itemStyles}
      data={PromotionData}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};

const Category = ({title, itemStyles}) => {
  const [promotionData, setPromotionData] = useState([
    {
      index: 0,
      url: require('../assets/apple_watch.jpg'),
      name: 'WATCH',
      isHeart: false,
    },
    {
      index: 1,
      url: require('../assets/MacBook.png'),
      name: 'COMPUTER',
      isHeart: true,
    },
    {
      index: 2,
      url: require('../assets/ipad.png'),
      name: 'TABLET',
      isHeart: false,
    },
  ]);

  const marginRight250 = {marginLeft: 250};
  const ViewStyle = {
    heigh: 20,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 26,
  };

  const renderItem = ({item}) => {
    const {url, name, isHeart, index} = item;
    const itemViewStyle = {
      borderRadius: 20,
      flex: 0.3,
      height: 150,
      border: 1,
    };
    const marginRight16 = {marginRight: 16};
    const itemTextStyle = {
      width: 150,
      height: 26,
      backgroundColor: 'rgb(124,76,215)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      color: '#fff',
      textAlign: 'center',
      lineHeight: 23,
    };
    const itemImageStyle = {
      height: 100,
      width: 100,
      resizeMode: 'contain',
      backgroundColor: '#fff',
    };
    const itemViewImageStyle = {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#fff',
      height: 124,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    };
    const AntDesignIconStyle = {
      position: 'absolute',
      zIndex: 100,
      right: 10,
      bottom: 30,
    };
    return (
      <View style={marginRight16}>
        <View style={itemViewStyle}>
          <View style={itemViewImageStyle}>
            <Image source={url} style={itemImageStyle} />
          </View>
          <Text style={itemTextStyle}>{name}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log('onclick');
              const _promotionData = cloneDeep(promotionData);
              _promotionData[index].isHeart = !_promotionData[index].isHeart;
              console.log(_promotionData);
              setPromotionData(_promotionData);
            }}>
            <AntDesignIcon
              style={AntDesignIconStyle}
              name={isHeart ? 'heart' : 'hearto'}
              color={'rgb(124,76,215)'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={ViewStyle}>
        <Text style={{fontWeight: 'bold', color: '#000'}}>{title}</Text>
        <TouchableOpacity style={marginRight250}>
          <AntDesignIcon name="ellipsis1" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{margin: 16}}
        data={promotionData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </>
  );
};

const Recommend = ({title}) => {
  const [promotionData, setPromotionData] = useState([
    {
      index: 0,
      url: require('../assets/MacBook.png'),
      name: 'MacBook',
      isHeart: true,
    },
    {
      index: 1,
      url: require('../assets/ipad.png'),
      name: 'Ipad pro 2022',
      isHeart: false,
    },
  ]);

  const marginRight250 = {marginLeft: 250};
  const ViewStyle = {
    heigh: 20,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 26,
  };

  const renderItem = ({item}) => {
    const {url, name, isHeart, index} = item;
    const itemViewStyle = {
      borderRadius: 20,
      width: 300,
      height: 250,
      border: 1,
      backgroundColor: 'rgb(155,96,208)',
    };
    const marginRight16 = {marginRight: 16};
    const itemTextStyle = {
      position: 'absolute',
      fontSize: 25,
      fontWeight: 'thin',
      top: 100,
      right: 10,
      color: '#fff',
      width: 120,
    };
    const itemImageStyle = {
      height: 175,
      width: 175,
      resizeMode: 'contain',
    };
    const itemViewImageStyle = {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',

      position: 'absolute',
      top: 35,
    };
    const AntDesignIconStyle = {
      position: 'absolute',
      zIndex: 100,
      right: 20,
      top: 20,
    };
    return (
      <View style={marginRight16}>
        <View style={itemViewStyle}>
          <View style={itemViewImageStyle}>
            <Image source={url} style={itemImageStyle} />
          </View>
          <Text style={itemTextStyle}>{name}</Text>
          <TouchableOpacity
            onPress={() => {
              const _promotionData = cloneDeep(promotionData);
              _promotionData[index].isHeart = !_promotionData[index].isHeart;
              setPromotionData(_promotionData);
            }}>
            <AntDesignIcon
              style={AntDesignIconStyle}
              name={isHeart ? 'heart' : 'hearto'}
              color={'white'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={ViewStyle}>
        <Text style={{fontWeight: 'bold', color: '#000'}}>{title}</Text>
        <TouchableOpacity style={marginRight250}>
          <AntDesignIcon name="ellipsis1" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{margin: 16}}
        data={promotionData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </>
  );
};

const New = ({title, itemStyles}) => {
  const [promotionData, setPromotionData] = useState([
    {
      index: 0,
      url: require('../assets/apple_watch.jpg'),
      name: 'WATCH',
      isHeart: false,
    },
    {
      index: 1,
      url: require('../assets/MacBook.png'),
      name: 'COMPUTER',
      isHeart: true,
    },
    {
      index: 2,
      url: require('../assets/ipad.png'),
      name: 'TABLET',
      isHeart: false,
    },
  ]);

  const marginRight250 = {marginLeft: 250};
  const ViewStyle = {
    heigh: 20,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 26,
  };

  const renderItem = ({item}) => {
    const {url, name, isHeart, index} = item;
    const itemViewStyle = {
      borderRadius: 20,
      flex: 0.3,
      height: 150,
      border: 1,
    };
    const marginRight16 = {marginRight: 16};
    const itemTextStyle = {
      width: 150,
      height: 26,
      backgroundColor: 'rgb(124,76,215)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      color: '#fff',
      textAlign: 'center',
      lineHeight: 23,
    };
    const itemImageStyle = {
      height: 100,
      width: 100,
      resizeMode: 'contain',
      backgroundColor: '#fff',
    };
    const itemViewImageStyle = {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#fff',
      height: 124,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    };
    const AntDesignIconStyle = {
      position: 'absolute',
      zIndex: 100,
      right: 10,
      bottom: 30,
    };
    return (
      <View style={marginRight16}>
        <View style={itemViewStyle}>
          <View style={itemViewImageStyle}>
            <Image source={url} style={itemImageStyle} />
          </View>
          <Text style={itemTextStyle}>{name}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={ViewStyle}>
        <Text style={{fontWeight: 'bold', color: '#000'}}>{title}</Text>
        <TouchableOpacity style={marginRight250}>
          <AntDesignIcon name="ellipsis1" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{margin: 16}}
        data={promotionData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </>
  );
};

const Item = ({title, itemStyles}) => {
  if (title === 'search') {
    return <MySearchbar itemStyles={itemStyles} />;
  }

  if (title === 'Promotion') {
    return <Promotion title={title} itemStyles={itemStyles} />;
  }

  if (title === 'CATEGORY') {
    return <Category title={title} itemStyles={itemStyles} />;
  }
  if (title === 'RECOMMEND') {
    return <Recommend title={title} itemStyles={itemStyles} />;
  }
  if (title === "WHAT'S NEW") {
    return <New title={title} itemStyles={itemStyles} />;
  }
  return (
    <View style={{...styles.item, ...itemStyles}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} itemStyles={item.styles} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopComponent navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.marginTop40}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  marginTop40: {
    marginTop: 40,
  },
});

export default Home;
