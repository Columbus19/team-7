import React from 'react';
import Login from '../Login';

export default function SettingsScreen() {
  return <Login />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
