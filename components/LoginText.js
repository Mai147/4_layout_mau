import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default function LoginText() {
    return (
      <View>
        <View style = {styles.textview}>
          <View style = {{alignItems: 'flex-start', flex: 1,}}>
            <TouchableOpacity>
              <Text style = {styles.text1}> Create account </Text>
            </TouchableOpacity>
          </View>
          <View style = {{alignItems: 'flex-end', flex: 1,}}>
            <TouchableOpacity>
              <Text style = {styles.text1}> Forgot password? </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style = {styles.border}> </Text>
      </View>
    );
}

const styles = StyleSheet.create( {
    textview: {
      flexDirection: 'row',
    },

    text1: {
      fontSize: 11,
      color: '#FFFFFF',
    },

    border: {
      marginTop: 10,
      height: 1.5,
      backgroundColor: '#A7B8A8',
    },
});