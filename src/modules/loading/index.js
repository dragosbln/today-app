import React from 'react';
import { ImageBackground } from 'react-native';
import {loading} from '../../assets/images'
import styles from './styles'

export default class Loading extends React.Component{

    componentDidMount = async () => {
        await new Promise(res => setTimeout(res, 750))
        this.props.initialSetup()


    }

    render(){
        if(this.props.setupSuccess) {
            if(this.props.shouldDisplayOnboarding){
                this.props.navigation.navigate('Onboarding') 
            } else {
                this.props.navigation.navigate('Home') 
            }
            
        }
        return(
            <ImageBackground source={loading} style={styles.base}></ImageBackground>
        )
    }
}