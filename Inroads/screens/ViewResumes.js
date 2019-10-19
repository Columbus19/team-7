import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ViewResumes extends Component {
    notifications = [
       {
            major: 'Computer Science',
            gpa: '3.48',
            resume: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fresumegenius.com%2Fwp-content%2Fuploads%2F2019%2F05%2FOriginal-Premium-Resume-Template-2-400x520.png&imgrefurl=https%3A%2F%2Fresumegenius.com%2F&docid=nIy84bt_GEmCWM&tbnid=yb-RhAn2O6FrbM%3A&vet=10ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwh4KAMwAw..i&w=400&h=520&client=firefox-b-1-d&bih=799&biw=1290&q=resume&ved=0ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwh4KAMwAw&iact=mrc&uact=8',
       },
       {
            major: 'Mechanical Engineering',
            gpa: '3.76',
           resume: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwik-J-y7aflAhWmY98KHZ7fCRQQjRx6BAgBEAQ&url=https%3A%2F%2Fresumegenius.com%2F&psig=AOvVaw1eiiqwdeIisRo2_lfmTKOP&ust=1571558395961787',
       },
       {
            major: 'Computer Science',
            gpa: '3.66',
            resume: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiz07rQ7aflAhXLTN8KHWpwBJkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.resume.com%2Fbuilder&psig=AOvVaw1eiiqwdeIisRo2_lfmTKOP&ust=1571558395961787',
       },
       {
            major: 'Computer Science',
            gpa: '3.12',
           resume: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fsamples-kickresume-com%2F497%2Fimage.png&imgrefurl=https%3A%2F%2Fwww.kickresume.com%2Fen%2Fhelp-center%2Fdata-scientist-resume-sample%2F&docid=HgDsYdJ0zDntLM&tbnid=-xzZIP152hUEUM%3A&vet=10ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwiFASgQMBA..i&w=1240&h=1754&client=firefox-b-1-d&bih=799&biw=1290&q=resume&ved=0ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwiFASgQMBA&iact=mrc&uact=8',
       },
       {
         major: 'Biomedical Engineering',
         gpa: '3.88',
           resume: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.myperfectresume.com%2Fwp-content%2Fthemes%2Fmyperfectresume%2Fimg%2Fresumes-svg%2Fmlt7-emphisize.svg&imgrefurl=https%3A%2F%2Fwww.myperfectresume.com%2Fresume-templates&docid=SQobh66-7HURRM&tbnid=nEr_6VPq6OXZrM%3A&vet=10ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwiWASgUMBQ..i&w=619&h=800&client=firefox-b-1-d&bih=799&biw=1290&q=resume&ved=0ahUKEwjIps6w7aflAhXDVt8KHYRYBMkQMwiWASgUMBQ&iact=mrc&uact=8',
       },
     ]
     render() {
        return (
          <ScrollView style={styles.container}>
            {this.notifications.map((item, index) => <Image id={index} style={styles.image, {backgroundColor: '#f00'}} source={{uri: item.resume}}/>)}
          </ScrollView>
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