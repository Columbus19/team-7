import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';



function renderCompany(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.timelineContainer}>

          <TouchableOpacity onPress={() => { props.navigation.navigate('view') }} style={styles.applicationContainer}>
            <Text style={styles.timelineHeading}>View Resumes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Review Interns') }} style={styles.webinarContainer}>
            <Text style={styles.timelineHeading}>Review Interns</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Statistics') }} style={styles.mockInterviewContainer}>
            <Text style={styles.timelineHeading}>Statistics</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}

function renderAlumni(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.timelineContainer}>

          <TouchableOpacity onPress={() => { alert('You want to make a donation!') }} style={styles.applicationContainer}>
            <Text style={styles.timelineHeading}>Make Donation</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Volunteer to help with Mock Interviews') }} style={styles.webinarContainer}>
            <Text style={styles.timelineHeading}>Volunteer to do Mock Interviews</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Go to a summer training session to improve your resume!') }} style={styles.mockInterviewContainer}>
            <Text style={styles.timelineHeading}>Summer Training Sessions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Sign up for new and exciting leadership activities!') }} style={styles.resumeReviewContainer}>
            <Text style={styles.timelineHeading}>Leadership Opportunities</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  )
}

function renderStudent(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.timelineContainer}>

          <TouchableOpacity onPress={() => { alert('You have already completed your application!') }} style={styles.applicationContainer}>
            <Text style={styles.timelineHeading}>Application </Text>
            <Text style={{fontSize: 10}}>     Status: Completed </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { alert('Please submit your resume for review!') }} style={styles.webinarContainer}>
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
  )
}

function HomeScreen(props) {
    var stuff;
    switch(props.type){
      case 'student':
        stuff = renderStudent(props);
        break;
      case 'alumni':
        stuff = renderAlumni(props);
        break;
      default:
        stuff = renderCompany(props);
        break;
    }
  return stuff;
}

HomeScreen.navigationOptions = {
  title: "Home" ,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

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
    backgroundColor: 'rgb(46,120,241)'
  },
  mockInterviewContainer: {
    borderRadius: 25,
    marginTop: 10,
    width: 360,
    height: 120,
    backgroundColor: 'rgb(85,170,102)'
  },
  resumeReviewContainer: {
    borderRadius: 25,
    marginTop: 10,
    width: 360,
    height: 120,
    backgroundColor: 'rgb(253,58,52)'
  },
  timelineHeading: {
    color: 'white',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

function mapStateToProps(state) {
  return {
    type: state.user.type
  }
}

export default connect(mapStateToProps)(HomeScreen);