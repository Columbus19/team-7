import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
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
  );
}

LinksScreen.navigationOptions = {
  header: null,
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