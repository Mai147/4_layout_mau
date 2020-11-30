import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import BoxChat from '../components/BoxChat';
import BoxInput from '../components/BoxInput';

export default function DrChat(){
    const [ text, setText ] = useState('');
    const [ show, setShow ] = useState('false');
    const [ appText, setAppText ] = useState('');
    return(
        <View style = {styles.container}>
            <View style = {{flex: 6,}}>
                <ScrollView>
                    <BoxChat id = 'self' name = 'CongDat' nickname = 'Thichdungcham' mess = 'abc' />
                    <BoxChat id = 'other' name = 'Tuan' nickname = ' Cardiologist ' mess = 'amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor' />
                    <BoxChat id = 'self' name = 'CongDat' nickname = 'Thichdungcham' mess = 'enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi' />
                    <BoxChat id = 'other' name = 'Tuan' nickname = ' Cardiologist ' mess = 'game ko cac ban' />
                    <BoxChat id = 'self' name = 'CongDat' nickname = 'Thichdungcham' mess = 'ngu' />
                    <BoxChat id = 'other' name = 'Tuan' nickname = ' Cardiologist ' mess = 'ok :))' />
                    {show == 'true' ? <BoxChat id = 'self' name = 'CongDat' nickname = 'Thichdungcham' mess = {appText}/> : null}
                        
                </ScrollView>
            </View>
            <View style = {{flex: 1,}}>
                <BoxInput 
                    onChangeText = {text => setText(text)}
                    onSubmitEditing = {() => { 
                                                setAppText(text);
                                                setShow('true');
                                                setText('');
                                                }}
                    value = {text}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16, 
        paddingRight: 16,
    },
})