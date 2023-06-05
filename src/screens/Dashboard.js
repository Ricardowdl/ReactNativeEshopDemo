import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Home, Category} from './index';

function Orders() {
  return (
    <View style={styles.center}>
      <Text>ORDERS!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.center}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard({navigation}) {
  console.log('this is Dashboard');
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'rgb(52,32,228)',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'CATEGORY',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="bars" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'ORDERS',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    // <Background>
    //   <Logo />
    //   <Header>Let’s start</Header>
    //   <Paragraph>
    //     Your amazing app starts here. Open you favorite code editor and start
    //     editing this project.
    //   </Paragraph>
    //   <Button
    //     mode="outlined"
    //     onPress={() =>
    //       navigation.reset({
    //         index: 0,
    //         routes: [{name: 'StartScreen'}],
    //       })
    //     }>
    //     Logout
    //   </Button>
    // </Background>
  );
}

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
