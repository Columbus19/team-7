import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{margin: 7}} />
                <Button title="Submit" />
            </View>
        );
    }
}