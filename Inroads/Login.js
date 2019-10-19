import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Linking
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    handleLogin() {
        if (this.state.username == "" && this.state.password == "") {
        }
    }
  


  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={{fontSize: 27}}>
                        Login
                    </Text>
                    <TextInput 
                    onChangeText={(value) => {
                        this.setState({username: value})
                    }} 
                    value={this.state.username} 
                    placeholder='Username' />
                    <TextInput 
                    onChangeText={(value) => {
                        this.setState({ password: value })
                    }} 
                    value={this.state.password}
                    secureTextEntry={true} 
                    placeholder='Password' />
                    <View style={{margin: 7}} />
                    <Button title="Submit" onPress={() => {
                        this.props.navigation.navigate("Home")
                        this.handleLogin()
                    }}/>
                </View>
                <View style={styles.container} /> 
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { 
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});