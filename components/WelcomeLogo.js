import React from 'react'
import {Image, View, StyleSheet,} from 'react-native'
import LogoImage from '../assets/medic.png'

export default function WelcomeLogo() {
    return (
        <View>
            <Image style = {styles.Image} source = {LogoImage} />
        </View>
    );
}
const styles = StyleSheet.create({
    Image: {
        width: 260,
        height: 260,
    },

});