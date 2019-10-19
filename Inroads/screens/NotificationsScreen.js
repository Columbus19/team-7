import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import {
  addNotification
} from '../ducks'
import { ExpoLinksView } from '@expo/samples';

class LinksScreen extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let colors = {
      0 : '#A052201f',
      1 : 'white',
    }
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.addNotification(['Your Mock Interview has been scheduled!'])}>
        {this.props.notifications.map((item,index) => (
          <View id={Math.random()} style={styles.notifications, {backgroundColor: colors[index % 2]}}>
            <Text style={styles.text} >{item}</Text>
            {/* <Text>{item.type}</Text> */}
          </View>
        ))}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Notifications',
};

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
  }
  
});

function mapStateToProps(state) {
  return {
    notifications: state.notifications.notifications
  }
}

const mapDispatchToProps = {
  addNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)