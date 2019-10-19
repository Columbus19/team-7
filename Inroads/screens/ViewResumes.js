import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image } from 'react-native';

export default class ViewResumes extends Component {
    notifications = [
       {
            major: 'Computer Science',
            gpa: '3.48',
          resume: 'https://d.novoresume.com/images/doc/simple-resume-template.png',
       },
       {
            major: 'Mechanical Engineering',
            gpa: '3.76',
         resume: 'https://cdn-images.zety.com/templates/zety/cubic-20-trio-silver-dark-19.png',
       },
       {
            major: 'Computer Science',
            gpa: '3.66',
         resume: 'https://d.novoresume.com/images/doc/simple-resume-template.png',
       },
       {
            major: 'Computer Science',
            gpa: '3.12',
         resume: 'https://s3-eu-west-1.amazonaws.com/samples-kickresume-com/497/image.png',
       },
       {
         major: 'Biomedical Engineering',
         gpa: '3.88',
         resume: 'https://cdn-images.resumelab.com/templates/zety/iconic-9-classic-silver-dark-276.png',
       },
     ]
     render() {
        return (
          <View style={styles.container}>
            <ScrollView>
              {this.notifications.map((item, index) => <Image id={index} style={styles.image, {backgroundColor: '#f00'}} source={{uri: item.resume}}/>)}
            </ScrollView>
            <View>
              <Button onPress={() => { this.props.navigation.navigate('Main') }} title="<--"/>
            </View>
          </View>
        );
     }
      
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