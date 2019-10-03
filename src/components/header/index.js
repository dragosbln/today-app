import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'
import HeaderTitle from '../headerTitle'
import Icon from '../icon'
import {colors} from '../../assets/theme'

const header = props => {

    return(
        <View style={styles.base}>
            <HeaderTitle customStyle={styles.title} />
            <View style={styles.optionsContainer}>
                <Icon name='gear' />
            </View>
            <View customStyle={styles.searchContainer}>
                <TextInput placeholderTextColor={colors.gray} placeholder='Search Wikipedia' style={styles.input}/>
                <View style={styles.searchIcon}>
                    <Icon name='search' customStyle={styles.icon}/>
                </View>
            </View>
        </View>
    )
}

export default header