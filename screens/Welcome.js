import React, { useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import WelcomeLogo from '../components/WelcomeLogo'
import WelcomeText from '../components/WelcomeText';
import WelcomeText2 from '../components/WelcomeText2';

export default function Welcome({ navigation, }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000);
    }, [])
    return (
        <View style = {styles.container}>
            <Text style = {styles.container1}>  </Text>
            <View style = {styles.container2}> 
                <WelcomeLogo />
                <WelcomeText text = 'doctor' /> 
                <WelcomeText text = 'consulation' /> 
            </View>
            <View style = {styles.container3}>
                <WelcomeText2 />
            </View>
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
        },
        container1: {
            flex: 1,
        },
        container2: {
            flex: 4, 
            justifyContent: 'center', 
            alignItems: 'center', 
        },
        container3: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center',
        },
    }
) 