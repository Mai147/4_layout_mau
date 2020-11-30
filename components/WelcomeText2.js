import React from 'react'
import {Text, View, StyleSheet,} from 'react-native'

export default function WelcomeText() {
    return (
        <View>
            <Text style = {styles.text2}> Online </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text2: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    }
});