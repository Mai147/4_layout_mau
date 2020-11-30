import React from 'react'
import {Text, View, StyleSheet,} from 'react-native'

export default function WelcomeText(props) {
    return (
        <View>
            <Text style = {styles.title}> {props.text} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        marginTop: -8,
    },
});