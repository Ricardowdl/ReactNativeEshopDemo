import React, {useEffect} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Login Template123123</Header>
      <Paragraph>
        The easiest way to start with your amazing application.123123
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
}
