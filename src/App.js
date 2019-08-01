import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import WelcomeScreen from './modules/onboarding/welcome'
import Screen1 from './modules/onboarding/screen1'
import Screen2 from './modules/onboarding/screen2'

console.disableYellowBox = true

const stackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Screen1: Screen1,
  Screen2: Screen2
}, {
  headerMode: 'none',
  initialRouteName: 'Welcome'
})

const AppContainer = createAppContainer(stackNavigator);

export default class App extends React.Component{

  render(){
    return(
      <AppContainer />
    )
  }
}