import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dr from '../components/Dr';
import DrButton from '../components/DrButton';
import DrText1 from '../components/DrText1';
import DrText2 from '../components/DrText2';

export default class DrProfile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            texts: [
                {id: 1, text1: 'Country', text2: 'USA'},
                {id: 2, text1: 'Experience', text2: 'B'},
                {id: 3, text1: 'Place of work', text2: 'Hue hospital'},
                {id: 4, text1: 'Answer', text2: '1969'},
                {id: 5, text1: 'Acknowledgement', text2: '1800'},
                {id: 6, text1: 'Price/hours', text2: '69$'}
            ]
        }
    }
    render() {
        const { texts } = this.state;
        return (
            <View style = {styles.container}>
                <View style = {{flex: 1}}> 
                    <Dr name = 'Tuan' job = 'CARDIOLOGIST' />   
                    <DrText1 />
                    {texts.map(text => <DrText2 key = {text.id} text = {text} />)}
                    <DrButton onPress = {() => {this.props.navigation.navigate('DrChat')}} />
                </View>
            </View>
        )
    }
}
  
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'stretch',
            paddingLeft: 16,
            paddingRight: 16,
        },
    }
) 