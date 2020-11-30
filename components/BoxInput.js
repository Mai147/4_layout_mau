import { StackActions } from '@react-navigation/native'
import React, { useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'

export default function BoxInput({...rest}){
    return(
        <View style = {styles.container}>
            <TextInput style = {styles.textInput} 
                placeholder = 'Write...'
                placeholderTextColor = '#C4C4C4'
                {...rest}
                >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 4,
        paddingTop: 4,
        fontSize: 16,
    },
})