import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

const dot = props => {
    console.log(props)
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.active ? styles.active: null, props.customStyle]}></TouchableOpacity>
    )
}

export default dot;