import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from 'expo-local-authentication';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    console.log('进入dashboard');
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  };

  const onClickFace = async () => {
    // https://docs.expo.dev/versions/latest/sdk/local-authentication/?redirected#configuration-in-appjsonappconfigjs
    console.log('click');
    const compatible = await hasHardwareAsync();
    console.log('compatible', compatible);
    if (!compatible) {
      throw 'This device is not compatible for biometric authentication';
    }

    const enrolled = await isEnrolledAsync();
    console.log('enrolled', enrolled);

    if (!enrolled) {
      throw "This device doesn't have biometric authentication enabled";
    }
    const result = await authenticateAsync();
    alert('login suceess');

    if (result.success) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    } else {
      throw `${result.error} - Authentication unsuccessful`;
    }
    return;
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.middleText}>
        <View style={styles.RememberMe}>
          {/* loss checkbox */}
          <Text style={styles.forgot}> Remember me</Text>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <TouchableOpacity style={styles.row} onPress={() => onClickFace()}>
        <Icon name="face-recognition" size={70} color="#900" />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.white}>if you don’t have account</Text>

        <Button
          mode="outlined"
          onPress={() => navigation.replace('RegisterScreen')}>
          Continue Sign up
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  middleText: {
    with: '100%',
    flexDirection: 'row',
  },
  RememberMe: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  icon: {
    marginTop: 50,
  },
  white: {
    color: 'blue',
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
