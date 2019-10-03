import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import { View } from 'react-native';
import WelcomeScreen from './modules/onboarding/welcome'
import Onboarding1Screen from './modules/onboarding/onboarding1'
import Onboarding2Screen from './modules/onboarding/onboarding2'
import Onboarding3Screen from './modules/onboarding/onboarding3/container'
import ExploreScreen from './modules/main/explore/container'
import PlacesScreen from './modules/main/places'
import SavedScreen from './modules/main/saved'
import HistoryScreen from './modules/main/history'
import LoadingScreen from './modules/loading/container'
import Icon from './components/icon'
import styles from './styles'
import {Provider} from 'react-redux'
import store from './redux/store'
// import _ from './test'


console.disableYellowBox = true


const tabNavigator = createBottomTabNavigator({
  Explore: ExploreScreen,
  Places: PlacesScreen,
  Saved: SavedScreen,
  History: HistoryScreen
}, {
  initialRouteName: 'Explore',
  defaultNavigationOptions: ({navigation}) => {

    return({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state
        let iconName;
        switch(routeName){
          case 'Explore': 
            iconName='globe'
            break;
          case 'Places':
            iconName='map-marker'
            break;
          case 'Saved': 
            iconName='bookmark'
            break;
          case 'History':
            iconName='clock-o'
            break;
          default: 
            iconName='idk'
          
        }
        return(
          <View style={styles.tabBarIcon} >
            <Icon name={iconName} active={focused}/>
          </View>
        )
      }
    })
  }
})

const stackDecorator = createStackNavigator({
  Home: tabNavigator,
  
},{
  headerMode: 'none'
})

const stackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Onboarding1: Onboarding1Screen,
  Onboarding2: Onboarding2Screen,
  Onboarding3: Onboarding3Screen,
}, {
  headerMode: 'none',
  initialRouteName: 'Welcome'
})

const appNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Onboarding: stackNavigator,
  Home: stackDecorator
}, {
  initialRouteName: 'Loading'
})

const AppContainer = createAppContainer(appNavigator);

export default class App extends React.Component{

  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}