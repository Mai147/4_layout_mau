import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function DrButton({...rest}) {
    return(
       <TouchableOpacity style = {styles.button} {...rest}>
           <Text style = {styles.text}> Ask the Doctor </Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create( {
    button: {
        backgroundColor: '#10364A',
        alignItems: 'center',
        borderRadius: 90,
        padding: 8,
    },
    text: {
        color: 'white',
        fontSize: 22,
    },
});