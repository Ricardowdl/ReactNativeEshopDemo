import React from 'react';
import CategoryList from '../components/CategoryList';

const categoryMobileData = [
  {
    category: 'APPLE',
    url: require('../assets/iphone.png'),
  },
  {
    category: 'SAMSUNG',
    url: require('../assets/samsung.png'),
  },
  {
    category: 'XIAOMI',
    url: require('../assets/xiaomi.png'),
  },
  {
    category: 'HUAWEI',
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

export default function Category({route, navigation}) {
  const {type} = route.params;
  let categoryData;
  switch (type) {
    case 'MOBILE':
      categoryData = categoryMobileData;
      break;
    case 'TV':
      categoryData = categoryTvData;
      break;
    case 'ROUTER':
      categoryData = categoryRouterData;
      break;
    case 'COMPUTER':
      categoryData = categoryComputerData;
      break;
  }
  return (
    <CategoryList
      navigation={navigation}
      categoryData={categoryData}
      type={type}
    />
  );
}
