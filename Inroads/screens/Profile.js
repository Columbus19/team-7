import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image, Button } from 'react-native';

class profile extends Component {
        render() {
           return (
              <View style={styles.timelineContainer}>
                <Text style={styles.timelineHeading}>{this.props.name} </Text>
                <Text style={styles.timelineHeading}>{this.props.profession} </Text>
                <Button title={"Log Out"} onPress={() => this.props.navigation.navigate("login")}/>
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
        fontSize: 35,
        padding: 5,
        margin: 20,
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