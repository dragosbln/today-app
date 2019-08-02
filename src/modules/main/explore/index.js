import React from 'react';
import { KeyboardAvoidingView, View, Image } from 'react-native';
import styles from './styles'
import Dismissable from './dismissable'
import Header from '../../../components/header'
import ListElem from './listElem'


export default class Explore extends React.Component{


    render() {

        return(
            <KeyboardAvoidingView style={styles.base}> 
                <Header />
                {/* <Dismissable /> */}
                <View style={styles.main}>
                    <ListElem active/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}