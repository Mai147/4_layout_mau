import React, { useState } from 'react';
import { StyleSheet, View,} from 'react-native';
import LoginInput from '../components/LoginInput'
import LoginText from '../components/LoginText';
import LoginButton from '../components/LoginButton';
import userImage from '../assets/user.png';
import lockImage from '../assets/Lock.png';


export default function Login({navigation}){
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();
        return (
            <View style = {styles.container}> 
                <LoginInput 
                    labelvalue = {Username}
                    onChangeText = {(Username) => setUsername(Username)}
                    placeholder = 'Username'
                    iconimg = {userImage}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
                <LoginInput 
                    labelvalue = {Password}
                    onChangeText = {(Password) => setPassword(Password)}
                    placeholder = 'Password'
                    iconimg = {lockImage}
                    secureTextEntry = {true}
                />
                <LoginText />
                <LoginButton 
                    buttonTitle = 'LOGIN'
                    onPress = {() => navigation.navigate('DrProfile')}
                />
            </View>
        )
}
  
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#56CCF2',
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
        },
    }
) 