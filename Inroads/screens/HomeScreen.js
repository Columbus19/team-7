import * as WebBrowser from 'expo-web-browser';
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

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.timelineContainer}>

          <TouchableOpacity onPress={() => { alert('You pressed Application!') }} style={styles.applicationContainer}>
            <Text style={styles.timelineHeading}>Application</Text>
          </TouchableOpacity>

          <View style={styles.webinarContainer}>
            <Text style={styles.timelineHeading}>Webinar</Text>
          </View>

          <View style={styles.mockInterviewContainer}>
            <Text style={styles.timelineHeading}>Mock Interview</Text>
          </View>

          <View style={styles.resumeReviewContainer}>
            <Text style={styles.timelineHeading}>Resume Review</Text>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
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

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
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
