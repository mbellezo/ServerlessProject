import React, {Component} from 'react';
import {View,
    ScrollView,
    StyleSheet
} from "react-native";

import {Container, Content, Icon} from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends Component{

    static navigationOptions ={
        tabBarIcon:({tintColor})=> (
            <Icon name="ios-home" style={{color:tintColor}}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <CardComponent/>
            </View>
        )
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
})