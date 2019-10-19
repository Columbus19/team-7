import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
//  this.notifications = [
//     {
//       text: 'Your resume has been approved!',
//     },
//     {
//       text: 'Your Mock Interview has been scheduled!',
//     },
//     {
//       text: 'Don\'t forget to submit your resume for approval.',
//     },
//     {
//       text: 'Don\'t forget to finish your application.',
//     },
//     {
//       text: 'Thank you for signing up!',
//     },
//   ]

//   let colors = {
//     0 : 'rgba(0,0,255,0.1)',
//     1 : 'white',
//   }
//   return (
//     <ScrollView style={styles.container}>
//       {this.notifications.map((item,index) => (
//         <View id={Math.random()} style={styles.notifications, {backgroundColor: colors[index % 2]}}>
//           <Text style={styles.text} >{item.text}</Text>
//           {/* <Text>{item.type}</Text> */}
//         </View>
//       ))}
//     </ScrollView>
//   );
//}

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.notifications}>

          <View style={styles.notificationOne}>
            <Text style={styles.notificationText}>Your resume has been approved!</Text>
          </View>

          <TouchableOpacity style={styles.notificationTwo}>
            <Text style={styles.notificationText}>Your Mock Interview has been scheduled!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationThree}>
            <Text style={styles.notificationText}>Don't forget to submit your resume for approval.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationFour}>
            <Text style={styles.notificationText}>Don't forget to finish your application.</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}

// LinksScreen.navigationOptions = {
//   title: 'Notifications',
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   notifications: {
//     width: 360,
//     height: 50, 
//     flex: 1,
//     borderRadius: 25
//   },
//   text: {
//     fontSize: 20,
//     padding: 5,
//     margin: 20,
//   }
  
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notifications: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  notificationOne: {
    borderRadius: 10,
    marginTop: 5,
    width: 360,
    height: 50,
    backgroundColor: '#FBECEF'
  },
  notificationTwo: {
    borderRadius: 10,
    marginTop: 5,
    width: 360,
    height: 50,
    backgroundColor: '#FBECEF'
  },
  notificationThree: {
    borderRadius: 10,
    marginTop: 5,
    width: 360,
    height: 50,
    backgroundColor: '#FBECEF'
  },
  notificationFour: {
    borderRadius: 10,
    marginTop: 5,
    width: 360,
    height: 50,
    backgroundColor: '#FBECEF'
  },
  notificationText: {
    color: 'black',
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'left',
  }
});
