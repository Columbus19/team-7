import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image, Button, Avatar } from 'react-native';

class profile extends Component {
        render() {
           return (
              <View style={styles.container}>
               <Image style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 100, marginBottom: 30 }}
                 source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
               />
                <View style={{flex: .9, alignSelf: 'center'}}>
                  <Text style={styles.text}>{this.props.name} </Text>
                  <Text style={styles.text}>{this.props.profession} </Text>
               </View>
                <Button style={{flex:.1}} title={"Log Out"} onPress={() => this.props.navigation.navigate("login")}/>
              </View>
           )}
       }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
      },
      notifications: {
        width: 'auto',
        height: 75, 
        flex: 1,
      },
      text: {
        padding: 5,
        marginLeft: 20,
      },
      image: {
        width: 50,
        height: 100,
      }
    });

    function mapStateToProps(state) {
        return {
            name: state.user.name,
            profession: state.user.profession,
        }
    }

    export default connect(mapStateToProps)(profile)