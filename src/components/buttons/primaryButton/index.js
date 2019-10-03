import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

const button = props => {
    console.log(props)
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.customStyle]}>
            <Text style={[styles.text]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default button;