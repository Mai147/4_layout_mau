import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import DoctorImage from '../assets/doctor1.png'

export default function Dr(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.icon}> 
                <Image style = {styles.img} source = {DoctorImage} />
            </View>
            <Text style = {styles.text}> Dr.{props.name} </Text>
            <Text style = {styles.text2}> {props.job} </Text>
        </View>
    )
}

const styles = StyleSheet.create( {
        container: {
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            paddingTop: 12,
            paddingBottom: 16,
            marginTop: 16,
        },
        icon: {
            position: 'relative',
            width: 110,
            height: 110,
            backgroundColor: '#12E7F4',
            borderRadius: 90,
            alignItems: 'center',
            marginBottom: 16,
        },

        img: {
            position: 'absolute',
            bottom: 0,
        },
        text: {
            fontSize: 18,
        },
        text2: {
            fontSize: 14,
            color: '#AAAAAA',
        },
    }
)