import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { addNotification } from '../ducks'

class LinksScreen extends Component {

  constructor(props){
    super(props);
  }
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
render() {
    alert(this.props.notifications);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.timelineContainer}>

            <TouchableOpacity onPress={() => this.props.pushNotification(['poop','scoop','loop'])} style={styles.applicationContainer}>
              <Text style={styles.timelineHeading}>Application</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { alert('You have to complete your Application before we can review your Resume.') }} style={styles.webinarContainer}>
              <Text style={styles.timelineHeading}>Resume Review</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { alert('Your Resume must be approved before you can schedule your Webinar!') }} style={styles.mockInterviewContainer}>
              <Text style={styles.timelineHeading}>Webinar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { alert('You have to complete your Webinar before you can schedule your Mock Interview!') }} style={styles.resumeReviewContainer}>
              <Text style={styles.timelineHeading}>Mock Interview</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    );
  }
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
  timelineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  applicationContainer: {
    borderRadius: 25,
    marginTop: 50,
    width: 360,
    height: 120,
    backgroundColor: 'rgb(241,155,56)'
  },
  webinarContainer: {
    borderRadius: 25,
    marginTop: 10,
    width: 360,
    height: 120,
    backgroundColor: 'rgba(46,120,241,0.25)'
  },
  mockInterviewContainer: {
    borderRadius: 25,
    marginTop: 10,
    width: 360,
    height: 120,
    backgroundColor: 'rgba(85,170,102,0.25)'
  },
  resumeReviewContainer: {
    borderRadius: 25,
    marginTop: 10,
    width: 360,
    height: 120,
    backgroundColor: 'rgba(253,58,52,0.25)'
  },
  timelineHeading: {
    color: 'white',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

mapStateToProps = function(state) {
  return {
    notifications: state.notifications.notifications
  }
}

const mapDispatchToProps = {
  pushNotification: addNotification
}

export default connect(mapStateToProps,mapDispatchToProps)(LinksScreen)