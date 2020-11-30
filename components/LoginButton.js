import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

export default function LoginButton({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity style = {styles.button} {...rest}>
            <Text style = {styles.text2}> {buttonTitle} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create( {
    button:
    {
      marginTop: 14,
      backgroundColor: '#FFFFFF',
      color: '#10364A',
      borderRadius: 90,
    },

    text2:
    {
      paddingTop: 8,
      paddingBottom: 8,
      textAlign: 'center',
      fontSize: 22,
    },
});