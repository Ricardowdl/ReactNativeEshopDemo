import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// ellipsis1;
const color = '#000';
const size = 30;
const TopComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AntDesignIcon
        style={styles.marginLeft16}
        name="ellipsis1"
        color={color}
        size={size}
      />
      <Image
        source={require('../assets/eshopLogoWhite.png')}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <AntDesignIcon
          style={styles.marginLeft70}
          name="user"
          color={color}
          size={size}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <AntDesignIcon
          style={styles.marginLeft16}
          name="shoppingcart"
          color={color}
          size={size}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40, // 设置组件高度
    // backgroundColor: 'orange',
    zIndex: 100, // 提高组件层叠级别
    // elevation: 4, // 为了使 Android 上的阴影生效，需要设置 elevation 属性
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft16: {
    marginLeft: 16,
  },
  marginLeft70: {
    marginLeft: 70,
  },

  image: {
    height: 40,
    marginLeft: 100,
  },
});

export default TopComponent;
