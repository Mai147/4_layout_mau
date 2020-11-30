import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import SelfImg from '../assets/Profile.png'
import OtherImg from '../assets/doctor2.png'

export default function BoxChat(props) {
    if (props.id == 'self') {
        return(
            <View style = {styles.container}>
                <View style = {[styles.box, {backgroundColor: '#E5E5E5',}]}>
                    <View style = {styles.user}> 
                        <Text style = {styles.name}> {props.name} </Text>
                        <Text style = {styles.nickname}> ({props.nickname}) </Text>
                    </View>
                        <Text style = {styles.mess}> {props.mess} </Text>
                </View>
                <View style = {[styles.boxIcon, {backgroundColor: '#10364A',  marginLeft: 10, }]}>
                    <Image source = {SelfImg} />
                    <Text style = {styles.online}> </Text>
                </View>
            </View>
        )
    }
    else {
        return(
            <View style = {styles.container}>
                <View style = {[styles.boxIcon, {backgroundColor: '#12E7F4', marginRight: 10}]}>
                    <Image style = {{position: 'absolute', bottom: 0,}} source = {OtherImg} />
                    <Text style = {styles.online}> </Text>
                </View>
                <View style = {[styles.box, {backgroundColor: 'white',}]}>
                    <View style = {styles.user}> 
                        <Text style = {styles.name}> {props.name} </Text>
                        <Text style = {styles.nickname}> ({props.nickname}) </Text>                        
                    </View>
                        <Text style = {styles.mess}> {props.mess} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
    },
    box: {
        flex: 1,
        borderRadius: 12,
        minHeight: 50,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 10,
    },
    user: {
        flexDirection: 'row',
        overflow: 'hidden',
        paddingLeft: 6,
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
    },  
    nickname: {
        color: '#C4C4C4',
        fontSize: 13,
    },
    mess: {
        fontSize: 13,
        lineHeight: 20,
    },
    boxIcon: {
        width: 60, 
        height: 60,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    online: {
        position: 'absolute',
        width: 12, 
        height: 12,
        borderRadius: 90,
        backgroundColor: '#0BBF69',
        bottom: -5,
    },
})
