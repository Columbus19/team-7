import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
 this.notifications = [
    {
      text: 'Your resume has been approved!',
    },
    {
      text: 'Your Mock Interview has been scheduled!',
    },
    {
      text: 'Don\'t forget to submit a new resume!',
    },
    {
      text: 'Don\'t forget to finish your application!',
    },
    {
      text: 'Thank you for signing up!',
    },
  ]

  let colors = {
    0 : '#A052201f',
    1 : 'white',
  }
  return (
    <ScrollView style={styles.container}>
      {this.notifications.map((item,index) => (
        <View id={Math.random()} style={styles.notifications, {backgroundColor: colors[index % 2]}}>
          <Text style={styles.text} >{item.text}</Text>
          {/* <Text>{item.type}</Text> */}
        </View>
      ))}
    </ScrollView>
  );
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