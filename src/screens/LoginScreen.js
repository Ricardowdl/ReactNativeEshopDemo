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

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const [checked, setChecked] = useState(false);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
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
      <Icon style={styles.row} name="face-recognition" size={70} color="#900" />
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
    color: 'white',
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
