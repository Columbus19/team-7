import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import loginNav from '../Login';
import viewNav from '../screens/ViewResumes';
import ProfileNav from '../screens/Profile'

export default createAppContainer(
  createSwitchNavigator({
    login: loginNav,
    view: viewNav,
    profile: ProfileNav,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
