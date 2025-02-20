import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Linking,
    Image,
    Text,
    Keyboard
} from 'react-native';
import {connect} from 'react-redux';
import { changeType } from './ducks'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }


    handleLogin() {
        if (this.state.username == "student@gmail.com") {
            this.props.typeChange('student')
        }
        else if(this.state.username == "alumni@gmail.com") {
            this.props.typeChange('alumni')
        }
        else
            this.props.typeChange('company')


        this.props.navigation.navigate("Home")

    }
  
    render() {
        return (
            <View style={styles.container} onPress={() => {Keyboard.dismiss()}}>
                <View style={{flex:.4}}>
                    <Image style={styles.image}
                        source={{ uri: 'https://inroads.org/wp-content/themes/inroads/img/no-thumb.jpg' }}
                    />
                </View>
                <View style={{flex:.5}}>
                        
                        <TextInput 
                            textAlign={'center'}
                            style={styles.textInput}
                            onChangeText={(value) => {
                            this.setState({username: value})
                            }} 
                        value={this.state.username} 
                        placeholder='Username' />
                        <TextInput 
                            textAlign={'center'}
                            style={styles.textInput}
                            onChangeText={(value) => {
                            this.setState({ password: value })
                            }} 
                        value={this.state.password}
                        secureTextEntry={true} 
                        placeholder='Password' />
                        <Button style={{ flex: .1, margin: 20 }} title="Submit" onPress={() => {
                            this.handleLogin()
                        }} />
                </View>
                <View style={{flex: .1}}>
                    <Text style={{margin: 20, color: '#fff'}} onPress={() => {Linking.openURL("http://ext1.inroads.org/IOL_Application/App/Profile1")}}>New user? Create an account</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { 
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,51,82)',
    },
    textInput: {
        backgroundColor: '#fff',
        width: 400,
        height: 45,
        borderRadius: 25,
        margin: 20
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    }
});

const mapDispatchToProps = {
    typeChange: changeType
}

export default connect(null,mapDispatchToProps)(Login)
