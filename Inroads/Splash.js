import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{uri:'https://inroads.org/wp-content/themes/inroads/img/no-thumb.jpg'}}
                />
                <Text style={styles.text}>Welcome to INROADS!</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#263352'
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    image: {
        width: 150,
        height: 150
    }
});