import React from 'react'
import { render } from 'react-dom'
import {View, Text, StyleSheet} from 'react-native'

export default class DrText2 extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            textvalue: '',
        }
    }
    render () {
        const { text } = this.props;
        return(
            <View style = {{flexDirection: "row", marginBottom: -6,}}>
                <Text style = {[styles.text1, text.text1 == 'Price/hours' ? styles.text3 : styles.text1]}> {text.text1} : </Text>
                <Text style = {[styles.text2, text.text1 == 'Price/hours' ? styles.text3 : styles.text2]}> {text.text2} </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create( {
    text1: {
        fontSize: 18,
        color: 'black',
    },
    text2: {
        fontSize: 18,
        color: '#56CCF2',
    },
    text3: {
        marginTop: 16,
        marginBottom: 30,
    }
});