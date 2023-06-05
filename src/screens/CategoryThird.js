import React from 'react';
import CategoryBrand from '../components/CategoryBrand';

const categoryAppleMobileData = [
  {
    category: 'Iphone 14 pro max',
    url: require('../assets/iphone.png'),
  },
  {
    category: 'Iphone 14 pro',
    url: require('../assets/iphone.png'),
  },
  {
    category: 'Iphone 14 plus',
    url: require('../assets/iphone.png'),
  },
  {
    category: 'Iphone 14',
    url: require('../assets/iphone.png'),
  },
];

const categorySamsungMobileData = [
  {
    category: 'Galaxy S23 Ultra',
    url: require('../assets/samsung.png'),
  },
  {
    category: 'Galaxy S23',
    url: require('../assets/S23.webp'),
  },
  {
    category: 'Galaxy W23',
    url: require('../assets/w23.webp'),
  },
  {
    category: 'Galaxy W23 Flip',
    url: require('../assets/w23Flip.webp'),
  },
];

const categoryMiMobileData = [
  {
    category: 'Xiaomi 13 Ultra',
    url: require('../assets/mi13ultra.png'),
  },
  {
    category: 'Xiaomi 13 pro',
    url: require('../assets/mi13pro.png'),
  },
  {
    category: 'Xiaomi 13',
    url: require('../assets/mi13.png'),
  },
  {
    category: 'Xiaomi MIX Fold 2',
    url: require('../assets/mixfold2.png'),
  },
];

const categoryHuaweiMobileData = [
  {
    category: 'HUAWEI Pocket S',
    url: require('../assets/pockets.webp'),
  },
  {
    category: 'HUAWEI Mate 50 pro',
    url: require('../assets/mate50.webp'),
  },
  {
    category: 'HUAWEI Mate 50',
    url: require('../assets/mate50.webp'),
  },
  {
    category: 'HUAWEI P60 Pro',
    url: require('../assets/p60.webp'),
  },
];

const categoryAsusRouterData = [
  {
    category: 'RT-AX57',
    url: require('../assets/RT-AX57.webp'),
  },
  {
    category: 'RTAX86U',
    url: require('../assets/RTAX86U.webp'),
  },
  {
    category: 'TUF GAMING',
    url: require('../assets/TUFGAMING.webp'),
  },
];

const categorySAMSUNGTVData = [
  {
    category: 'S90Z',
    url: require('../assets/sanTv.webp'),
  },
  {
    category: 'QN900C',
    url: require('../assets/QN.webp'),
  },
];

export default function CategoryThird({route, navigation}) {
  let {category} = route.params;
  console.log('category', category);
  category = category.split(' ')[0];
  let categoryData;
  switch (category) {
    case 'APPLE':
      categoryData = categoryAppleMobileData;
      break;
    case 'SAMSUNG':
      categoryData = categorySamsungMobileData;
      break;
    case 'XIAOMI':
      categoryData = categoryMiMobileData;
      break;
    case 'HUAWEI':
      categoryData = categoryHuaweiMobileData;
      break;
    case 'ASUS':
      categoryData = categoryAsusRouterData;
      break;
    default:
      categoryData = categoryAppleMobileData;
  }

  return (
    <CategoryBrand
      navigation={navigation}
      categoryData={categoryData}
      categoryType={category}
    />
  );
}
