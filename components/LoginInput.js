import React from 'react'
import {StyleSheet, View, TextInput, Image, Text} from 'react-native'

export default function LoginInput ({labelvalue, placeholder, iconimg, ...rest}) {
        return (
            <View>
                <View style = {styles.box}>
                    <TextInput style = {styles.textinput}
                        value = {labelvalue}
                        placeholder = {placeholder}
                        placeholderTextColor = '#E5E5E5'
                        { ...rest}
                    />
                    <Text style = {styles.icon}> </Text>
                    <Image style = {styles.icon2} source = {iconimg} />
                </View>
            </View>
        );
};

const styles = StyleSheet.create(
    {
        box:
        {
            position: 'relative',
        },
    
        textinput:
        {
            backgroundColor: '#FFFFFF',
            paddingLeft: 70, 
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 90, 
            fontSize: 22,
            marginBottom: 12,
        },
    
        icon:
        {
            position: 'absolute',
            width: 42,
            height: 42,
            top: 5,
            left: 5,
            backgroundColor: '#10364A',
            borderRadius: 42,
        },
    
        icon2:
        {
            position: 'absolute',
            top: 12,
            left: 14,
        },
    }
)